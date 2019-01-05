<template>
    <div class="create-table">
        <div class="title-container">
            <h2 class="title" v-if="!getUrlParams('table')">Создание таблицы</h2>
            <h2 class="title" v-else>Изменение таблицы</h2>
        </div>
        <div class="wysiwyg">
            <div id="summernote"></div>
            <div class="btns">
                <div>
                    <button class="btn btn-default" @click="onHandleCancel" style="margin-right: 10px">Отмена</button>
                    <button class="btn btn-primary" @click.prevent="onHandleContinue">Продолжить</button>
                </div>
            </div>
        </div>
        <indexed-tooltip :show="showIndexedTooltip" :left="left" :top="top" :rowsData="rowsData"></indexed-tooltip>
    </div>
</template>

<script>
// import 'jquery'
// import 'bootstrap3/dist/js/npm';
// import 'bootstrap3/dist/js/bootstrap';
// import 'summernote/dist/summernote.css'
// import 'summernote/dist/summernote'

import axios from 'axios'

import toggleHeaderInit from '../wysiwyg_modules/toggle-header'
import mergeCellsInit from '../wysiwyg_modules/merge-cells'
import splitH from '../wysiwyg_modules/split-horizontally'
import splitV from '../wysiwyg_modules/split-vertically'
import addCol from '../wysiwyg_modules/add-column'
import addRow from '../wysiwyg_modules/add-row'
import removeCol from '../wysiwyg_modules/remove-column'
import removeRow from '../wysiwyg_modules/remove-row'
import summernoteTranslate from '../wysiwyg_modules/summernote_ru-RU'
import formatFactory from '../utils/formatFactory.js'
import slugify from 'slugify'

import Modal from "../components/Modal.vue";
import IndexedTooltip from "../components/IndexedTooltip.vue";

