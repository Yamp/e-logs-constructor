let mime = require('mime');
let express = require('express');
var router = express.Router();
var crypto = require('crypto');
var fs = require('fs');
var path = require('path');

var xlsxMimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
var docxMimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
var htmlMimeType = 'text/html';

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
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
}

// TODO: Remove this function. Json is already on front
router.get('/download', function (req, res) {
    let hash = req.query.hash;
    if (hash.length > 0) {
        let fileNamePath = path.resolve(__dirname, "../media") + '/journals/' + hash + '.jrn';
        console.log(fileNamePath);

        let filename = path.basename(fileNamePath);
        let mimetype = mime.lookup(fileNamePath);
        let filestream = fs.createReadStream(fileNamePath);

        res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        res.setHeader('Content-type', mimetype);

        filestream.pipe(res);
    } else {
        res.status(200).json({
            name: 'hash not found'
        });
    }
});

router.get('/get_journal', function (req, res) {
    console.log('eba');
    console.log('req', req.query.journal);
    var plant = req.query.plant;
    var journal = req.query.journal;
    var version = req.query.version;
    var hash = req.query.hash;

    var constructor_folder = path.resolve(__dirname, `../media/journals/`);
    var e_logs_folder = path.resolve(__dirname, `../../../resources/journals/`);
    var filepath = ''
    if (plant && journal && !hash) {
        filepath = path.resolve(e_logs_folder, `./${plant}/${journal}/v${version}.jrn`);
    } else if (!plant && !journal && hash) {
        filepath = path.resolve(constructor_folder, `${hash}.jrn`);
    } else {
        res.status(500).json("Ebat ty huynu otpravil");
        return;
    }
    console.log(filepath);
    try {
        fs.readFile(filepath, "utf8", (err, content) => {
            if (err) throw err;
            data = JSON.parse(content);
            res.json(data);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

router.get("/transfer", function (req, res, next) {
    var plant = req.query.plant
    var journal = req.query.journal
    var hash = req.query.hash
    var constructor_folder = path.resolve(__dirname, `../media/journals/`)
    var e_logs_folder = path.resolve(__dirname, `../../../resources/journals/`)
    var source_filepath = constructor_folder + `/${hash}.jrn`
    var target_filepath = ''
    if (plant && journal) {
        target_filepath = path.resolve(e_logs_folder, `./${plant}/${journal}.jrn`)
    } else {
        mkdirSync(path.resolve(e_logs_folder), "../temp")
        target_filepath = path.resolve(e_logs_folder, `../temp/${hash}.jrn`)
    }

    try {
        copyFileSync(source_filepath, target_filepath);
        res.status(200).send()
    } catch (err) {
        console.log(err)
        res.status(500).send()
    }
})

router.post('/save', function (req, res, next) {
    let data = req.body;
    let hash = crypto.createHash('md5').update(JSON.stringify(data)).digest('hex');

    console.log(__dirname);
    let relativeMediaPath = "../media";
    data.version = "0.1";
    let journalPath = path.resolve(__dirname, relativeMediaPath) + "/journals/" + hash + '.jrn';
    fs.writeFile(journalPath, JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log("The meta.json was saved!");
    })
    let hostname = req.headers["host"]
    let downloadLink = "http://" + hostname + "/download?hash=" + hash;
    res.status(200).json({
        hash: hash,
        download_link: '' + downloadLink
    });
});


function xlsxToHtml(filepath) {
    if (typeof require !== 'undefined') XLSX = require('xlsx');
    var workbook = XLSX.readFile(filepath);
    var first_sheet_name = workbook.SheetNames[0];

    /* Get worksheet */
    var worksheet = workbook.Sheets[first_sheet_name];

    return XLSX.utils.sheet_to_html(worksheet)
}

function docxToHtml(filepath) {
    var mammoth = require("mammoth");
    return mammoth.convertToHtml({
        path: filepath
    });
}

function isPromise(obj) {
    return typeof (obj.then) == 'function';
}

function copyFileSync(source, target) {

    var targetFile = target;

    if (fs.existsSync(target)) {
        if (fs.lstatSync(target).isDirectory()) {
            targetFile = path.join(target, path.basename(source));
        }
    }
    fs.writeFileSync(targetFile, fs.readFileSync(source));
}

function copyFolderRecursiveSync(source, target) {
    var files = [];

    var targetFolder = path.join(target, path.basename(source));
    if (!fs.existsSync(targetFolder)) {
        fs.mkdirSync(targetFolder);
    }

    if (fs.lstatSync(source).isDirectory()) {
        files = fs.readdirSync(source);
        files.forEach(function (file) {
            var curSource = path.join(source, file);
            if (fs.lstatSync(curSource).isDirectory()) {
                copyFolderRecursiveSync(curSource, targetFolder);
            } else {
                copyFileSync(curSource, targetFolder);
            }
        });
    }
}

router.post('/import', function (req, res, next) {
    if (!req.files) {
        res.status(400).send("Form is empty")
        return
    }
    if (!req.files.data) {
        res.status(400).send("Form does not contain file with input name 'data'")
        return
    }

    let file = req.files.data;
    let filepath;
    let html;
    if (file.mimetype == docxMimeType) {
        filepath = path.resolve(__dirname, "../media/files") + "/" + file.md5 + ".docx"
        fs.writeFileSync(filepath, file.data, "binary")
        html = docxToHtml(filepath)
    }
    else if (file.mimetype == xlsxMimeType) {
        filepath = path.resolve(__dirname, "../media/files") + "/" + file.md5 + ".xlsx"
        try {
            fs.writeFileSync(filepath, file.data, "binary")
        } catch (err) {
            console.log(err)
        }
        html = xlsxToHtml(filepath)
    }
    else if (file.mimetype == htmlMimeType) {
        filepath = path.resolve(__dirname, "../media/files") + "/" + file.md5 + ".html"
        fs.writeFileSync(filepath, file.data, "binary")
        html = file.data
    }
    else {
        res.status(400).send("Wrong file type")
        return
    }
    res.set('Content-Type', 'text/html');

    if (isPromise(html)) {
        html.then((result) => {
            html = result.value; // The generated HTML
            console.log(html.length)
            res.send(html)
        })
    } else {
        res.send(html);
    }
    return
});

module.exports = router;
