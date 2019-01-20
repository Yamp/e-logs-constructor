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
    import colorGenerator from '../utils/colorGenerator.js'
    import {eventBus} from '../main.js'

    var Color = require('color');

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
              firstCell: null,
          }
        },
        watch: {
            selectedFields (value) {
                if (value.length <= 1) {
                    this.firstCell = null
                }
            }
        },
        computed: {
            getCurrentTable () {
                return this.$store.getters['journalState/getCurrentTable']
            }
        },
        methods: {
            handleShiftSelection (clickedCell) {
                let _this = this
                let self = clickedCell

                !_this.firstCell ? _this.firstCell = $(`#${_this.selectedFields[0]}`) : null

                _this.selectedFields.map(item => $(`#${item}`).removeClass('selected'))
                _this.selectedFields = []

                $(self).closest('table').children('tbody').each(function (tbodyIndex) {
                    $(this).children('tr').each(function () {
                        $(this).children('td').each(function () {
                            // Checking necessary area
                            if (
                                $(self).closest('td').index() >= _this.firstCell.closest('td').index() &&
                                $(this).index() <= $(self).closest('td').index() &&
                                $(this).index() >= _this.firstCell.closest('td').index() &&
                                $(self).closest('tr').index() >= _this.firstCell.closest('tr').index() &&
                                $(this).closest('tr').index() <= $(self).closest('tr').index() &&
                                $(this).closest('tr').index() >= _this.firstCell.closest('tr').index() ||
                                $(self).closest('td').index() >= _this.firstCell.closest('td').index() &&
                                $(this).index() <= $(self).closest('td').index() &&
                                $(this).index() >= _this.firstCell.closest('td').index() &&
                                $(self).closest('tr').index() <= _this.firstCell.closest('tr').index() &&
                                $(this).closest('tr').index() >= $(self).closest('tr').index() &&
                                $(this).closest('tr').index() <= _this.firstCell.closest('tr').index() ||
                                $(self).closest('td').index() <= _this.firstCell.closest('td').index() &&
                                $(this).index() >= $(self).closest('td').index() &&
                                $(this).index() <= _this.firstCell.closest('td').index() &&
                                $(self).closest('tr').index() >= _this.firstCell.closest('tr').index() &&
                                $(this).closest('tr').index() <= $(self).closest('tr').index() &&
                                $(this).closest('tr').index() >= _this.firstCell.closest('tr').index() ||
                                $(self).closest('td').index() <= _this.firstCell.closest('td').index() &&
                                $(this).index() >= $(self).closest('td').index() &&
                                $(this).index() <= _this.firstCell.closest('td').index() &&
                                $(self).closest('tr').index() <= _this.firstCell.closest('tr').index() &&
                                $(this).closest('tr').index() >= $(self).closest('tr').index() &&
                                $(this).closest('tr').index() <= _this.firstCell.closest('tr').index()
                            ) {
                                !_this.selectedFields.includes($(this).find('.cell').attr('id')) ?
                                    $(this).find('table').length ?
                                        $(this).find('.cell').each(function () {
                                            _this.selectedFields.push($(this).attr('id'))
                                        })
                                        : _this.selectedFields.push($(this).find('.cell').attr('id'))
                                    : null
                            }
                        })
                    })
                })

                _this.selectedFields.map(item => $(`#${item}`).addClass('selected'))
            },
            handleCellClick (e, cell) {
                e.stopPropagation()

                let _this = this

                if (_this.fieldSelectionMode) return;

                let isCtrlPressed = false
                let isShiftPressed = false

                if (e.metaKey || e.ctrlKey) {
                    isCtrlPressed = true
                }

                if (e.shiftKey) {
                    isShiftPressed = true
                }

                $('th').removeClass('selected')

                if ($(cell).hasClass('selected')) {
                    if (isCtrlPressed) {
                        $(cell).removeClass('selected')
                        _this.selectedFields = _this.selectedFields.filter(item => item !== $(cell).attr('id'))
                    }
                    else if (isShiftPressed) {
                        _this.handleShiftSelection(cell)
                        _this.openPopUp(e, $(cell).attr('id'), 'td')
                    }
                    else {

                        if (_this.selectedFields.length === 1) {
                            $(`.cell`).removeClass('selected')
                            _this.selectedFields = []
                        }
                        else {
                            $(`.cell`).removeClass('selected')
                            _this.selectedFields = []
                            _this.selectedFields.push($(cell).attr('id'))
                            $(cell).addClass('selected')
                        }
                    }
                }
                else if (!$(cell).hasClass('selected')) {
                    if (isCtrlPressed) {
                        _this.selectedFields.push($(cell).attr('id'))
                        _this.selectedFields.map(item => $(`#${item}`).addClass('selected'))
                    }
                    else if (isShiftPressed) {
                        _this.handleShiftSelection(cell)
                    }
                    else {
                        $(`.cell`).removeClass('selected')
                        _this.selectedFields = []
                        _this.selectedFields.push($(cell).attr('id'))
                        $(cell).addClass('selected')
                    }

                    _this.openPopUp(e, $(cell).attr('id'), 'td')
                }

                if (!_this.selectedFields.length) _this.popupDisplay = false
            },
            handleTHClick (e, cell) {
                this.selectedFields = []
                $('.selected').removeClass('selected')

                if (!$(cell).hasClass('selected')) {
                    $(cell).addClass('selected')
                }
                else {
                    $(cell).removeClass('selected')
                }

                if (this.currentCell !== $(cell).attr('id')) {
                    this.openPopUp(e, $(cell).attr('id'), 'th')
                }
            },
            setPopUpListeners () {
                let _this = this

                $('.cell').on('click', function(e) {
                    _this.handleCellClick(e, this)
                })

                $('#editor-content th').on('click', function(e) {
                    _this.handleTHClick(e, this)
                })

                $('.pop-up').on('click', function(e) {
                    e.stopPropagation()
                    _this.popupDisplay = true
                })

                $('#app').on('click', function(e) {
                    _this.popupDisplay = false
                    _this.currentCell = null
                    _this.currentCellTag = null
                    _this.selectedFields = []
                    $('.selected').removeClass('selected')
                })
            },
            openPopUp (e, currentCell, currentCellTag) {
                e.stopPropagation()

                let currentElement

                if (currentCellTag === 'td') {
                    currentElement = $(e.target).hasClass('cell') ? $(e.target) : $(e.target).closest('.cell')
                }
                else if (currentCellTag === 'th') {
                    currentElement = $(e.target).is('th') ? $(e.target) : $(e.target).closest('th')
                }

                let coords = currentElement[0].getBoundingClientRect()
                let scrollTop = $(window).scrollTop()
                let $popUp = $('.pop-up')
                let $app = $('#app')

                let popUpWidth = $popUp.outerWidth() ? $popUp.outerWidth() : 200;
                let appWidth = $app.outerWidth()
                let popUpHeight = $popUp.outerHeight() ? $popUp.outerHeight() : 174;
                let appHeight = $app.outerHeight()
                let inputOffset = 4

                this.popupDisplay = true

                if (coords.left + popUpWidth + 200 >= appWidth) {
                    this.x = coords.right - popUpWidth
                    this.expandDirection = "left"
                }
                else {
                    this.x = coords.left
                    this.expandDirection = "right"
                }

                if (coords.bottom + inputOffset + popUpHeight >= appHeight) {
                    this.y = coords.top - inputOffset - popUpHeight + scrollTop
                }
                else {
                    this.y = coords.bottom + inputOffset + scrollTop
                }

                this.currentCell = currentCell
                this.currentCellTag = currentCellTag
            },
            getCellNodeWithClass (id, fieldName, vRowIndex, rowIndex) {
                let checkedId = id ? `id="${id}"` : ''
                let checkedFieldName = fieldName ? `field-name="${fieldName}"` : ''
                let checkedRowIndex = vRowIndex ? `:row-index="${vRowIndex}"` : rowIndex ? `row-index="${rowIndex}"` : 'row-index="0"'

                return ('<div ' +
                            'class="cell"' +
                            `${checkedId}` +
                            `${checkedFieldName}` +
                            `${checkedRowIndex}` +
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
                        '</div>')
            },
            setCells () {
                let _this = this

                let $editorContent = $('#editor-content')

                $editorContent.find('th').each(function () {
                    $(this).find('br').remove()
                    $(this).removeAttr('style')

                    if (+$(this).attr('colspan') > 1) {
                        $(this).addClass('th-common')
                    }

                    if (!$(this).attr('id')) {
                        let id = shortid.generate()
                        $(this).attr('id', id)
                    }
                })

                $editorContent.find('td').each(function () {
                    let currentCellNode = _this.getCellNodeWithClass(
                        $(this).attr('id'),
                        $(this).attr('field-name'),
                        $(this).attr(':row-index'),
                        $(this).attr('row-index')
                    );

                    [...$(this)[0].attributes].forEach((attr) => {
                        if (!(attr.name === 'rowspan' || attr.name === 'colspan')) {
                            $(this)[0].removeAttribute(attr.name)
                        }
                    })

                    if ($(this).children('table').length) {
                        if (!$(this).children('table td').children('.cell').length) {
                            $(this).children('table td').html(currentCellNode)
                        }
                    }
                    else {
                        if (!$(this).children('.cell').length) {
                            $(this).html(currentCellNode)
                        }
                    }
                })

                $('.cell').each(function (index) {
                    if ($(this).attr('id')) {
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
                    else {
                        let id = shortid.generate()
                        $(this).attr('id', id)

                        if ($(this).attr('field-name')) {
                            _this.cells = _this.cells.map(item => {
                                if (item.name === $(this).attr('field-name')) {
                                    return {...item, cell: id}
                                }
                                else return item
                            })
                        }
                        else {
                            _this.cells.push({cell: id})
                        }
                    }
                })

                let currentFieldsIDs = [...$('.cell')].map(field => $(field).attr('id'))

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
            },
            setAutoNames () {
                let currentCells = this.getCurrentTable.fields

                currentCells = currentCells.map((item, index) => {
                    if (!item.name) {
                        let $currentCell = $(`#${item.cell}`)
                        let cellIndex = $currentCell.closest('td').index()
                        let rowIndex = $currentCell.closest('tr').index()
                        let generatedName = ''
                        let headersTH = [];
                        let maxCells = 0
                        let $TRs = $currentCell.parents('table').children('thead').children('tr')

                        $TRs.each(function (rowindex) {
                            let max = 0;
                            [...$(this)[0].cells].map((header, index) => {
                                max += +$(header).attr('colspan') || 1
                            })
                            max > maxCells ? maxCells = max : null
                        });

                        [...Array($TRs.length).keys()].map(item => {
                            headersTH.push([...Array(maxCells)])
                            headersTH[item].fill(null)
                        })

                        $TRs.each(function (rowindex) {
                            let currentIndex = 0;

                            [...$(this)[0].cells].map((header, index) => {
                                [...Array(+$(header).attr('colspan') || 1).keys()]
                                    .map(col => {
                                        Array(+$(header).attr('rowspan') || 1).fill().map((item, index) => index + rowindex)
                                            .map(row => {
                                                !headersTH[row][currentIndex] ?
                                                    headersTH[row][currentIndex] = $(header).find('.text').text()
                                                    : headersTH[row][currentIndex + 1] = $(header).find('.text').text()
                                            })
                                        currentIndex += 1
                                    })
                            })


                        });

                        headersTH.map((headers, index) => {
                            let currentText = index !== 0 && headers[cellIndex] === headersTH[index - 1][cellIndex] ? '' : headers[cellIndex]

                            if (index !== 0 && currentText && generatedName) generatedName += '_'
                            generatedName += currentText
                        })

                        $currentCell.closest('tr').find('th').each(function (index) {
                            if($(this).index() > cellIndex) return;

                            let currentText = $(this).find('.text').text()
                            if ((index !== 0 || generatedName) && currentText) generatedName += '_'
                            generatedName += currentText
                        })

                        if (generatedName) generatedName += '_' + (rowIndex + 1) + '_' + (cellIndex + 1)

                        if (!generatedName) generatedName = `Ячейка${index + 1}`

                        $currentCell.attr('field-name', generatedName)
                        $currentCell.find('.name-container').text(generatedName)
                        return {...item, name: generatedName}
                    }
                    else return item
                })
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
                    if (_this.getFieldName($(this).attr('id'))){
                        $(this).find('.name-container').text(_this.getFieldName($(this).attr('id')))
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
                if (!this.fieldSelectionMode) {
                    this.addFieldsSelectors()
                }
                else {
                    this.removeFieldsSelectors()
                }
            },
            addColorStyle(color) {
                var css = document.createElement("style");
                let code = color.slice(1, -1)
                let darkenColor = Color(color).darken(0.1).hex()
                css.type = "text/css";
                css.innerHTML =
                    `.color-${code} {background-color: ${color} !important; position: absolute;}\n` +
                    `.color-${code}:hover { background-color: ${darkenColor} !important}`;
                document.body.appendChild(css);
            },
            addFieldsSelectors () {
                this.fieldSelectionMode = true;

                $(".cell").each((i, e) => {
                    let colorCode = $(e).attr("data-selection-color")
                    if (colorCode) {
                        let className = `color-${colorCode}`
                        $(e).addClass(className)
                    }
                })

                $(".cell").addClass('selection-mode').on('click', this.handleSelectionClick)

            },
            removeFieldsSelectors () {
                this.fieldSelectionMode = false;
                $(".cell").each((i, e) => {
                    let colorCode = $(e).attr('data-selection-color')
                    if (colorCode) {
                        let className = `color-${colorCode}`
                        $(e).removeClass(className)
                    }
                })

                $(".cell").removeClass('selection-mode').off('click', this.handleSelectionClick)
            },
            handleSelectionClick (e) {
                let cell = $(e.target).closest(".cell");
                let color = cell.attr('data-selection-color')
                if (!color) {
                    color = colorGenerator.hex()
                    cell.attr('data-selection-color', color.slice(1, -1))
                    this.addColorStyle(color)
                }
                let colorCode = color.slice(1, -1)
                let className = `color-${colorCode}`
                cell.addClass(className)

                let id = cell.attr("id")
                let name = this.$store.getters["journalState/getFieldName"](id);
                eventBus.$emit("insertCellIntoFormula", {field: name, colorCode: colorCode})
            },
            openWizard () {
                this.wizardDisplay = true;   
            },
            closeWizard () {
                this.wizardDisplay = false;
            }

        },
        mounted () {
            this.tableHtml = this.getCurrentTable.html
            this.cells = this.getCurrentTable.fields

            this.$nextTick(() => this.setCells())
            this.$nextTick(() => this.setPopUpListeners())

            eventBus.$on("toggleFieldsSelectors", () => this.toggleFieldsSelectors())
            eventBus.$on("removeFieldsSelectors", () => this.removeFieldsSelectors())
            eventBus.$on("openWizard", this.openWizard)
            eventBus.$on("closeWizard", this.closeWizard)
            eventBus.$on('set-auto-names', () => this.setAutoNames())
        },
        beforeDestroy () {
            eventBus.$off('toggleFieldsSelectors')
            eventBus.$off('removeFieldsSelectors')
            eventBus.$off('openWizard')
            eventBus.$off('closeWizard')
            eventBus.$off('set-auto-names')

            $('.cell').off('click')
            $('#editor-content th').off('click')
            $('.pop-up').off('click')
            $('#app').off('click')
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
</style>
