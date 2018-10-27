import axios from 'axios'

const journalState = {
    namespaced: true,
    state: {
        journal: {
            tables: []
        }
    },
    getters: {
        getJournal(state, getters) {
            return state.journal
        },
        getJournalName(state, getters) {
            return state.journal.name
        },
        getTables(state, getters) {
            return state.journal.tables
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
        getCellName(state, getters) {
            return function (tableName, cell) {
                let table = state.journal.tables.filter((item) => item.name === tableName)[0]
                let field = table.fields.filter(item => item.cell === cell)[0]
                if (field && field.field_name) {
                    return field.field_name
                }
                else {
                    return ''
                }
            }
        },
        getCellMinValue(state, getters) {
            return function (tableName, cell) {
                let table = state.journal.tables.filter((item) => item.name === tableName)[0]
                let field = table.fields.filter(item => item.cell === cell)[0]
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
                let table = state.journal.tables.filter((item) => item.name === tableName)[0]
                let field = table.fields.filter(item => item.cell === cell)[0]
                if (field && field.max_value) {
                    return field.max_value
                }
                else {
                    return ''
                }
            }
        },
        getCellType(state, getters) {
            return function (tableName, cell) {
                let table = state.journal.tables.filter((item) => item.name === tableName)[0]
                let field = table.fields.filter(item => item.cell === cell)[0]
                if (field && field.type) {
                    return field.type
                }
                else {
                    return ''
                }
            }
        },
        getCellUnits(state, getters) {
            return function (tableName, cell) {
                let table = state.journal.tables.filter((item) => item.name === tableName)[0]
                let field = table.fields.filter(item => item.cell === cell)[0]
                if (field && field.units) {
                    return field.units
                }
                else {
                    return ''
                }
            }
        }
    },
    actions: {
        importJournal: function ({commit, state, getters}, payload) {
            let url = `http://${window.location.hostname}:3000/get_journal?plant=${payload.plant}&journal=${payload.journal}`;

            return axios.get(url)
                .then( function (response) {
                    commit('setJournal', response.data)
                });
            }
    },
    mutations: {
        setJournal(state, payload) {
            state.journal = {...payload}
            if (!payload.tables) {
                state.journal.tables = []
            }
        },
        addTable(state, payload) {
            state.journal.tables.push(payload)
        },
        deleteTable(state, payload) {
            console.log(payload.tableName)
            state.journal.tables = state.journal.tables.filter(item => item.name != payload.tableName)
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
                    field.field_name = payload.field_name
                }

        },
        setFields(state, payload) {
            let table = state.journal.tables.filter((item) => item.name === payload.name)[0]

            payload.fields.cells.map(cell => {
                let field = table.fields.filter(item => item.cell === $(cell).attr('id'))[0]

                if (field) {
                    field.field_name = payload.fields.field_name
                    field.min_value = payload.fields.min_value
                    field.max_value = payload.fields.max_value
                    field.type = payload.fields.type
                    field.units = payload.fields.units
                }
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