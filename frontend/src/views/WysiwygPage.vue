<template>
  <div class="wysiwyg">
      <h2 class="title">Создание структуры таблицы</h2>
      <div v-if="!getRepeatableRow" id="summernote"></div>
      <div v-if="getRepeatableRow" id="repeatableSummernote"></div>
      <div class="btns">
          <button class="btn btn-secondary" @click="onHandleBack" style="margin-right: 14px">Назад</button>
          <button class="btn btn-success" @click="onFormatHtml" style="margin-right: 14px">Formate html</button>
          <button class="btn btn-primary" @click.prevent="onHandleContinue" type="submit">Продолжить</button>
      </div>
  </div>
</template>

<script>
// import 'jquery'
// import 'bootstrap3/dist/js/npm';
// import 'bootstrap3/dist/js/bootstrap';
// import 'summernote/dist/summernote.css'
// import 'summernote/dist/summernote'

import toggleHeaderInit from '../wysiwyg_modules/toggle-header'
import mergeCellsInit from '../wysiwyg_modules/merge-cells'
import splitH from '../wysiwyg_modules/split-horizontally'
import splitV from '../wysiwyg_modules/split-vertically'
import addCol from '../wysiwyg_modules/add-column'
import addRow from '../wysiwyg_modules/add-row'
import removeCol from '../wysiwyg_modules/remove-column'
import removeRow from '../wysiwyg_modules/remove-row'
import formatFactory from '../utils/formatFactory.js'
export default {
  name: 'WysiwygPage',
  data () {
    return {
        redips: {},
        repeatableRowDefaultHTML:
            `<table class="table table-bordered">
                <tbody>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>
                            <br>
                        </td>
                        <td>
                            <br>
                        </td>
                        <td>
                            <br>
                        </td>
                        <td>
                            <br>
                        </td>
                        <td>
                            <br>
                        </td>
                        <td>
                            <br>
                        </td>
                    </tr>
                </tbody>
            </table>`
    }
  },
  computed: {
    getRepeatableRow () {
        return this.$store.getters['journalState/getTableRepeatableRow'](this.$route.params.tableName)
    }
  },
  methods: {
      onHandleBack () {
        this.$router.back()
      },
      onHandleContinue () {
        this.$store.commit('journalState/setTable',
            {
                tableName: this.$route.params.tableName,
                data: {
                    html: this.getRepeatableRow ? $('#repeatableSummernote').summernote('code') : $('#summernote').summernote('code')
                }
            }
        );
        this.$router.push(`/journal/${this.$route.params.journalName}/table/${this.$route.params.tableName}/edit_data`)
      },
      onFormatHtml () {
          if (this.getRepeatableRow) {
              let code = $('#repeatableSummernote').summernote('code');
              let formattedCode = formatFactory(code);
              $('#repeatableSummernote').summernote('code', formattedCode);
          }
          else {
              let code = $('#summernote').summernote('code');
              let formattedCode = formatFactory(code);
              $('#summernote').summernote('code', formattedCode);
          }
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
      }
  },
  mounted () {
      let _this = this
      $(document).ready(function() {
          _this.redipsInit()
          toggleHeaderInit();
          mergeCellsInit();
          splitH()
          splitV()
          addCol()
          addRow()
          removeCol()
          removeRow()
          if (_this.getRepeatableRow) {
              $('#repeatableSummernote').summernote({
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
                      ['insert', ['link', 'hr']],
                      ['misk', ['undo', 'redo']],
                      ['view', ['fullscreen', 'codeview']]
                  ],
                  popover: {
                      table: [
                          ['add', ['addColumnPlugin']],
                          ['delete', ['removeColumnPlugin']],
                          ['custom', ['cellHeader']]
                      ],
                  },

              });
              $('#repeatableSummernote').on('summernote.change', function(we, contents, $editable) {
                  console.log('summernote\'s content is changed.');

                  let table = $('.note-editable table:first')
                  if (table.length) {
                      table.attr('id', 'redipsTable')
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

              $('#repeatableSummernote').summernote('code', _this.repeatableRowDefaultHTML)
          }
          else {
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
                          ['add', ['addColumnPlugin', 'addRowPlugin']],
                          ['delete', ['removeColumnPlugin', 'removeRowPlugin']],
                          ['split', ['splitH', 'splitV']],
                          ['custom', ['cellHeader', 'mergeCells']]
                      ],
                  },

              });
              $('#summernote').on('summernote.change', function(we, contents, $editable) {
                  console.log('summernote\'s content is changed.');

                  let table = $('.note-editable table:first')
                  if (table.length) {
                      table.attr('id', 'redipsTable')
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
          }
      });
  }
}
</script>

<style>
.wysiwyg {
  padding: 20px;
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
    text-align: center;
}
.btns {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
