var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var fs = require('fs');
var path = require('path');
var zipFolder = require('zip-folder');

var xlsxMimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
var docxMimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
var htmlMimeType = 'text/html'

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
}

router.post('/save', function(req, res, next) {
    let obj = req.body
    let journalName = obj["name"]
    let hash = crypto.createHash('md5').update(JSON.stringify(obj)).digest('hex');
    console.log(__dirname)
    let dirPath = path.resolve(__dirname, "../media") + "/" + hash;
    // let dirPath = getMediaDirPath() +
    mkdirSync(dirPath)
    obj["tables"].forEach(function(table, index) {
        let name = table["latinName"]
        let html = table["html"]
        let filepath = dirPath + "/" + name + ".html"
        fs.writeFile(filepath, html, (err) => {
            if (err) throw err;
            console.log("The file was succesfully saved!");
        });
        obj["tables"][index]["html"] = name + ".html"
        console.log("Created file " + filepath)
    })
    fs.writeFile(dirPath + "/meta.json", JSON.stringify(obj), (err) => {
        if (err) throw err;
        console.log("The file was succesfully saved!");
    });

    zipFolder(dirPath, path.resolve(__dirname, "../media") +  "/journals/" + hash + '.journal', function(err) {
        if(err) {
            console.log('oh no!', err);
        } else {
            console.log('EXCELLENT');
        }
    })

    console.log("OK!")
    res.sendStatus(200)
})


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
    // res.sendStatus(200);
})


module.exports = router;
