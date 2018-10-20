let mime = require('mime');
let express = require('express');

var router = express.Router();
var crypto = require('crypto');
var fs = require('fs');
var path = require('path');
var zipFolder = require('zip-folder');
var AdmZip = require('adm-zip');

var xlsxMimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
var docxMimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
var htmlMimeType = 'text/html';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const mkdirSync = function (dirPath) {
  try {
    fs.mkdirSync(dirPath)
  } catch (err) {
    if (err.code !== 'EEXIST') throw err
  }
};

const getTableName = function (pathName) {
    return pathName.split('/')[1].split('.')[0]
};

router.get('/download', function(req, res){
  let hash = req.query.hash;
  if (hash.length > 0 ) {
      let fileNamePath = path.resolve(__dirname, "../media") + '/journals/' + hash + '.jrn';
      console.log(fileNamePath);

      let filename = path.basename(fileNamePath);
      let mimetype = mime.lookup(fileNamePath);
      let filestream = fs.createReadStream(fileNamePath);

      res.setHeader('Content-disposition', 'attachment; filename=' + filename);
      res.setHeader('Content-type', mimetype);

      filestream.pipe(res);
  } else {
      res.status(200).json({name: 'hash not found' });
  }
});

router.get('/get_journal', function(req, res){
    console.log('eba')
    console.log('req', req.query.journal)
    var plant = req.query.plant
    var journal = req.query.journal
    var hash = req.query.hash

    var constructor_folder = path.resolve(__dirname, `../media/journals/`)
    var e_logs_folder = path.resolve(__dirname, `../../../resources/journals/`)
    var filepath = ''
    if (plant && journal && !hash) {
        filepath = path.resolve(e_logs_folder, `./${plant}/${journal}.jrn`)
    }
    else if (!plant && !journal && hash) {
        filepath = path.resolve(constructor_folder, `${hash}.jrn`)
    }
    else {
        res.status(500).json("Ebat ty huynu otpravil")
    }
    console.log(filepath)

    try {
        var zip = new AdmZip(filepath);
        var zipEntries = zip.getEntries();
        let data = null
        console.log(zipEntries)
        zipEntries.forEach(function(zipEntry) {
            if (zipEntry.entryName == "meta.json") {
                data = JSON.parse(zipEntry.getData().toString('utf8'))
                //  console.log(data.tables);
            }
        });

        zipEntries.forEach(function(zipEntry) {
            if (zipEntry.entryName != "meta.json") {
                let tableHtml = zipEntry.getData().toString('utf8')
                data.tables = data.tables.map(item => item.name == getTableName(zipEntry.entryName) ? {...item, html: tableHtml} : item)
                console.log(data);
            }
        });

        res.status(200).json(data)
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }

  });

router.get("/transfer", function(req, res, next){
    var plant = req.query.plant
    var journal = req.query.journal
    var hash = req.query.hash
    var constructor_folder = path.resolve(__dirname, `../media/journals/`)
    var e_logs_folder = path.resolve(__dirname, `../../../resources/journals/`)
    var source_filepath = constructor_folder + `/${hash}.jrn`
    var target_filepath = ''
    if (plant && journal) {
        target_filepath = path.resolve(e_logs_folder, `./${plant}/${journal}.jrn`)
    }
    else {
        target_filepath = path.resolve(e_logs_folder, `../temp/${hash}.jrn`)
    }

    try {
        copyFileSync(source_filepath, target_filepath);
        res.status(200).send()
    }
    catch (err) {
        console.log(err)
        res.status(500).send()
    }
})


router.get("/copy_journal", function(req, res, next) {
    var plant = req.query.plant
    var journal = req.query.journal
    var to = req.query.to
    var targets = ["constructor", "elog"]
    var to_id = targets.indexOf(to)
    var from_id = Math.abs(to_id - 1)
    console.log(to_id, from_id)
    var from = targets[from_id]

    var e_logs_folder = path.resolve(__dirname, `../../../resources/journals/${plant}/${journal}.jrn`)
    var constructor_folder = path.resolve(__dirname, `../media/journals/${journal}.jrn`)
    var folders = {
        constructor: constructor_folder,
        elog: e_logs_folder,
    }
    console.log(from, to)
    try {
        console.log(folders[from], folders[to])
        copyFileSync(folders[from], folders[to]);
        res.status(200).send()
    }
    catch (err) {
        console.log(err)
        res.status(500).send()
    }
});

