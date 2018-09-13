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

    _this.repeatableSummernoteInit();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL0NyZWF0ZVRhYmxlUGFnZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLGVBREE7QUFFQSwwQkFGQTtBQUdBLGdCQUhBO0FBSUEsdWdDQUpBO0FBcUNBO0FBckNBO0FBdUNBLEdBMUNBO0FBMkNBO0FBQ0EsaUJBREEseUJBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFHQTtBQUNBO0FBTkEsR0EzQ0E7QUFtREE7QUFDQSxnQkFEQSwwQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLGtCQUpBLDBCQUlBLElBSkEsRUFJQTtBQUNBO0FBQ0EsS0FOQTtBQU9BLG9CQVBBLDhCQU9BO0FBQ0E7QUFDQSxvREFDQTtBQUNBLDJCQURBO0FBRUEsZ0ZBRkE7QUFHQSxvQkFIQTtBQUlBLHdIQUpBO0FBS0E7QUFMQSxTQURBO0FBU0E7QUFDQSxPQVhBLE1BWUE7QUFDQTtBQUNBLE9BRkEsTUFHQTtBQUNBLEtBeEJBO0FBeUJBLGdCQXpCQSwwQkF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkEsTUFLQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQSxLQXBDQTtBQXFDQSxjQXJDQSx3QkFxQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUhBOztBQUtBO0FBQ0E7QUFDQSxTQUZBOztBQUlBO0FBQ0E7QUFDQSxTQUZBOztBQUlBO0FBQ0E7QUFDQSxTQUZBO0FBR0EsT0F0QkE7O0FBdUJBO0FBQ0EsS0EvREE7QUFnRUEsNEJBaEVBLHNDQWdFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLHlCQUZBO0FBR0EseUJBSEE7QUFJQSxxQkFKQTtBQUtBLG9CQUNBLG1EQURBLEVBRUEsdURBRkEsRUFHQSwwQkFIQSxFQUlBLG9CQUpBLEVBS0EsbUNBTEEsRUFNQSxzQkFOQSxFQU9BLDBCQVBBLEVBUUEsMEJBUkEsRUFTQSxvQ0FUQSxDQUxBO0FBZ0JBO0FBQ0Esb0JBQ0EsNEJBREEsRUFFQSxrQ0FGQSxFQUdBLDBCQUhBO0FBREE7QUFoQkE7QUF5QkE7QUFDQTtBQUVBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxXQVBBLENBU0E7QUFDQTs7O0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBaEJBO0FBa0JBO0FBQ0EsT0E3Q0E7QUE4Q0EsS0FoSEE7QUFpSEEsa0JBakhBLDRCQWlIQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLHlCQUZBO0FBR0EseUJBSEE7QUFJQSxxQkFKQTtBQUtBLG9CQUNBLG1EQURBLEVBRUEsdURBRkEsRUFHQSwwQkFIQSxFQUlBLG9CQUpBLEVBS0EsbUNBTEEsRUFNQSxzQkFOQSxFQU9BLG1DQVBBLEVBUUEsMEJBUkEsRUFTQSxvQ0FUQSxDQUxBO0FBZ0JBO0FBQ0Esb0JBQ0EsNENBREEsRUFFQSxxREFGQSxFQUdBLCtCQUhBLEVBSUEsd0NBSkE7QUFEQTtBQWhCQTtBQTBCQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBLFdBUEEsQ0FTQTtBQUNBOzs7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FoQkE7QUFpQkE7QUFDQSxPQTdDQTtBQThDQTtBQWpLQSxHQW5EQTtBQXNOQSxTQXROQSxxQkFzTkE7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFuT0EsRyIsImZpbGUiOiJtYWluLjI4YWI2MzZhODZjNWM4ZDAxMzM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY3JlYXRlLXRhYmxlXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzPVwidGl0bGVcIj7QodC+0LfQtNCw0L3QuNC1INGB0LXQutGG0LjQuDwvaDI+XHJcbiAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtXCIgQHN1Ym1pdC5wcmV2ZW50PVwib25IYW5kbGVDb250aW51ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2LW1vZGVsPVwidGl0bGVcIiBwbGFjZWhvbGRlcj1cItCX0LDQs9C+0LvQvtCy0L7QulwiIEBpbnB1dD1cIm9uSGFuZGxlQ2hhbmdlXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jaGVja1wiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIGlkPVwicmVwZWF0YWJsZVJvd1wiIHYtbW9kZWw9XCJyZXBlYXRhYmxlUm93XCIgQGNoYW5nZT1cIm9uSGFuZGxlQ2hhbmdlXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwicmVwZWF0YWJsZVJvd1wiPtCf0L7QstGC0L7RgNGP0Y7RidC40LXRgdGPINGB0YLRgNC+0LrQuDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHYtc2hvdz1cImVycm9yXCIgY2xhc3M9XCJlcnJvclwiPlxyXG4gICAgICAgICAgICAgICAg0JLQstC10LTQuNGC0LUg0LfQsNCz0L7Qu9C+0LLQvtC6XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwid3lzaXd5Z1wiPlxyXG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJ0aXRsZVwiPtCh0L7Qt9C00LDQvdC40LUg0YHRgtGA0YPQutGC0YPRgNGLINGC0LDQsdC70LjRhtGLPC9oMz5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiIXJlcGVhdGFibGVSb3dcIiBpZD1cInN1bW1lcm5vdGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwicmVwZWF0YWJsZVJvd1wiIGlkPVwicmVwZWF0YWJsZVN1bW1lcm5vdGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeVwiIEBjbGljaz1cIm9uSGFuZGxlQmFja1wiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxNHB4XCI+0J3QsNC30LDQtDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIEBjbGljaz1cIm9uRm9ybWF0SHRtbFwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxNHB4XCI+Rm9ybWF0ZSBodG1sPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgQGNsaWNrLnByZXZlbnQ9XCJvbkhhbmRsZUNvbnRpbnVlXCIgdHlwZT1cInN1Ym1pdFwiPtCf0YDQvtC00L7Qu9C20LjRgtGMPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4vLyBpbXBvcnQgJ2pxdWVyeSdcclxuLy8gaW1wb3J0ICdib290c3RyYXAzL2Rpc3QvanMvbnBtJztcclxuLy8gaW1wb3J0ICdib290c3RyYXAzL2Rpc3QvanMvYm9vdHN0cmFwJztcclxuLy8gaW1wb3J0ICdzdW1tZXJub3RlL2Rpc3Qvc3VtbWVybm90ZS5jc3MnXHJcbi8vIGltcG9ydCAnc3VtbWVybm90ZS9kaXN0L3N1bW1lcm5vdGUnXHJcblxyXG5pbXBvcnQgdG9nZ2xlSGVhZGVySW5pdCBmcm9tICcuLi93eXNpd3lnX21vZHVsZXMvdG9nZ2xlLWhlYWRlcidcclxuaW1wb3J0IG1lcmdlQ2VsbHNJbml0IGZyb20gJy4uL3d5c2l3eWdfbW9kdWxlcy9tZXJnZS1jZWxscydcclxuaW1wb3J0IHNwbGl0SCBmcm9tICcuLi93eXNpd3lnX21vZHVsZXMvc3BsaXQtaG9yaXpvbnRhbGx5J1xyXG5pbXBvcnQgc3BsaXRWIGZyb20gJy4uL3d5c2l3eWdfbW9kdWxlcy9zcGxpdC12ZXJ0aWNhbGx5J1xyXG5pbXBvcnQgYWRkQ29sIGZyb20gJy4uL3d5c2l3eWdfbW9kdWxlcy9hZGQtY29sdW1uJ1xyXG5pbXBvcnQgYWRkUm93IGZyb20gJy4uL3d5c2l3eWdfbW9kdWxlcy9hZGQtcm93J1xyXG5pbXBvcnQgcmVtb3ZlQ29sIGZyb20gJy4uL3d5c2l3eWdfbW9kdWxlcy9yZW1vdmUtY29sdW1uJ1xyXG5pbXBvcnQgcmVtb3ZlUm93IGZyb20gJy4uL3d5c2l3eWdfbW9kdWxlcy9yZW1vdmUtcm93J1xyXG5pbXBvcnQgZm9ybWF0RmFjdG9yeSBmcm9tICcuLi91dGlscy9mb3JtYXRGYWN0b3J5LmpzJ1xyXG5pbXBvcnQgc2x1Z2lmeSBmcm9tICdzbHVnaWZ5J1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcIkNyZWF0ZVRhYmxlUGFnZVwiLFxyXG4gICAgZGF0YSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICByZXBlYXRhYmxlUm93OiBmYWxzZSxcclxuICAgICAgICAgICAgcmVkaXBzOiB7fSxcclxuICAgICAgICAgICAgcmVwZWF0YWJsZVJvd0RlZmF1bHRIVE1MOlxyXG4gICAgICAgICAgICAgICAgYDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWJvcmRlcmVkXCI+XHJcbiAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICA8L3RhYmxlPmAsXHJcbiAgICAgICAgICAgIGVycm9yOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgIHJlcGVhdGFibGVSb3cgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXBlYXRhYmxlU3VtbWVybm90ZUluaXQoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5zdW1tZXJub3RlSW5pdCgpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBvbkhhbmRsZUJhY2sgKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIuYmFjaygpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkhhbmRsZUNoYW5nZSAoZGF0YSkge1xyXG4gICAgICAgICAgIGRhdGEudGFyZ2V0LnZhbHVlID8gdGhpcy5lcnJvciA9ICcnIDogdGhpcy5lcnJvciA9IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uSGFuZGxlQ29udGludWUgKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50aXRsZSAmJiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydqb3VybmFsU3RhdGUvZ2V0Sm91cm5hbE5hbWUnXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdqb3VybmFsU3RhdGUvYWRkVGFibGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHNsdWdpZnkodGhpcy50aXRsZSwgJ18nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogdGhpcy5yZXBlYXRhYmxlUm93ID8gJCgnI3JlcGVhdGFibGVTdW1tZXJub3RlJykuc3VtbWVybm90ZSgnY29kZScpIDogJCgnI3N1bW1lcm5vdGUnKS5zdW1tZXJub3RlKCdjb2RlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdGFibGVfcm93OiB0aGlzLnJlcGVhdGFibGVSb3dcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaChgL2pvdXJuYWwvJHt0aGlzLiRyb3V0ZS5wYXJhbXMuam91cm5hbE5hbWV9L3RhYmxlLyR7c2x1Z2lmeSh0aGlzLnRpdGxlLCAnXycpfS9lZGl0X2RhdGFgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCF0aGlzLiRzdG9yZS5nZXR0ZXJzWydqb3VybmFsU3RhdGUvZ2V0Sm91cm5hbE5hbWUnXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5lcnJvciA9IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uRm9ybWF0SHRtbCAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlcGVhdGFibGVSb3cpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2RlID0gJCgnI3JlcGVhdGFibGVTdW1tZXJub3RlJykuc3VtbWVybm90ZSgnY29kZScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvcm1hdHRlZENvZGUgPSBmb3JtYXRGYWN0b3J5KGNvZGUpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3JlcGVhdGFibGVTdW1tZXJub3RlJykuc3VtbWVybm90ZSgnY29kZScsIGZvcm1hdHRlZENvZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvZGUgPSAkKCcjc3VtbWVybm90ZScpLnN1bW1lcm5vdGUoJ2NvZGUnKTtcclxuICAgICAgICAgICAgICAgIGxldCBmb3JtYXR0ZWRDb2RlID0gZm9ybWF0RmFjdG9yeShjb2RlKTtcclxuICAgICAgICAgICAgICAgICQoJyNzdW1tZXJub3RlJykuc3VtbWVybm90ZSgnY29kZScsIGZvcm1hdHRlZENvZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWRpcHNJbml0ICgpIHtcclxuICAgICAgICAgICAgbGV0IF90aGlzID0gdGhpc1xyXG4gICAgICAgICAgICBfdGhpcy5yZWRpcHMuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBydCA9IFJFRElQUy50YWJsZTtcclxuICAgICAgICAgICAgICAgIHJ0Lm9ubW91c2Vkb3duKCdyZWRpcHNUYWJsZScsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJ0LmNvbG9yLmNlbGwgPSAnIzlCQjNEQSc7XHJcblxyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVkaXBzLm1lcmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFJFRElQUy50YWJsZS5tZXJnZSgnaCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBSRURJUFMudGFibGUubWVyZ2UoJ3YnKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVkaXBzLnNwbGl0ID0gZnVuY3Rpb24gKG1vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBSRURJUFMudGFibGUuc3BsaXQobW9kZSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIF90aGlzLnJlZGlwcy5yb3cgPSBmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFJFRElQUy50YWJsZS5yb3coJ3JlZGlwc1RhYmxlJywgdHlwZSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIF90aGlzLnJlZGlwcy5jb2x1bW4gPSBmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFJFRElQUy50YWJsZS5jb2x1bW4oJ3JlZGlwc1RhYmxlJywgdHlwZSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB3aW5kb3cucmVkaXBzID0gX3RoaXMucmVkaXBzXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXBlYXRhYmxlU3VtbWVybm90ZUluaXQgKCkge1xyXG4gICAgICAgICAgICBsZXQgX3RoaXMgPSB0aGlzXHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCgnI3JlcGVhdGFibGVTdW1tZXJub3RlJykuc3VtbWVybm90ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBmb2N1czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnc3R5bGUnLCBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdjbGVhciddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydmb250JywgWydzdHJpa2V0aHJvdWdoJywgJ3N1cGVyc2NyaXB0JywgJ3N1YnNjcmlwdCddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydmb250c2l6ZScsIFsnZm9udHNpemUnXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnY29sb3InLCBbJ2NvbG9yJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ3BhcmEnLCBbJ3VsJywgJ29sJywgJ3BhcmFncmFwaCddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydoZWlnaHQnLCBbJ2hlaWdodCddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydpbnNlcnQnLCBbJ2xpbmsnLCAnaHInXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnbWlzaycsIFsndW5kbycsICdyZWRvJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ3ZpZXcnLCBbJ2Z1bGxzY3JlZW4nLCAnY29kZXZpZXcnXV1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnYWRkJywgWydhZGRDb2x1bW5QbHVnaW4nXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2RlbGV0ZScsIFsncmVtb3ZlQ29sdW1uUGx1Z2luJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWydjdXN0b20nLCBbJ2NlbGxIZWFkZXInXV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJCgnI3JlcGVhdGFibGVTdW1tZXJub3RlJykub24oJ3N1bW1lcm5vdGUuY2hhbmdlJywgZnVuY3Rpb24od2UsIGNvbnRlbnRzLCAkZWRpdGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VtbWVybm90ZVxcJ3MgY29udGVudCBpcyBjaGFuZ2VkLicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFibGUgPSAkKCcubm90ZS1lZGl0YWJsZSB0YWJsZTpmaXJzdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhYmxlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5hdHRyKCdpZCcsICdyZWRpcHNUYWJsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlZGlwcy5pbml0KClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSAnPHA+PGJyPjwvcD4nIGluc2lkZSB0YWJsZXNcclxuICAgICAgICAgICAgICAgICAgICAvLyAoc3VtbWVybm90ZSBjcmVhdGVzIHRoZW0gd2hlbiBuZXN0aW5nIHRhYmxlIGluIHRhYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1c2VsZXNzUGFyYWdyYXBocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RhYmxlIHAnKSwgaTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdXNlbGVzc1BhcmFncmFwaHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHAgPSB1c2VsZXNzUGFyYWdyYXBoc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICQoJyNyZXBlYXRhYmxlU3VtbWVybm90ZScpLnN1bW1lcm5vdGUoJ2NvZGUnLCBfdGhpcy5yZXBlYXRhYmxlUm93RGVmYXVsdEhUTUwpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdW1tZXJub3RlSW5pdCAoKSB7XHJcbiAgICAgICAgICAgIGxldCBfdGhpcyA9IHRoaXNcclxuICAgICAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjc3VtbWVybm90ZScpLnN1bW1lcm5vdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ3N0eWxlJywgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnY2xlYXInXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnZm9udCcsIFsnc3RyaWtldGhyb3VnaCcsICdzdXBlcnNjcmlwdCcsICdzdWJzY3JpcHQnXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnZm9udHNpemUnLCBbJ2ZvbnRzaXplJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2NvbG9yJywgWydjb2xvciddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydwYXJhJywgWyd1bCcsICdvbCcsICdwYXJhZ3JhcGgnXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnaGVpZ2h0JywgWydoZWlnaHQnXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnaW5zZXJ0JywgWyd0YWJsZScsICdsaW5rJywgJ2hyJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ21pc2snLCBbJ3VuZG8nLCAncmVkbyddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWyd2aWV3JywgWydmdWxsc2NyZWVuJywgJ2NvZGV2aWV3J11dXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBwb3BvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2FkZCcsIFsnYWRkQ29sdW1uUGx1Z2luJywgJ2FkZFJvd1BsdWdpbiddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnZGVsZXRlJywgWydyZW1vdmVDb2x1bW5QbHVnaW4nLCAncmVtb3ZlUm93UGx1Z2luJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWydzcGxpdCcsIFsnc3BsaXRIJywgJ3NwbGl0ViddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnY3VzdG9tJywgWydjZWxsSGVhZGVyJywgJ21lcmdlQ2VsbHMnXV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJCgnI3N1bW1lcm5vdGUnKS5vbignc3VtbWVybm90ZS5jaGFuZ2UnLCBmdW5jdGlvbiAod2UsIGNvbnRlbnRzLCAkZWRpdGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VtbWVybm90ZVxcJ3MgY29udGVudCBpcyBjaGFuZ2VkLicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFibGUgPSAkKCcubm90ZS1lZGl0YWJsZSB0YWJsZTpmaXJzdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhYmxlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5hdHRyKCdpZCcsICdyZWRpcHNUYWJsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlZGlwcy5pbml0KClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSAnPHA+PGJyPjwvcD4nIGluc2lkZSB0YWJsZXNcclxuICAgICAgICAgICAgICAgICAgICAvLyAoc3VtbWVybm90ZSBjcmVhdGVzIHRoZW0gd2hlbiBuZXN0aW5nIHRhYmxlIGluIHRhYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1c2VsZXNzUGFyYWdyYXBocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RhYmxlIHAnKSwgaTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdXNlbGVzc1BhcmFncmFwaHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHAgPSB1c2VsZXNzUGFyYWdyYXBoc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJCgnI3N1bW1lcm5vdGUnKS5zdW1tZXJub3RlKCdjb2RlJywgJycpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQgKCkge1xyXG4gICAgICAgIGxldCBfdGhpcyA9IHRoaXNcclxuICAgICAgICBfdGhpcy5yZWRpcHNJbml0KClcclxuICAgICAgICB0b2dnbGVIZWFkZXJJbml0KCk7XHJcbiAgICAgICAgbWVyZ2VDZWxsc0luaXQoKTtcclxuICAgICAgICBzcGxpdEgoKVxyXG4gICAgICAgIHNwbGl0VigpXHJcbiAgICAgICAgYWRkQ29sKClcclxuICAgICAgICBhZGRSb3coKVxyXG4gICAgICAgIHJlbW92ZUNvbCgpXHJcbiAgICAgICAgcmVtb3ZlUm93KClcclxuICAgICAgICBfdGhpcy5zdW1tZXJub3RlSW5pdCgpXHJcbiAgICAgICAgX3RoaXMucmVwZWF0YWJsZVN1bW1lcm5vdGVJbml0KClcclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5jcmVhdGUtdGFibGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5jcmVhdGUtdGFibGUgPiBoMi50aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5lcnJvciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDEwOCwgMTA4KTtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmZvcm0ge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uZm9ybS1jaGVjayBsYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuLnd5c2l3eWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi53eXNpd3lnIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG59XHJcbi53eXNpd3lnIC50aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5idG5zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG48L3N0eWxlPiJdLCJzb3VyY2VSb290IjoiIn0=