<template>
  <div class="wysiwyg">
      <h2 class="title">Создание структуры таблицы</h2>
      <div id="summernote"></div>
      <div class="btns">
          <button class="btn btn-secondary" @click="onHandleBack" style="margin-right: 14px">Назад</button>
          <button class="btn btn-success" @click="onFormatHtml" >Formate html</button>
          <button class="btn btn-primary" @click.prevent="onHandleContinue" type="submit">Продолжить</button>
      </div>
  </div>
</template>

<script>
import toggleHeaderInit from '../wysiwyg_modules/toggle-header'
import mergeCellsInit from '../wysiwyg_modules/merge-cells'
import formatFactory from '../utils/formatFactory.js'

export default {
  name: 'WysiwygPage',
  data () {
    return {

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
                    html: $('#summernote').summernote('code')
                }
            }
        );
        this.$router.push(`/journal/${this.$route.params.journalName}/table/${this.$route.params.tableName}/edit_data`)
      },
      onFormatHtml () {
          let code = $('#summernote').summernote('code');
          let formattedCode = formatFactory(code);
          $('#summernote').summernote('code', formattedCode);
      }

  },
  created () {
      $(document).ready(function() {
          toggleHeaderInit();
          mergeCellsInit();
          $('#summernote').summernote({
              height: 300,
              minHeight: null,
              maxHeight: null,
              focus: true,
              toolbar: [
                  ['insert', ['table']],
                  ['misk', ['undo', 'redo']],
                  ['view', ['fullscreen', 'codeview']],
              ],
              popover: {
                  table: [
                      ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight', 'toggle']],
                      ['delete', ['deleteRow', 'deleteCol', 'deleteTable']],
                      ['custom', ['cellHeader', 'mergeCells']]
                  ],
              },

          });
          $('#summernote').on('summernote.change', function(we, contents, $editable) {
            console.log('summernote\'s content is changed.');
            // remove '<p><br></p>' inside tables
            // (summernote creates them when nesting table in table)
            var uselessParagraphs = document.querySelectorAll('table p'), i;
            for (i = 0; i < uselessParagraphs.length; ++i) {
              let p = uselessParagraphs[i];
              p.parentNode.removeChild(p);
            }
          });

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