export default {
    name: "CreateTablePage",
    components: {Modal, IndexedTooltip},
    data () {
        return {
            redips: {},
            showIndexedTooltip: false,
            left: 0,
            top: 0,
            rowsData: []
        }
    },
    computed: {
        getCurrentTable () {
            return this.$store.getters['journalState/getCurrentTable']
        }
    },
    methods: {
        getUrlParams(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        },
        onHandleCancel () {
            $('.note-popover').remove()
            $('.note-editable td').removeAttr('style')
            this.$store.commit('journalState/setCurrentTable', null)
            this.$router.push(`/journal/${this.$store.getters['journalState/getJournalName']}`)
        },
        onHandleContinue () {
            $('.note-popover').remove()
            $('.note-editable td').removeAttr('style')

            let currentHTML = $('#summernote').summernote('code')
            let $html = $('<div>' + currentHTML + '</div>')

            $html.find('table').each(function () {
                let $rows = $(this).find('tbody tr')
                let $thead = $('<thead></thead>')
                $rows.each(function () {
                    let hasAllTh = [...$(this).children()].every(item => $(item).is('th'))

                    if (hasAllTh) {
                        $thead.append($(this).clone())
                        $(this).remove()
                    }
                    else {
                        return false
                    }
                })

                if ($thead.children().length) $(this).prepend($thead)
            })

            currentHTML = $html.html()

            this.$store.commit('journalState/updateCurrentTable',
                {
                    fields: this.getUrlParams('table') ? this.$store.getters['journalState/getTableCells'](this.getUrlParams('table')) : [],
                    html: currentHTML,
                }
            )

            this.$router.push(`/journal/${this.$route.params.journalName}/table/${this.getUrlParams('table') || this.getCurrentTable.name}/edit_data`)
        },
        onImport () {
            let url = window.ELOGS_SERVER + '/import';
            let data = new FormData()
            data.append('data', this.importFile)

            axios.post(url, data).then((response) => {
                $('#summernote').summernote('code', response.data)
                this.isShowImport = false
            })
        },
        replaceAttrs () {
            $('.cell').each(function() {
                // console.log($(this))
                let self = this
                $.each( $(self)[0].attributes, function ( index, attribute ) {
                    if (attribute.name !== 'class') $(self).parent().attr(attribute.name, attribute.value)
                } );
                $(this).remove()
            })
        },
        getRightCell (cell) {
          return $($(cell).closest('tr')[0].cells[$(cell).index() + 1])
        },
        getLeftCell (cell) {
            return $($(cell).closest('tr')[0].cells[$(cell).index() - 1])
        },
        getTopCell (cell) {
            let cellHeight = $(cell).outerHeight()
            let cellWidth = $(cell).outerWidth()
            let coords = cell.getBoundingClientRect()
            let topCell = document.elementFromPoint(coords.left + cellWidth/2, coords.top - cellHeight/2)

            return $(topCell).is('td') || $(topCell).is('th') ? $(topCell) : null
        },
        getBottomCell (cell) {
            let cellHeight = $(cell).outerHeight()
            let cellWidth = $(cell).outerWidth()
            let coords = cell.getBoundingClientRect()
            let bottomCell = document.elementFromPoint(coords.left + cellWidth/2, coords.bottom + cellHeight/2)

            return $(bottomCell).is('td') || $(bottomCell).is('th') ? $(bottomCell) : null
        },
        initListeners () {
            let _this = this
            let indexedTooltipHeight = 50

            $('td').off('DOMSubtreeModified').on("DOMSubtreeModified", function() {
                console.log('DOMSubtreeModified')
                if ($(this).children().length) {
                    setTimeout(() => {
                        if (!$(this).children().is('table')) {
                            console.log('is not table')
                            $(this).html('')
                        }
                    }, 0)
                }
                else $(this).html('')
            });

            $('td, th').on('mousedown', function (e) {
                let $selectedCells = $('th, td').filter(function () {
                    return $(this).attr('style') && $(this).attr('style').includes('background-color: rgb(155, 179, 218)')
                })

                console.log('onmousedown', $selectedCells.length === 1 &&
                    $selectedCells.filter(function () {
                        return $(this).attr('rowspan') && $(this).attr('rowspan') > 1
                    }).length === 1, [...$('th, td')].some(item => {
                    return $(item).attr('style') && $(item).attr('style').includes('background-color: rgb(155, 179, 218)') &&
                        ((_this.getRightCell(item) && _this.getRightCell(item).attr('style') &&
                                _this.getRightCell(item).attr('style').includes('background-color: rgb(155, 179, 218)')) ||
                            (_this.getLeftCell(item) && _this.getLeftCell(item).attr('style') &&
                                _this.getLeftCell(item).attr('style').includes('background-color: rgb(155, 179, 218)')) ||
                            (_this.getTopCell(item) && _this.getTopCell(item).attr('style') &&
                                _this.getTopCell(item).attr('style').includes('background-color: rgb(155, 179, 218)')) ||
                            (_this.getBottomCell(item) && _this.getBottomCell(item).attr('style') &&
                                _this.getBottomCell(item).attr('style').includes('background-color: rgb(155, 179, 218)'))
                        )
                }))

                // merge
                if (
                    [...$('th, td')].some(item => {
                        return $(item).attr('style') && $(item).attr('style').includes('background-color: rgb(155, 179, 218)') &&
                            ((_this.getRightCell(item) && _this.getRightCell(item).attr('style') &&
                                 _this.getRightCell(item).attr('style').includes('background-color: rgb(155, 179, 218)')) ||
                             (_this.getLeftCell(item) && _this.getLeftCell(item).attr('style') &&
                                 _this.getLeftCell(item).attr('style').includes('background-color: rgb(155, 179, 218)')) ||
                             (_this.getTopCell(item) && _this.getTopCell(item).attr('style') &&
                                 _this.getTopCell(item).attr('style').includes('background-color: rgb(155, 179, 218)')) ||
                             (_this.getBottomCell(item) && _this.getBottomCell(item).attr('style') &&
                                 _this.getBottomCell(item).attr('style').includes('background-color: rgb(155, 179, 218)'))
                            )
                    })
                ) {
                    $('.note-custom .note-btn-group.btn-group button').first().css({'border-top-right-radius': '0', 'border-bottom-right-radius': '0'})
                    $('.note-custom .note-btn-group.btn-group').last().css('display', 'block')
                }
                else {
                    $('.note-custom .note-btn-group.btn-group button').first().css({'border-top-right-radius': '3px', 'border-bottom-right-radius': '3px'})
                    $('.note-custom .note-btn-group.btn-group').last().css('display', 'none')
                }

                // split v
                if ((
                        $(e.target).attr('colspan') &&
                        $(e.target).attr('colspan') > 1 &&
                        $(e.target).attr('style').includes('background-color: rgb(155, 179, 218)')
                    ) ||
                    (
                        $selectedCells.length === 1 &&
                        $selectedCells.filter(function () {
                            return $(this).attr('colspan') && $(this).attr('colspan') > 1
                        }).length === 1
                    )
                ) {
                    $('.note-split .note-btn-group.btn-group button').first().css({'border-top-right-radius': '0', 'border-bottom-right-radius': '0'})
                    $('.note-split .note-btn-group.btn-group').last().css('display', 'block')
                    $('.note-split').css('margin-right', '5px')
                }
                else {
                    $('.note-split .note-btn-group.btn-group button').first().css({'border-top-right-radius': '3px', 'border-bottom-right-radius': '3px'})
                    $('.note-split .note-btn-group.btn-group').last().css('display', 'none')
                    $('.note-split').css('margin-right', '0')
                }

                //split h
                if ((
                        $(e.target).attr('rowspan') &&
                        $(e.target).attr('rowspan') > 1 &&
                        $(e.target).attr('style').includes('background-color: rgb(155, 179, 218)')
                    ) ||
                    (
                        $selectedCells.length === 1 &&
                        $selectedCells.filter(function () {
                            return $(this).attr('rowspan') && $(this).attr('rowspan') > 1
                        }).length === 1
                    )
                ) {
                    $('.note-split .note-btn-group.btn-group button').last().css({'border-top-left-radius': '0', 'border-bottom-left-radius': '0'})
                    $('.note-split .note-btn-group.btn-group').first().css('display', 'block')
                }
                else {
                    $('.note-split .note-btn-group.btn-group button').last().css({'border-top-left-radius': '3px', 'border-bottom-left-radius': '3px'})
                    $('.note-split .note-btn-group.btn-group').first().css('display', 'none')
                }

                setTimeout(() => {
                    let closestTable = $(this).closest('table')
                    let tableHasBGCOLOR = [...closestTable.find('th, td')].some(item =>
                        $(item).attr('style') && $(item).attr('style').includes('background-color: rgb(155, 179, 218)')
                    )

                    if (!tableHasBGCOLOR) {
                        $('.note-popover').css({display: 'none'})
                    }

                    $('table').each(function () {
                        $(this)[0].removeAttribute('id')
                    })
                    closestTable.attr('id', 'redipsTable')
                }, 0)
            })

            $('td, th').off('click').on('click', function (e) {
                console.log('show')
                e.stopPropagation();

                let coords = e.target.getBoundingClientRect()

                _this.top = coords.top - indexedTooltipHeight
                _this.left = coords.left
                _this.rowsData = [...$(e.target).parents('tr')]

                let closestRow = $(this).closest('tr')
                let rowHasBGCOLOR = [...closestRow.children()].some(item =>
                    $(item).attr('style') && $(item).attr('style').includes('background-color: rgb(155, 179, 218)')
                )

                if (rowHasBGCOLOR) {
                    _this.showIndexedTooltip = true
                }
                else {
                    _this.showIndexedTooltip = false
                }
            })

            $('.note-editable').on('click', function () {
                _this.showIndexedTooltip = false
            })

            $('.note-editable').on('scroll', function () {
                _this.showIndexedTooltip = false
            })
        },
        redipsInit () {
            let _this = this
            _this.redips.init = function () {
                let rt = REDIPS.table;
                $('td, th').off('mousedown')
                rt.onmousedown('elog-journal-table', true, 'classname');

                rt.color.cell = '#9BB3DA';

                _this.redips.merge = function () {
                    REDIPS.table.merge('h', false);
                    REDIPS.table.merge('v');
                };

                _this.redips.split = function (mode) {
                    REDIPS.table.split(mode);
                };

                _this.redips.row = function (type) {
                    REDIPS.table.row('redipsTable', type);
                };

                _this.redips.column = function (type) {
                    REDIPS.table.column('redipsTable', type);
                };

                _this.redips.ignoreCell = function (cell, type) {
                    REDIPS.table.cell_ignore(cell, type);
                };

                _this.redips.attachCell = function (cell) {
                    REDIPS.table.cell_attach(cell);
                };
            };

            _this.redips.init()
            window.redips = _this.redips
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
        summernoteInit () {
            let _this = this
            console.log('summernoteInit')
            $(document).ready(function() {
                $('#summernote').summernote({
                    lang: 'ru-RU',
                    height: 300,
                    minHeight: null,
                    maxHeight: null,
                    focus: true,
                    toolbar: [
                        ['insert', ['table']],
                        ['style', ['bold', 'italic', 'underline', 'clear']],
                        ['font', ['strikethrough', 'superscript', 'subscript']],
                        ['fontsize', ['fontsize']],
                        ['color', ['color']],
                        ['para', ['style', 'ul', 'ol', 'paragraph']],
                        ['height', ['height']],
                        ['insert', ['link', 'hr']],
                        ['misk', ['undo', 'redo']]
                    ],
                    popover: {
                        table: [
                            ['row', ['addRowPlugin', 'removeRowPlugin']],
                            ['column', ['addColumnPlugin', 'removeColumnPlugin']],
                            ['split', ['splitH', 'splitV']],
                            ['custom', ['cellHeader', 'mergeCells']]
                        ],
                    },
                });


                $('#summernote').on('summernote.change', function (we, contents, $editable) {
                    console.log('summernote\'s content is changed.');
                    let tables = $('.note-editable table')

                    tables.addClass('elog-journal-table')
                    _this.redipsInit()
                    _this.initListeners()

                    $('td, th').each(function () {
                        if ($(this).children().is('table')) {
                            $(this).attr('style', '').addClass('without-redips-handler')
                            _this.redips.ignoreCell('without-redips-handler', 'classname')
                        }
                        else {
                            $(this).removeClass('without-redips-handler')

                            if ($(this)[0].redips) {
                                $(this)[0].redips.selected = false
                            }

                            _this.redips.attachCell($(this)[0])
                        }
                    })

                    // remove '<p><br></p>' inside tables
                    // (summernote creates them when nesting table in table)
                    var uselessParagraphs = document.querySelectorAll('table p'), i;
                    for (i = 0; i < uselessParagraphs.length; ++i) {
                        let p = uselessParagraphs[i];
                        p.parentNode.removeChild(p);
                    }
                })

                $('.note-btn').on('click', function () {
                    _this.initListeners()
                })
            })
        },
        initAll (tableHtml) {
            if ($.summernote) {
                summernoteTranslate();
                toggleHeaderInit();
                mergeCellsInit();
                splitH()
                splitV()
                addCol()
                addRow()
                removeCol()
                removeRow()
                this.summernoteInit()

                setTimeout(() => $('#summernote').summernote('code', tableHtml), 0)
                setTimeout(() => this.replaceAttrs(), 0)
            }
        },
        removeCells (table_html) {
            let refactoredHtml = table_html
            refactoredHtml = refactoredHtml.split('<cell').join('<div class="cell"')
            refactoredHtml = refactoredHtml.split('</cell>').join('</div>')
            return refactoredHtml
        },
    },
    mounted () {
        let tableHtml = this.getCurrentTable ? this.removeCells(this.getCurrentTable.html) : ''

        if (this.getUrlParams('plant') && !this.plant) {
            this.$store.dispatch('journalState/importJournal', {
                plant: this.getUrlParams('plant'),
                journal: this.$route.params.journalName,
                version: this.getUrlParams('version')
            })
                .then((response) => {
                    let journal = response.data
                    journal.tables.map(item => {
                        item.html = this.removeCells(item.html)
                    });
                    this.$store.commit('journalState/setJournal', journal)
                    this.$store.commit('journalState/setJournalPlant', this.getUrlParams('plant'))
                    this.$store.commit('journalState/setCurrentTable', {name: this.getUrlParams('table')})
                    console.log('journal2', this.$store.getters['journalState/getJournal'])
                })
                .then(() => {
                    tableHtml = this.getCurrentTable.html
                    this.title = this.getCurrentTable.title

                    setTimeout(() => this.initAll(tableHtml), 0)
                    // this.initAll(tableHtml)
                })
        }
        else if (this.getUrlParams('table')) {
            this.$store.commit('journalState/setCurrentTable', {name: this.getUrlParams('table')})
            tableHtml = this.getCurrentTable.html
            this.title = this.getCurrentTable.title
            console.log('table3')

            setTimeout(() => this.initAll(tableHtml), 0)
            // this.initAll(tableHtml)
        }
        else setTimeout(() => this.initAll(tableHtml), 0)
        // else this.initAll(tableHtml)
    }
}
</script>

<style lang="scss">
.create-table {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  height: 100%;
  box-sizing: border-box;
}

.title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    margin-bottom: 20px;
}

