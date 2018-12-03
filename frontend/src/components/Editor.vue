<template>
    <div class="editor-container" >
        <div id="editor-content" class="editor-body" v-html="tableHtml">
        </div>
        <pop-up :display="popupDisplay" :x="x" :y="y" :cell="currentCell" :cellTag="currentCellTag" :selectedFields="selectedFields" :expandDirection="expandDirection"/>
        <formula-wizard :display="wizardDisplay"></formula-wizard>
    </div>
</template>


<script>
    import shortid from 'shortid'
    import PopUp from './PopUp.vue'
    import FormulaWizard from './FormulaWizard.vue'
    import formatFactory from '../utils/formatFactory.js'
    import {eventBus} from '../main.js'
    import toggleHeader from '../wysiwyg_modules/toggle-header';

    export default {
        name: "Editor",
        components: {PopUp, FormulaWizard},
        data () {
          return {
              cells: [],
              selectedFields: [],
              currentCell: null,
              currentCellTag: null,
              popupDisplay: false,
              wizardDisplay: false,
              tableHtml: '',
              x: '0',
              y: '0',
              expandDirection: true,
              fieldSelectionMode: false,
          }
        },
        computed: {
            getCurrentTable () {
                return this.$store.getters['journalState/getCurrentTable']
            }
        },
        methods: {
            setPopUpListeners () {
                let _this = this

                $('.data-icon').click(function(e) {
                    console.log(e)
                    e.stopPropagation()
                    // document.elementFromPoint(e.screenX+20, e.screenY).click()
                })

                $('.cell').click(function(e) {
                    let isCtrlPressed = false
                    console.log(e)

                    if (e.metaKey || e.ctrlKey) {
                        isCtrlPressed = true
                    }

                    if ($(this).hasClass('selected')) {
                        if (isCtrlPressed) {
                            $(this).removeClass('selected')
                            _this.selectedFields = _this.selectedFields.filter(item => item !== $(this).attr('id'))
                        }
                        else {
                            $(`.cell`).removeClass('selected')
                            _this.selectedFields = []
                            _this.selectedFields.push($(this).attr('id'))

                            if (_this.currentCell !== $(this).attr('id')) {
                                _this.openPopUp(e, $(this).attr('id'), 'td')
                            }
                        }
                    }
                    else if (!$(this).hasClass('selected')) {
                        if (isCtrlPressed) {
                            _this.selectedFields.push($(this).attr('id'))
                            _this.selectedFields.map(item => $(`#${item}`).addClass('selected'))
                        }
                        else {
                            $(`.cell`).removeClass('selected')
                            _this.selectedFields = []
                            _this.selectedFields.push($(this).attr('id'))
                        }

                        if (_this.currentCell !== $(this).attr('id')) {
                            _this.openPopUp(e, $(this).attr('id'), 'td')
                        }
                    }
                })
                $('#editor-content th').click(function(e) {
                    _this.selectedFields = []
                    $('.selected').removeClass('selected')

                    if (_this.currentCell !== $(this).attr('id')) {
                        _this.openPopUp(e, $(this).attr('id'), 'th')
                    }
                })
                $('.pop-up').click(function(e) {
                    e.stopPropagation()
                    _this.popupDisplay = true
                })
                $('#app').click(function(e) {
                    _this.popupDisplay = false
                    _this.currentCell = null
                    _this.currentCellTag = null
                    _this.selectedFields = []
                })
            },
            openPopUp (e, currentCell, currentCellTag) {

                let currentElement = $(e.target)

                let popUpWidth = $('.pop-up').outerWidth() ? $('.pop-up').outerWidth() : 200;
                let appWidth = $('#app').outerWidth()
                let popUpHeight = $('.pop-up').outerHeight() ? $('.pop-up').outerHeight() : 424;
                let appHeight = $('#app').outerHeight()
                let inputOffset = 4

                e.stopPropagation()

                this.popupDisplay = true

                if (e.clientX + popUpWidth + 200 >= appWidth) {
                    this.x = e.clientX - e.offsetX - popUpWidth + currentElement.outerWidth()
                    this.expandDirection = "left"
                }
                else {
                    this.x = e.clientX - e.offsetX
                    this.expandDirection = "right"
                }

                if (e.clientY - e.offsetY + popUpHeight + currentElement.outerHeight() >= appHeight) {
                    this.y = e.clientY - popUpHeight - e.offsetY - inputOffset
                }
                else {
                    this.y = e.clientY - e.offsetY + inputOffset + currentElement.outerHeight()
                }

                this.currentCell = currentCell
                this.currentCellTag = currentCellTag
            },
            setCells () {
                let _this = this

                let $editorContent = $('#editor-content')

                $editorContent.find('th').each(function () {
                    $(this)[0].removeAttribute('style')
                })

                $editorContent.find('td').each(function () {
                    let cellItem = '<div ' +
                                        'class="cell"' +
                                        `${$(this).attr('id') ? `id="${$(this).attr('id')}"` : ''}` +
                                        `${$(this).attr('field-name') ? `field-name="${$(this).attr('field-name')}"` : ''}` +
                                        `${$(this).attr('row-index') ? 
                                            `row-index="${$(this).attr("row-index")}"` 
                                            : $(this).attr(':row-index') ? 
                                                `:row-index="${$(this).attr(":row-index")}"` 
                                                : 'row-index="0"'}` +
                                    '>' +
                                        '<div class="data-icons-container">' +
                                            '<div class="data-icon name">' +
                                                '<i class="fas fa-font"></i>' +
                                            '</div>' +
                                            '<div class="data-icon type">' +
                                                '<i class="fas fa-sliders-h"></i>' +
                                            '</div>' +
                                            '<div class="data-icon units">' + 
                                                '<i class="fas fa-pencil-ruler"></i>' +
                                            '</div>' +
                                        '</div>' +
                                    '</div>';


                    [...$(this)[0].attributes].forEach((attr) => {
                        if (!(attr.name === 'rowspan' || attr.name === 'colspan')) {
                            $(this)[0].removeAttribute(attr.name)
                        }
                    })

                    if ($(this).children('table').length) {
                        if (!$(this).children('table td').children('.cell').length) {
                            $(this).children('table td').html(cellItem)
                        }
                    }
                    else {
                        if (!$(this).children('.cell').length) {
                            $(this).html(cellItem)
                        }
                    }
                })

                $('.cell').each(function () {
                    console.log('start')
                    if (!$(this).attr('id')) {
                        let id = shortid.generate()
                        $(this).attr('id', id)
                        if ($(this).attr('field-name')) {
                            _this.cells = _this.cells.map(item => {
                                if (item.name === $(this).attr('field-name')) {
                                    return {...item, cell: $(this).attr('id')}
                                }
                                else return item
                            })
                        }
                        else {
                            _this.cells.push({cell: id})
                        }
                    }
                    else {
                        console.log('not-have-id')
                        if (_this.getFieldName($(this).attr('id')))
                            $(this).addClass('has-name')
                        else
                            $(this).removeClass('has-name')

                        if (_this.getFieldType($(this).attr('id')))
                            $(this).addClass('has-type')
                        else
                            $(this).removeClass('has-type')

                        if (_this.getFieldUnits($(this).attr('id')))
                            $(this).addClass('has-units')
                        else
                            $(this).removeClass('has-units')
                    }
                })
                $('#editor-content th').each(function () {
                    if (!$(this).attr('id')) {
                        let id = shortid.generate()
                        $(this).attr('id', id)
                    }
                })

                let currentFieldsIDs = $('.cell').toArray().map(field => $(field).attr('id'))

                let redundantFields = this.cells.filter(item => !currentFieldsIDs.includes(item.cell))

                redundantFields.map(field => {
                    this.cells = this.cells.filter(item => item.cell !== field.cell)
                })

                this.$store.commit('journalState/updateCurrentTable',
                    {
                        fields: this.cells,
                        html: formatFactory($('#editor-content').html())
                    }
                )

                this.attachDataIcons()
                console.log('journal', this.$store.getters['journalState/getJournal'])
            },
            attachDataIcons () {
                let _this = this

                $('.cell').each(function () {
                    if (_this.getFieldName($(this).attr('id')))
                        $(this).addClass('has-name')

                    if (_this.getFieldType($(this).attr('id')))
                        $(this).addClass('has-type')

                    if (_this.getFieldUnits($(this).attr('id')))
                        $(this).addClass('has-units')
                })
            },
            getFieldName(cell) {
                return this.$store.getters['journalState/getFieldName'](this.$route.params.tableName, cell)
            },
            getFieldType(cell) {
                return this.$store.getters['journalState/getFieldType'](this.$route.params.tableName, cell)
            },
            getFieldUnits(cell) {
                return this.$store.getters['journalState/getFieldUnits'](this.$route.params.tableName, cell)
            },
            toggleFieldsSelectors () {
                console.log(eventBus)
                console.log("ya ya hiunya");
                if (!this.fieldSelectionMode) {
                    console.log('addddddddddddd')
                    this.addFeildsSelectors()
                }
                else {
                    this.removeFieldsSelectors()
                }
                // this.$compile()
                // this.$forceUpdate()
                console.log('pisadadadadadadad');
            },
            addFeildsSelectors () {
                this.fieldSelectionMode = true;
                for (var elem of $(".cell")) {
                    let id = $(elem).attr("id");
                    let fieldName = this.$store.getters['journalState/getFieldName'](this.$route.params.tableName, id)
                    console.log(fieldName, id)
                    let fieldSelectorElement = `<div class='field-selector'>${fieldName}</div>`
                    if (fieldName) {
                        $(elem).find(".data-icons-container").append(fieldSelectorElement);
                    }
                }
                $('.field-selector').on("click", (e) => {
                    e.stopPropagation();
                    let cell = $(e.target).parents(".cell");
                    let id = cell.attr("id")
                    let name = this.$store.getters["journalState/getFieldName"](this.$route.params.tableName, id);
                    eventBus.$emit("insertCellIntoFormula", {field: name})
                })
            },
            removeFieldsSelectors () {
                this.fieldSelectionMode = false;
                $('.field-selector').remove()
            },
            openWizard () {
                this.wizardDisplay = true;   
            },
            closeWizard () {
                this.wizardDisplay = false;
            }

        },
        mounted () {
            console.log(this._compile)
            console.log('currentTable', this.getCurrentTable)
            this.tableHtml = this.getCurrentTable.html
            this.cells = this.getCurrentTable.fields
            setTimeout(() => this.setCells(), 0)
            setTimeout(() => this.setPopUpListeners(), 0)
            eventBus.$on("toggleFieldsSelectors", () => this.toggleFieldsSelectors())
            eventBus.$on("removeFieldsSelectors", () => this.removeFieldsSelectors())
            eventBus.$on("openWizard", this.openWizard)
            eventBus.$on("closeWizard", this.closeWizard)
        },
        beforeDestroy () {
            eventBus.$off('toggleFieldsSelectors')
            console.log("Editor destoyred")
        }
    }
