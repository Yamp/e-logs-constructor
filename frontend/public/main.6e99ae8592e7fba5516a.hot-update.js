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
        $('#summernote').summernote('code', this.repeatableRowDefaultHTML);
      } else {
        $('#summernote').summernote('code', '');
      }
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
          html: $('#summernote').summernote('code'),
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
      });
    }
  },
  mounted: function mounted() {
    this.redipsInit();
    Object(_wysiwyg_modules_toggle_header__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(_wysiwyg_modules_merge_cells__WEBPACK_IMPORTED_MODULE_5__["default"])();
    Object(_wysiwyg_modules_split_horizontally__WEBPACK_IMPORTED_MODULE_6__["default"])();
    Object(_wysiwyg_modules_split_vertically__WEBPACK_IMPORTED_MODULE_7__["default"])();
    Object(_wysiwyg_modules_add_column__WEBPACK_IMPORTED_MODULE_8__["default"])();
    Object(_wysiwyg_modules_add_row__WEBPACK_IMPORTED_MODULE_9__["default"])();
    Object(_wysiwyg_modules_remove_column__WEBPACK_IMPORTED_MODULE_10__["default"])();
    Object(_wysiwyg_modules_remove_row__WEBPACK_IMPORTED_MODULE_11__["default"])();
    this.summernoteInit();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL0NyZWF0ZVRhYmxlUGFnZS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0EsZUFEQTtBQUVBLDBCQUZBO0FBR0EsZ0JBSEE7QUFJQSx1Z0NBSkE7QUFxQ0E7QUFyQ0E7QUF1Q0EsR0ExQ0E7QUEyQ0E7QUFDQSxpQkFEQSx5QkFDQSxLQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBUkEsR0EzQ0E7QUFxREE7QUFDQSxnQkFEQSwwQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLGtCQUpBLDBCQUlBLElBSkEsRUFJQTtBQUNBO0FBQ0EsS0FOQTtBQU9BLG9CQVBBLDhCQU9BO0FBQ0E7QUFDQSxvREFDQTtBQUNBLDJCQURBO0FBRUEsZ0ZBRkE7QUFHQSxvQkFIQTtBQUlBLG1EQUpBO0FBS0E7QUFMQSxTQURBO0FBU0E7QUFDQSxPQVhBLE1BWUE7QUFDQTtBQUNBLE9BRkEsTUFHQTtBQUNBLEtBeEJBO0FBeUJBLGdCQXpCQSwwQkF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkEsTUFLQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7QUFDQSxLQXBDQTtBQXFDQSxjQXJDQSx3QkFxQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUhBOztBQUtBO0FBQ0E7QUFDQSxTQUZBOztBQUlBO0FBQ0E7QUFDQSxTQUZBOztBQUlBO0FBQ0E7QUFDQSxTQUZBO0FBR0EsT0F0QkE7O0FBdUJBO0FBQ0EsS0EvREE7QUFnRUEsa0JBaEVBLDRCQWdFQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLHlCQUZBO0FBR0EseUJBSEE7QUFJQSxxQkFKQTtBQUtBLG9CQUNBLG1EQURBLEVBRUEsdURBRkEsRUFHQSwwQkFIQSxFQUlBLG9CQUpBLEVBS0EsbUNBTEEsRUFNQSxzQkFOQSxFQU9BLG1DQVBBLEVBUUEsMEJBUkEsRUFTQSxvQ0FUQSxDQUxBO0FBZ0JBO0FBQ0Esb0JBQ0EsNENBREEsRUFFQSxxREFGQSxFQUdBLCtCQUhBLEVBSUEsd0NBSkE7QUFEQTtBQWhCQTtBQXlCQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBLFdBUEEsQ0FTQTtBQUNBOzs7QUFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FoQkE7QUFpQkEsT0EzQ0E7QUE0Q0E7QUE5R0EsR0FyREE7QUFxS0EsU0FyS0EscUJBcUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhMQSxHIiwiZmlsZSI6Im1haW4uNmU5OWFlODU5MmU3ZmJhNTUxNmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJjcmVhdGUtdGFibGVcIj5cclxuICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPtCh0L7Qt9C00LDQvdC40LUg0YHQtdC60YbQuNC4PC9oMj5cclxuICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm1cIiBAc3VibWl0LnByZXZlbnQ9XCJvbkhhbmRsZUNvbnRpbnVlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHYtbW9kZWw9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwi0JfQsNCz0L7Qu9C+0LLQvtC6XCIgQGlucHV0PVwib25IYW5kbGVDaGFuZ2VcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgaWQ9XCJyZXBlYXRhYmxlUm93XCIgdi1tb2RlbD1cInJlcGVhdGFibGVSb3dcIiBAY2hhbmdlPVwib25IYW5kbGVDaGFuZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJyZXBlYXRhYmxlUm93XCI+0J/QvtCy0YLQvtGA0Y/RjtGJ0LjQtdGB0Y8g0YHRgtGA0L7QutC4PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgdi1zaG93PVwiZXJyb3JcIiBjbGFzcz1cImVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICDQktCy0LXQtNC40YLQtSDQt9Cw0LPQvtC70L7QstC+0LpcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3eXNpd3lnXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInRpdGxlXCI+0KHQvtC30LTQsNC90LjQtSDRgdGC0YDRg9C60YLRg9GA0Ysg0YLQsNCx0LvQuNGG0Ys8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwic3VtbWVybm90ZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuc1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgQGNsaWNrPVwib25IYW5kbGVCYWNrXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDE0cHhcIj7QndCw0LfQsNC0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgQGNsaWNrPVwib25Gb3JtYXRIdG1sXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDE0cHhcIj5Gb3JtYXRlIGh0bWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBAY2xpY2sucHJldmVudD1cIm9uSGFuZGxlQ29udGludWVcIiB0eXBlPVwic3VibWl0XCI+0J/RgNC+0LTQvtC70LbQuNGC0Yw8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbi8vIGltcG9ydCAnanF1ZXJ5J1xyXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcDMvZGlzdC9qcy9ucG0nO1xyXG4vLyBpbXBvcnQgJ2Jvb3RzdHJhcDMvZGlzdC9qcy9ib290c3RyYXAnO1xyXG4vLyBpbXBvcnQgJ3N1bW1lcm5vdGUvZGlzdC9zdW1tZXJub3RlLmNzcydcclxuLy8gaW1wb3J0ICdzdW1tZXJub3RlL2Rpc3Qvc3VtbWVybm90ZSdcclxuXHJcbmltcG9ydCB0b2dnbGVIZWFkZXJJbml0IGZyb20gJy4uL3d5c2l3eWdfbW9kdWxlcy90b2dnbGUtaGVhZGVyJ1xyXG5pbXBvcnQgbWVyZ2VDZWxsc0luaXQgZnJvbSAnLi4vd3lzaXd5Z19tb2R1bGVzL21lcmdlLWNlbGxzJ1xyXG5pbXBvcnQgc3BsaXRIIGZyb20gJy4uL3d5c2l3eWdfbW9kdWxlcy9zcGxpdC1ob3Jpem9udGFsbHknXHJcbmltcG9ydCBzcGxpdFYgZnJvbSAnLi4vd3lzaXd5Z19tb2R1bGVzL3NwbGl0LXZlcnRpY2FsbHknXHJcbmltcG9ydCBhZGRDb2wgZnJvbSAnLi4vd3lzaXd5Z19tb2R1bGVzL2FkZC1jb2x1bW4nXHJcbmltcG9ydCBhZGRSb3cgZnJvbSAnLi4vd3lzaXd5Z19tb2R1bGVzL2FkZC1yb3cnXHJcbmltcG9ydCByZW1vdmVDb2wgZnJvbSAnLi4vd3lzaXd5Z19tb2R1bGVzL3JlbW92ZS1jb2x1bW4nXHJcbmltcG9ydCByZW1vdmVSb3cgZnJvbSAnLi4vd3lzaXd5Z19tb2R1bGVzL3JlbW92ZS1yb3cnXHJcbmltcG9ydCBmb3JtYXRGYWN0b3J5IGZyb20gJy4uL3V0aWxzL2Zvcm1hdEZhY3RvcnkuanMnXHJcbmltcG9ydCBzbHVnaWZ5IGZyb20gJ3NsdWdpZnknXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiQ3JlYXRlVGFibGVQYWdlXCIsXHJcbiAgICBkYXRhICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgIHJlcGVhdGFibGVSb3c6IGZhbHNlLFxyXG4gICAgICAgICAgICByZWRpcHM6IHt9LFxyXG4gICAgICAgICAgICByZXBlYXRhYmxlUm93RGVmYXVsdEhUTUw6XHJcbiAgICAgICAgICAgICAgICBgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtYm9yZGVyZWRcIj5cclxuICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgIDwvdGFibGU+YCxcclxuICAgICAgICAgICAgZXJyb3I6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgcmVwZWF0YWJsZVJvdyAodmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjc3VtbWVybm90ZScpLnN1bW1lcm5vdGUoJ2NvZGUnLCB0aGlzLnJlcGVhdGFibGVSb3dEZWZhdWx0SFRNTClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoJyNzdW1tZXJub3RlJykuc3VtbWVybm90ZSgnY29kZScsICcnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBvbkhhbmRsZUJhY2sgKCkge1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIuYmFjaygpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkhhbmRsZUNoYW5nZSAoZGF0YSkge1xyXG4gICAgICAgICAgIGRhdGEudGFyZ2V0LnZhbHVlID8gdGhpcy5lcnJvciA9ICcnIDogdGhpcy5lcnJvciA9IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uSGFuZGxlQ29udGludWUgKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50aXRsZSAmJiB0aGlzLiRzdG9yZS5nZXR0ZXJzWydqb3VybmFsU3RhdGUvZ2V0Sm91cm5hbE5hbWUnXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdqb3VybmFsU3RhdGUvYWRkVGFibGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHNsdWdpZnkodGhpcy50aXRsZSwgJ18nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHRtbDogJCgnI3N1bW1lcm5vdGUnKS5zdW1tZXJub3RlKCdjb2RlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdGFibGVfcm93OiB0aGlzLnJlcGVhdGFibGVSb3dcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaChgL2pvdXJuYWwvJHt0aGlzLiRyb3V0ZS5wYXJhbXMuam91cm5hbE5hbWV9L3RhYmxlLyR7c2x1Z2lmeSh0aGlzLnRpdGxlLCAnXycpfS9lZGl0X2RhdGFgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCF0aGlzLiRzdG9yZS5nZXR0ZXJzWydqb3VybmFsU3RhdGUvZ2V0Sm91cm5hbE5hbWUnXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgdGhpcy5lcnJvciA9IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uRm9ybWF0SHRtbCAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlcGVhdGFibGVSb3cpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2RlID0gJCgnI3JlcGVhdGFibGVTdW1tZXJub3RlJykuc3VtbWVybm90ZSgnY29kZScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvcm1hdHRlZENvZGUgPSBmb3JtYXRGYWN0b3J5KGNvZGUpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3JlcGVhdGFibGVTdW1tZXJub3RlJykuc3VtbWVybm90ZSgnY29kZScsIGZvcm1hdHRlZENvZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvZGUgPSAkKCcjc3VtbWVybm90ZScpLnN1bW1lcm5vdGUoJ2NvZGUnKTtcclxuICAgICAgICAgICAgICAgIGxldCBmb3JtYXR0ZWRDb2RlID0gZm9ybWF0RmFjdG9yeShjb2RlKTtcclxuICAgICAgICAgICAgICAgICQoJyNzdW1tZXJub3RlJykuc3VtbWVybm90ZSgnY29kZScsIGZvcm1hdHRlZENvZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWRpcHNJbml0ICgpIHtcclxuICAgICAgICAgICAgbGV0IF90aGlzID0gdGhpc1xyXG4gICAgICAgICAgICBfdGhpcy5yZWRpcHMuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBydCA9IFJFRElQUy50YWJsZTtcclxuICAgICAgICAgICAgICAgIHJ0Lm9ubW91c2Vkb3duKCdyZWRpcHNUYWJsZScsIHRydWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJ0LmNvbG9yLmNlbGwgPSAnIzlCQjNEQSc7XHJcblxyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVkaXBzLm1lcmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIFJFRElQUy50YWJsZS5tZXJnZSgnaCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBSRURJUFMudGFibGUubWVyZ2UoJ3YnKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVkaXBzLnNwbGl0ID0gZnVuY3Rpb24gKG1vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBSRURJUFMudGFibGUuc3BsaXQobW9kZSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIF90aGlzLnJlZGlwcy5yb3cgPSBmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFJFRElQUy50YWJsZS5yb3coJ3JlZGlwc1RhYmxlJywgdHlwZSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIF90aGlzLnJlZGlwcy5jb2x1bW4gPSBmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFJFRElQUy50YWJsZS5jb2x1bW4oJ3JlZGlwc1RhYmxlJywgdHlwZSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB3aW5kb3cucmVkaXBzID0gX3RoaXMucmVkaXBzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdW1tZXJub3RlSW5pdCAoKSB7XHJcbiAgICAgICAgICAgIGxldCBfdGhpcyA9IHRoaXNcclxuICAgICAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAkKCcjc3VtbWVybm90ZScpLnN1bW1lcm5vdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbkhlaWdodDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhcjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ3N0eWxlJywgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnY2xlYXInXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnZm9udCcsIFsnc3RyaWtldGhyb3VnaCcsICdzdXBlcnNjcmlwdCcsICdzdWJzY3JpcHQnXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnZm9udHNpemUnLCBbJ2ZvbnRzaXplJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2NvbG9yJywgWydjb2xvciddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydwYXJhJywgWyd1bCcsICdvbCcsICdwYXJhZ3JhcGgnXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnaGVpZ2h0JywgWydoZWlnaHQnXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnaW5zZXJ0JywgWyd0YWJsZScsICdsaW5rJywgJ2hyJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ21pc2snLCBbJ3VuZG8nLCAncmVkbyddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWyd2aWV3JywgWydmdWxsc2NyZWVuJywgJ2NvZGV2aWV3J11dXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBwb3BvdmVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2FkZCcsIFsnYWRkQ29sdW1uUGx1Z2luJywgJ2FkZFJvd1BsdWdpbiddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnZGVsZXRlJywgWydyZW1vdmVDb2x1bW5QbHVnaW4nLCAncmVtb3ZlUm93UGx1Z2luJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWydzcGxpdCcsIFsnc3BsaXRIJywgJ3NwbGl0ViddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnY3VzdG9tJywgWydjZWxsSGVhZGVyJywgJ21lcmdlQ2VsbHMnXV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKCcjc3VtbWVybm90ZScpLm9uKCdzdW1tZXJub3RlLmNoYW5nZScsIGZ1bmN0aW9uICh3ZSwgY29udGVudHMsICRlZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdW1tZXJub3RlXFwncyBjb250ZW50IGlzIGNoYW5nZWQuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YWJsZSA9ICQoJy5ub3RlLWVkaXRhYmxlIHRhYmxlOmZpcnN0JylcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFibGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmF0dHIoJ2lkJywgJ3JlZGlwc1RhYmxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVkaXBzLmluaXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlICc8cD48YnI+PC9wPicgaW5zaWRlIHRhYmxlc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIChzdW1tZXJub3RlIGNyZWF0ZXMgdGhlbSB3aGVuIG5lc3RpbmcgdGFibGUgaW4gdGFibGUpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVzZWxlc3NQYXJhZ3JhcGhzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGFibGUgcCcpLCBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB1c2VsZXNzUGFyYWdyYXBocy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcCA9IHVzZWxlc3NQYXJhZ3JhcGhzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQgKCkge1xyXG4gICAgICAgIHRoaXMucmVkaXBzSW5pdCgpXHJcbiAgICAgICAgdG9nZ2xlSGVhZGVySW5pdCgpO1xyXG4gICAgICAgIG1lcmdlQ2VsbHNJbml0KCk7XHJcbiAgICAgICAgc3BsaXRIKClcclxuICAgICAgICBzcGxpdFYoKVxyXG4gICAgICAgIGFkZENvbCgpXHJcbiAgICAgICAgYWRkUm93KClcclxuICAgICAgICByZW1vdmVDb2woKVxyXG4gICAgICAgIHJlbW92ZVJvdygpXHJcbiAgICAgICAgdGhpcy5zdW1tZXJub3RlSW5pdCgpXHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uY3JlYXRlLXRhYmxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uY3JlYXRlLXRhYmxlID4gaDIudGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uZXJyb3Ige1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAxMDgsIDEwOCk7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5mb3JtIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmZvcm0tY2hlY2sgbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi53eXNpd3lnIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ud3lzaXd5ZyAubW9kYWwtZGlhbG9nIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG4ud3lzaXd5ZyAudGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uYnRucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9