.create-table .title{
    margin-top: 0;
    margin-bottom: 0;
}
.table-verbose-name > span{
    opacity: 0.6;
    font-size: 18px;
}
.wysiwyg {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
}
.wysiwyg .modal-dialog {
    width: 300px;
}
.wysiwyg .title{
    margin-top: 0;
    margin-bottom: 20px;
}
.btns {
  display: flex;
  justify-content: flex-end;
  margin-top: 0;
  margin-bottom: 20px;
}
.note-popover {
    .note-split {
        margin-right: 0;
    }

    .note-custom {
        margin-left: 5px;
    }
}
.note-toolbar.panel-heading {
    position: relative;
    height: 76px;

    & > .note-insert:first-child {
        height: calc(100% - 10px);
        position: absolute;
        top: 0;
        left: 5px;

        .note-btn-group.btn-group {
            height: 100%;

            button {
                height: 100%;
            }
        }
    }

    & > .note-style {
        position: absolute;
        left: 131px;
    }

    & > .note-font {
        position: absolute;
        left: 59px;
        bottom: 5px;
    }

    & > .note-fontsize {
        position: absolute;
        left: 327px;
    }

    & > .note-color {
        position: absolute;
        left: 269px;
    }

    & > .note-para {
        position: absolute;
        bottom: 5px;
        left: 164px;

        .dropdown-menu {
            height: 274px;
            overflow-y: auto;
        }
    }

    & > .note-height {
        position: absolute;
        left: 383px;
    }

    & > .note-insert {
        position: absolute;
        bottom: 5px;
        left: 333px;
    }

    & > .note-misk {
        position: absolute;
        left: 59px;
    }
}
</style>