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
}

function getDirName() {
    let parentPath = __dirname.split(path.sep)
    parentPath.pop()
    return parentPath.join("/") + "/media"
}

router.post('/save', function(req, res, next) {
    let obj = req.body
    let journalName = obj["name"]
    let hash = crypto.createHash('md5').update(JSON.stringify(obj)).digest('hex');
    console.log(__dirname)
    let dirPath = getDirName() + "/" + hash;
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

    zipFolder(dirPath, getDirName() +  "/journals/" + hash + '.journal', function(err) {
        if(err) {
            console.log('oh no!', err);
        } else {
            console.log('EXCELLENT');
        }
    })

    console.log("OK!")
    res.sendStatus(200)
})

module.exports = router;
