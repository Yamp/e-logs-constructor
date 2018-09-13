webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/views/CreateTablePage.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/CreateTablePage.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wysiwyg_modules_toggle_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../wysiwyg_modules/toggle-header */ "./src/wysiwyg_modules/toggle-header.js");
/* harmony import */ var _wysiwyg_modules_merge_cells__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../wysiwyg_modules/merge-cells */ "./src/wysiwyg_modules/merge-cells.js");
/* harmony import */ var _wysiwyg_modules_split_horizontally__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../wysiwyg_modules/split-horizontally */ "./src/wysiwyg_modules/split-horizontally.js");
/* harmony import */ var _wysiwyg_modules_split_vertically__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../wysiwyg_modules/split-vertically */ "./src/wysiwyg_modules/split-vertically.js");
/* harmony import */ var _wysiwyg_modules_add_column__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../wysiwyg_modules/add-column */ "./src/wysiwyg_modules/add-column.js");
/* harmony import */ var _wysiwyg_modules_add_row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../wysiwyg_modules/add-row */ "./src/wysiwyg_modules/add-row.js");
/* harmony import */ var _wysiwyg_modules_remove_column__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../wysiwyg_modules/remove-column */ "./src/wysiwyg_modules/remove-column.js");
/* harmony import */ var _wysiwyg_modules_remove_row__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../wysiwyg_modules/remove-row */ "./src/wysiwyg_modules/remove-row.js");
/* harmony import */ var _utils_formatFactory_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/formatFactory.js */ "./src/utils/formatFactory.js");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! slugify */ "./node_modules/slugify/index.js");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_13__);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import 'jquery'
// import 'bootstrap3/dist/js/npm';
// import 'bootstrap3/dist/js/bootstrap';
// import 'summernote/dist/summernote.css'
// import 'summernote/dist/summernote'










