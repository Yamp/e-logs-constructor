<template>
    <div class="create-table">
        <div class="title-container">
            <h2 class="title" v-if="!getUrlParams('table')">Создание таблицы</h2>
            <h2 class="title" v-else>Изменение таблицы</h2>
        </div>
        <div class="wysiwyg">
            <div id="summernote"></div>
            <div class="btns">
                <button class="btn btn-default" @click="isShowImport = true" style="margin-right: 14px">Загрузить из файла</button>
                <div>
                    <button class="btn btn-default" @click="onHandleCancel" style="margin-right: 10px">Отмена</button>
                    <button class="btn btn-primary" @click.prevent="onHandleContinue">Продолжить</button>
                </div>
            </div>
            <modal v-show="isShowImport" @close="isShowImport = false">
                <div>
                    <p class="modal-title">Выберите файл для загрузки</p>
                    <div class="modal-form">
                        <input 
                            accept="text/html, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.openxmlformats-officedocument.wordprocessingml.document" 
                            type="file" 
                            value="Обзор" 
                            @change="(e) => {importFile = e.target.files[0]}"
                        />
                        <button class="btn btn-primary modal-btn" @click="onImport">Загрузить</button>
                    </div>
                </div>
            </modal>
        </div>
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
import formatFactory from '../utils/formatFactory.js'
import slugify from 'slugify'

import Modal from "../components/Modal.vue";

export default {
    name: "CreateTablePage",
    components: {Modal},
    data () {
        return {
            isShowImport: false,
            importFile: null,
            redips: {},
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
            $('.note-popover').css({display: 'none'})
            $('.note-editable td').removeAttr('style')
            this.$store.commit('journalState/setCurrentTable', null)
            this.$router.push(`/journal/${this.$store.getters['journalState/getJournalName']}`)
        },
        onHandleContinue () {
            $('.note-popover').css({display: 'none'})
            $('.note-editable td').removeAttr('style')

            let currentHTML = $('#summernote').summernote('code')
            let $html = $('<div>' + currentHTML + '</div>')

            $html.find('table').each(function () {
                let $firstRow = $(this).find('tbody tr:first-child')
                let hasAllTh = [...$firstRow.children()].every(item => $(item).is('th'))

                if (hasAllTh) {
                    let $newFirstRow = $('<thead></thead>').append($firstRow.clone())

                    $(this).prepend($newFirstRow)
                    $firstRow.remove()
                }
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
        redipsInit () {
            let _this = this
            _this.redips.init = function () {
                let rt = REDIPS.table;
                rt.onmousedown('redipsTable', true);

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
            };
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
                    height: 300,
                    minHeight: null,
                    maxHeight: null,
                    focus: true,
                    toolbar: [
                        ['style', ['bold', 'italic', 'underline', 'clear']],
                        ['font', ['strikethrough', 'superscript', 'subscript']],
                        ['fontsize', ['fontsize']],
                        ['color', ['color']],
                        ['para', ['ul', 'ol', 'paragraph']],
                        ['height', ['height']],
                        ['insert', ['table', 'link', 'hr']],
                        ['misk', ['undo', 'redo']],
                        ['view', ['fullscreen', 'codeview']]
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
                    let table = $('.note-editable table:first')
                    let tables = $('.note-editable table')

                    table.attr('id', 'redipsTable')

                    if (tables.length) {
                        tables.addClass('elog-journal-table')

                        $('table').on('click', function (e) {
                            $('table').each(function () {
                                $(this)[0].removeAttribute('id')
                            })
                            $(this).attr('id', 'redipsTable')
                        })

                        _this.redips.init()
                    }

                    // remove '<p><br></p>' inside tables
                    // (summernote creates them when nesting table in table)
                    var uselessParagraphs = document.querySelectorAll('table p'), i;
                    for (i = 0; i < uselessParagraphs.length; ++i) {
                        let p = uselessParagraphs[i];
                        p.parentNode.removeChild(p);
                    }
                });
            })
        },
        initAll (tableHtml) {
            this.redipsInit()
            if ($.summernote) {
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
        let tableHtml = ''

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
                })
        }
        else if (this.getUrlParams('table')) {
            this.$store.commit('journalState/setCurrentTable', {name: this.getUrlParams('table')})
            tableHtml = this.getCurrentTable.html
            this.title = this.getCurrentTable.title
            console.log('table3')

            setTimeout(() => this.initAll(tableHtml), 0)
        }
        else setTimeout(() => this.initAll(tableHtml), 0)
    }
}
</script>

<style scoped>
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
  justify-content: space-between;
  margin-top: 0;
}
.modal-title {
  margin-bottom: 20px;
  font-size: 20px;
}
.modal-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
}
.modal-btn {
  margin-left: 10px;
}
</style>