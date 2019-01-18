<template>
    <div v-show="display" v-bind:class="[{'expanded': expanded}, 'pop-up']" id="pop-up" v-bind:style="{left: x + 'px', top: y + 'px', transition: '0.2s'}">
        <div class="form-group input-container" style="margin-top: 0;" v-show="cellTag === 'th' || selectedFields.length === 1">
            <i class="fas fa-font data-icon"></i>
            <input type="text" id="name" class="form-control" v-model="fieldName" placeholder="Имя" @input="(value) => onHandleChange('fieldName', value)">
        </div>
        <div class="form-group input-container" v-show="cellTag === 'td'" :style="{'margin-top': cellTag === 'th' || selectedFields.length === 1 ? '15px' : '0'}">
            <img src="../assets/icons/type_icon.svg" class="data-icon"/>
            <select required id="type" class="form-control" v-model="type" @change="(value) => onHandleChange('type', value)">
                <option value="" selected disabled>Тип ячейки</option>
                <option value="text">Текст</option>
                <option value="number">Число</option>
                <option value="datalist">Список</option>
                <option value="date">Дата</option>
                <option value="time">Время</option>
                <option value="formula">Формула</option>
            </select>
        </div>
        <div class="form-group input-container" v-show="type === 'formula' && cellTag === 'td'">

            <div id="formula-editor" :class="[{'expanded': expanded}, 'form-control', 'ace-editor', 'ace_editor', 'ace-xcode']">
                
            </div>
<!--                 <input type="text" id="formula" class="form-control" v-model="formula" placeholder="Введите формулу" @input="(value) => onHandleChange('formula', value)"> -->
        </div>
        <div class="form-group input-container" v-show="type === 'datalist' && cellTag === 'td'">
            <img src="../assets/icons/list.svg" class="data-icon" />
            <select required id="listType" class="form-control" v-model="currentListType" @change="(value) => onHandleChange('listType', value)">
                <option value="" selected disabled>Тип списка</option>
                <option v-for="item in listTypes" :value="item.name">{{item.title}}</option>
            </select>
        </div>
        <div class="button-container form-group" v-if="type == 'formula'">
            <img v-if="!expanded" src="../assets/icons/expand.svg"  alt="Развернуть" class="expand-icon icon" @click="expandEditor">
            <img v-if="expanded" src="../assets/icons/compress.svg" alt="Свернуть" class="expand-icon icon" @click="compressEditor">
            <img src="../assets/icons/hand-pointer.svg" class="icon" alt="Выбиралка" @click="toggleFieldsSelectors">
            <img src="../assets/icons/list.svg" class="icon" alt="Визард" @click="openWizard">
        </div>

        <div class="form-group" v-if="type == 'text' || type == 'number' || type == 'formula' || cellTag === 'th'">
            <img src="../assets/icons/ed_icon.svg" class="data-icon" />
            <input type="text" id="units" class="form-control" v-model="units" placeholder="Единицы измерения" @input="(value) => onHandleChange('units', value)">
        </div>
    </div>
</template>

