<template>
    <div v-bind:class="[{'expanded': expanded}, 'pop-up']" id="pop-up" v-bind:style="{display: display, left: x + 'px', top: y + 'px', transition: '0.2s'}">
        <div id="test">
            
        </div>
        <div class="form-group">
            <input type="text" id="name" class="form-control" v-model="fieldName" placeholder="Имя" @input="(value) => onHandleChange('fieldName', value)">
        </div>
        <template v-show="cellTag === 'td'">
            <div class="form-group">
                <input type="text" id="minValue" class="form-control" v-model="minValue" placeholder="Минимальное значение" @input="(value) => onHandleChange('minValue', value)">
            </div>
            <div class="form-group">
                <input type="text" id="maxValue" class="form-control" v-model="maxValue" placeholder="Максимальное значение" @input="(value) => onHandleChange('maxValue', value)">
            </div>
            <div class="form-group">
                <select required id="type" class="form-control" v-model="type" @change="(value) => onHandleChange('type', value)">
                    <option value="" selected disabled>Тип ячейки</option>
                    <option value="text">Текст</option>
                    <option value="number">Число</option>
                    <option value="datalist">Список</option>
                    <option value="date">Дата</option>
                    <option value="time">Время</option>
                    <option value="datetime">Дата со временем</option>
                    <option value="formula">Формула</option>
                </select>
            </div>
            <div class="form-group" v-show="type === 'formula'">
                <img v-if="!expanded" src="../assets/expand.svg" class="expand-icon" @click="expandEditor">
                <img v-if="expanded" src="../assets/compress.svg" class="expand-icon" @click="compressEditor">

                <div id="formula-editor" :class="[{'expanded': expanded}, 'form-control', 'ace-editor', 'ace_editor', 'ace-xcode']">
                   
                </div>
<!--                 <input type="text" id="formula" class="form-control" v-model="formula" placeholder="Введите формулу" @input="(value) => onHandleChange('formula', value)"> -->
            </div>
            <div class="form-group">
                <input type="text" id="units" class="form-control" v-model="units" placeholder="Единицы измерения" @input="(value) => onHandleChange('units', value)">
            </div>
        </template>
    </div>
</template>

<script>
    import * as ace from 'brace';
    import 'brace/mode/javascript';
    import 'brace/mode/vbscript'
    import 'brace/theme/xcode';
    export default {
        name: "PopUp",
        props: ['display', 'x', 'y', 'cell', 'cellTag', 'selectedCells', 'expandDirection'],
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
              if (value && this.cellTag === 'td' && this.selectedCells.length === 1) {
                  this.fieldName = $(`#${this.cell}`).attr('field-name')
                  this.minValue = this.$store.getters['journalState/getCellMinValue'](this.$route.params.tableName, this.cell)
                  this.maxValue = this.$store.getters['journalState/getCellMaxValue'](this.$route.params.tableName, this.cell)
                  this.type = this.$store.getters['journalState/getCellType'](this.$route.params.tableName, this.cell)
                  this.units = this.$store.getters['journalState/getCellUnits'](this.$route.params.tableName, this.cell)
                  console.log('getter', this.$store.getters['journalState/getFormula'](this.$route.params.tableName, this.cell))
                  this.formula = this.$store.getters['journalState/getFormula'](this.$route.params.tableName, this.cell)
                  console.log('formula', this.formula)
              }
              else if (value && this.cellTag === 'th') {
                  this.fieldName = $(`#${this.cell}`).text()
                  this.minValue = ''
                  this.maxValue = ''
                  this.type = ''
                  this.units = ''
              }
              else {
                  this.fieldName = ''
                  this.minValue = ''
                  this.maxValue = ''
                  this.type = ''
                  this.units = ''
              }

              $('#name input').val(this.fieldName)
              $('#minValue input').val(this.minValue)
              $('#maxValue input').val(this.maxValue)
              $('#type input').val(this.type)
              $('#units input').val(this.units)
          }
        },
        watch: {
            display: (newValue, oldValue) => {
                if (newValue === "none") {
                    expanded = false
                }
            }
        },
        methods: {
            onHandleChange (data, input) {
                console.log("onhandlechange")
                if (data === 'fieldName') {
                    this.selectedCells.map(item => {
                        $(item).attr('field-name', input.target.value)
                    })
                    if (this.cellTag === 'th') {
                        $(`#${this.cell}`).text(input.target.value)
                    }
                    else {
                        this.selectedCells.map(item => {
                            $(item).text(input.target.value)
                        })
                    }
                }
                console.log(data, input)
                if (data === 'type') {
                    this.compressEditor()
                }

                if (this.cellTag === 'td') {
                    this.$store.commit('journalState/setFields',
                        {
                            name: this.$route.params.tableName,
                            fields: {
                                field_name: this.fieldName,
                                cells: this.selectedCells,
                                min_value: this.minValue,
                                max_value: this.maxValue,
                                type: this.type,
                                units: this.units,
                                formula: this.editor.getValue()
                            }
                        }
                    )
                }
                console.log(this.$store.getters['journalState/getCellMaxValue'](this.$route.params.tableName, this.cell))
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
                // wrap: true,
            });
            this.editor.on("change", (e) => {
                this.onHandleChange('formula', e)
            })
        }
    }
</script>

<style scoped>
.pop-up {
    display: none;
    position: absolute;
    width: 200px;
    border: 1px solid rgba(0,0,0,0.4);
    padding: 10px;
    border-radius: 4px;
    background-color: #fff;
    transition: 0.2s;
}
.form-group {
    position: relative;
    margin-bottom: 15px;
}
.form-group select:invalid {
    color: #999;
}
.form-group:last-child {
    margin-bottom: 0;
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