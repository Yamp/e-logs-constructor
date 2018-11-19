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

                let popUpWidth = $('.pop-up').outerWidth() ? $('.pop-up').outerWidth() : 200;
                let appWidth = $('#app').outerWidth()
                let popUpHeight = $('.pop-up').outerHeight() ? $('.pop-up').outerHeight() : 424;
                let appHeight = $('#app').outerHeight()
                let inputOffset = 4

                let _this = this

                $('.cell').click(function(e) {
                    let currentElement = $(e.target)
                    
                    if ($(this).hasClass('selected') && currentElement.hasClass('cell')) {
                        $(this).removeClass('selected')
                        _this.selectedFields = _this.selectedFields.filter(item => item !== $(this).attr('id'))
                    }
                    else if (!$(this).hasClass('selected') && currentElement.hasClass('cell')) {
                        $(this).addClass('selected')
                        _this.selectedFields.push($(this).attr('id'))
                        e.stopPropagation()
                        
                        _this.display = true

                        if (e.clientX + popUpWidth + 200 >= appWidth) {
                            _this.x = e.clientX - e.offsetX - popUpWidth + currentElement.outerWidth()
                            _this.expandDirection = "left"
                        }
                        else {
                            _this.x = e.clientX - e.offsetX
                            _this.expandDirection = "right"
                        }

                        if (e.clientY - e.offsetY + popUpHeight + currentElement.outerHeight() >= appHeight) {
                            _this.y = e.clientY - popUpHeight - e.offsetY - inputOffset
                        }
                        else {
                            _this.y = e.clientY - e.offsetY + inputOffset + currentElement.outerHeight()
                        }

                        _this.currentCell = $(this).attr('id')
                        _this.currentCellTag = 'td'
                    }
                })
                $('#editor-content th').click(function(e) {
                    e.stopPropagation()
                    _this.selectedFields = []
                    $('.selected').removeClass('selected')
                    _this.display = true
                    if (e.clientX + $('.pop-up').outerWidth() >= $('#app').outerWidth()) {
                        _this.x = e.clientX - $('.pop-up').outerWidth()
                    }
                    else _this.x = e.clientX
                    _this.y = e.clientY
                    _this.currentCell = $(this).attr('id')
                    _this.currentCellTag = 'th'
                })
                $('.pop-up').click(function(e) {
                    e.stopPropagation()
                    _this.display = true
                })
                $('#app').click(function(e) {
                    _this.display = false
                    _this.currentCell = null
                    _this.currentCellTag = null
                })
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

                    let cellItem = `<div 
                                        class="cell" 
                                        ${$(this).attr('id') ? `id="${$(this).attr('id')}"` : ''}
                                        field-name="${$(this).attr('field-name') ? $(this).attr('field-name') : ''}" 
                                        ${$(this).attr('row-index') ? `row-index="${$(this).attr("row-index")}"` : $(this).attr(':row-index') ? `:row-index="${$(this).attr(":row-index")}"` : 'row-index="0"'}
                                    >
                                        <div class='data-icons-container'>
                                            <div class='data-icon name'>
                                                <i class="fas fa-font"></i>
                                            </div>
                                            <div class='data-icon type'>
                                                <i class="fas fa-sliders-h"></i>
                                            </div>
                                            <div class='data-icon units'>
                                                <i class="fas fa-pencil-ruler"></i>
                                            </div>
                                        </div>
                                    </div>`
                    
                    $(this)[0].removeAttribute('id')
                    $(this)[0].removeAttribute('field-name')
                    $(this)[0].removeAttribute('row-index')
                    $(this)[0].removeAttribute(':row-index')

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
                    console.log('a')
                    if (!$(this).attr('id')) {
                        console.log('b')
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

                // this.$store.commit('journalState/setTable',
                //     {
                //         name: _this.$route.params.tableName,
                //         fields: _this.cells,
                //         recoveryFields: JSON.parse(JSON.stringify(_this.cells))
                //     }
                // )
                console.log('journal', this.$store.getters['journalState/getJournal'])
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
