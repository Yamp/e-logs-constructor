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

                // $('.data-icons-container').click(function(e) {
                //     console.log(e)
                //     e.stopPropagation()
                // })

                $('.cell').click(function(e) {
                    let isCtrlPressed = false
                    console.log(e)

                    if (e.metaKey || e.ctrlKey) {
                        isCtrlPressed = true
                    }

                    $('th').removeClass('selected')

                    if ($(this).hasClass('selected')) {
                        if (isCtrlPressed) {
                            $(this).removeClass('selected')
                            _this.selectedFields = _this.selectedFields.filter(item => item !== $(this).attr('id'))
                        }
                        else {
                            $(`.cell`).removeClass('selected')
                            _this.selectedFields = []
                            _this.selectedFields.push($(this).attr('id'))

                            console.log(_this.selectedFields.length)
                            if (_this.currentCell !== $(this).attr('id')) {
                                $(this).addClass('selected')
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
                            $(this).addClass('selected')
                        }

                        if (_this.currentCell !== $(this).attr('id')) {
                            _this.openPopUp(e, $(this).attr('id'), 'td')
                        }
                    }
                })
                $('#editor-content th').click(function(e) {
                    _this.selectedFields = []
                    $('.selected').removeClass('selected')

                    if (!$(this).hasClass('selected')) {
                        $(this).addClass('selected')
                    }
                    else {
                        $(this).removeClass('selected')
                    }

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
                    $('.selected').removeClass('selected')
                })
            },
            openPopUp (e, currentCell, currentCellTag) {

                let currentElement

                if (currentCellTag === 'td') {
                    currentElement = $(e.target).hasClass('cell') ? $(e.target) : $(e.target).closest('.cell')
                }
                else if (currentCellTag === 'th') {
                    currentElement = $(e.target).is('th') ? $(e.target) : $(e.target).closest('th')
                }

                let coords = currentElement[0].getBoundingClientRect()
                let scrollTop = $(window).scrollTop()

                let popUpWidth = $('.pop-up').outerWidth() ? $('.pop-up').outerWidth() : 200;
                let appWidth = $('#app').outerWidth()
                let popUpHeight = $('.pop-up').outerHeight() ? $('.pop-up').outerHeight() : 174;
                let appHeight = $('#app').outerHeight()
                let inputOffset = 4

                e.stopPropagation()

                console.log(popUpHeight) // need to be fixed

                this.popupDisplay = true

                if (coords.left + popUpWidth + 200 >= appWidth) {
                    // this.x = e.clientX - e.offsetX - popUpWidth + currentElement.outerWidth()
                    this.x = coords.right - popUpWidth
                    this.expandDirection = "left"
                }
                else {
                    // this.x = e.clientX - e.offsetX
                    this.x = coords.left
                    this.expandDirection = "right"
                }

                if (coords.bottom + inputOffset + popUpHeight >= appHeight) {
                    // this.y = e.clientY - popUpHeight - e.offsetY - inputOffset
                    this.y = coords.top - inputOffset - popUpHeight + scrollTop
                }
                else {
                    // this.y = e.clientY - e.offsetY + inputOffset + currentElement.outerHeight()
                    this.y = coords.bottom + inputOffset + scrollTop
                }

                this.currentCell = currentCell
                this.currentCellTag = currentCellTag
            },
            setCells () {
                let _this = this

                let $editorContent = $('#editor-content')

                $editorContent.find('td').each(function () {
                    let cellItem = '<div ' +
                                        'class="cell"' +
                                        `${$(this).attr('id') ? `id="${$(this).attr('id')}"` : ''}` +
                                        `${$(this).attr('field-name') ? `field-name="${$(this).attr('field-name')}"` : ''}` +
                                        `${$(this).attr(':row-index') ?
                                            `:row-index="${$(this).attr(":row-index")}"`
                                            : 'row-index="0"'}` +
                                    '>' +
                                        '<div class="data-icons-container">' +
                                            '<div class="data-icon data-icon-type">' +
                                                '<img src="' + require('../assets/icons/type_icon.svg') + '" />' +
                                            '</div>' +
                                            '<div class="data-icon data-icon-units">' +
                                                '<img src="' + require('../assets/icons/ed_icon.svg') + '" />' +
                                            '</div>' +
                                            '<div class="name-container"></div>' +
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

                $('.cell').each(function (index) {
                    console.log('start')
                    if (!$(this).attr('id')) {
                        let id = shortid.generate()
                        $(this).attr('id', id)
                        if ($(this).attr('field-name')) {
                            console.log('cells', _this.cells)
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
                        console.log('have-id', $(this).attr('id'))
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

                $editorContent.find('th').each(function () {
                    $(this).find('br').remove()
                    $(this)[0].removeAttribute('style')

                    let $text = $(this).find('.text').clone()
                    let $units = $(this).find('.units').clone()

                    if ($units.length) {
                        $(this).find('.units').remove()
                    }

                    let $textdata = $(this).text().split(' ').join('')

                    if (!$text.length && $textdata) {
                        $(this).html(`<span class="text">${$textdata}</span>`)
                    }

                    if ($units.length) {
                        $(this).append($units)
                    }

                    if (+$(this).attr('colspan') > 1) {
                        $(this).addClass('th-common')
                    }

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

                eventBus.$emit('set-has-all-names', this.getCurrentTable.fields.every(item => item.name))

                this.attachCellData()
                console.log('journal', this.$store.getters['journalState/getJournal'])
            },
            setAutoNames () {
                let currentCells = this.getCurrentTable.fields

                currentCells = currentCells.map((item, index) => {
                    if (!item.name) {
                        let $currentCell = $(`#${item.cell}`)
                        console.log($currentCell.closest('td').index())
                        let cellIndex = $currentCell.closest('td').index()
                        let rowIndex = $currentCell.closest('tr').index()
                        let generatedName = ''

                        $currentCell.closest('table').find('thead tr').each(function (index) {
                            let currentText = $($(this)[0].cells[cellIndex]).find('.text').text()
                            if (index !== 0 && currentText && generatedName) generatedName += '_'
                            generatedName += currentText
                        })

                        $currentCell.closest('tr').find('th').each(function (index) {
                            if($(this).index() > cellIndex) return;

                            let currentText = $(this).find('.text').text()
                            if ((index !== 0 || generatedName) && currentText) generatedName += '_'
                            generatedName += currentText
                        })

                        if (generatedName) generatedName += '_' + (rowIndex + 1)

                        if (!generatedName) generatedName = `Ячейка${index + 1}`

                        $currentCell.attr('field-name', generatedName)
                        $currentCell.find('.name-container').text(generatedName)
                        return {...item, name: generatedName}
                    }
                    else return item
                })
                console.log(currentCells)
                this.$store.commit('journalState/updateCurrentTable',
                    {
                        fields: currentCells
                    }
                )

                eventBus.$emit('set-has-all-names', true)
            },
            attachCellData () {
                let _this = this

                $('.cell').each(function () {
                    console.log('before if', _this.getFieldName($(this).attr('id')))
                    if (_this.getFieldName($(this).attr('id'))){
                        $(this).find('.name-container').text(_this.getFieldName($(this).attr('id')))
                        $(this).attr('field-name', _this.getFieldName($(this).attr('id')))
                    }
                    if (_this.getFieldType($(this).attr('id')))
                        $(this).addClass('has-type')

                    if (_this.getFieldUnits($(this).attr('id')))
                        $(this).addClass('has-units')
                })
            },
            getFieldName(cell) {
                return this.$store.getters['journalState/getFieldName'](cell)
            },
            getFieldType(cell) {
                return this.$store.getters['journalState/getFieldType'](cell)
            },
            getFieldUnits(cell) {
                return this.$store.getters['journalState/getFieldUnits'](cell)
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
                    let fieldName = this.$store.getters['journalState/getFieldName'](id)
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
                    let name = this.$store.getters["journalState/getFieldName"](id);
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
            eventBus.$on('set-auto-names', () => this.setAutoNames())
        },
        beforeDestroy () {
            eventBus.$off('toggleFieldsSelectors')
            eventBus.$off('set-auto-names')
            console.log("Editor destoyred")
        }
    }
</script>

<style lang="scss">
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
        align-items: center;
        width: 100%;
        height: 100%;
    }

    .data-icon {
        display: none;
        color: #000;

        &:not(:last-child) {
            margin-right: 4px;
        }

        &:last-child {
            margin-right: 10px;
        }
    }

    &.has-name .name {
        display: block;

        img {
            width: 18px;
        }
    }

    &.has-type .data-icon-type {
        display: block;

        img {
            width: 20px;
        }
    }

    &.has-units .data-icon-units {
        display: block;

        img {
            width: 14px;
        }
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

th {

    .text {
        float: left;
    }

    &.selected {
        background-color: #9BB3DA !important;
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

.units {
    white-space: nowrap;

    &::before {
        content: ", ";
        white-space: pre-line;
    }
}
</style>