/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CreateTablePage",
  data: function data() {
    return {
      title: '',
      repeatableRow: false,
      redips: {},
      repeatableRowDefaultHTML: "<table class=\"table table-bordered\">\n                <tbody>\n                    <tr>\n                        <th></th>\n                        <th></th>\n                        <th></th>\n                        <th></th>\n                        <th></th>\n                        <th></th>\n                    </tr>\n                    <tr>\n                        <td>\n                            <br>\n                        </td>\n                        <td>\n                            <br>\n                        </td>\n                        <td>\n                            <br>\n                        </td>\n                        <td>\n                            <br>\n                        </td>\n                        <td>\n                            <br>\n                        </td>\n                        <td>\n                            <br>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>",
      error: ''
    };
  },
  watch: {
    repeatableRow: function repeatableRow(value) {
      if (value) {
        this.repeatableSummernoteInit();
      } else this.summernoteInit();
    }
  },
  methods: {
    onHandleBack: function onHandleBack() {
      this.$router.back();
    },
    onHandleChange: function onHandleChange(data) {
      data.target.value ? this.error = '' : this.error = true;
    },
    onHandleContinue: function onHandleContinue() {
      if (this.title && this.$store.getters['journalState/getJournalName']) {
        this.$store.commit('journalState/addTable', {
          title: this.title,
          name: slugify__WEBPACK_IMPORTED_MODULE_13___default()(this.title, '_'),
          fields: [],
          html: this.repeatableRow ? $('#repeatableSummernote').summernote('code') : $('#summernote').summernote('code'),
          repeatable_row: this.repeatableRow
        });
        this.$router.push("/journal/".concat(this.$route.params.journalName, "/table/").concat(slugify__WEBPACK_IMPORTED_MODULE_13___default()(this.title, '_'), "/edit_data"));
      } else if (!this.$store.getters['journalState/getJournalName']) {
        this.$router.push('/');
      } else this.error = true;
    },
    onFormatHtml: function onFormatHtml() {
      if (this.repeatableRow) {
        var code = $('#repeatableSummernote').summernote('code');
        var formattedCode = Object(_utils_formatFactory_js__WEBPACK_IMPORTED_MODULE_12__["default"])(code);
        $('#repeatableSummernote').summernote('code', formattedCode);
      } else {
        var _code = $('#summernote').summernote('code');

        var _formattedCode = Object(_utils_formatFactory_js__WEBPACK_IMPORTED_MODULE_12__["default"])(_code);

        $('#summernote').summernote('code', _formattedCode);
      }
    },
    redipsInit: function redipsInit() {
      var _this = this;

      _this.redips.init = function () {
        var rt = REDIPS.table;
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

      window.redips = _this.redips;
    },
    repeatableSummernoteInit: function repeatableSummernoteInit() {
      var _this = this;

      $(document).ready(function () {
        $('.note-editor').remove();

        if ($('#repeatableSummernote')) {
          console.log($('#repeatableSummernote'));
        } else console.log('dsadnmasd');

        $('#repeatableSummernote').summernote({
          height: 300,
          minHeight: null,
          maxHeight: null,
          focus: true,
          toolbar: [['style', ['bold', 'italic', 'underline', 'clear']], ['font', ['strikethrough', 'superscript', 'subscript']], ['fontsize', ['fontsize']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph']], ['height', ['height']], ['insert', ['link', 'hr']], ['misk', ['undo', 'redo']], ['view', ['fullscreen', 'codeview']]],
          popover: {
            table: [['add', ['addColumnPlugin']], ['delete', ['removeColumnPlugin']], ['custom', ['cellHeader']]]
          }
        });
        $('#repeatableSummernote').on('summernote.change', function (we, contents, $editable) {
          console.log('summernote\'s content is changed.');
          var table = $('.note-editable table:first');

          if (table.length) {
            table.attr('id', 'redipsTable');

            _this.redips.init();
          } // remove '<p><br></p>' inside tables
          // (summernote creates them when nesting table in table)


          var uselessParagraphs = document.querySelectorAll('table p'),
              i;

          for (i = 0; i < uselessParagraphs.length; ++i) {
            var p = uselessParagraphs[i];
            p.parentNode.removeChild(p);
          }
        });
        $('#repeatableSummernote').summernote('code', _this.repeatableRowDefaultHTML);
      });
    },
    summernoteInit: function summernoteInit() {
      var _this = this;

      $(document).ready(function () {
        $('.note-editor').remove();

        if ($('#summernote')) {
          console.log($('#summernote'));
        } else console.log('dsadnmasd');

        $('#summernote').summernote({
          height: 300,
          minHeight: null,
          maxHeight: null,
          focus: true,
          toolbar: [['style', ['bold', 'italic', 'underline', 'clear']], ['font', ['strikethrough', 'superscript', 'subscript']], ['fontsize', ['fontsize']], ['color', ['color']], ['para', ['ul', 'ol', 'paragraph']], ['height', ['height']], ['insert', ['table', 'link', 'hr']], ['misk', ['undo', 'redo']], ['view', ['fullscreen', 'codeview']]],
          popover: {
            table: [['add', ['addColumnPlugin', 'addRowPlugin']], ['delete', ['removeColumnPlugin', 'removeRowPlugin']], ['split', ['splitH', 'splitV']], ['custom', ['cellHeader', 'mergeCells']]]
          }
        });
        $('#summernote').on('summernote.change', function (we, contents, $editable) {
          console.log('summernote\'s content is changed.');
          var table = $('.note-editable table:first');

          if (table.length) {
            table.attr('id', 'redipsTable');

            _this.redips.init();
          } // remove '<p><br></p>' inside tables
          // (summernote creates them when nesting table in table)


          var uselessParagraphs = document.querySelectorAll('table p'),
              i;

          for (i = 0; i < uselessParagraphs.length; ++i) {
            var p = uselessParagraphs[i];
            p.parentNode.removeChild(p);
          }
        });
        $('#summernote').summernote('code', '');
      });
    }
  },
  mounted: function mounted() {
    var _this = this;

    _this.redipsInit();

    Object(_wysiwyg_modules_toggle_header__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(_wysiwyg_modules_merge_cells__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(_wysiwyg_modules_split_horizontally__WEBPACK_IMPORTED_MODULE_6__["default"])();
    Object(_wysiwyg_modules_split_vertically__WEBPACK_IMPORTED_MODULE_7__["default"])();
    Object(_wysiwyg_modules_add_column__WEBPACK_IMPORTED_MODULE_8__["default"])();
    Object(_wysiwyg_modules_add_row__WEBPACK_IMPORTED_MODULE_9__["default"])();
    Object(_wysiwyg_modules_remove_column__WEBPACK_IMPORTED_MODULE_10__["default"])();
    Object(_wysiwyg_modules_remove_row__WEBPACK_IMPORTED_MODULE_11__["default"])();

    _this.summernoteInit();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL0NyZWF0ZVRhYmxlUGFnZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLGVBREE7QUFFQSwwQkFGQTtBQUdBLGdCQUhBO0FBSUEsdWdDQUpBO0FBcUNBO0FBckNBO0FBdUNBLEdBMUNBO0FBMkNBO0FBQ0EsaUJBREEseUJBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFHQTtBQUNBO0FBTkEsR0EzQ0E7QUFtREE7QUFDQSxnQkFEQSwwQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLGtCQUpBLDBCQUlBLElBSkEsRUFJQTtBQUNBO0FBQ0EsS0FOQTtBQU9BLG9CQVBBLDhCQU9BO0FBQ0E7QUFDQSxvREFDQTtBQUNBLDJCQURBO0FBRUEsZ0ZBRkE7QUFHQSxvQkFIQTtBQUlBLHdIQUpBO0FBS0E7QUFMQSxTQURBO0FBU0E7QUFDQSxPQVhBLE1BWUE7QUFDQTtBQUNBLE9BRkEsTUFHQTtBQUNBLEtBeEJBO0FBeUJBLGdCQXpCQSwwQkF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkEsTUFLQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQSxLQXBDQTtBQXFDQSxjQXJDQSx3QkFxQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUhBOztBQUtBO0FBQ0E7QUFDQSxTQUZBOztBQUlBO0FBQ0E7QUFDQSxTQUZBOztBQUlBO0FBQ0E7QUFDQSxTQUZBO0FBR0EsT0F0QkE7O0FBdUJBO0FBQ0EsS0EvREE7QUFnRUEsNEJBaEVBLHNDQWdFQTtBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLFNBRkEsTUFHQTs7QUFDQTtBQUNBLHFCQURBO0FBRUEseUJBRkE7QUFHQSx5QkFIQTtBQUlBLHFCQUpBO0FBS0Esb0JBQ0EsbURBREEsRUFFQSx1REFGQSxFQUdBLDBCQUhBLEVBSUEsb0JBSkEsRUFLQSxtQ0FMQSxFQU1BLHNCQU5BLEVBT0EsMEJBUEEsRUFRQSwwQkFSQSxFQVNBLG9DQVRBLENBTEE7QUFnQkE7QUFDQSxvQkFDQSw0QkFEQSxFQUVBLGtDQUZBLEVBR0EsMEJBSEE7QUFEQTtBQWhCQTtBQXlCQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBLFdBUEEsQ0FTQTtBQUNBOzs7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FoQkE7QUFrQkE7QUFDQSxPQWxEQTtBQW1EQSxLQXJIQTtBQXNIQSxrQkF0SEEsNEJBc0hBO0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUdBOztBQUNBO0FBQ0EscUJBREE7QUFFQSx5QkFGQTtBQUdBLHlCQUhBO0FBSUEscUJBSkE7QUFLQSxvQkFDQSxtREFEQSxFQUVBLHVEQUZBLEVBR0EsMEJBSEEsRUFJQSxvQkFKQSxFQUtBLG1DQUxBLEVBTUEsc0JBTkEsRUFPQSxtQ0FQQSxFQVFBLDBCQVJBLEVBU0Esb0NBVEEsQ0FMQTtBQWdCQTtBQUNBLG9CQUNBLDRDQURBLEVBRUEscURBRkEsRUFHQSwrQkFIQSxFQUlBLHdDQUpBO0FBREE7QUFoQkE7QUEwQkE7QUFDQTtBQUVBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxXQVBBLENBU0E7QUFDQTs7O0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBaEJBO0FBaUJBO0FBQ0EsT0FsREE7QUFtREE7QUEzS0EsR0FuREE7QUFnT0EsU0FoT0EscUJBZ09BO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBNU9BLEciLCJmaWxlIjoibWFpbi43OThjNGE1NzUwMTg2MjBjZDlmYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImNyZWF0ZS10YWJsZVwiPlxyXG4gICAgICAgIDxoMiBjbGFzcz1cInRpdGxlXCI+0KHQvtC30LTQsNC90LjQtSDRgdC10LrRhtC40Lg8L2gyPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybVwiIEBzdWJtaXQucHJldmVudD1cIm9uSGFuZGxlQ29udGludWVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCLQl9Cw0LPQvtC70L7QstC+0LpcIiBAaW5wdXQ9XCJvbkhhbmRsZUNoYW5nZVwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBpZD1cInJlcGVhdGFibGVSb3dcIiB2LW1vZGVsPVwicmVwZWF0YWJsZVJvd1wiIEBjaGFuZ2U9XCJvbkhhbmRsZUNoYW5nZVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cInJlcGVhdGFibGVSb3dcIj7Qn9C+0LLRgtC+0YDRj9GO0YnQuNC10YHRjyDRgdGC0YDQvtC60Lg8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiB2LXNob3c9XCJlcnJvclwiIGNsYXNzPVwiZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgINCS0LLQtdC00LjRgtC1INC30LDQs9C+0LvQvtCy0L7QulxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInd5c2l3eWdcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwidGl0bGVcIj7QodC+0LfQtNCw0L3QuNC1INGB0YLRgNGD0LrRgtGD0YDRiyDRgtCw0LHQu9C40YbRizwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cIiFyZXBlYXRhYmxlUm93XCIgaWQ9XCJzdW1tZXJub3RlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cInJlcGVhdGFibGVSb3dcIiBpZD1cInJlcGVhdGFibGVTdW1tZXJub3RlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG5zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBAY2xpY2s9XCJvbkhhbmRsZUJhY2tcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMTRweFwiPtCd0LDQt9Cw0LQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBAY2xpY2s9XCJvbkZvcm1hdEh0bWxcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMTRweFwiPkZvcm1hdGUgaHRtbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIEBjbGljay5wcmV2ZW50PVwib25IYW5kbGVDb250aW51ZVwiIHR5cGU9XCJzdWJtaXRcIj7Qn9GA0L7QtNC+0LvQttC40YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy8gaW1wb3J0ICdqcXVlcnknXHJcbi8vIGltcG9ydCAnYm9vdHN0cmFwMy9kaXN0L2pzL25wbSc7XHJcbi8vIGltcG9ydCAnYm9vdHN0cmFwMy9kaXN0L2pzL2Jvb3RzdHJhcCc7XHJcbi8vIGltcG9ydCAnc3VtbWVybm90ZS9kaXN0L3N1bW1lcm5vdGUuY3NzJ1xyXG4vLyBpbXBvcnQgJ3N1bW1lcm5vdGUvZGlzdC9zdW1tZXJub3RlJ1xyXG5cclxuaW1wb3J0IHRvZ2dsZUhlYWRlckluaXQgZnJvbSAnLi4vd3lzaXd5Z19tb2R1bGVzL3RvZ2dsZS1oZWFkZXInXHJcbmltcG9ydCBtZXJnZUNlbGxzSW5pdCBmcm9tICcuLi93eXNpd3lnX21vZHVsZXMvbWVyZ2UtY2VsbHMnXHJcbmltcG9ydCBzcGxpdEggZnJvbSAnLi4vd3lzaXd5Z19tb2R1bGVzL3NwbGl0LWhvcml6b250YWxseSdcclxuaW1wb3J0IHNwbGl0ViBmcm9tICcuLi93eXNpd3lnX21vZHVsZXMvc3BsaXQtdmVydGljYWxseSdcclxuaW1wb3J0IGFkZENvbCBmcm9tICcuLi93eXNpd3lnX21vZHVsZXMvYWRkLWNvbHVtbidcclxuaW1wb3J0IGFkZFJvdyBmcm9tICcuLi93eXNpd3lnX21vZHVsZXMvYWRkLXJvdydcclxuaW1wb3J0IHJlbW92ZUNvbCBmcm9tICcuLi93eXNpd3lnX21vZHVsZXMvcmVtb3ZlLWNvbHVtbidcclxuaW1wb3J0IHJlbW92ZVJvdyBmcm9tICcuLi93eXNpd3lnX21vZHVsZXMvcmVtb3ZlLXJvdydcclxuaW1wb3J0IGZvcm1hdEZhY3RvcnkgZnJvbSAnLi4vdXRpbHMvZm9ybWF0RmFjdG9yeS5qcydcclxuaW1wb3J0IHNsdWdpZnkgZnJvbSAnc2x1Z2lmeSdcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJDcmVhdGVUYWJsZVBhZ2VcIixcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgcmVwZWF0YWJsZVJvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlZGlwczoge30sXHJcbiAgICAgICAgICAgIHJlcGVhdGFibGVSb3dEZWZhdWx0SFRNTDpcclxuICAgICAgICAgICAgICAgIGA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5gLFxyXG4gICAgICAgICAgICBlcnJvcjogJydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgICByZXBlYXRhYmxlUm93ICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVwZWF0YWJsZVN1bW1lcm5vdGVJbml0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHRoaXMuc3VtbWVybm90ZUluaXQoKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgb25IYW5kbGVCYWNrICgpIHtcclxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLmJhY2soKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25IYW5kbGVDaGFuZ2UgKGRhdGEpIHtcclxuICAgICAgICAgICBkYXRhLnRhcmdldC52YWx1ZSA/IHRoaXMuZXJyb3IgPSAnJyA6IHRoaXMuZXJyb3IgPSB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkhhbmRsZUNvbnRpbnVlICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGl0bGUgJiYgdGhpcy4kc3RvcmUuZ2V0dGVyc1snam91cm5hbFN0YXRlL2dldEpvdXJuYWxOYW1lJ10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnam91cm5hbFN0YXRlL2FkZFRhYmxlJyxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBzbHVnaWZ5KHRoaXMudGl0bGUsICdfJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IHRoaXMucmVwZWF0YWJsZVJvdyA/ICQoJyNyZXBlYXRhYmxlU3VtbWVybm90ZScpLnN1bW1lcm5vdGUoJ2NvZGUnKSA6ICQoJyNzdW1tZXJub3RlJykuc3VtbWVybm90ZSgnY29kZScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRhYmxlX3JvdzogdGhpcy5yZXBlYXRhYmxlUm93XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goYC9qb3VybmFsLyR7dGhpcy4kcm91dGUucGFyYW1zLmpvdXJuYWxOYW1lfS90YWJsZS8ke3NsdWdpZnkodGhpcy50aXRsZSwgJ18nKX0vZWRpdF9kYXRhYClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICghdGhpcy4kc3RvcmUuZ2V0dGVyc1snam91cm5hbFN0YXRlL2dldEpvdXJuYWxOYW1lJ10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZXJyb3IgPSB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkZvcm1hdEh0bWwgKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZXBlYXRhYmxlUm93KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29kZSA9ICQoJyNyZXBlYXRhYmxlU3VtbWVybm90ZScpLnN1bW1lcm5vdGUoJ2NvZGUnKTtcclxuICAgICAgICAgICAgICAgIGxldCBmb3JtYXR0ZWRDb2RlID0gZm9ybWF0RmFjdG9yeShjb2RlKTtcclxuICAgICAgICAgICAgICAgICQoJyNyZXBlYXRhYmxlU3VtbWVybm90ZScpLnN1bW1lcm5vdGUoJ2NvZGUnLCBmb3JtYXR0ZWRDb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2RlID0gJCgnI3N1bW1lcm5vdGUnKS5zdW1tZXJub3RlKCdjb2RlJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm9ybWF0dGVkQ29kZSA9IGZvcm1hdEZhY3RvcnkoY29kZSk7XHJcbiAgICAgICAgICAgICAgICAkKCcjc3VtbWVybm90ZScpLnN1bW1lcm5vdGUoJ2NvZGUnLCBmb3JtYXR0ZWRDb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVkaXBzSW5pdCAoKSB7XHJcbiAgICAgICAgICAgIGxldCBfdGhpcyA9IHRoaXNcclxuICAgICAgICAgICAgX3RoaXMucmVkaXBzLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcnQgPSBSRURJUFMudGFibGU7XHJcbiAgICAgICAgICAgICAgICBydC5vbm1vdXNlZG93bigncmVkaXBzVGFibGUnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBydC5jb2xvci5jZWxsID0gJyM5QkIzREEnO1xyXG5cclxuICAgICAgICAgICAgICAgIF90aGlzLnJlZGlwcy5tZXJnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBSRURJUFMudGFibGUubWVyZ2UoJ2gnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgUkVESVBTLnRhYmxlLm1lcmdlKCd2Jyk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIF90aGlzLnJlZGlwcy5zcGxpdCA9IGZ1bmN0aW9uIChtb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUkVESVBTLnRhYmxlLnNwbGl0KG1vZGUpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZWRpcHMucm93ID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBSRURJUFMudGFibGUucm93KCdyZWRpcHNUYWJsZScsIHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZWRpcHMuY29sdW1uID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBSRURJUFMudGFibGUuY29sdW1uKCdyZWRpcHNUYWJsZScsIHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgd2luZG93LnJlZGlwcyA9IF90aGlzLnJlZGlwc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVwZWF0YWJsZVN1bW1lcm5vdGVJbml0ICgpIHtcclxuICAgICAgICAgICAgbGV0IF90aGlzID0gdGhpc1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQoJy5ub3RlLWVkaXRvcicpLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICBpZigkKCcjcmVwZWF0YWJsZVN1bW1lcm5vdGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCQoJyNyZXBlYXRhYmxlU3VtbWVybm90ZScpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBjb25zb2xlLmxvZygnZHNhZG5tYXNkJylcclxuICAgICAgICAgICAgICAgICQoJyNyZXBlYXRhYmxlU3VtbWVybm90ZScpLnN1bW1lcm5vdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ3N0eWxlJywgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnY2xlYXInXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnZm9udCcsIFsnc3RyaWtldGhyb3VnaCcsICdzdXBlcnNjcmlwdCcsICdzdWJzY3JpcHQnXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnZm9udHNpemUnLCBbJ2ZvbnRzaXplJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2NvbG9yJywgWydjb2xvciddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydwYXJhJywgWyd1bCcsICdvbCcsICdwYXJhZ3JhcGgnXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnaGVpZ2h0JywgWydoZWlnaHQnXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnaW5zZXJ0JywgWydsaW5rJywgJ2hyJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ21pc2snLCBbJ3VuZG8nLCAncmVkbyddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWyd2aWV3JywgWydmdWxsc2NyZWVuJywgJ2NvZGV2aWV3J11dXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBwb3BvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2FkZCcsIFsnYWRkQ29sdW1uUGx1Z2luJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWydkZWxldGUnLCBbJ3JlbW92ZUNvbHVtblBsdWdpbiddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnY3VzdG9tJywgWydjZWxsSGVhZGVyJ11dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICQoJyNyZXBlYXRhYmxlU3VtbWVybm90ZScpLm9uKCdzdW1tZXJub3RlLmNoYW5nZScsIGZ1bmN0aW9uKHdlLCBjb250ZW50cywgJGVkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1bW1lcm5vdGVcXCdzIGNvbnRlbnQgaXMgY2hhbmdlZC4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhYmxlID0gJCgnLm5vdGUtZWRpdGFibGUgdGFibGU6Zmlyc3QnKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWJsZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuYXR0cignaWQnLCAncmVkaXBzVGFibGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZWRpcHMuaW5pdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgJzxwPjxicj48L3A+JyBpbnNpZGUgdGFibGVzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gKHN1bW1lcm5vdGUgY3JlYXRlcyB0aGVtIHdoZW4gbmVzdGluZyB0YWJsZSBpbiB0YWJsZSlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXNlbGVzc1BhcmFncmFwaHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0YWJsZSBwJyksIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHVzZWxlc3NQYXJhZ3JhcGhzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwID0gdXNlbGVzc1BhcmFncmFwaHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjcmVwZWF0YWJsZVN1bW1lcm5vdGUnKS5zdW1tZXJub3RlKCdjb2RlJywgX3RoaXMucmVwZWF0YWJsZVJvd0RlZmF1bHRIVE1MKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VtbWVybm90ZUluaXQgKCkge1xyXG4gICAgICAgICAgICBsZXQgX3RoaXMgPSB0aGlzXHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCgnLm5vdGUtZWRpdG9yJykucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIGlmKCQoJyNzdW1tZXJub3RlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygkKCcjc3VtbWVybm90ZScpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBjb25zb2xlLmxvZygnZHNhZG5tYXNkJylcclxuICAgICAgICAgICAgICAgICQoJyNzdW1tZXJub3RlJykuc3VtbWVybm90ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBmb2N1czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnc3R5bGUnLCBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdjbGVhciddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydmb250JywgWydzdHJpa2V0aHJvdWdoJywgJ3N1cGVyc2NyaXB0JywgJ3N1YnNjcmlwdCddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydmb250c2l6ZScsIFsnZm9udHNpemUnXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnY29sb3InLCBbJ2NvbG9yJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ3BhcmEnLCBbJ3VsJywgJ29sJywgJ3BhcmFncmFwaCddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydoZWlnaHQnLCBbJ2hlaWdodCddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydpbnNlcnQnLCBbJ3RhYmxlJywgJ2xpbmsnLCAnaHInXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnbWlzaycsIFsndW5kbycsICdyZWRvJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ3ZpZXcnLCBbJ2Z1bGxzY3JlZW4nLCAnY29kZXZpZXcnXV1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnYWRkJywgWydhZGRDb2x1bW5QbHVnaW4nLCAnYWRkUm93UGx1Z2luJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWydkZWxldGUnLCBbJ3JlbW92ZUNvbHVtblBsdWdpbicsICdyZW1vdmVSb3dQbHVnaW4nXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ3NwbGl0JywgWydzcGxpdEgnLCAnc3BsaXRWJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWydjdXN0b20nLCBbJ2NlbGxIZWFkZXInLCAnbWVyZ2VDZWxscyddXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKCcjc3VtbWVybm90ZScpLm9uKCdzdW1tZXJub3RlLmNoYW5nZScsIGZ1bmN0aW9uICh3ZSwgY29udGVudHMsICRlZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdW1tZXJub3RlXFwncyBjb250ZW50IGlzIGNoYW5nZWQuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YWJsZSA9ICQoJy5ub3RlLWVkaXRhYmxlIHRhYmxlOmZpcnN0JylcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFibGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmF0dHIoJ2lkJywgJ3JlZGlwc1RhYmxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVkaXBzLmluaXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlICc8cD48YnI+PC9wPicgaW5zaWRlIHRhYmxlc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIChzdW1tZXJub3RlIGNyZWF0ZXMgdGhlbSB3aGVuIG5lc3RpbmcgdGFibGUgaW4gdGFibGUpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVzZWxlc3NQYXJhZ3JhcGhzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGFibGUgcCcpLCBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB1c2VsZXNzUGFyYWdyYXBocy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcCA9IHVzZWxlc3NQYXJhZ3JhcGhzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKCcjc3VtbWVybm90ZScpLnN1bW1lcm5vdGUoJ2NvZGUnLCAnJylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCAoKSB7XHJcbiAgICAgICAgbGV0IF90aGlzID0gdGhpc1xyXG4gICAgICAgIF90aGlzLnJlZGlwc0luaXQoKVxyXG4gICAgICAgIHRvZ2dsZUhlYWRlckluaXQoKTtcclxuICAgICAgICBtZXJnZUNlbGxzSW5pdCgpO1xyXG4gICAgICAgIHNwbGl0SCgpXHJcbiAgICAgICAgc3BsaXRWKClcclxuICAgICAgICBhZGRDb2woKVxyXG4gICAgICAgIGFkZFJvdygpXHJcbiAgICAgICAgcmVtb3ZlQ29sKClcclxuICAgICAgICByZW1vdmVSb3coKVxyXG4gICAgICAgIF90aGlzLnN1bW1lcm5vdGVJbml0KClcclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5jcmVhdGUtdGFibGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5jcmVhdGUtdGFibGUgPiBoMi50aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5lcnJvciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDEwOCwgMTA4KTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmZvcm0ge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uZm9ybS1jaGVjayBsYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnd5c2l3eWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi53eXNpd3lnIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG59XHJcbi53eXNpd3lnIC50aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5idG5zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=