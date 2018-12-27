import Vue from 'vue'
import axios from 'axios'

const journalState = {
    namespaced: true,
    state: {
        journal: null,
        scheme: null,
    },
    getters: {
        getJournal(state, getters) {
            return state.journal
        },
        getJournalName(state, getters) {
            return state && state.journal ? state.journal.name : ''
        },
        getJournalTitle(state, getters) {
            return state && state.journal ? state.journal.title : ''
        },
        getTables(state, getters) {
            return state && state.journal ? state.journal.tables : []
        },
        getCurrentTable(state, getters) {
            return state && state.journal ? state.journal.currentTable : {}
        },
        getJournalImported(state, getters) {
            return state.journal.imported
        },
        getJournalPlant(state, getters) {
            return state && state.journal ? state.journal.plant : ''
        },
        getTableTitle(state, getters) {
            return function (tableName) {
                let table = state.journal.tables.filter((item) => item.name === tableName)[0]
                return table.title
            }
        },
        getTableRepeatableRow(state, getters) {
            return function (tableName) {
                let table = state.journal.tables.filter((item) => item.name === tableName)[0]
                return table.repeatable_row
            }
        },
        getTableCells(state, getters) {
            return function (tableName) {
                let table = state.journal.tables.filter((item) => item.name === tableName)[0]
                if (table.fields.length) {
                    return table.fields
                }
                else {
                    return []
                }
            }
        },
        getTableRecoveryCells(state, getters) {
            return function (tableName) {
                let table = state.journal.tables.filter((item) => item.name === tableName)[0]
                if (table.recoveryFields.length) {
                    return table.recoveryFields
                }
                else {
                    return []
                }
            }
        },
        getFieldName(state, getters) {
            return function (cell) {
                let field = state.journal.currentTable.fields.filter(item => item.cell === cell)[0]
                if (field && field.name) {
                    return field.name
                }
                else {
                    return ''
                }
            }
        },
        getCellMinValue(state, getters) {
            return function (cell) {
                let field = state.journal.currentTable.fields.filter(item => item.cell === cell)[0]
                if (field && field.min_value) {
                    return field.min_value
                }
                else {
                    return ''
                }
            }
        },
        getCellMaxValue(state, getters) {
            return function (cell) {
                let field = state.journal.currentTable.fields.filter(item => item.cell === cell)[0]
                if (field && field.max_value) {
                    return field.max_value
                }
                else {
                    return ''
                }
            }
        },
        getFieldType(state, getters) {
            return function (cell) {
                let field = state.journal.currentTable.fields.filter(item => item.cell === cell)[0]
                if (field && field.type) {
                    return field.type
                }
                else {
                    return ''
                }
            }
        },
        getFieldUnits(state, getters) {
            return function (cell) {
                let field = state.journal.currentTable.fields.filter(item => item.cell === cell)[0]
                if (field && field.units) {
                    return field.units
                }
                else {
                    return ''
                }
            }
        },
        getFormula(state, getters) {
            return function (cell) {
                let field = state.journal.currentTable.fields.filter(item => item.cell === cell)[0]
                if (field && field.formula) {
                    return field.formula
                }
                else {
                    return ''
                }
            }
        },
        getJournalNames(state, getters) {
            return function() {
                return Object.keys(state.scheme);
            }
        },
        getJournalTableNames(state, getters) {
            return function (journalName) {
                return Object.keys(state.scheme[journalName])
            }
        },
        getJournalCompletions(state, getters) {
            return function (prefix) {
                let journal_names = Object.keys(state.scheme)
                return journal_names.filter(name => name.includes(prefix))
            }
        },
        getTableCompletions(state, getters) {
            return function (prefix) {
                console.log("U sobak bolshie hui", state.scheme)
                let table_names = Object.values(state.scheme).map(function(tables) {
                    return Object.keys(tables)
                }).flat();
                return table_names.filter(name => name.includes(prefix))
            }
        },
        getFieldCompletions(state, getters) {
            return function (prefix) {
                console.log("U sobak bolshie hui", state.scheme)
                let table_names = Object.values(state.scheme).map(function(tables) {
                    let fields_names = Object.values(tables);
                    return fields_names.flat()
                }).flat();
                return table_names.filter(name => name.includes(prefix))
            }
        },
        getSchemeTableHTML(state, getters) {
            return function (journal, table) {
                return state.scheme[journal][table].html
            }
        },
        getTableHTML(state, getters) {
            return function (tableName) {
                let table = state.journal.tables.filter((item) => item.name === tableName)[0]
                return table.html ? table.html : ''
            }
        },
    },
    actions: {
        importJournal: function ({commit, state, getters}, payload) {
            let url = window.ELOGS_SERVER + `/api/constructor/journal?plant=${payload.plant}&journal=${payload.journal}&version=${payload.version}`;
            return axios.get(url)
                // .then( function (response) {
                //     commit('setJournal', response.data)
                // });
        },
        importTable: function ({commit, state, getters}, payload) {
            var ThirdPartyAPI = window.ELOGS_SERVER + '/api';
            let url = ThirdPartyAPI + `/templates/tables/?journal_name=${payload.journal}&table_name=${payload.table}`;
            return axios.get(url)
                .then( function (response) {
                    let htmlDoc = $.parseHTML("<div>" + response.data + "</div>")
                    console.log(response.data)
                    let $html = $(htmlDoc)
                    let cells = $html.find("cell");
                    console.log(cells)
                    for (var cell of cells) {
                        let fieldName = $(cell).attr("field-name")
                        let fieldSelectorElement = `<div class='field-selector'>${fieldName}</div>`
                        $(cell).text("")
                        $(cell).append(fieldSelectorElement)
                    }
                    // console.log($html.html())

                    commit('setTableHTML', {...payload, html: $html.html()}) 
                });
        }
        
    },
    mutations: {
        setJournal(state, payload) {
            // Vue.set(state, 'journal', {...payload, tables: payload.tables || []})
            state.journal = {...payload, tables: payload.tables || []}
            // if (!payload.tables) {
            //     state.journal.tables = []
            // }
        },
        setJournalName(state, payload) {
            state.journal = {...state.journal, title: payload.title, name: payload.name}
        },
        updateJournal(state, payload) {
            // Vue.set(state, 'journal', {...payload, tables: payload.tables || []})
            state.journal = {...state.journal, ...payload}
            // if (!payload.tables) {
            //     state.journal.tables = []
            // }
        },
        setTableHTML(state, payload) {
            console.log(payload)
            console.log(state.scheme[payload.journal][payload.table])
            Vue.set(state.scheme[payload.journal][payload.table], 'html', "<div>" + payload.html + "</div>")
        },
        setScheme(state, payload) {
            Vue.set(state, 'scheme', payload)
        },
        setCurrentTable(state, payload) {
            Vue.set(
                state.journal,
                'currentTable',
                (payload && payload.name && state.journal.tables.filter((item) => item.name === payload.name)[0]) || payload
            )

        },
        updateCurrentTable(state, payload) {
            state.journal.currentTable = {...state.journal.currentTable, ...payload}
        },
        setJournalImported(state, payload) {
            Vue.set(state.journal, 'imported', payload)
            // state.journal.imported = payload
        },
        setJournalPlant(state, payload) {
            Vue.set(state.journal, 'plant', payload)
            // state.journal.imported = payload
        },
        addTable(state, payload) {
            let table = state.journal.tables.filter((item) => item.name === payload.name)[0]
            if (table) {
                state.journal.tables = state.journal.tables.map((item) => {
                    if (item.name === payload.name) {
                        return payload
                    }
                    else {
                        return item
                    }
                })
            }
            else {
                state.journal.tables.push(payload)
            }
        },
        deleteTable(state, payload) {
            console.log(payload.tableName)
            console.log('prev', state.journal.tables)
            state.journal = {...state.journal, tables: state.journal.tables.filter(item => item.name != payload.tableName)}
            console.log('post', state.journal.tables)
        },
        setTable(state, payload) {
            let table = state.journal.tables.filter((item) => item.name === payload.name)[0]
            console.log('prev', table)
            if (table) {
                table = Object.assign(table, {...payload})
            }
            else {
                state.journal.tables.push(payload)
            }
            console.log('last', table)
        },
        setTablesList(state, payload) {
            state.journal.tables = payload.tables
        },
        setFieldName(state, payload) {
            let field = state.currentTable.fields.filter(item => item.cell === $(payload.cell).attr('id'))[0]

            if (field) {
                field.name = payload.name
            }
        },
        setFields(state, payload) {
            // let table = state.journal.tables.filter((item) => item.name === payload.name)[0]
            console.log('payload', payload)
            console.log('state.journal.currentTable.fields', state.journal.currentTable.fields)
            payload.fieldsIds.map(id => {
                state.journal.currentTable.fields = state.journal.currentTable.fields.map(item => {
                    console.log(item.cell, id)
                    if (item.cell === id) {
                        let {fieldsIds, ...currentField} = payload
                        console.log('currentField', currentField)
                        return {...item, ...currentField}
                    } 
                    else {
                        return item
                    }
                })
            })

        },
        recoverFields(state, payload) {
            let table = state.journal.tables.filter((item) => item.name === payload.name)[0]
            // console.log('before', table, payload, state.journal.tables)
            table.fields = table.recoveryFields
            // console.log('after', table)
        }
    }
}

export default journalState

