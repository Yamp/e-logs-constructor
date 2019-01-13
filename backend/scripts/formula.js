var request = require('sync-request');
var utils = require('./utils')
const API_HOST = "http://localhost:8000"

var getCellFromVariable = function (variable) {
    var params = variable.split("(")[1].replace(/(\s)|(")|(\))|(\')/g, "").split(",")
    let params_num = 4
    while (params.length < params_num) {
        params.splice(0, 0, false)
    }
    const journal = params[0]? params[0]: this.journal;
    const shift = params[1]? params[1]: this.shift;
    const table = params[2]? params[2]: this.table;
    const field = params[3]? params[3]: this.field;
    const index = params[4]? params[4]: this.index;
    return {
        journal: journal,
        table: table,
        field: field,
    }
}

var getCellsFromFormula = function (formula, scope) {
    let re = /FUNC\([^\)]*\)/g;
    let variables = formula.match(re)
    return variables.map(getCellFromVariable, scope);
}

var getCellValue = function (cell) {
    var res = request("GET", API_HOST + "/api/field/", {
        qs: cell,
    })
    if (res.statusCode == 200) {
        let json = JSON.parse(res.getBody())
        return json.formula
    } else if (res.statusCode == 400) {
        return undefined
    }
}

function getFormulaUncreatedCell(formula, scope) {
    var cells = getCellsFromFormula(formula, scope);
    let values = cells.map((elem) => { return {
            scope: elem,
            value: getCellValue(elem)
        }})
    return values.filter((elem) => {return elem.value === undefined})
}

// true when formula creates cycle
function doFormulaChrildrenContainCell(formula, scope, cell) {
    var cells = getCellsFromFormula(formula, scope);
    if (utils.containsObject(cell, cells)) {
        return true;
    } else {
        let values = cells.map((elem) => { return {
            scope: elem,
            value: getCellValue(elem)
        }})
        let results = values.map((elem) => {
            if (elem.value) {
                return doFormulaChrildrenContainCell(elem.value, elem.scope, cell);
            } else {
                return false;
            }
        });
        let sum = results.reduce((a, b) => {
            return a + b;
        }, 0);
        if (sum > 0) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports.doFormulaChrildrenContainCell = doFormulaChrildrenContainCell
module.exports.getFormulaUncreatedCell = getFormulaUncreatedCell