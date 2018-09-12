var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var fs = require('fs');
var path = require('path');
var zipFolder = require('zip-folder');


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

function getDirName() {
    let parentPath = __dirname.split(path.sep)
    parentPath.pop()
    return parentPath.join("/") + "/media"
}

router.post('/save', function(req, res, next) {
    console.log("POST запрос");
    // let data = req.body;
    // let responseData = '{"tables":[{"title":"first","name":"first","fields":[{"cell":"6pzVY_LrD","field_name":"s"},{"cell":"Xj-KaicRCL","field_name":"b"},{"cell":"P-njqhsCLB","field_name":"c"},{"cell":"15o_PgXasC","field_name":"d"},{"cell":"OSwI7YnQsX","field_name":"e"},{"cell":"jY_Bj9CxPX","field_name":"d"},{"cell":"bBvkovE-Vo","field_name":"m"},{"cell":"ftgE5OZb9e","field_name":"k"},{"cell":"vh0ZzUe6qv","field_name":"l"}],"html":"<p><br></p><table class=\"table table-bordered\"><tbody><tr><td><div class=\"cell\" field-name=\"s\" row-index=\"0\" id=\"6pzVY_LrD\">s</div></td><th><div class=\"cell\" field-name=\"b\" row-index=\"0\" id=\"Xj-KaicRCL\">b</div></th><td><div class=\"cell\" field-name=\"c\" row-index=\"0\" id=\"P-njqhsCLB\">c</div></td></tr><tr><td><div class=\"cell\" field-name=\"d\" row-index=\"0\" id=\"15o_PgXasC\">d</div></td><td><div class=\"cell\" field-name=\"e\" row-index=\"0\" id=\"OSwI7YnQsX\">e</div></td><td><div class=\"cell\" field-name=\"d\" row-index=\"0\" id=\"jY_Bj9CxPX\">d</div></td></tr><tr><td><div class=\"cell\" field-name=\"m\" row-index=\"0\" id=\"bBvkovE-Vo\">m</div></td><td><div class=\"cell\" field-name=\"k\" row-index=\"0\" id=\"ftgE5OZb9e\">k</div></td><td><div class=\"cell\" field-name=\"l\" row-index=\"0\" id=\"vh0ZzUe6qv\">l</div></td></tr></tbody></table><p><br></p>"}],"title":"one","name":"two"}'
    let responseData = '{"tables":[{"title":"first","name":"first","html":"<p><br></p><table class=\"table table-bordered\">", "fields":[{"cell":"6pzVY_LrD","field_name":"s"},{"cell":"Xj-KaicRCL","field_name":"b"},{"cell":"P-njqhsCLB","field_name":"c"}]}],"title":"one","name":"two"}';
    console.log("rdata: ", responseData);
    let data = JSON.parse(responseData.replace("\\",""));
    console.log("data: ", data);
    let hash = crypto.createHash('md5').update(JSON.stringify(data)).digest('hex');
    console.log(hash);
    let dirPath = getDirName() + "/" + hash;
    mkdirSync(dirPath);
    console.log("after mkdirSync");
    let tables = data.tables;

    console.log("tables: ", tables);
    tables.forEach(function(table, index) {
        console.log("after each step");
        let name = table["latinName"];
        let html = table["html"];
        let filepath = dirPath + "/" + name + ".html";
        fs.writeFile(filepath, html, (err) => {
            if (err) throw err;
            console.log("The file was succesfully saved!");
        });
        data["tables"][index]["html"] = name + ".html";
        console.log("Created file " + filepath)
    });
    fs.writeFile(dirPath + "/meta.json", JSON.stringify(data), (err) => {
        if (err) throw err;
        console.log("The file was succesfully saved!");
    });


    zipFolder(dirPath, getDirName() +  "/journals/" + hash + '.journal', function(err) {
        if(err) {
            console.log('oh no!', err);
        } else {
            console.log('EXCELLENT');
        }
    });

    res.sendStatus(200);
});

module.exports = router;
