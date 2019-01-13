var fs = require('fs');
var path = require('path');

const xlsxMimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
const docxMimeType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
const htmlMimeType = 'text/html';


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

function convert(file) {
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
    return html
}

module.exports = convert;
