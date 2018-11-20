<template>
    <div class="editor-container" >
        <div id="editor-content" class="editor-body" v-html="tableHtml">
        </div>
        <pop-up :display="display" :x="x" :y="y" :cell="currentCell" :cellTag="currentCellTag" :selectedFields="selectedFields" :expandDirection="expandDirection"/>
    </div>
</template>

<script>
    import shortid from 'shortid'
    import PopUp from './PopUp.vue'
    import formatFactory from '../utils/formatFactory.js'

    export default {
        name: "Editor",
        components: {PopUp},
        data () {
          return {
              cells: [],
              selectedFields: [],
              currentCell: null,
              currentCellTag: null,
              display: false,
              tableHtml: '',
              x: '0',
              y: '0',
              expandDirection: true,
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

                $('.cell').click(function(e) {
                    let isCtrlPressed = false

                    if (e.metaKey || e.ctrlKey) {
                        isCtrlPressed = true
                    }

                    if ($(this).hasClass('selected') && $(e.target).hasClass('cell')) {
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
                    else if (!$(this).hasClass('selected') && $(e.target).hasClass('cell')) {
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
                    _this.display = true
                })
                $('#app').click(function(e) {
                    _this.display = false
                    _this.currentCell = null
                    _this.currentCellTag = null
                    _this.selectedFields = []
                })
            },
            openPopUp (e, currentCell, currentCellTag) {

                let currentElement = $(e.target)

                // if (!currentElement.hasClass('cell')) {
                //     console.log(e)
                //     document.elementFromPoint(e.screenX, e.screenY).click()
                // }

                let popUpWidth = $('.pop-up').outerWidth() ? $('.pop-up').outerWidth() : 200;
                let appWidth = $('#app').outerWidth()
                let popUpHeight = $('.pop-up').outerHeight() ? $('.pop-up').outerHeight() : 424;
                let appHeight = $('#app').outerHeight()
                let inputOffset = 4

                e.stopPropagation()

                this.display = true

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

                $('#editor-content td').each(function () {

                    // _this.$store.commit('journalState/setFieldName',
                    //     {
                    //         name: _this.$route.params.tableName,
                    //         field_name: $(this).attr('field-name'),
                    //         cell: $(this).attr('id'),
                    //     }
                    // )

                    // $(this).attr('field-name', _this.$store.getters['journalState/getCellName'](_this.$route.params.tableName, $(this).attr('id')))
                    
                    // if ($(this).attr('field-name')) {
                    //     _this.$store.commit('journalState/setFieldName',
                    //         {
                    //             name: _this.$route.params.tableName,
                    //             field_name: $(this).attr('field-name'),
                    //             cell: $(this).attr('id'),
                    //         }
                    //     )
                    // }

                    let cellItem = '<div ' +
                                        'class="cell ' +
                                            `${_this.getFieldName($(this).attr('id')) ? 'has-name' : ''}` +
                                            ` ${_this.getFieldType($(this).attr('id')) ? 'has-type' : ''}` + 
                                            ` ${_this.getFieldUnits($(this).attr('id')) ? 'has-units' : ''}` +
                                        '"' +
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
                        $(this)[0].removeAttribute(attr.name)
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
                    if (!$(this).attr('id')) {
                        let id = shortid.generate()
                        $(this).attr('id', id)
                        _this.cells.push({cell: id})
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
                console.log('journal', this.$store.getters['journalState/getJournal'])
            },
            getFieldName(cell) {
                return this.$store.getters['journalState/getFieldName'](this.$route.params.tableName, cell)
            },
            getFieldType(cell) {
                return this.$store.getters['journalState/getFieldType'](this.$route.params.tableName, cell)
            },
            getFieldUnits(cell) {
                return this.$store.getters['journalState/getFieldUnits'](this.$route.params.tableName, cell)
            }
        },
        mounted () {
            console.log('currentTable', this.getCurrentTable)
            this.tableHtml = this.getCurrentTable.html
            this.cells = this.getCurrentTable.fields
            setTimeout(() => this.setCells(), 0)
            setTimeout(() => this.setPopUpListeners(), 0)
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
.cell {
    display: flex;
    position: relative;
    align-items: center;
    height: 100%;
    transition: none;
    box-sizing: border-box;
    padding: 0px 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    .data-icons-container {
        display: flex;
        position: absolute;
        top: 4px;
        left: 4px;
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
.is-repeated {
    outline: 1px solid rgb(245, 108, 108);
}
</style>
