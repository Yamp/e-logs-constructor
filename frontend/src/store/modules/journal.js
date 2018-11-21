import Vue from 'vue'
import axios from 'axios'

const journalState = {
    namespaced: true,
    state: {
        journal: null
    },
    getters: {
        getJournal(state, getters) {
            return state.journal
        },
        getJournalName(state, getters) {
            return state.journal.name
        },
        getJournalTitle(state, getters) {
            return state.journal.title
        },
        getTables(state, getters) {
            return state.journal.tables
        },
        getCurrentTable(state, getters) {
            return state.journal.currentTable
        },
        getJournalImported(state, getters) {
            return state.journal.imported
        },
        getTableTitle(state, getters) {
            return function (tableName) {
                let table = state.journal.tables.filter((item) => item.name === tableName)[0]
                return table.title
            }
        },
        getTableHTML(state, getters) {
            return function (tableName) {
                let table = state.journal.tables.filter((item) => item.name === tableName)[0]
                return table.html ? table.html : ''
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
            return function (tableName, cell) {
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
            return function (tableName, cell) {
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
            return function (tableName, cell) {
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
            return function (tableName, cell) {
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
            return function (tableName, cell) {
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
            return function (tableName, cell) {
                let field = state.journal.currentTable.fields.filter(item => item.cell === cell)[0]
                if (field && field.formula) {
                    return field.formula
                }
                else {
                    return ''
                }
            }
        }
    },
    actions: {
        importJournal: function ({commit, state, getters}, payload) {
            let url = window.ELOGS_SERVER + `/api/constructor/get_journal?plant=${payload.plant}&journal=${payload.journal}`;

            return axios.get(url)
                .then( function (response) {
                    commit('setJournal', response.data) 
                });
            }
    },
    mutations: {
        setJournal(state, payload) {
            Vue.set(state, 'journal', {...payload, tables: payload.tables || []})
            // state.journal = {...state.journal, ...payload}
            // if (!payload.tables) {
            //     state.journal.tables = []
            // }
        },
        setCurrentTable(state, payload) {
            Vue.set(state.journal, 'currentTable', payload && payload.name ? state.journal.tables.filter((item) => item.name === payload.name)[0] : payload)
            // state.journal.currentTable = payload && payload.name ? state.journal.tables.filter((item) => item.name === payload.name)[0] : payload
        },
        updateCurrentTable(state, payload) {
            state.journal.currentTable = {...state.journal.currentTable, ...payload}
        },
        setJournalImported(state, payload) {
            Vue.set(state.journal, 'imported', payload)
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
            let table = state.journal.tables.filter((item) => item.name === payload.name)[0]

                let field = table.fields.filter(item => item.cell === $(payload.cell).attr('id'))[0]

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
