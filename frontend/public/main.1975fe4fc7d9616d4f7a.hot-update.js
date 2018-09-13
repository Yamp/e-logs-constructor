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

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/views/CreateTablePage.vue?vue&type=template&id=4fc853d2&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/views/CreateTablePage.vue?vue&type=template&id=4fc853d2&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "create-table" }, [
    _c("h2", { staticClass: "title" }, [_vm._v("Создание секции")]),
    _vm._v(" "),
    _c(
      "form",
      {
        staticClass: "form",
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.onHandleContinue($event)
          }
        }
      },
      [
        _c("div", { staticClass: "form-group" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.title,
                expression: "title"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", placeholder: "Заголовок" },
            domProps: { value: _vm.title },
            on: {
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.title = $event.target.value
                },
                _vm.onHandleChange
              ]
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "form-check" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.repeatableRow,
                expression: "repeatableRow"
              }
            ],
            staticClass: "form-check-input",
            attrs: { type: "checkbox", id: "repeatableRow" },
            domProps: {
              checked: Array.isArray(_vm.repeatableRow)
                ? _vm._i(_vm.repeatableRow, null) > -1
                : _vm.repeatableRow
            },
            on: {
              change: [
                function($event) {
                  var $$a = _vm.repeatableRow,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.repeatableRow = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.repeatableRow = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.repeatableRow = $$c
                  }
                },
                _vm.onHandleChange
              ]
            }
          }),
          _vm._v(" "),
          _c(
            "label",
            {
              staticClass: "form-check-label",
              attrs: { for: "repeatableRow" }
            },
            [_vm._v("Повторяющиеся строки")]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.error,
                expression: "error"
              }
            ],
            staticClass: "error"
          },
          [_vm._v("\n            Введите заголовок\n        ")]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "wysiwyg" }, [
      _c("h3", { staticClass: "title" }, [
        _vm._v("Создание структуры таблицы")
      ]),
      _vm._v(" "),
      !_vm.repeatableRow
        ? _c("div", { attrs: { id: "summernote" } })
        : _vm._e(),
      _vm._v(" "),
      _vm.repeatableRow
        ? _c("div", { attrs: { id: "repeatableSummernote" } })
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "btns" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-secondary",
            staticStyle: { "margin-right": "14px" },
            on: { click: _vm.onHandleBack }
          },
          [_vm._v("Назад")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-success",
            staticStyle: { "margin-right": "14px" },
            on: { click: _vm.onFormatHtml }
          },
          [_vm._v("Formate html")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-primary",
            attrs: { type: "submit" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.onHandleContinue($event)
              }
            }
          },
          [_vm._v("Продолжить")]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL0NyZWF0ZVRhYmxlUGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0NyZWF0ZVRhYmxlUGFnZS52dWU/Y2E2NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0EsZUFEQTtBQUVBLDBCQUZBO0FBR0EsZ0JBSEE7QUFJQSx1Z0NBSkE7QUFxQ0E7QUFyQ0E7QUF1Q0EsR0ExQ0E7QUEyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBREEsMEJBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxrQkFKQSwwQkFJQSxJQUpBLEVBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxvQkFQQSw4QkFPQTtBQUNBO0FBQ0Esb0RBQ0E7QUFDQSwyQkFEQTtBQUVBLGdGQUZBO0FBR0Esb0JBSEE7QUFJQSx3SEFKQTtBQUtBO0FBTEEsU0FEQTtBQVNBO0FBQ0EsT0FYQSxNQVlBO0FBQ0E7QUFDQSxPQUZBLE1BR0E7QUFDQSxLQXhCQTtBQXlCQSxnQkF6QkEsMEJBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBLE1BS0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0EsS0FwQ0E7QUFxQ0EsY0FyQ0Esd0JBcUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FIQTs7QUFLQTtBQUNBO0FBQ0EsU0FGQTs7QUFJQTtBQUNBO0FBQ0EsU0FGQTs7QUFJQTtBQUNBO0FBQ0EsU0FGQTtBQUdBLE9BdEJBOztBQXVCQTtBQUNBLEtBL0RBO0FB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aUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix5QkFBeUI7QUFDbkQsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix5QkFBeUI7QUFDbkQsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi4xOTc1ZmU0ZmM3ZDk2MTZkNGY3YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImNyZWF0ZS10YWJsZVwiPlxyXG4gICAgICAgIDxoMiBjbGFzcz1cInRpdGxlXCI+0KHQvtC30LTQsNC90LjQtSDRgdC10LrRhtC40Lg8L2gyPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybVwiIEBzdWJtaXQucHJldmVudD1cIm9uSGFuZGxlQ29udGludWVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCLQl9Cw0LPQvtC70L7QstC+0LpcIiBAaW5wdXQ9XCJvbkhhbmRsZUNoYW5nZVwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBpZD1cInJlcGVhdGFibGVSb3dcIiB2LW1vZGVsPVwicmVwZWF0YWJsZVJvd1wiIEBjaGFuZ2U9XCJvbkhhbmRsZUNoYW5nZVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cInJlcGVhdGFibGVSb3dcIj7Qn9C+0LLRgtC+0YDRj9GO0YnQuNC10YHRjyDRgdGC0YDQvtC60Lg8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiB2LXNob3c9XCJlcnJvclwiIGNsYXNzPVwiZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgINCS0LLQtdC00LjRgtC1INC30LDQs9C+0LvQvtCy0L7QulxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInd5c2l3eWdcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwidGl0bGVcIj7QodC+0LfQtNCw0L3QuNC1INGB0YLRgNGD0LrRgtGD0YDRiyDRgtCw0LHQu9C40YbRizwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cIiFyZXBlYXRhYmxlUm93XCIgaWQ9XCJzdW1tZXJub3RlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cInJlcGVhdGFibGVSb3dcIiBpZD1cInJlcGVhdGFibGVTdW1tZXJub3RlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG5zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBAY2xpY2s9XCJvbkhhbmRsZUJhY2tcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMTRweFwiPtCd0LDQt9Cw0LQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBAY2xpY2s9XCJvbkZvcm1hdEh0bWxcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMTRweFwiPkZvcm1hdGUgaHRtbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIEBjbGljay5wcmV2ZW50PVwib25IYW5kbGVDb250aW51ZVwiIHR5cGU9XCJzdWJtaXRcIj7Qn9GA0L7QtNC+0LvQttC40YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy8gaW1wb3J0ICdqcXVlcnknXHJcbi8vIGltcG9ydCAnYm9vdHN0cmFwMy9kaXN0L2pzL25wbSc7XHJcbi8vIGltcG9ydCAnYm9vdHN0cmFwMy9kaXN0L2pzL2Jvb3RzdHJhcCc7XHJcbi8vIGltcG9ydCAnc3VtbWVybm90ZS9kaXN0L3N1bW1lcm5vdGUuY3NzJ1xyXG4vLyBpbXBvcnQgJ3N1bW1lcm5vdGUvZGlzdC9zdW1tZXJub3RlJ1xyXG5cclxuaW1wb3J0IHRvZ2dsZUhlYWRlckluaXQgZnJvbSAnLi4vd3lzaXd5Z19tb2R1bGVzL3RvZ2dsZS1oZWFkZXInXHJcbmltcG9ydCBtZXJnZUNlbGxzSW5pdCBmcm9tICcuLi93eXNpd3lnX21vZHVsZXMvbWVyZ2UtY2VsbHMnXHJcbmltcG9ydCBzcGxpdEggZnJvbSAnLi4vd3lzaXd5Z19tb2R1bGVzL3NwbGl0LWhvcml6b250YWxseSdcclxuaW1wb3J0IHNwbGl0ViBmcm9tICcuLi93eXNpd3lnX21vZHVsZXMvc3BsaXQtdmVydGljYWxseSdcclxuaW1wb3J0IGFkZENvbCBmcm9tICcuLi93eXNpd3lnX21vZHVsZXMvYWRkLWNvbHVtbidcclxuaW1wb3J0IGFkZFJvdyBmcm9tICcuLi93eXNpd3lnX21vZHVsZXMvYWRkLXJvdydcclxuaW1wb3J0IHJlbW92ZUNvbCBmcm9tICcuLi93eXNpd3lnX21vZHVsZXMvcmVtb3ZlLWNvbHVtbidcclxuaW1wb3J0IHJlbW92ZVJvdyBmcm9tICcuLi93eXNpd3lnX21vZHVsZXMvcmVtb3ZlLXJvdydcclxuaW1wb3J0IGZvcm1hdEZhY3RvcnkgZnJvbSAnLi4vdXRpbHMvZm9ybWF0RmFjdG9yeS5qcydcclxuaW1wb3J0IHNsdWdpZnkgZnJvbSAnc2x1Z2lmeSdcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJDcmVhdGVUYWJsZVBhZ2VcIixcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgcmVwZWF0YWJsZVJvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlZGlwczoge30sXHJcbiAgICAgICAgICAgIHJlcGVhdGFibGVSb3dEZWZhdWx0SFRNTDpcclxuICAgICAgICAgICAgICAgIGA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5gLFxyXG4gICAgICAgICAgICBlcnJvcjogJydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gd2F0Y2g6IHtcclxuICAgIC8vICAgICByZXBlYXRhYmxlUm93ICh2YWx1ZSkge1xyXG4gICAgLy8gICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMucmVwZWF0YWJsZVN1bW1lcm5vdGVJbml0KClcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBlbHNlIHRoaXMuc3VtbWVybm90ZUluaXQoKVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgb25IYW5kbGVCYWNrICgpIHtcclxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLmJhY2soKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25IYW5kbGVDaGFuZ2UgKGRhdGEpIHtcclxuICAgICAgICAgICBkYXRhLnRhcmdldC52YWx1ZSA/IHRoaXMuZXJyb3IgPSAnJyA6IHRoaXMuZXJyb3IgPSB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkhhbmRsZUNvbnRpbnVlICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGl0bGUgJiYgdGhpcy4kc3RvcmUuZ2V0dGVyc1snam91cm5hbFN0YXRlL2dldEpvdXJuYWxOYW1lJ10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnam91cm5hbFN0YXRlL2FkZFRhYmxlJyxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBzbHVnaWZ5KHRoaXMudGl0bGUsICdfJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IHRoaXMucmVwZWF0YWJsZVJvdyA/ICQoJyNyZXBlYXRhYmxlU3VtbWVybm90ZScpLnN1bW1lcm5vdGUoJ2NvZGUnKSA6ICQoJyNzdW1tZXJub3RlJykuc3VtbWVybm90ZSgnY29kZScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRhYmxlX3JvdzogdGhpcy5yZXBlYXRhYmxlUm93XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goYC9qb3VybmFsLyR7dGhpcy4kcm91dGUucGFyYW1zLmpvdXJuYWxOYW1lfS90YWJsZS8ke3NsdWdpZnkodGhpcy50aXRsZSwgJ18nKX0vZWRpdF9kYXRhYClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICghdGhpcy4kc3RvcmUuZ2V0dGVyc1snam91cm5hbFN0YXRlL2dldEpvdXJuYWxOYW1lJ10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHRoaXMuZXJyb3IgPSB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkZvcm1hdEh0bWwgKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZXBlYXRhYmxlUm93KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29kZSA9ICQoJyNyZXBlYXRhYmxlU3VtbWVybm90ZScpLnN1bW1lcm5vdGUoJ2NvZGUnKTtcclxuICAgICAgICAgICAgICAgIGxldCBmb3JtYXR0ZWRDb2RlID0gZm9ybWF0RmFjdG9yeShjb2RlKTtcclxuICAgICAgICAgICAgICAgICQoJyNyZXBlYXRhYmxlU3VtbWVybm90ZScpLnN1bW1lcm5vdGUoJ2NvZGUnLCBmb3JtYXR0ZWRDb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb2RlID0gJCgnI3N1bW1lcm5vdGUnKS5zdW1tZXJub3RlKCdjb2RlJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm9ybWF0dGVkQ29kZSA9IGZvcm1hdEZhY3RvcnkoY29kZSk7XHJcbiAgICAgICAgICAgICAgICAkKCcjc3VtbWVybm90ZScpLnN1bW1lcm5vdGUoJ2NvZGUnLCBmb3JtYXR0ZWRDb2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVkaXBzSW5pdCAoKSB7XHJcbiAgICAgICAgICAgIGxldCBfdGhpcyA9IHRoaXNcclxuICAgICAgICAgICAgX3RoaXMucmVkaXBzLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcnQgPSBSRURJUFMudGFibGU7XHJcbiAgICAgICAgICAgICAgICBydC5vbm1vdXNlZG93bigncmVkaXBzVGFibGUnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBydC5jb2xvci5jZWxsID0gJyM5QkIzREEnO1xyXG5cclxuICAgICAgICAgICAgICAgIF90aGlzLnJlZGlwcy5tZXJnZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBSRURJUFMudGFibGUubWVyZ2UoJ2gnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgUkVESVBTLnRhYmxlLm1lcmdlKCd2Jyk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIF90aGlzLnJlZGlwcy5zcGxpdCA9IGZ1bmN0aW9uIChtb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUkVESVBTLnRhYmxlLnNwbGl0KG1vZGUpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZWRpcHMucm93ID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBSRURJUFMudGFibGUucm93KCdyZWRpcHNUYWJsZScsIHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZWRpcHMuY29sdW1uID0gZnVuY3Rpb24gKHR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBSRURJUFMudGFibGUuY29sdW1uKCdyZWRpcHNUYWJsZScsIHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgd2luZG93LnJlZGlwcyA9IF90aGlzLnJlZGlwc1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVwZWF0YWJsZVN1bW1lcm5vdGVJbml0ICgpIHtcclxuICAgICAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgX3RoaXMgPSB0aGlzXHJcbiAgICAgICAgICAgICAgICAkKCcjcmVwZWF0YWJsZVN1bW1lcm5vdGUnKS5zdW1tZXJub3RlKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMCxcclxuICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydzdHlsZScsIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ2NsZWFyJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2ZvbnQnLCBbJ3N0cmlrZXRocm91Z2gnLCAnc3VwZXJzY3JpcHQnLCAnc3Vic2NyaXB0J11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2ZvbnRzaXplJywgWydmb250c2l6ZSddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydjb2xvcicsIFsnY29sb3InXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsncGFyYScsIFsndWwnLCAnb2wnLCAncGFyYWdyYXBoJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2hlaWdodCcsIFsnaGVpZ2h0J11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2luc2VydCcsIFsnbGluaycsICdociddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydtaXNrJywgWyd1bmRvJywgJ3JlZG8nXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsndmlldycsIFsnZnVsbHNjcmVlbicsICdjb2RldmlldyddXVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wb3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWydhZGQnLCBbJ2FkZENvbHVtblBsdWdpbiddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnZGVsZXRlJywgWydyZW1vdmVDb2x1bW5QbHVnaW4nXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2N1c3RvbScsIFsnY2VsbEhlYWRlciddXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKCcjcmVwZWF0YWJsZVN1bW1lcm5vdGUnKS5vbignc3VtbWVybm90ZS5jaGFuZ2UnLCBmdW5jdGlvbih3ZSwgY29udGVudHMsICRlZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdW1tZXJub3RlXFwncyBjb250ZW50IGlzIGNoYW5nZWQuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YWJsZSA9ICQoJy5ub3RlLWVkaXRhYmxlIHRhYmxlOmZpcnN0JylcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFibGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmF0dHIoJ2lkJywgJ3JlZGlwc1RhYmxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVkaXBzLmluaXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlICc8cD48YnI+PC9wPicgaW5zaWRlIHRhYmxlc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIChzdW1tZXJub3RlIGNyZWF0ZXMgdGhlbSB3aGVuIG5lc3RpbmcgdGFibGUgaW4gdGFibGUpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVzZWxlc3NQYXJhZ3JhcGhzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGFibGUgcCcpLCBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB1c2VsZXNzUGFyYWdyYXBocy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcCA9IHVzZWxlc3NQYXJhZ3JhcGhzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI3JlcGVhdGFibGVTdW1tZXJub3RlJykuc3VtbWVybm90ZSgnY29kZScsIF90aGlzLnJlcGVhdGFibGVSb3dEZWZhdWx0SFRNTClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1bW1lcm5vdGVJbml0ICgpIHtcclxuICAgICAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgX3RoaXMgPSB0aGlzXHJcblxyXG4gICAgICAgICAgICAgICAgJCgnI3N1bW1lcm5vdGUnKS5zdW1tZXJub3RlKHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMCxcclxuICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2xiYXI6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydzdHlsZScsIFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJywgJ2NsZWFyJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2ZvbnQnLCBbJ3N0cmlrZXRocm91Z2gnLCAnc3VwZXJzY3JpcHQnLCAnc3Vic2NyaXB0J11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2ZvbnRzaXplJywgWydmb250c2l6ZSddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydjb2xvcicsIFsnY29sb3InXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsncGFyYScsIFsndWwnLCAnb2wnLCAncGFyYWdyYXBoJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2hlaWdodCcsIFsnaGVpZ2h0J11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ2luc2VydCcsIFsndGFibGUnLCAnbGluaycsICdociddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydtaXNrJywgWyd1bmRvJywgJ3JlZG8nXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsndmlldycsIFsnZnVsbHNjcmVlbicsICdjb2RldmlldyddXVxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgcG9wb3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJsZTogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWydhZGQnLCBbJ2FkZENvbHVtblBsdWdpbicsICdhZGRSb3dQbHVnaW4nXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2RlbGV0ZScsIFsncmVtb3ZlQ29sdW1uUGx1Z2luJywgJ3JlbW92ZVJvd1BsdWdpbiddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnc3BsaXQnLCBbJ3NwbGl0SCcsICdzcGxpdFYnXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2N1c3RvbScsIFsnY2VsbEhlYWRlcicsICdtZXJnZUNlbGxzJ11dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICQoJyNzdW1tZXJub3RlJykub24oJ3N1bW1lcm5vdGUuY2hhbmdlJywgZnVuY3Rpb24gKHdlLCBjb250ZW50cywgJGVkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1bW1lcm5vdGVcXCdzIGNvbnRlbnQgaXMgY2hhbmdlZC4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhYmxlID0gJCgnLm5vdGUtZWRpdGFibGUgdGFibGU6Zmlyc3QnKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWJsZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuYXR0cignaWQnLCAncmVkaXBzVGFibGUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZWRpcHMuaW5pdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgJzxwPjxicj48L3A+JyBpbnNpZGUgdGFibGVzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gKHN1bW1lcm5vdGUgY3JlYXRlcyB0aGVtIHdoZW4gbmVzdGluZyB0YWJsZSBpbiB0YWJsZSlcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXNlbGVzc1BhcmFncmFwaHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0YWJsZSBwJyksIGk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHVzZWxlc3NQYXJhZ3JhcGhzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwID0gdXNlbGVzc1BhcmFncmFwaHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCAoKSB7XHJcbiAgICAgICAgbGV0IF90aGlzID0gdGhpc1xyXG4gICAgICAgIF90aGlzLnJlZGlwc0luaXQoKVxyXG4gICAgICAgIHRvZ2dsZUhlYWRlckluaXQoKTtcclxuICAgICAgICBtZXJnZUNlbGxzSW5pdCgpO1xyXG4gICAgICAgIHNwbGl0SCgpXHJcbiAgICAgICAgc3BsaXRWKClcclxuICAgICAgICBhZGRDb2woKVxyXG4gICAgICAgIGFkZFJvdygpXHJcbiAgICAgICAgcmVtb3ZlQ29sKClcclxuICAgICAgICByZW1vdmVSb3coKVxyXG4gICAgICAgIGlmIChfdGhpcy5yZXBlYXRhYmxlUm93KSB7XHJcbiAgICAgICAgICAgIF90aGlzLnJlcGVhdGFibGVTdW1tZXJub3RlSW5pdCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBfdGhpcy5zdW1tZXJub3RlSW5pdCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmNyZWF0ZS10YWJsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLmNyZWF0ZS10YWJsZSA+IGgyLnRpdGxle1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmVycm9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMTA4LCAxMDgpO1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uZm9ybSB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5mb3JtLWNoZWNrIGxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4ud3lzaXd5ZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLnd5c2l3eWcgLm1vZGFsLWRpYWxvZyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuLnd5c2l3eWcgLnRpdGxle1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmJ0bnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcbjwvc3R5bGU+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNyZWF0ZS10YWJsZVwiIH0sIFtcbiAgICBfYyhcImgyXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbX3ZtLl92KFwi0KHQvtC30LTQsNC90LjQtSDRgdC10LrRhtC40LhcIildKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJmb3JtXCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm1cIixcbiAgICAgICAgb246IHtcbiAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgIHJldHVybiBfdm0ub25IYW5kbGVDb250aW51ZSgkZXZlbnQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS50aXRsZSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRpdGxlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm0tY29udHJvbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcItCX0LDQs9C+0LvQvtCy0L7QulwiIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnRpdGxlIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogW1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLnRpdGxlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgX3ZtLm9uSGFuZGxlQ2hhbmdlXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtLWNoZWNrXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmVwZWF0YWJsZVJvdyxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJlcGVhdGFibGVSb3dcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jaGVjay1pbnB1dFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiLCBpZDogXCJyZXBlYXRhYmxlUm93XCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLnJlcGVhdGFibGVSb3cpXG4gICAgICAgICAgICAgICAgPyBfdm0uX2koX3ZtLnJlcGVhdGFibGVSb3csIG51bGwpID4gLTFcbiAgICAgICAgICAgICAgICA6IF92bS5yZXBlYXRhYmxlUm93XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLnJlcGVhdGFibGVSb3csXG4gICAgICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJiAoX3ZtLnJlcGVhdGFibGVSb3cgPSAkJGEuY29uY2F0KFskJHZdKSlcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5yZXBlYXRhYmxlUm93ID0gJCRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnJlcGVhdGFibGVSb3cgPSAkJGNcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF92bS5vbkhhbmRsZUNoYW5nZVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jaGVjay1sYWJlbFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IFwicmVwZWF0YWJsZVJvd1wiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi0J/QvtCy0YLQvtGA0Y/RjtGJ0LjQtdGB0Y8g0YHRgtGA0L7QutC4XCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmVycm9yLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZXJyb3JcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZXJyb3JcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgINCS0LLQtdC00LjRgtC1INC30LDQs9C+0LvQvtCy0L7QulxcbiAgICAgICAgXCIpXVxuICAgICAgICApXG4gICAgICBdXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid3lzaXd5Z1wiIH0sIFtcbiAgICAgIF9jKFwiaDNcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwi0KHQvtC30LTQsNC90LjQtSDRgdGC0YDRg9C60YLRg9GA0Ysg0YLQsNCx0LvQuNGG0YtcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICFfdm0ucmVwZWF0YWJsZVJvd1xuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwic3VtbWVybm90ZVwiIH0gfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucmVwZWF0YWJsZVJvd1xuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgaWQ6IFwicmVwZWF0YWJsZVN1bW1lcm5vdGVcIiB9IH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidG5zXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc2Vjb25kYXJ5XCIsXG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1yaWdodFwiOiBcIjE0cHhcIiB9LFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vbkhhbmRsZUJhY2sgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcItCd0LDQt9Cw0LRcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zdWNjZXNzXCIsXG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1yaWdodFwiOiBcIjE0cHhcIiB9LFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vbkZvcm1hdEh0bWwgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIkZvcm1hdGUgaHRtbFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25IYW5kbGVDb250aW51ZSgkZXZlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCLQn9GA0L7QtNC+0LvQttC40YLRjFwiKV1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJzb3VyY2VSb290IjoiIn0=