var FormulaParser = require('hot-formula-parser').Parser;
var parser = new FormulaParser();

function validateFormulaSyntax(formula) {
    parse.setFunction("FUNC", function(params) {
        return 1;
    })
    res = parser.parse("formula")
    if (res.error !== null) {
        return false
    }
    else {
        return true
    }
}

function validateFormulaCells() {

}
fuinction alidateFormulaCycles() {

}