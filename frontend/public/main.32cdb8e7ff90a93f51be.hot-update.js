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
  // watch: {
  //     repeatableRow (value) {
  //         if (value) {
  //             this.repeatableSummernoteInit()
  //         }
  //         else this.summernoteInit()
  //     }
  // },
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

      console.log(_this.redips);

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
      $(document).ready(function () {
        var _this = this;

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
      $(document).ready(function () {
        var _this = this;

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

    if (_this.repeatableRow) {
      _this.repeatableSummernoteInit();
    } else {
      _this.summernoteInit();
    }
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL0NyZWF0ZVRhYmxlUGFnZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLGVBREE7QUFFQSwwQkFGQTtBQUdBLGdCQUhBO0FBSUEsdWdDQUpBO0FBcUNBO0FBckNBO0FBdUNBLEdBMUNBO0FBMkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQURBLDBCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsa0JBSkEsMEJBSUEsSUFKQSxFQUlBO0FBQ0E7QUFDQSxLQU5BO0FBT0Esb0JBUEEsOEJBT0E7QUFDQTtBQUNBLG9EQUNBO0FBQ0EsMkJBREE7QUFFQSxnRkFGQTtBQUdBLG9CQUhBO0FBSUEsd0hBSkE7QUFLQTtBQUxBLFNBREE7QUFTQTtBQUNBLE9BWEEsTUFZQTtBQUNBO0FBQ0EsT0FGQSxNQUdBO0FBQ0EsS0F4QkE7QUF5QkEsZ0JBekJBLDBCQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQSxNQUtBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLEtBcENBO0FBcUNBLGNBckNBLHdCQXFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBSEE7O0FBS0E7QUFDQTtBQUNBLFNBRkE7O0FBSUE7QUFDQTtBQUNBLFNBRkE7O0FBSUE7QUFDQTtBQUNBLFNBRkE7QUFHQSxPQXRCQTs7QUF1QkE7QUFDQSxLQWhFQTtBQWlFQSw0QkFqRUEsc0NBaUVBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBLHFCQURBO0FBRUEseUJBRkE7QUFHQSx5QkFIQTtBQUlBLHFCQUpBO0FBS0Esb0JBQ0EsbURBREEsRUFFQSx1REFGQSxFQUdBLDBCQUhBLEVBSUEsb0JBSkEsRUFLQSxtQ0FMQSxFQU1BLHNCQU5BLEVBT0EsMEJBUEEsRUFRQSwwQkFSQSxFQVNBLG9DQVRBLENBTEE7QUFnQkE7QUFDQSxvQkFDQSw0QkFEQSxFQUVBLGtDQUZBLEVBR0EsMEJBSEE7QUFEQTtBQWhCQTtBQXlCQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBLFdBUEEsQ0FTQTtBQUNBOzs7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FoQkE7QUFrQkE7QUFDQSxPQTlDQTtBQStDQSxLQWpIQTtBQWtIQSxrQkFsSEEsNEJBa0hBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQURBO0FBRUEseUJBRkE7QUFHQSx5QkFIQTtBQUlBLHFCQUpBO0FBS0Esb0JBQ0EsbURBREEsRUFFQSx1REFGQSxFQUdBLDBCQUhBLEVBSUEsb0JBSkEsRUFLQSxtQ0FMQSxFQU1BLHNCQU5BLEVBT0EsbUNBUEEsRUFRQSwwQkFSQSxFQVNBLG9DQVRBLENBTEE7QUFnQkE7QUFDQSxvQkFDQSw0Q0FEQSxFQUVBLHFEQUZBLEVBR0EsK0JBSEEsRUFJQSx3Q0FKQTtBQURBO0FBaEJBO0FBMEJBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0EsV0FQQSxDQVNBO0FBQ0E7OztBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQWhCQTtBQWlCQSxPQTlDQTtBQStDQTtBQWxLQSxHQW5EQTtBQXVOQSxTQXZOQSxxQkF1TkE7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxLQUZBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUF4T0EsRyIsImZpbGUiOiJtYWluLjMyY2RiOGU3ZmY5MGE5M2Y1MWJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY3JlYXRlLXRhYmxlXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj7QodC+0LfQtNCw0L3QuNC1INGB0LXQutGG0LjQuDwvaDI+XHJcbiAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtXCIgQHN1Ym1pdC5wcmV2ZW50PVwib25IYW5kbGVDb250aW51ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cItCX0LDQs9C+0LvQvtCy0L7QulwiIEBpbnB1dD1cIm9uSGFuZGxlQ2hhbmdlXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIGlkPVwicmVwZWF0YWJsZVJvd1wiIHYtbW9kZWw9XCJyZXBlYXRhYmxlUm93XCIgQGNoYW5nZT1cIm9uSGFuZGxlQ2hhbmdlXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwicmVwZWF0YWJsZVJvd1wiPtCf0L7QstGC0L7RgNGP0Y7RidC40LXRgdGPINGB0YLRgNC+0LrQuDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHYtc2hvdz1cImVycm9yXCIgY2xhc3M9XCJlcnJvclwiPlxyXG4gICAgICAgICAgICAgICAg0JLQstC10LTQuNGC0LUg0LfQsNCz0L7Qu9C+0LLQvtC6XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwid3lzaXd5Z1wiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJ0aXRsZVwiPtCh0L7Qt9C00LDQvdC40LUg0YHRgtGA0YPQutGC0YPRgNGLINGC0LDQsdC70LjRhtGLPC9oMz5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiIXJlcGVhdGFibGVSb3dcIiBpZD1cInN1bW1lcm5vdGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwicmVwZWF0YWJsZVJvd1wiIGlkPVwicmVwZWF0YWJsZVN1bW1lcm5vdGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIEBjbGljaz1cIm9uSGFuZGxlQmFja1wiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxNHB4XCI+0J3QsNC30LDQtDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIEBjbGljaz1cIm9uRm9ybWF0SHRtbFwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxNHB4XCI+Rm9ybWF0ZSBodG1sPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgQGNsaWNrLnByZXZlbnQ9XCJvbkhhbmRsZUNvbnRpbnVlXCIgdHlwZT1cInN1Ym1pdFwiPtCf0YDQvtC00L7Qu9C20LjRgtGMPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4vLyBpbXBvcnQgJ2pxdWVyeSdcclxuLy8gaW1wb3J0ICdib290c3RyYXAzL2Rpc3QvanMvbnBtJztcclxuLy8gaW1wb3J0ICdib290c3RyYXAzL2Rpc3QvanMvYm9vdHN0cmFwJztcclxuLy8gaW1wb3J0ICdzdW1tZXJub3RlL2Rpc3Qvc3VtbWVybm90ZS5jc3MnXHJcbi8vIGltcG9ydCAnc3VtbWVybm90ZS9kaXN0L3N1bW1lcm5vdGUnXHJcblxyXG5pbXBvcnQgdG9nZ2xlSGVhZGVySW5pdCBmcm9tICcuLi93eXNpd3lnX21vZHVsZXMvdG9nZ2xlLWhlYWRlcidcclxuaW1wb3J0IG1lcmdlQ2VsbHNJbml0IGZyb20gJy4uL3d5c2l3eWdfbW9kdWxlcy9tZXJnZS1jZWxscydcclxuaW1wb3J0IHNwbGl0SCBmcm9tICcuLi93eXNpd3lnX21vZHVsZXMvc3BsaXQtaG9yaXpvbnRhbGx5J1xyXG5pbXBvcnQgc3BsaXRWIGZyb20gJy4uL3d5c2l3eWdfbW9kdWxlcy9zcGxpdC12ZXJ0aWNhbGx5J1xyXG5pbXBvcnQgYWRkQ29sIGZyb20gJy4uL3d5c2l3eWdfbW9kdWxlcy9hZGQtY29sdW1uJ1xyXG5pbXBvcnQgYWRkUm93IGZyb20gJy4uL3d5c2l3eWdfbW9kdWxlcy9hZGQtcm93J1xyXG5pbXBvcnQgcmVtb3ZlQ29sIGZyb20gJy4uL3d5c2l3eWdfbW9kdWxlcy9yZW1vdmUtY29sdW1uJ1xyXG5pbXBvcnQgcmVtb3ZlUm93IGZyb20gJy4uL3d5c2l3eWdfbW9kdWxlcy9yZW1vdmUtcm93J1xyXG5pbXBvcnQgZm9ybWF0RmFjdG9yeSBmcm9tICcuLi91dGlscy9mb3JtYXRGYWN0b3J5LmpzJ1xyXG5pbXBvcnQgc2x1Z2lmeSBmcm9tICdzbHVnaWZ5J1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcIkNyZWF0ZVRhYmxlUGFnZVwiLFxyXG4gICAgZGF0YSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICByZXBlYXRhYmxlUm93OiBmYWxzZSxcclxuICAgICAgICAgICAgcmVkaXBzOiB7fSxcclxuICAgICAgICAgICAgcmVwZWF0YWJsZVJvd0RlZmF1bHRIVE1MOlxyXG4gICAgICAgICAgICAgICAgYDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWJvcmRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPmAsXHJcbiAgICAgICAgICAgIGVycm9yOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyB3YXRjaDoge1xyXG4gICAgLy8gICAgIHJlcGVhdGFibGVSb3cgKHZhbHVlKSB7XHJcbiAgICAvLyAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5yZXBlYXRhYmxlU3VtbWVybm90ZUluaXQoKVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIGVsc2UgdGhpcy5zdW1tZXJub3RlSW5pdCgpXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBvbkhhbmRsZUJhY2sgKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIuYmFjaygpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkhhbmRsZUNoYW5nZSAoZGF0YSkge1xyXG4gICAgICAgICAgIGRhdGEudGFyZ2V0LnZhbHVlID8gdGhpcy5lcnJvciA9ICcnIDogdGhpcy5lcnJvciA9IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uSGFuZGxlQ29udGludWUgKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50aXRsZSAmJiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydqb3VybmFsU3RhdGUvZ2V0Sm91cm5hbE5hbWUnXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdqb3VybmFsU3RhdGUvYWRkVGFibGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHNsdWdpZnkodGhpcy50aXRsZSwgJ18nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogdGhpcy5yZXBlYXRhYmxlUm93ID8gJCgnI3JlcGVhdGFibGVTdW1tZXJub3RlJykuc3VtbWVybm90ZSgnY29kZScpIDogJCgnI3N1bW1lcm5vdGUnKS5zdW1tZXJub3RlKCdjb2RlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdGFibGVfcm93OiB0aGlzLnJlcGVhdGFibGVSb3dcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaChgL2pvdXJuYWwvJHt0aGlzLiRyb3V0ZS5wYXJhbXMuam91cm5hbE5hbWV9L3RhYmxlLyR7c2x1Z2lmeSh0aGlzLnRpdGxlLCAnXycpfS9lZGl0X2RhdGFgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCF0aGlzLiRzdG9yZS5nZXR0ZXJzWydqb3VybmFsU3RhdGUvZ2V0Sm91cm5hbE5hbWUnXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5lcnJvciA9IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uRm9ybWF0SHRtbCAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlcGVhdGFibGVSb3cpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2RlID0gJCgnI3JlcGVhdGFibGVTdW1tZXJub3RlJykuc3VtbWVybm90ZSgnY29kZScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvcm1hdHRlZENvZGUgPSBmb3JtYXRGYWN0b3J5KGNvZGUpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3JlcGVhdGFibGVTdW1tZXJub3RlJykuc3VtbWVybm90ZSgnY29kZScsIGZvcm1hdHRlZENvZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvZGUgPSAkKCcjc3VtbWVybm90ZScpLnN1bW1lcm5vdGUoJ2NvZGUnKTtcclxuICAgICAgICAgICAgICAgIGxldCBmb3JtYXR0ZWRDb2RlID0gZm9ybWF0RmFjdG9yeShjb2RlKTtcclxuICAgICAgICAgICAgICAgICQoJyNzdW1tZXJub3RlJykuc3VtbWVybm90ZSgnY29kZScsIGZvcm1hdHRlZENvZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWRpcHNJbml0ICgpIHtcclxuICAgICAgICAgICAgbGV0IF90aGlzID0gdGhpc1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhfdGhpcy5yZWRpcHMpXHJcbiAgICAgICAgICAgIF90aGlzLnJlZGlwcy5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJ0ID0gUkVESVBTLnRhYmxlO1xyXG4gICAgICAgICAgICAgICAgcnQub25tb3VzZWRvd24oJ3JlZGlwc1RhYmxlJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcnQuY29sb3IuY2VsbCA9ICcjOUJCM0RBJztcclxuXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZWRpcHMubWVyZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUkVESVBTLnRhYmxlLm1lcmdlKCdoJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIFJFRElQUy50YWJsZS5tZXJnZSgndicpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZWRpcHMuc3BsaXQgPSBmdW5jdGlvbiAobW9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFJFRElQUy50YWJsZS5zcGxpdChtb2RlKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVkaXBzLnJvdyA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUkVESVBTLnRhYmxlLnJvdygncmVkaXBzVGFibGUnLCB0eXBlKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVkaXBzLmNvbHVtbiA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUkVESVBTLnRhYmxlLmNvbHVtbigncmVkaXBzVGFibGUnLCB0eXBlKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZWRpcHMgPSBfdGhpcy5yZWRpcHNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlcGVhdGFibGVTdW1tZXJub3RlSW5pdCAoKSB7XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IF90aGlzID0gdGhpc1xyXG4gICAgICAgICAgICAgICAgJCgnI3JlcGVhdGFibGVTdW1tZXJub3RlJykuc3VtbWVybm90ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBmb2N1czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnc3R5bGUnLCBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdjbGVhciddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydmb250JywgWydzdHJpa2V0aHJvdWdoJywgJ3N1cGVyc2NyaXB0JywgJ3N1YnNjcmlwdCddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydmb250c2l6ZScsIFsnZm9udHNpemUnXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnY29sb3InLCBbJ2NvbG9yJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ3BhcmEnLCBbJ3VsJywgJ29sJywgJ3BhcmFncmFwaCddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydoZWlnaHQnLCBbJ2hlaWdodCddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydpbnNlcnQnLCBbJ2xpbmsnLCAnaHInXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnbWlzaycsIFsndW5kbycsICdyZWRvJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ3ZpZXcnLCBbJ2Z1bGxzY3JlZW4nLCAnY29kZXZpZXcnXV1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnYWRkJywgWydhZGRDb2x1bW5QbHVnaW4nXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2RlbGV0ZScsIFsncmVtb3ZlQ29sdW1uUGx1Z2luJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWydjdXN0b20nLCBbJ2NlbGxIZWFkZXInXV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJCgnI3JlcGVhdGFibGVTdW1tZXJub3RlJykub24oJ3N1bW1lcm5vdGUuY2hhbmdlJywgZnVuY3Rpb24od2UsIGNvbnRlbnRzLCAkZWRpdGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VtbWVybm90ZVxcJ3MgY29udGVudCBpcyBjaGFuZ2VkLicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFibGUgPSAkKCcubm90ZS1lZGl0YWJsZSB0YWJsZTpmaXJzdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhYmxlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5hdHRyKCdpZCcsICdyZWRpcHNUYWJsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlZGlwcy5pbml0KClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSAnPHA+PGJyPjwvcD4nIGluc2lkZSB0YWJsZXNcclxuICAgICAgICAgICAgICAgICAgICAvLyAoc3VtbWVybm90ZSBjcmVhdGVzIHRoZW0gd2hlbiBuZXN0aW5nIHRhYmxlIGluIHRhYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1c2VsZXNzUGFyYWdyYXBocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RhYmxlIHAnKSwgaTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdXNlbGVzc1BhcmFncmFwaHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHAgPSB1c2VsZXNzUGFyYWdyYXBoc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJyNyZXBlYXRhYmxlU3VtbWVybm90ZScpLnN1bW1lcm5vdGUoJ2NvZGUnLCBfdGhpcy5yZXBlYXRhYmxlUm93RGVmYXVsdEhUTUwpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdW1tZXJub3RlSW5pdCAoKSB7XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IF90aGlzID0gdGhpc1xyXG5cclxuICAgICAgICAgICAgICAgICQoJyNzdW1tZXJub3RlJykuc3VtbWVybm90ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBmb2N1czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnc3R5bGUnLCBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdjbGVhciddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydmb250JywgWydzdHJpa2V0aHJvdWdoJywgJ3N1cGVyc2NyaXB0JywgJ3N1YnNjcmlwdCddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydmb250c2l6ZScsIFsnZm9udHNpemUnXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnY29sb3InLCBbJ2NvbG9yJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ3BhcmEnLCBbJ3VsJywgJ29sJywgJ3BhcmFncmFwaCddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydoZWlnaHQnLCBbJ2hlaWdodCddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydpbnNlcnQnLCBbJ3RhYmxlJywgJ2xpbmsnLCAnaHInXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnbWlzaycsIFsndW5kbycsICdyZWRvJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ3ZpZXcnLCBbJ2Z1bGxzY3JlZW4nLCAnY29kZXZpZXcnXV1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnYWRkJywgWydhZGRDb2x1bW5QbHVnaW4nLCAnYWRkUm93UGx1Z2luJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWydkZWxldGUnLCBbJ3JlbW92ZUNvbHVtblBsdWdpbicsICdyZW1vdmVSb3dQbHVnaW4nXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ3NwbGl0JywgWydzcGxpdEgnLCAnc3BsaXRWJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWydjdXN0b20nLCBbJ2NlbGxIZWFkZXInLCAnbWVyZ2VDZWxscyddXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKCcjc3VtbWVybm90ZScpLm9uKCdzdW1tZXJub3RlLmNoYW5nZScsIGZ1bmN0aW9uICh3ZSwgY29udGVudHMsICRlZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdW1tZXJub3RlXFwncyBjb250ZW50IGlzIGNoYW5nZWQuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YWJsZSA9ICQoJy5ub3RlLWVkaXRhYmxlIHRhYmxlOmZpcnN0JylcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFibGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmF0dHIoJ2lkJywgJ3JlZGlwc1RhYmxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVkaXBzLmluaXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlICc8cD48YnI+PC9wPicgaW5zaWRlIHRhYmxlc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIChzdW1tZXJub3RlIGNyZWF0ZXMgdGhlbSB3aGVuIG5lc3RpbmcgdGFibGUgaW4gdGFibGUpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVzZWxlc3NQYXJhZ3JhcGhzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGFibGUgcCcpLCBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB1c2VsZXNzUGFyYWdyYXBocy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcCA9IHVzZWxlc3NQYXJhZ3JhcGhzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQgKCkge1xyXG4gICAgICAgIGxldCBfdGhpcyA9IHRoaXNcclxuICAgICAgICBfdGhpcy5yZWRpcHNJbml0KClcclxuICAgICAgICB0b2dnbGVIZWFkZXJJbml0KCk7XHJcbiAgICAgICAgbWVyZ2VDZWxsc0luaXQoKTtcclxuICAgICAgICBzcGxpdEgoKVxyXG4gICAgICAgIHNwbGl0VigpXHJcbiAgICAgICAgYWRkQ29sKClcclxuICAgICAgICBhZGRSb3coKVxyXG4gICAgICAgIHJlbW92ZUNvbCgpXHJcbiAgICAgICAgcmVtb3ZlUm93KClcclxuICAgICAgICBpZiAoX3RoaXMucmVwZWF0YWJsZVJvdykge1xyXG4gICAgICAgICAgICBfdGhpcy5yZXBlYXRhYmxlU3VtbWVybm90ZUluaXQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgX3RoaXMuc3VtbWVybm90ZUluaXQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5jcmVhdGUtdGFibGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5jcmVhdGUtdGFibGUgPiBoMi50aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5lcnJvciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDEwOCwgMTA4KTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmZvcm0ge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uZm9ybS1jaGVjayBsYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnd5c2l3eWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi53eXNpd3lnIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG59XHJcbi53eXNpd3lnIC50aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5idG5zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=