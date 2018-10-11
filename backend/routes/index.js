let mime = require('mime');
let express = require('express');

var router = express.Router();
var crypto = require('crypto');
var fs = require('fs');
var path = require('path');
var zipFolder = require('zip-folder');

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


router.get('/download', function(req, res){
  let hash = req.query.hash;
  if (hash.length > 0 ) {
      let fileNamePath = path.resolve(__dirname, "../media") + '/journals/' + hash + '.journal';
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


router.post('/save', function(req, res, next) {
    let data = req.body;
    let hash = crypto.createHash('md5').update(JSON.stringify(data)).digest('hex');

    console.log(__dirname);
    let relativeMediaPath = "../media";
    let dirPath = path.resolve(__dirname, relativeMediaPath) + "/" + hash;

    data.version = "0.1";

    mkdirSync(dirPath);
    let tables = data.tables;
    for (let table of tables) {
        table.name += ".html";
        let filepath = dirPath + "/" + table.name;
        fs.writeFile(filepath, table.html, (err) => {
            if (err) throw err;
            console.log("The "+ table.name + ".html was saved!");
        });
    }

    fs.writeFile(dirPath + "/meta.json", JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log("The meta.json was saved!");
    });

    let journalPath = path.resolve(__dirname, relativeMediaPath) +  "/journals/" + hash + '.journal';

    zipFolder(dirPath, journalPath, function(err) {
        if(err) {
            console.log('oh no!', err);
        } else {
            console.log('Journal was saved');
        }
    });

    let downloadLink = "http://localhost:3000/download?hash=" + hash;
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