<script>
    import * as ace from 'brace';
    import 'brace/mode/javascript';
    import 'brace/mode/vbscript'
    import 'brace/theme/xcode';
    import 'brace/ext/language_tools';
    import {eventBus} from '../main.js'
    import formatFactory from '../utils/formatFactory.js'
    
    export default {
        name: "PopUp",
        props: ['display', 'x', 'y', 'cell', 'cellTag', 'selectedFields', 'expandDirection'],
        data () {
            return {
                fieldName: '',
                minValue: '',
                maxValue: '',
                type: '',
                listTypes: [],
                currentListType: '',
                units: '',
                formula: '',
                editor: null,
                expanded: false,
            }
        },
        watch: {
            cell (value) {
                eventBus.$emit("removeFieldsSelectors")
                if (value && this.cellTag === 'td' && this.selectedFields.length === 1) {
                    this.fieldName = this.$store.getters['journalState/getFieldName'](this.cell)
                    this.type = this.$store.getters['journalState/getFieldType'](this.cell)
                    this.units = this.$store.getters['journalState/getFieldUnits'](this.cell)
                    this.currentListType = this.$store.getters['journalState/getFieldListType'](this.cell)
                    this.formula = this.$store.getters['journalState/getFormula'](this.cell)

                    this.editor.resize(true)
                    this.editor.getSession().setValue(this.formula)

                    this.currentListType ? this.loadListTypes() : null
                }
                else if (value && this.cellTag === 'th') {
                    this.fieldName = $(`#${this.cell}`).find('.text').text()
                    this.units = $(`#${this.cell}`).find('.units').text()
                }
                else {
                    this.fieldName = ''
                    this.type = ''
                    this.units = ''
                    this.currentListType = ''
                    this.editor.getSession().setValue("")
                }
            },
            type (value) {
                this.compressEditor()
                eventBus.$emit("removeFieldsSelectors")
                if (value === 'formula') {
                    this.editor.resize(true);
                }
            },
            display(newValue, oldValue) {
                if (newValue === "none") {
                    this.expanded = false
                }
            },
        },
        computed: {
            getCurrentTable () {
                return this.$store.getters['journalState/getCurrentTable']
            }
        },
        methods: {
            loadListTypes () {
                this.$store.dispatch('journalState/loadListTypes')
                    .then((resp) => {
                        this.listTypes = resp.data
                    })
            },
            onHandleChange (data, input) {
                let currentCell = $(`#${this.cell}`)

                if (data === 'fieldName') {
                    this.selectedFields.map(item => {
                        $(`#${item}`).attr('field-name', input.target.value)
                    })

                    if (this.cellTag === 'th') {
                        let $text = currentCell.find('.text')

                        $text.length ?
                            $text.text(input.target.value)
                            : currentCell.prepend(`<span class="text">${input.target.value}</span>`)
                    }
                    else if (this.cellTag === 'td' && this.selectedFields.length === 1){
                        this.selectedFields.map(item => {
                            $(`#${item}`).find('.name-container').text(input.target.value)
                        })

                        this.$store.commit('journalState/setFields',
                            {
                                name: this.fieldName,
                                fieldsIds: this.selectedFields
                            }
                        )

                        eventBus.$emit('set-has-all-names', this.getCurrentTable.fields.every(item => item.name))
                        eventBus.$emit('check-repeated')
                    }
                }

                if (data === 'type') {
                    this.selectedFields.map(item => {
                        $(`#${item}`).addClass('has-type')
                    })

                    this.$store.commit('journalState/setFields',
                        {
                            fieldsIds: this.selectedFields,
                            type: this.type
                        }
                    )

                    this.type === 'datalist' ? this.loadListTypes() : null
                }

                if (data === 'units') {
                    if (this.cellTag === 'td') {
                        this.selectedFields.map(item => {
                            input.target.value ?
                                $(`#${item}`).addClass('has-units')
                                : $(`#${item}`).removeClass('has-units')
                        })

                        this.$store.commit('journalState/setFields',
                            {
                                fieldsIds: this.selectedFields,
                                units: this.units
                            }
                        )
                    }
                    else if (this.cellTag === 'th') {
                        let $units = currentCell.find('.units')

                        if ($units.length) {
                            input.target.value ?
                                $units.text(input.target.value)
                                : $units.remove()
                        }
                        else {
                            $(`#${this.cell}`).append(`<i class="units">${input.target.value}</i>`)
                        }
                    }
                }

                if (data === 'formula') {
                    this.$store.commit('journalState/setFields',
                        {
                            fieldsIds: this.selectedFields,
                            formula: this.editor.getValue()
                        }
                    )
                }

                if (data === 'listType') {
                    this.$store.commit('journalState/setFields',
                        {
                            fieldsIds: this.selectedFields,
                            type: `${this.type}_${this.currentListType}`
                        }
                    )
                }
            },
            expandEditor () {
                // document.getElementById("formula-editor").classList.add("expanded-formula-editor")
                // document.getElementById("pop-up").classList.add("expanded-pop-up")
                if (this.expandDirection == "left" && !this.expanded) {
                    var popup = document.getElementById("pop-up")
                    var left = parseInt(popup.style.left)
                    var top = parseInt(popup.style.top)
                    popup.style.left = `${left - 200}px`;
                }
                this.expanded = true
                setTimeout(() => {this.editor.resize()}, 1000)
                this.editor.setOptions({wrap: true})
            },
            compressEditor () {
                if (this.expandDirection == "left" && this.expanded) {
                    var popup = document.getElementById("pop-up")
                    var left = parseInt(popup.style.left)
                    var top = parseInt(popup.style.top)
                    popup.style.left = `${left + 200}px`;
                }
                this.expanded = false
                setTimeout(() => {this.editor.resize()}, 1000)
                this.editor.setOptions({wrap: false})
            },
            toggleFieldsSelectors () {
                eventBus.$emit('toggleFieldsSelectors')
            },
            
            insertCellIntoFormula (payload) {
                // console.log()
                // console.log(Object.keys(payload), "journal" in Object.keys(payload))
                if  (Object.keys(payload).indexOf("journal") >= 0 && Object.keys(payload).indexOf("table") >= 0) {
                    var formula = `$("${payload.journal}", "CURRENT_SHIFT", "${payload.table}", "${payload.field}")`
                }
                else {
                    var formula = `$("${payload.field}")`
                }
                this.editor.session.insert(this.editor.getCursorPosition(), formula);
                this.editor.focus();
            },
            openWizard () {
                eventBus.$emit("openWizard");
            }

        },
        mounted() {

            eventBus.$on("insertCellIntoFormula", this.insertCellIntoFormula);
            var langTools = ace.acequire("ace/ext/language_tools");
            var rhymeCompleter = {
                getCompletions: function(editor, session, pos, prefix, callback) {
                    if (prefix.length === 0) { callback(null, []); return }
                    $.getJSON(
                        "http://rhymebrain.com/talk?function=getRhymes&word=" + prefix,
                        function(wordList) {
                            // wordList like [{"word":"flow","freq":24,"score":300,"flags":"bc","syllables":"1"}]
                            callback(null, wordList.map(function(ea) {
                                return {name: ea.word, value: ea.word, score: ea.score, meta: "rhyme"}
                            }));
                        })
                }
            }
            var self = this;
            var JournalCompleter = {
                getCompletions: (editor, session, pos, prefix, callback) => {
                    if (prefix.length === 0) { callback(null, []); return }
                    var completions = self.$store.getters['journalState/getJournalCompletions'](prefix)
                    callback(null, completions.map(function(word) {
                        return {name: word, value: word, score: 500, meta: "Журнал"}
                    }))
                }
            }

            var TableCompleter = {
                getCompletions: (editor, session, pos, prefix, callback) => {
                    if (prefix.length === 0) { callback(null, []); return }
                    var completions = self.$store.getters['journalState/getTableCompletions'](prefix)
                    callback(null, completions.map(function(word) {
                        return {name: word, value: word, score: 400, meta: "Таблица"}
                    }))
                }
            }

            var FieldCompleter = {
                getCompletions: (editor, session, pos, prefix, callback) => {
                    if (prefix.length === 0) { callback(null, []); return }
                    var completions = self.$store.getters['journalState/getFieldCompletions'](prefix)
                    callback(null, completions.map(function(word) {
                        return {name: word, value: word, score: 300, meta: "Поле"}
                    }))
                }
            }


            langTools.setCompleters([JournalCompleter, TableCompleter, FieldCompleter]);
            // langTools.keyWordCompleter = null;
            this.editor = ace.edit("formula-editor");
            this.editor.getSession().setMode('ace/mode/vbscript');
            this.editor.setTheme('ace/theme/xcode');
            this.editor.setOptions({
                autoScrollEditorIntoView: true,
                copyWithEmptySelection: true,
                showGutter: false,
                selectStyle: "text",
                showPrintMargin: true,
                highlightActiveLine: false,
                enableLiveAutocompletion: true,
                indentedSoftWrap: false,
            });
            this.editor.renderer.setScrollMargin(6, 6)
            this.editor.on("change", (e) => {
                this.onHandleChange('formula', e)
            })
        }
    }
</script>

<style scoped>
.pop-up {
    /* display: none; */
    position: absolute;
    width: 220px;
    border: 1px solid rgba(0,0,0,0.4);
    padding: 10px;
    border-radius: 4px;
    background-color: #fff;
    transition: 0.2s;
    z-index: 1000;
}


.form-group {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 15px;
    margin-bottom: 0;
}

.form-group .data-icon {
    font-size: 18px;
    width: 16px;
    margin-right: 10px;
}

.form-group select:invalid {
    color: #999;
}

.form-group select option:first-child{
    display: none;
}

#formula-editor { 
    position: relative;
    transition: 0.2s;
}

.icon {
    width: 20px;
    font-size: 36px;
    opacity: 0.6;
    text-align: right;
}

.icon:active {
    opacity: 0.2;
}
.icon:hover {
    cursor: pointer;
}

.expand-icon {
    transition: 0.2s;
}


.expanded.pop-up{
    width: 400px;
    transition: 0.2s;
}

.expanded#formula-editor {
    height: 200px;
    transition: 0.2s;
}

.button-container{
    margin-top: 5px;
    display: flex;
    flex-direction: row-reverse;
}
.button-container>img{
    margin-left: 8px;
    float: right;
}

</style>