router.post('/save', function(req, res, next) {
    let data = req.body;
    let hash = crypto.createHash('md5').update(JSON.stringify(data)).digest('hex');

    console.log(__dirname);
    let relativeMediaPath = "../media";
    let dirPath = path.resolve(__dirname, relativeMediaPath) + "/" + hash;

    data.version = "0.1";

    mkdirSync(dirPath);
    mkdirSync(path.resolve(dirPath, "./templates"))
    let tables = data.tables;
    for (let table of tables) {
        table.name += ".html";
        let filepath = dirPath + "/templates/" + table.name;
        fs.writeFile(filepath, table.html, (err) => {
            if (err) throw err;
            console.log("The "+ table.name + ".html was saved!");
        });
    }

    fs.writeFile(dirPath + "/meta.json", JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log("The meta.json was saved!");
    });

    let journalPath = path.resolve(__dirname, relativeMediaPath) +  "/journals/" + hash + '.jrn';

    zipFolder(dirPath, journalPath, function(err) {
        if(err) {
            console.log('oh no!', err);
        } else {
            console.log('Journal was saved');
        }
    });

    let downloadLink = "http://localhost:8000/constructor/download?hash=" + hash;
    res.status(200).json({hash: hash, download_link: '' + downloadLink });
});


function xlsxToHtml(filepath) {
    if(typeof require !== 'undefined') XLSX = require('xlsx');
    var workbook = XLSX.readFile(filepath);
    var first_sheet_name = workbook.SheetNames[0];

    /* Get worksheet */
    var worksheet = workbook.Sheets[first_sheet_name];

    return XLSX.utils.sheet_to_html(worksheet)
}

function docxToHtml(filepath) {
    var mammoth = require("mammoth");
    return mammoth.convertToHtml({path: filepath})
}

function isPromise(obj) {
    return typeof(obj.then) == 'function'
}

function copyFileSync( source, target ) {

    var targetFile = target;

    if ( fs.existsSync( target ) ) {
        if ( fs.lstatSync( target ).isDirectory() ) {
            targetFile = path.join( target, path.basename( source ) );
        }
    }

    fs.writeFileSync(targetFile, fs.readFileSync(source));
    console.log("shpek")
}

function copyFolderRecursiveSync( source, target ) {
    var files = [];

    var targetFolder = path.join( target, path.basename( source ) );
    if ( !fs.existsSync( targetFolder ) ) {
        fs.mkdirSync( targetFolder );
    }

    if ( fs.lstatSync( source ).isDirectory() ) {
        files = fs.readdirSync( source );
        files.forEach( function ( file ) {
            var curSource = path.join( source, file );
            if ( fs.lstatSync( curSource ).isDirectory() ) {
                copyFolderRecursiveSync( curSource, targetFolder );
            } else {
                copyFileSync( curSource, targetFolder );
            }
        } );
    }
}

router.post('/import', function(req, res, next) {
    let file = req.files.data
    let filepath;
    let html;
    if (file.mimetype == docxMimeType) {
        filepath = path.resolve(__dirname, "../media/files") + "/" + file.md5 + ".docx"
        fs.writeFileSync(filepath, file.data, "binary")
        html = docxToHtml(filepath)
    }
    if (file.mimetype == xlsxMimeType) {
        filepath = path.resolve(__dirname, "../media/files") + "/" + file.md5 + ".xlsx"
        try {
            fs.writeFileSync(filepath, file.data, "binary")
        } catch (err) {
          console.log(err)
        }
        html = xlsxToHtml(filepath)
    }
    if (file.mimetype == htmlMimeType) {
        filepath = path.resolve(__dirname, "../media/files") + "/" + file.md5 + ".html"
        fs.writeFileSync(filepath, file.data, "binary")
        html = file.data
    }
    res.set('Content-Type', 'text/html');

    if (isPromise(html)) {
        html.then((result) => {
            html = result.value; // The generated HTML
            console.log(html.length)
            res.send(html)
        })
    }
    else {
        res.send(html);
    }

});

module.exports = router;
