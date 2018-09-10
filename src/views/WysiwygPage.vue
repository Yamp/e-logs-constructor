<template>
  <div class="container">
      <div id="summernote">
      </div>
      <div class="btns">
          <btn :onClick="onHandleBack" style="margin-right: 14px">Назад</btn>
          <btn :onClick="onHandleContinue">Продолжить</btn>
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
          let html = $('.note-editable').html();
          let htmlFormatted = formatFactory(html);
          console.info(htmlFormatted);
          $(".note-codable").val(htmlFormatted);
      }
  },
  created () {
      $(document).ready(function() {
          toggleHeaderInit()
          mergeCellsInit()
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

      });
  }
}
</script>
<style scoped>
.container {
  padding: 20px;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
