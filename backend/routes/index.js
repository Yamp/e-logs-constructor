let express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');


let formulaChecker = require('../scripts/formula');
let htmlConvertor = require('../scripts/conventor');
let utils = require('../scripts/utils');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Node server is running'
    });
});

router.post('/formula-uncreated-cells', function(req, res, next) {
    let formula = req.body.formula
    let scope = req.body.scope
    res.send(formulaChecker.getFormulaUncreatedCell(formula, scope))
})


router.post('/check-formula', function(req, res, next) {
    let formula = req.body.formula
    let cell = req.body.cell
    res.send(formulaChecker.doFormulaChrildrenContainCell(formula, cell, cell))
})

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
    html = htmlConvertor(file)
    res.set('Content-Type', 'text/html');

    if (!html) {
        res.status(404).send("Wrong file type")
        return
    }
    else if (utils.isPromise(html)) {
        html.then((result) => {
            html = result.value; // The generated HTML
            console.log(html.length)
            res.send(html)
        })
    }
    else {
        res.send(html);
    }
    return
});

module.exports = router;
