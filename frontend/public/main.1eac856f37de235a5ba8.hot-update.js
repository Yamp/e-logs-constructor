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
      console.log(_this.redips);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL0NyZWF0ZVRhYmxlUGFnZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLGVBREE7QUFFQSwwQkFGQTtBQUdBLGdCQUhBO0FBSUEsdWdDQUpBO0FBcUNBO0FBckNBO0FBdUNBLEdBMUNBO0FBMkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQURBLDBCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsa0JBSkEsMEJBSUEsSUFKQSxFQUlBO0FBQ0E7QUFDQSxLQU5BO0FBT0Esb0JBUEEsOEJBT0E7QUFDQTtBQUNBLG9EQUNBO0FBQ0EsMkJBREE7QUFFQSxnRkFGQTtBQUdBLG9CQUhBO0FBSUEsd0hBSkE7QUFLQTtBQUxBLFNBREE7QUFTQTtBQUNBLE9BWEEsTUFZQTtBQUNBO0FBQ0EsT0FGQSxNQUdBO0FBQ0EsS0F4QkE7QUF5QkEsZ0JBekJBLDBCQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQSxNQUtBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLEtBcENBO0FBcUNBLGNBckNBLHdCQXFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBSEE7O0FBS0E7QUFDQTtBQUNBLFNBRkE7O0FBSUE7QUFDQTtBQUNBLFNBRkE7O0FBSUE7QUFDQTtBQUNBLFNBRkE7QUFHQSxPQXRCQTs7QUF1QkE7QUFDQTtBQUNBLEtBakVBO0FBa0VBLDRCQWxFQSxzQ0FrRUE7QUFDQTtBQUNBOztBQUNBO0FBQ0EscUJBREE7QUFFQSx5QkFGQTtBQUdBLHlCQUhBO0FBSUEscUJBSkE7QUFLQSxvQkFDQSxtREFEQSxFQUVBLHVEQUZBLEVBR0EsMEJBSEEsRUFJQSxvQkFKQSxFQUtBLG1DQUxBLEVBTUEsc0JBTkEsRUFPQSwwQkFQQSxFQVFBLDBCQVJBLEVBU0Esb0NBVEEsQ0FMQTtBQWdCQTtBQUNBLG9CQUNBLDRCQURBLEVBRUEsa0NBRkEsRUFHQSwwQkFIQTtBQURBO0FBaEJBO0FBeUJBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0EsV0FQQSxDQVNBO0FBQ0E7OztBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQWhCQTtBQWtCQTtBQUNBLE9BOUNBO0FBK0NBLEtBbEhBO0FBbUhBLGtCQW5IQSw0QkFtSEE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBREE7QUFFQSx5QkFGQTtBQUdBLHlCQUhBO0FBSUEscUJBSkE7QUFLQSxvQkFDQSxtREFEQSxFQUVBLHVEQUZBLEVBR0EsMEJBSEEsRUFJQSxvQkFKQSxFQUtBLG1DQUxBLEVBTUEsc0JBTkEsRUFPQSxtQ0FQQSxFQVFBLDBCQVJBLEVBU0Esb0NBVEEsQ0FMQTtBQWdCQTtBQUNBLG9CQUNBLDRDQURBLEVBRUEscURBRkEsRUFHQSwrQkFIQSxFQUlBLHdDQUpBO0FBREE7QUFoQkE7QUEwQkE7QUFDQTtBQUVBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxXQVBBLENBU0E7QUFDQTs7O0FBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBaEJBO0FBaUJBLE9BOUNBO0FBK0NBO0FBbktBLEdBbkRBO0FBd05BLFNBeE5BLHFCQXdOQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLEtBRkEsTUFHQTtBQUNBO0FBQ0E7QUFDQTtBQXpPQSxHIiwiZmlsZSI6Im1haW4uMWVhYzg1NmYzN2RlMjM1YTViYTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJjcmVhdGUtdGFibGVcIj5cclxuICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPtCh0L7Qt9C00LDQvdC40LUg0YHQtdC60YbQuNC4PC9oMj5cclxuICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm1cIiBAc3VibWl0LnByZXZlbnQ9XCJvbkhhbmRsZUNvbnRpbnVlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwi0JfQsNCz0L7Qu9C+0LLQvtC6XCIgQGlucHV0PVwib25IYW5kbGVDaGFuZ2VcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgaWQ9XCJyZXBlYXRhYmxlUm93XCIgdi1tb2RlbD1cInJlcGVhdGFibGVSb3dcIiBAY2hhbmdlPVwib25IYW5kbGVDaGFuZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJyZXBlYXRhYmxlUm93XCI+0J/QvtCy0YLQvtGA0Y/RjtGJ0LjQtdGB0Y8g0YHRgtGA0L7QutC4PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgdi1zaG93PVwiZXJyb3JcIiBjbGFzcz1cImVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICDQktCy0LXQtNC40YLQtSDQt9Cw0LPQvtC70L7QstC+0LpcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3eXNpd3lnXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInRpdGxlXCI+0KHQvtC30LTQsNC90LjQtSDRgdGC0YDRg9C60YLRg9GA0Ysg0YLQsNCx0LvQuNGG0Ys8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCIhcmVwZWF0YWJsZVJvd1wiIGlkPVwic3VtbWVybm90ZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJyZXBlYXRhYmxlUm93XCIgaWQ9XCJyZXBlYXRhYmxlU3VtbWVybm90ZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgQGNsaWNrPVwib25IYW5kbGVCYWNrXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDE0cHhcIj7QndCw0LfQsNC0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgQGNsaWNrPVwib25Gb3JtYXRIdG1sXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDE0cHhcIj5Gb3JtYXRlIGh0bWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBAY2xpY2sucHJldmVudD1cIm9uSGFuZGxlQ29udGludWVcIiB0eXBlPVwic3VibWl0XCI+0J/RgNC+0LTQvtC70LbQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8vIGltcG9ydCAnanF1ZXJ5J1xyXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcDMvZGlzdC9qcy9ucG0nO1xyXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcDMvZGlzdC9qcy9ib290c3RyYXAnO1xyXG4vLyBpbXBvcnQgJ3N1bW1lcm5vdGUvZGlzdC9zdW1tZXJub3RlLmNzcydcclxuLy8gaW1wb3J0ICdzdW1tZXJub3RlL2Rpc3Qvc3VtbWVybm90ZSdcclxuXHJcbmltcG9ydCB0b2dnbGVIZWFkZXJJbml0IGZyb20gJy4uL3d5c2l3eWdfbW9kdWxlcy90b2dnbGUtaGVhZGVyJ1xyXG5pbXBvcnQgbWVyZ2VDZWxsc0luaXQgZnJvbSAnLi4vd3lzaXd5Z19tb2R1bGVzL21lcmdlLWNlbGxzJ1xyXG5pbXBvcnQgc3BsaXRIIGZyb20gJy4uL3d5c2l3eWdfbW9kdWxlcy9zcGxpdC1ob3Jpem9udGFsbHknXHJcbmltcG9ydCBzcGxpdFYgZnJvbSAnLi4vd3lzaXd5Z19tb2R1bGVzL3NwbGl0LXZlcnRpY2FsbHknXHJcbmltcG9ydCBhZGRDb2wgZnJvbSAnLi4vd3lzaXd5Z19tb2R1bGVzL2FkZC1jb2x1bW4nXHJcbmltcG9ydCBhZGRSb3cgZnJvbSAnLi4vd3lzaXd5Z19tb2R1bGVzL2FkZC1yb3cnXHJcbmltcG9ydCByZW1vdmVDb2wgZnJvbSAnLi4vd3lzaXd5Z19tb2R1bGVzL3JlbW92ZS1jb2x1bW4nXHJcbmltcG9ydCByZW1vdmVSb3cgZnJvbSAnLi4vd3lzaXd5Z19tb2R1bGVzL3JlbW92ZS1yb3cnXHJcbmltcG9ydCBmb3JtYXRGYWN0b3J5IGZyb20gJy4uL3V0aWxzL2Zvcm1hdEZhY3RvcnkuanMnXHJcbmltcG9ydCBzbHVnaWZ5IGZyb20gJ3NsdWdpZnknXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiQ3JlYXRlVGFibGVQYWdlXCIsXHJcbiAgICBkYXRhICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgIHJlcGVhdGFibGVSb3c6IGZhbHNlLFxyXG4gICAgICAgICAgICByZWRpcHM6IHt9LFxyXG4gICAgICAgICAgICByZXBlYXRhYmxlUm93RGVmYXVsdEhUTUw6XHJcbiAgICAgICAgICAgICAgICBgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtYm9yZGVyZWRcIj5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+YCxcclxuICAgICAgICAgICAgZXJyb3I6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIHdhdGNoOiB7XHJcbiAgICAvLyAgICAgcmVwZWF0YWJsZVJvdyAodmFsdWUpIHtcclxuICAgIC8vICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnJlcGVhdGFibGVTdW1tZXJub3RlSW5pdCgpXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgZWxzZSB0aGlzLnN1bW1lcm5vdGVJbml0KClcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uSGFuZGxlQmFjayAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5iYWNrKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uSGFuZGxlQ2hhbmdlIChkYXRhKSB7XHJcbiAgICAgICAgICAgZGF0YS50YXJnZXQudmFsdWUgPyB0aGlzLmVycm9yID0gJycgOiB0aGlzLmVycm9yID0gdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25IYW5kbGVDb250aW51ZSAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpdGxlICYmIHRoaXMuJHN0b3JlLmdldHRlcnNbJ2pvdXJuYWxTdGF0ZS9nZXRKb3VybmFsTmFtZSddKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2pvdXJuYWxTdGF0ZS9hZGRUYWJsZScsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogc2x1Z2lmeSh0aGlzLnRpdGxlLCAnXycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sOiB0aGlzLnJlcGVhdGFibGVSb3cgPyAkKCcjcmVwZWF0YWJsZVN1bW1lcm5vdGUnKS5zdW1tZXJub3RlKCdjb2RlJykgOiAkKCcjc3VtbWVybm90ZScpLnN1bW1lcm5vdGUoJ2NvZGUnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0YWJsZV9yb3c6IHRoaXMucmVwZWF0YWJsZVJvd1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKGAvam91cm5hbC8ke3RoaXMuJHJvdXRlLnBhcmFtcy5qb3VybmFsTmFtZX0vdGFibGUvJHtzbHVnaWZ5KHRoaXMudGl0bGUsICdfJyl9L2VkaXRfZGF0YWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMuJHN0b3JlLmdldHRlcnNbJ2pvdXJuYWxTdGF0ZS9nZXRKb3VybmFsTmFtZSddKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB0aGlzLmVycm9yID0gdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Gb3JtYXRIdG1sICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVwZWF0YWJsZVJvdykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvZGUgPSAkKCcjcmVwZWF0YWJsZVN1bW1lcm5vdGUnKS5zdW1tZXJub3RlKCdjb2RlJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm9ybWF0dGVkQ29kZSA9IGZvcm1hdEZhY3RvcnkoY29kZSk7XHJcbiAgICAgICAgICAgICAgICAkKCcjcmVwZWF0YWJsZVN1bW1lcm5vdGUnKS5zdW1tZXJub3RlKCdjb2RlJywgZm9ybWF0dGVkQ29kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29kZSA9ICQoJyNzdW1tZXJub3RlJykuc3VtbWVybm90ZSgnY29kZScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvcm1hdHRlZENvZGUgPSBmb3JtYXRGYWN0b3J5KGNvZGUpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3N1bW1lcm5vdGUnKS5zdW1tZXJub3RlKCdjb2RlJywgZm9ybWF0dGVkQ29kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZGlwc0luaXQgKCkge1xyXG4gICAgICAgICAgICBsZXQgX3RoaXMgPSB0aGlzXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKF90aGlzLnJlZGlwcylcclxuICAgICAgICAgICAgX3RoaXMucmVkaXBzLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcnQgPSBSRURJUFMudGFibGU7XHJcbiAgICAgICAgICAgICAgICBydC5vbm1vdXNlZG93bigncmVkaXBzVGFibGUnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBydC5jb2xvci5jZWxsID0gJyM5QkIzREEnO1xyXG5cclxuICAgICAgICAgICAgICAgIF90aGlzLnJlZGlwcy5tZXJnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBSRURJUFMudGFibGUubWVyZ2UoJ2gnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgUkVESVBTLnRhYmxlLm1lcmdlKCd2Jyk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIF90aGlzLnJlZGlwcy5zcGxpdCA9IGZ1bmN0aW9uIChtb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUkVESVBTLnRhYmxlLnNwbGl0KG1vZGUpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZWRpcHMucm93ID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBSRURJUFMudGFibGUucm93KCdyZWRpcHNUYWJsZScsIHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZWRpcHMuY29sdW1uID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBSRURJUFMudGFibGUuY29sdW1uKCdyZWRpcHNUYWJsZScsIHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgd2luZG93LnJlZGlwcyA9IF90aGlzLnJlZGlwc1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhfdGhpcy5yZWRpcHMpXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXBlYXRhYmxlU3VtbWVybm90ZUluaXQgKCkge1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGxldCBfdGhpcyA9IHRoaXNcclxuICAgICAgICAgICAgICAgICQoJyNyZXBlYXRhYmxlU3VtbWVybm90ZScpLnN1bW1lcm5vdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ3N0eWxlJywgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnY2xlYXInXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnZm9udCcsIFsnc3RyaWtldGhyb3VnaCcsICdzdXBlcnNjcmlwdCcsICdzdWJzY3JpcHQnXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnZm9udHNpemUnLCBbJ2ZvbnRzaXplJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2NvbG9yJywgWydjb2xvciddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydwYXJhJywgWyd1bCcsICdvbCcsICdwYXJhZ3JhcGgnXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnaGVpZ2h0JywgWydoZWlnaHQnXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnaW5zZXJ0JywgWydsaW5rJywgJ2hyJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ21pc2snLCBbJ3VuZG8nLCAncmVkbyddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWyd2aWV3JywgWydmdWxsc2NyZWVuJywgJ2NvZGV2aWV3J11dXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBwb3BvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2FkZCcsIFsnYWRkQ29sdW1uUGx1Z2luJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWydkZWxldGUnLCBbJ3JlbW92ZUNvbHVtblBsdWdpbiddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnY3VzdG9tJywgWydjZWxsSGVhZGVyJ11dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICQoJyNyZXBlYXRhYmxlU3VtbWVybm90ZScpLm9uKCdzdW1tZXJub3RlLmNoYW5nZScsIGZ1bmN0aW9uKHdlLCBjb250ZW50cywgJGVkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1bW1lcm5vdGVcXCdzIGNvbnRlbnQgaXMgY2hhbmdlZC4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhYmxlID0gJCgnLm5vdGUtZWRpdGFibGUgdGFibGU6Zmlyc3QnKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWJsZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuYXR0cignaWQnLCAncmVkaXBzVGFibGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZWRpcHMuaW5pdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgJzxwPjxicj48L3A+JyBpbnNpZGUgdGFibGVzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gKHN1bW1lcm5vdGUgY3JlYXRlcyB0aGVtIHdoZW4gbmVzdGluZyB0YWJsZSBpbiB0YWJsZSlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXNlbGVzc1BhcmFncmFwaHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0YWJsZSBwJyksIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHVzZWxlc3NQYXJhZ3JhcGhzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwID0gdXNlbGVzc1BhcmFncmFwaHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjcmVwZWF0YWJsZVN1bW1lcm5vdGUnKS5zdW1tZXJub3RlKCdjb2RlJywgX3RoaXMucmVwZWF0YWJsZVJvd0RlZmF1bHRIVE1MKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VtbWVybm90ZUluaXQgKCkge1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGxldCBfdGhpcyA9IHRoaXNcclxuXHJcbiAgICAgICAgICAgICAgICAkKCcjc3VtbWVybm90ZScpLnN1bW1lcm5vdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ3N0eWxlJywgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnY2xlYXInXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnZm9udCcsIFsnc3RyaWtldGhyb3VnaCcsICdzdXBlcnNjcmlwdCcsICdzdWJzY3JpcHQnXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnZm9udHNpemUnLCBbJ2ZvbnRzaXplJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2NvbG9yJywgWydjb2xvciddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydwYXJhJywgWyd1bCcsICdvbCcsICdwYXJhZ3JhcGgnXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnaGVpZ2h0JywgWydoZWlnaHQnXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnaW5zZXJ0JywgWyd0YWJsZScsICdsaW5rJywgJ2hyJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ21pc2snLCBbJ3VuZG8nLCAncmVkbyddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWyd2aWV3JywgWydmdWxsc2NyZWVuJywgJ2NvZGV2aWV3J11dXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBwb3BvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2FkZCcsIFsnYWRkQ29sdW1uUGx1Z2luJywgJ2FkZFJvd1BsdWdpbiddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnZGVsZXRlJywgWydyZW1vdmVDb2x1bW5QbHVnaW4nLCAncmVtb3ZlUm93UGx1Z2luJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWydzcGxpdCcsIFsnc3BsaXRIJywgJ3NwbGl0ViddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnY3VzdG9tJywgWydjZWxsSGVhZGVyJywgJ21lcmdlQ2VsbHMnXV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgJCgnI3N1bW1lcm5vdGUnKS5vbignc3VtbWVybm90ZS5jaGFuZ2UnLCBmdW5jdGlvbiAod2UsIGNvbnRlbnRzLCAkZWRpdGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VtbWVybm90ZVxcJ3MgY29udGVudCBpcyBjaGFuZ2VkLicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGFibGUgPSAkKCcubm90ZS1lZGl0YWJsZSB0YWJsZTpmaXJzdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhYmxlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZS5hdHRyKCdpZCcsICdyZWRpcHNUYWJsZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnJlZGlwcy5pbml0KClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSAnPHA+PGJyPjwvcD4nIGluc2lkZSB0YWJsZXNcclxuICAgICAgICAgICAgICAgICAgICAvLyAoc3VtbWVybm90ZSBjcmVhdGVzIHRoZW0gd2hlbiBuZXN0aW5nIHRhYmxlIGluIHRhYmxlKVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1c2VsZXNzUGFyYWdyYXBocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RhYmxlIHAnKSwgaTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdXNlbGVzc1BhcmFncmFwaHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHAgPSB1c2VsZXNzUGFyYWdyYXBoc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkICgpIHtcclxuICAgICAgICBsZXQgX3RoaXMgPSB0aGlzXHJcbiAgICAgICAgX3RoaXMucmVkaXBzSW5pdCgpXHJcbiAgICAgICAgdG9nZ2xlSGVhZGVySW5pdCgpO1xyXG4gICAgICAgIG1lcmdlQ2VsbHNJbml0KCk7XHJcbiAgICAgICAgc3BsaXRIKClcclxuICAgICAgICBzcGxpdFYoKVxyXG4gICAgICAgIGFkZENvbCgpXHJcbiAgICAgICAgYWRkUm93KClcclxuICAgICAgICByZW1vdmVDb2woKVxyXG4gICAgICAgIHJlbW92ZVJvdygpXHJcbiAgICAgICAgaWYgKF90aGlzLnJlcGVhdGFibGVSb3cpIHtcclxuICAgICAgICAgICAgX3RoaXMucmVwZWF0YWJsZVN1bW1lcm5vdGVJbml0KClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIF90aGlzLnN1bW1lcm5vdGVJbml0KClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uY3JlYXRlLXRhYmxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uY3JlYXRlLXRhYmxlID4gaDIudGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uZXJyb3Ige1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAxMDgsIDEwOCk7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5mb3JtIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmZvcm0tY2hlY2sgbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi53eXNpd3lnIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ud3lzaXd5ZyAubW9kYWwtZGlhbG9nIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG4ud3lzaXd5ZyAudGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uYnRucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9