</script>

<style lang="scss">
.editor-container {

}
.editor-header {
    padding: 10px 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12),0 1px 1px 1px rgba(0,0,0,0.16);
}
.editor-body {
    height: auto;
    padding: 16px 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12),0 1px 1px 1px rgba(0,0,0,0.16);
    overflow-x: auto;
}
.editor-body table input {
    width: 100%;
    box-sizing: border-box;
    padding: 6px;
    border: none;
    outline: none;
}
.editor-body table th input {
    background-color: #eaeaea;
}
.editor-body table td input {
    background-color: #ffffff;
}
table {
    width: 100%;
    border-collapse: collapse;
}

th table, td table {
    margin-bottom: 0 !important;
}

.cell {
    display: flex;
    position: relative;
    align-items: center;
    height: 100%;
    transition: none;
    box-sizing: border-box;
    padding: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    .data-icons-container {
        display: flex;
        width: 100%;
        height: 100%;
    }

    .data-icon {
        display: none;

        &:not(:last-child) {
            margin-right: 4px;
        }
    }

    &.has-name .name {
        display: block;
    }

    &.has-type .type {
        display: block;
    }

    &.has-units .units {
        display: block;
    }

    &:hover {
        cursor: pointer;
    }

    &.selected {
        background-color: #9BB3DA;

        &:hover {
            background-color: #9BB3DA;
        }
    }
}
table td {
    padding: 0 !important;
    border: 1px solid #a9a9a9;

    // .cell:hover {
        // background-color: #f9f9f9;
    // }
}
table th {
    padding: 0 !important;
    border: 1px solid #a9a9a9;
    background-color: #eaeaea;

    &:hover {
        background-color: #e3e3e3;
        cursor: pointer;
    }
}
.is-repeated, .is-empty {
    outline: 1px solid rgb(245, 108, 108);
}

.field-selector {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #007DB4;
    color: white;
    border-radius: 5px;
    font-weight: 700;
    text-align: center;
    padding-top: 2px;
    opacity: 0.8;
    height: 100%;
}
.field-selector > span {
    width: 100%;
}


.field-selector:active {
    opacity: 1;
}

.field-selector:hover {
    cursor: pointer;
}

td, th {
    min-width: 20px;
}
</style>
