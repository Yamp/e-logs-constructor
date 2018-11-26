<template>
    <div v-show="display" v-bind:class="[{'expanded': expanded}, 'pop-up']" id="pop-up" v-bind:style="{left: x + 'px', top: y + 'px', transition: '0.2s'}">
        <div id="test">
            {{ cell }}
        </div>
        <div class="form-group input-container" style="margin-top: 0;">
            <i class="fas fa-font data-icon"></i>
            <input type="text" id="name" class="form-control" v-model="fieldName" placeholder="Имя" @input="(value) => onHandleChange('fieldName', value)">
        </div>
        <!-- <div class="form-group">
            <input type="text" id="minValue" class="form-control" v-model="minValue" placeholder="Минимальное значение" @input="(value) => onHandleChange('minValue', value)">
        </div>
        <div class="form-group">
            <input type="text" id="maxValue" class="form-control" v-model="maxValue" placeholder="Максимальное значение" @input="(value) => onHandleChange('maxValue', value)">
        </div> -->
        <div class="form-group input-container" v-show="cellTag === 'td'">
            <i class="fas fa-sliders-h data-icon"></i>
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
            <img v-if="!expanded" src="../assets/icons/expand.svg" class="expand-icon" @click="expandEditor">
            <img v-if="expanded" src="../assets/icons/compress.svg" class="expand-icon" @click="compressEditor">

            <div id="formula-editor" :class="[{'expanded': expanded}, 'form-control', 'ace-editor', 'ace_editor', 'ace-xcode']">
                
            </div>
<!--                 <input type="text" id="formula" class="form-control" v-model="formula" placeholder="Введите формулу" @input="(value) => onHandleChange('formula', value)"> -->
        </div>
        <div class="form-group input-container" v-show="cellTag === 'td'">
            <i class="fas fa-pencil-ruler data-icon"></i>
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
    
    export default {
        name: "PopUp",
        props: ['display', 'x', 'y', 'cell', 'cellTag', 'selectedFields', 'expandDirection'],
        data () {
            return {
                fieldName: '',
                minValue: '',
                maxValue: '',
                type: '',
                units: '',
                formula: '',
                editor: null,
                expanded: false,
            }
        },
        watch: {
            cell (value) {
                console.log("cell changed", value)
                if (value && this.cellTag === 'td' && this.selectedFields.length === 1) {
                    this.fieldName = this.$store.getters['journalState/getFieldName'](this.$route.params.tableName, this.cell)
                    this.type = this.$store.getters['journalState/getFieldType'](this.$route.params.tableName, this.cell)
                    this.units = this.$store.getters['journalState/getFieldUnits'](this.$route.params.tableName, this.cell)
                    this.formula = this.$store.getters['journalState/getFormula'](this.$route.params.tableName, this.cell)
                    this.editor.resize(true)
                    this.editor.getSession().setValue(this.formula)
                    console.log("setted value")
                }
                else if (value && this.cellTag === 'th') {
                    this.fieldName = $(`#${this.cell}`).text()
                    this.type = ''
                    this.units = ''
                }
                else {
                    this.fieldName = ''
                    this.type = ''
                    this.units = ''
                    this.editor.getSession().setValue("")
                }

                // $('#name input').val(this.fieldName)
                // $('#minValue input').val(this.minValue)
                // $('#maxValue input').val(this.maxValue)
                // $('#type input').val(this.type)
                // $('#units input').val(this.units)
            },
            type (value) {
                this.compressEditor()
                if (value === 'formula') {
                    console.log("secretly ya ebu bolshih sobak)00))0")
                    this.editor.resize(true);
                }
            },
            display(newValue, oldValue) {
                if (newValue === "none") {
                    this.expanded = false
                }
            },
        },
        methods: {
            onHandleChange (data, input) {
                console.log("onhandlechange")
                if (data === 'fieldName') {
                    console.log('input', input.target.value)
                    this.selectedFields.map(item => {
                        $(`#${item}`).attr('field-name', input.target.value)
                    })
                    if (this.cellTag === 'th') {
                        $(`#${this.cell}`).text(input.target.value)
                    }
                    else {
                        this.selectedFields.map(item => {
                            input.target.value ? 
                                $(`#${item}`).addClass('has-name')
                                : $(`#${item}`).removeClass('has-name')
                        })
                    }
                }
                console.log(data, input)
                if (data === 'type') {
                    this.selectedFields.map(item => {
                        $(`#${item}`).addClass('has-type')
                    })
                }

                if (data === 'units') {
                    this.selectedFields.map(item => {
                        input.target.value ? 
                            $(`#${item}`).addClass('has-units')
                            : $(`#${item}`).removeClass('has-units')
                    })
                }

                if (this.cellTag === 'td') {
                    this.$store.commit('journalState/setFields',
                        {
                            name: this.fieldName,
                            fieldsIds: this.selectedFields,
                            // min_value: this.minValue,
                            // max_value: this.maxValue,
                            type: this.type,
                            units: this.units,
                            formula: this.editor.getValue()
                        }
                    )
                }
                console.log(this.$store.getters['journalState/getCurrentTable'])
            },
            expandEditor () {
                // document.getElementById("formula-editor").classList.add("expanded-formula-editor")
                // document.getElementById("pop-up").classList.add("expanded-pop-up")
                if (this.expandDirection == "left" && !this.expanded) {
                    var popup = document.getElementById("pop-up")
                    var left = parseInt(popup.style.left)
                    var top = parseInt(popup.style.top)
                    popup.style.left = `${left - 200}px`;
                    console.log(`{left - 200}px`)
                    console.log("left", popup.style.left)
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
                    console.log(`{left - 200}px`)
                    console.log("left", popup.style.left)
                }
                this.expanded = false
                setTimeout(() => {this.editor.resize()}, 1000)
                this.editor.setOptions({wrap: false})
            }
        },
        mounted() {
            var langTools = ace.acequire("ace/ext/language_tools");
            var rhymeCompleter = {
                getCompletions: function(editor, session, pos, prefix, callback) {
                    console.log(prefix, pos)
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
                    console.log(prefix, pos)
                    console.log("Bolshie soabaki))))", self)
                    if (prefix.length === 0) { callback(null, []); return }
                    var completions = self.$store.getters['journalState/getJournalCompletions'](prefix)
                    callback(null, completions.map(function(word) {
                        return {name: word, value: word, score: 500, meta: "Журнал"}
                    }))
                }
            }

            var TableCompleter = {
                getCompletions: (editor, session, pos, prefix, callback) => {
                    console.log(prefix, pos)
                    console.log("Bolshie soabaki))))", self)
                    if (prefix.length === 0) { callback(null, []); return }
                    var completions = self.$store.getters['journalState/getTableCompletions'](prefix)
                    callback(null, completions.map(function(word) {
                        return {name: word, value: word, score: 400, meta: "Таблица"}
                    }))
                }
            }

            var FieldCompleter = {
                getCompletions: (editor, session, pos, prefix, callback) => {
                    console.log(prefix, pos)
                    console.log("Bolshie soabaki))))", self)
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
            console.log(langTools)
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

.expand-icon {
    z-index: 1;
    position: absolute;
    width: 20px;
    font-size: 36px;
    opacity: 0.6;
    right: 5px;
    bottom: 6px;
    text-align: right;
    transition: 0.2s;
}

.expand-icon:active {
    opacity: 0.2;
}


.expanded.pop-up{
    width: 400px;
    transition: 0.2s;
}

.expanded#formula-editor {
    height: 200px;
    transition: 0.2s;
}

</style>