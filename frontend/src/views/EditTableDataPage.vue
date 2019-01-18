<template>
    <div class="edit-data">
        <div class="title-container">
            <h2 class="title">Заполнение данными</h2>
            <div class="errors-container">
                <div v-for="error in errors" class="error">
                    {{error}}
                </div>
            </div>
        </div>
        <editor class="editor"></editor>
        <div class="footer">
            <div class="note">
                <i class="fas fa-exclamation-circle"></i>
                <span>Вы можете объединять ячейки с помощью зажатой клавиши Ctrl или Shift</span>
            </div>
            <div class="btns">
                <button class="btn btn-default" @click="onHandleBack" style="margin-right: 10px">Назад</button>
                <button class="btn" :class="{'btn-primary': !hasAllNames, 'btn-default': hasAllNames}" @click="setAutoNames" style="margin-right: 10px">Заполнить имена автоматически</button>
                <button class="btn btn-primary" @click.prevent="onHandleSave" :disabled="!hasAllNames">Сохранить</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Editor from '../components/Editor.vue'
    import formatFactory from '../utils/formatFactory.js'
    import {eventBus} from '../main.js'

    export default {
        name: 'EditTableDataPage',
        components: {Editor},
        data() {
            return {
                hasAllNames: false,
                errors: [],
                validateErrors: {
                    formula: {
                        syntax: [],
                        cells: [],
                        cycles: [],
                    }
                }
            }
        },
        watch: {
            'validateErrors.formula.syntax': function(error_cells) {
                let message = 'syntax error'
                if (error_cells.length > 0) {
                    if (!(this.errors.includes(message))) {
                        this.errors.push(message)
                    }
                }
                else {
                    console.log("check")
                    this.errors = this.errors.filter((e) => e !== message)
                }
            },
            'validateErrors.formula.cells': function(error_cells) {
                if (error_cells) {
                    this.error = 'syntax error'
                }
                else {
                    this.error = ''
                }
            },
            'validateErrors.formula.cycles': function(error_cells) {
                if (error_cells) {
                    this.error = 'syntax error'
                }
                else {
                    this.error = ''
                }
            }
        },
        computed: {
            getCurrentTable () {
                return this.$store.getters['journalState/getCurrentTable']
            },
            getTableCells () {
                return this.$store.getters['journalState/getTableCells'](this.$route.params.tableName)
            },
            plant () {
                return this.$store.getters['journalState/getJournalPlant']
            },
            getJournalName () {
                return this.$store.getters['journalState/getJournalName']
            }
        },
        methods: {
            onHandleBack() {
                $('.editor th, .editor td').each(function () {
                    $(this).removeClass("selected")
                })

                this.$store.commit('journalState/updateCurrentTable',
                    {
                        html: formatFactory($('#editor-content').html())
                    }
                )

                this.$router.push(`/journal/${this.getJournalName}/table/create`)
            },
            setAutoNames () {
                eventBus.$emit('set-auto-names')
            },
            onHandleSave() {
                this.getCurrentTable.fields.map(field => {
                    if (field['name']) {
                        $(`#${field.cell}`).removeClass('is-empty')
                    }
                    else {
                        $(`#${field.cell}`).addClass('is-empty')
                        this.hasAllNames = false
                    }
                })

                if (!this.hasAllNames) {
                    this.error = 'Все имена полей должны быть заполнены!'

                    this.getCurrentTable.fields.map(field => {
                        $(`#${field.cell}`).removeClass('is-repeated')
                    })

                    return;
                }

                if (this.checkRepeated()) {
                    return;
                }

                // If everything is ok
                $('.editor .cell').each(function () {
                    $(this).attr('class', 'cell')
                    $(this).html('')
                })

                $('.editor th').each(function () {
                    $(this).removeClass("selected")
                })

                this.$store.commit('journalState/updateCurrentTable',
                    {
                        html: formatFactory($('#editor-content').html())
                    }
                )

                this.$store.commit('journalState/addTable', this.getCurrentTable)
                this.$store.commit('journalState/setCurrentTable', null)
                // this.$router.push(`/journal/${this.$route.params.journalName}${this.getUrlParams('plant') ? '?plant=' + this.getUrlParams('plant') : ''}`)
                this.$router.push(`/journal/${this.$route.params.journalName}${this.plant ? '?plant=' + this.plant : ''}`)
            },
            checkRepeated() {
                let hasReapitebleNames = false

                this.getCurrentTable.fields.map(field => {
                    $(`#${field.cell}`).removeClass('is-repeated')
                })

                for(let index = 0; index < this.getCurrentTable.fields.length; index++) {
                    this.getCurrentTable.fields.map((field, i) => {
                        if (index != i && this.getCurrentTable.fields[index].name === field.name &&
                                this.getCurrentTable.fields[index].name && field.name !== '') {
                            $(`#${field.cell}`).addClass('is-repeated')
                            hasReapitebleNames = true
                        }
                    })
                }

                if (hasReapitebleNames) {
                    this.errors.push('Имена полей не должны повторяться!')
                    this.getCurrentTable.fields.map(field => {
                        $(`#${field.cell}`).removeClass('is-empty')
                    })
                    return true
                }
                else {
                    this.errors = this.errors.filter((e) => e !== 'Имена полей не должны повторяться!')
                    this.error = this.error === 'Все имена полей должны быть заполнены!' ?
                        'Все имена полей должны быть заполнены!' : ''
                    return false
                }
            },
            getUrlParams(name, url) {
                if (!url) url = window.location.href;
                name = name.replace(/[\[\]]/g, '\\$&');
                var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                    results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                return decodeURIComponent(results[2].replace(/\+/g, ' '));
            },
            addCellWithError(payload) {
                this.validateErrors[payload.error_type][payload.error_name].push(payload.cell)
                if (payload.error_type == "formula") {
                    if (payload.error_name == "syntax") {
                        $(`#${payload.cell}`).addClass('is-repeated')
                    }
                }
            },
            removeCellWithError(payload) {
                this.validateErrors[payload.error_type][payload.error_name] =
                    this.validateErrors[payload.error_type][payload.error_name]
                    .filter((e) => e !== payload.cell)

                if (payload.error_type == "formula") {
                    if (payload.error_name == "syntax") {
                        $(`#${payload.cell}`).removeClass('is-repeated')
                    }
                }
            },
        },
        mounted() {
            eventBus.$on('check-repeated', () => this.checkRepeated())
            eventBus.$on('set-has-all-names', (hasAllNames) => this.hasAllNames = hasAllNames)
            eventBus.$on('add-cell-with-error', (payload) => this.addCellWithError(payload))
            eventBus.$on('remove-cell-with-error', (payload) => this.removeCellWithError(payload))
        },
        beforeDestroy(){
            eventBus.$off('check-repeated')
            eventBus.$off('set-has-all-names')
            eventBus.$off('display-error')
            eventBus.$off('remove-error')
        }
    }
</script>

<style scoped>
    .title-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 40px;
        margin-bottom: 20px;
    }
    .errors-container {
        display: flex;
        overflow-y: auto;
    }
    .edit-data {
        padding: 20px;
        box-sizing: border-box;
    }

    .edit-data .title {
        margin-top: 0;
        margin-bottom: 0;
    }

    .editor {
        margin-bottom: 20px;
    }

    .footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .btns {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 0;
    }
    .error {
        display: flex;
        align-items: center;
        background-color: rgb(245, 108, 108);
        color: rgb(255, 255, 255);
        height: 40px;
        border-radius: 6px;
        padding: 0px 15px;
    }
    .note {
        display: flex;
        align-items: center;
        opacity: 0.8;
        margin-right: 20px;
    }
    .note i {
        font-size: 22px;
        margin-right: 6px;
    }
    .note span {
        font-size: 16px;
    }
</style>
