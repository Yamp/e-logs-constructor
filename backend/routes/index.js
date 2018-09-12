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
    let data = req.body;
    let hash = crypto.createHash('md5').update(JSON.stringify(data)).digest('hex');
    let dirPath = getDirName() + "/" + hash;
    mkdirSync(dirPath);
    let tables = data.tables;
    console.log("data: ", data);
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

    zipFolder(dirPath, getDirName() +  "/journals/" + hash + '.journal', function(err) {
        if(err) {
            console.log('oh no!', err);
        } else {
            console.log('Journal was saved');
        }
    });

    res.sendStatus(200);
});

module.exports = router;
