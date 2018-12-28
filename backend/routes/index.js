let express = require('express');
var router = express.Router();
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
