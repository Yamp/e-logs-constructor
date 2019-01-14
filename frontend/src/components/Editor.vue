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
              firstCell: null
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
            setPopUpListeners () {
                let _this = this

                // $('.data-icons-container').click(function(e) {
                //     console.log(e)
                //     e.stopPropagation()
                // })

                $('.cell').click(function(e) {
                    e.stopPropagation()

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

                    if ($(this).hasClass('selected')) {
                        if (isCtrlPressed) {
                            $(this).removeClass('selected')
                            _this.selectedFields = _this.selectedFields.filter(item => item !== $(this).attr('id'))
                        }
                        else if (isShiftPressed) {
                            let self = this

                            !_this.firstCell ? _this.firstCell = $(`#${_this.selectedFields[0]}`) : null

                            _this.selectedFields.map(item => $(`#${item}`).removeClass('selected'))
                            _this.selectedFields = []

                            $(self).closest('table').children('tbody').each(function (tbodyIndex) {
                                $(this).children('tr').each(function () {
                                    $(this).children('td').each(function () {
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

                            _this.openPopUp(e, $(this).attr('id'), 'td')
                        }
                        else {

                            if (_this.selectedFields.length === 1) {
                                $(`.cell`).removeClass('selected')
                                _this.selectedFields = []
                            }
                            else {
                                $(`.cell`).removeClass('selected')
                                _this.selectedFields = []
                                _this.selectedFields.push($(this).attr('id'))
                                $(this).addClass('selected')
                            }
                        }
                    }
                    else if (!$(this).hasClass('selected')) {
                        if (isCtrlPressed) {
                            _this.selectedFields.push($(this).attr('id'))
                            _this.selectedFields.map(item => $(`#${item}`).addClass('selected'))
                        }
                        else if (isShiftPressed) {
                            let self = this

                            !_this.firstCell ? _this.firstCell = $(`#${_this.selectedFields[0]}`) : null

                            _this.selectedFields.map(item => $(`#${item}`).removeClass('selected'))
                            _this.selectedFields = []

                            $(self).closest('table').children('tbody').each(function (tbodyIndex) {
                                $(this).children('tr').each(function () {
                                    $(this).children('td').each(function () {
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
                        }
                        else {
                            $(`.cell`).removeClass('selected')
                            _this.selectedFields = []
                            _this.selectedFields.push($(this).attr('id'))
                            $(this).addClass('selected')
                        }

                        // if (_this.currentCell !== $(this).attr('id')) {
                            _this.openPopUp(e, $(this).attr('id'), 'td')
                        // }
                    }

                    if (!_this.selectedFields.length) _this.popupDisplay = false
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
                if (!this.fieldSelectionMode) {
                    this.addFeildsSelectors()
                }
                else {
                    this.removeFieldsSelectors()
                }
                // this.$compile()
                // this.$forceUpdate()
            },
            addFeildsSelectors () {
                this.fieldSelectionMode = true;

                $(".cell").addClass('selection-mode').on('click', this.handleSelectionClick)

            },
            removeFieldsSelectors () {
                this.fieldSelectionMode = false;

                $(".cell").removeClass('selection-mode').off('click', this.handleSelectionClick)
            },
            handleSelectionClick (e) {
                let cell = $(e.target).closest(".cell");
                let id = cell.attr("id")
                let name = this.$store.getters["journalState/getFieldName"](id);
                eventBus.$emit("insertCellIntoFormula", {field: name})
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
            setTimeout(() => this.setCells(), 0)
            // this.setCells()
            setTimeout(() => this.setPopUpListeners(), 0)
            // this.setPopUpListeners()
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
