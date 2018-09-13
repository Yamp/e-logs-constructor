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
      _c("div", { attrs: { id: "summernote" } }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL0NyZWF0ZVRhYmxlUGFnZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL0NyZWF0ZVRhYmxlUGFnZS52dWU/Y2E2NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQSxlQURBO0FBRUEsMEJBRkE7QUFHQSxnQkFIQTtBQUlBLHVnQ0FKQTtBQXFDQTtBQXJDQTtBQXVDQSxHQTFDQTtBQTJDQTtBQUNBLGlCQURBLHlCQUNBLEtBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BR0E7QUFDQTtBQUNBO0FBQ0E7QUFSQSxHQTNDQTtBQXFEQTtBQUNBLGdCQURBLDBCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsa0JBSkEsMEJBSUEsSUFKQSxFQUlBO0FBQ0E7QUFDQSxLQU5BO0FBT0Esb0JBUEEsOEJBT0E7QUFDQTtBQUNBLG9EQUNBO0FBQ0EsMkJBREE7QUFFQSxnRkFGQTtBQUdBLG9CQUhBO0FBSUEsd0hBSkE7QUFLQTtBQUxBLFNBREE7QUFTQTtBQUNBLE9BWEEsTUFZQTtBQUNBO0FBQ0EsT0FGQSxNQUdBO0FBQ0EsS0F4QkE7QUF5QkEsZ0JBekJBLDBCQXlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQSxNQUtBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLEtBcENBO0FBcUNBLGNBckNBLHdCQXFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBSEE7O0FBS0E7QUFDQTtBQUNBLFNBRkE7O0FBSUE7QUFDQTtBQUNBLFNBRkE7O0FBSUE7QUFDQTtBQUNBLFNBRkE7QUFHQSxPQXRCQTs7QUF1QkE7QUFDQSxLQS9EQTtBQWdFQSxrQkFoRUEsNEJBZ0VBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUEseUJBRkE7QUFHQSx5QkFIQTtBQUlBLHFCQUpBO0FBS0Esb0JBQ0EsbURBREEsRUFFQSx1REFGQSxFQUdBLDBCQUhBLEVBSUEsb0JBSkEsRUFLQSxtQ0FMQSxFQU1BLHNCQU5BLEVBT0EsbUNBUEEsRUFRQSwwQkFSQSxFQVNBLG9DQVRBLENBTEE7QUFnQkE7QUFDQSxvQkFDQSw0Q0FEQSxFQUVBLHFEQUZBLEVBR0EsK0JBSEEsRUFJQSx3Q0FKQTtBQURBO0FBaEJBO0FBMEJBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0EsV0FQQSxDQVNBO0FBQ0E7OztBQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQWhCQTtBQWlCQSxPQTVDQTtBQTZDQTtBQS9HQSxHQXJEQTtBQXNLQSxTQXRLQSxxQkFzS0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFsTEEsRzs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOEJBQThCO0FBQ2xELGNBQWMsdUJBQXVCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHlDQUF5QztBQUM3RCx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3Q0FBd0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHlCQUF5QjtBQUN4QyxnQkFBZ0IsdUJBQXVCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLG1CQUFtQixFQUFFO0FBQy9DO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix5QkFBeUI7QUFDbkQsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix5QkFBeUI7QUFDbkQsaUJBQWlCO0FBQ2pCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5kNzc4Y2MzYjdmMzIyOGY2Y2JhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImNyZWF0ZS10YWJsZVwiPlxyXG4gICAgICAgIDxoMiBjbGFzcz1cInRpdGxlXCI+0KHQvtC30LTQsNC90LjQtSDRgdC10LrRhtC40Lg8L2gyPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybVwiIEBzdWJtaXQucHJldmVudD1cIm9uSGFuZGxlQ29udGludWVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdi1tb2RlbD1cInRpdGxlXCIgcGxhY2Vob2xkZXI9XCLQl9Cw0LPQvtC70L7QstC+0LpcIiBAaW5wdXQ9XCJvbkhhbmRsZUNoYW5nZVwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2tcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImZvcm0tY2hlY2staW5wdXRcIiBpZD1cInJlcGVhdGFibGVSb3dcIiB2LW1vZGVsPVwicmVwZWF0YWJsZVJvd1wiIEBjaGFuZ2U9XCJvbkhhbmRsZUNoYW5nZVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybS1jaGVjay1sYWJlbFwiIGZvcj1cInJlcGVhdGFibGVSb3dcIj7Qn9C+0LLRgtC+0YDRj9GO0YnQuNC10YHRjyDRgdGC0YDQvtC60Lg8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiB2LXNob3c9XCJlcnJvclwiIGNsYXNzPVwiZXJyb3JcIj5cclxuICAgICAgICAgICAgICAgINCS0LLQtdC00LjRgtC1INC30LDQs9C+0LvQvtCy0L7QulxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInd5c2l3eWdcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwidGl0bGVcIj7QodC+0LfQtNCw0L3QuNC1INGB0YLRgNGD0LrRgtGD0YDRiyDRgtCw0LHQu9C40YbRizwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzdW1tZXJub3RlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG5zXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBAY2xpY2s9XCJvbkhhbmRsZUJhY2tcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMTRweFwiPtCd0LDQt9Cw0LQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiBAY2xpY2s9XCJvbkZvcm1hdEh0bWxcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMTRweFwiPkZvcm1hdGUgaHRtbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIEBjbGljay5wcmV2ZW50PVwib25IYW5kbGVDb250aW51ZVwiIHR5cGU9XCJzdWJtaXRcIj7Qn9GA0L7QtNC+0LvQttC40YLRjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLy8gaW1wb3J0ICdqcXVlcnknXHJcbi8vIGltcG9ydCAnYm9vdHN0cmFwMy9kaXN0L2pzL25wbSc7XHJcbi8vIGltcG9ydCAnYm9vdHN0cmFwMy9kaXN0L2pzL2Jvb3RzdHJhcCc7XHJcbi8vIGltcG9ydCAnc3VtbWVybm90ZS9kaXN0L3N1bW1lcm5vdGUuY3NzJ1xyXG4vLyBpbXBvcnQgJ3N1bW1lcm5vdGUvZGlzdC9zdW1tZXJub3RlJ1xyXG5cclxuaW1wb3J0IHRvZ2dsZUhlYWRlckluaXQgZnJvbSAnLi4vd3lzaXd5Z19tb2R1bGVzL3RvZ2dsZS1oZWFkZXInXHJcbmltcG9ydCBtZXJnZUNlbGxzSW5pdCBmcm9tICcuLi93eXNpd3lnX21vZHVsZXMvbWVyZ2UtY2VsbHMnXHJcbmltcG9ydCBzcGxpdEggZnJvbSAnLi4vd3lzaXd5Z19tb2R1bGVzL3NwbGl0LWhvcml6b250YWxseSdcclxuaW1wb3J0IHNwbGl0ViBmcm9tICcuLi93eXNpd3lnX21vZHVsZXMvc3BsaXQtdmVydGljYWxseSdcclxuaW1wb3J0IGFkZENvbCBmcm9tICcuLi93eXNpd3lnX21vZHVsZXMvYWRkLWNvbHVtbidcclxuaW1wb3J0IGFkZFJvdyBmcm9tICcuLi93eXNpd3lnX21vZHVsZXMvYWRkLXJvdydcclxuaW1wb3J0IHJlbW92ZUNvbCBmcm9tICcuLi93eXNpd3lnX21vZHVsZXMvcmVtb3ZlLWNvbHVtbidcclxuaW1wb3J0IHJlbW92ZVJvdyBmcm9tICcuLi93eXNpd3lnX21vZHVsZXMvcmVtb3ZlLXJvdydcclxuaW1wb3J0IGZvcm1hdEZhY3RvcnkgZnJvbSAnLi4vdXRpbHMvZm9ybWF0RmFjdG9yeS5qcydcclxuaW1wb3J0IHNsdWdpZnkgZnJvbSAnc2x1Z2lmeSdcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJDcmVhdGVUYWJsZVBhZ2VcIixcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICAgICAgcmVwZWF0YWJsZVJvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlZGlwczoge30sXHJcbiAgICAgICAgICAgIHJlcGVhdGFibGVSb3dEZWZhdWx0SFRNTDpcclxuICAgICAgICAgICAgICAgIGA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ib3JkZXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5gLFxyXG4gICAgICAgICAgICBlcnJvcjogJydcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgICByZXBlYXRhYmxlUm93ICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICQoJyNzdW1tZXJub3RlJykuc3VtbWVybm90ZSgnY29kZScsIHRoaXMucmVwZWF0YWJsZVJvd0RlZmF1bHRIVE1MKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJCgnI3N1bW1lcm5vdGUnKS5zdW1tZXJub3RlKCdjb2RlJywgJycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uSGFuZGxlQmFjayAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5iYWNrKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uSGFuZGxlQ2hhbmdlIChkYXRhKSB7XHJcbiAgICAgICAgICAgZGF0YS50YXJnZXQudmFsdWUgPyB0aGlzLmVycm9yID0gJycgOiB0aGlzLmVycm9yID0gdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25IYW5kbGVDb250aW51ZSAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpdGxlICYmIHRoaXMuJHN0b3JlLmdldHRlcnNbJ2pvdXJuYWxTdGF0ZS9nZXRKb3VybmFsTmFtZSddKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2pvdXJuYWxTdGF0ZS9hZGRUYWJsZScsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogc2x1Z2lmeSh0aGlzLnRpdGxlLCAnXycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sOiB0aGlzLnJlcGVhdGFibGVSb3cgPyAkKCcjcmVwZWF0YWJsZVN1bW1lcm5vdGUnKS5zdW1tZXJub3RlKCdjb2RlJykgOiAkKCcjc3VtbWVybm90ZScpLnN1bW1lcm5vdGUoJ2NvZGUnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0YWJsZV9yb3c6IHRoaXMucmVwZWF0YWJsZVJvd1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKGAvam91cm5hbC8ke3RoaXMuJHJvdXRlLnBhcmFtcy5qb3VybmFsTmFtZX0vdGFibGUvJHtzbHVnaWZ5KHRoaXMudGl0bGUsICdfJyl9L2VkaXRfZGF0YWApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoIXRoaXMuJHN0b3JlLmdldHRlcnNbJ2pvdXJuYWxTdGF0ZS9nZXRKb3VybmFsTmFtZSddKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB0aGlzLmVycm9yID0gdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Gb3JtYXRIdG1sICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVwZWF0YWJsZVJvdykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvZGUgPSAkKCcjcmVwZWF0YWJsZVN1bW1lcm5vdGUnKS5zdW1tZXJub3RlKCdjb2RlJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm9ybWF0dGVkQ29kZSA9IGZvcm1hdEZhY3RvcnkoY29kZSk7XHJcbiAgICAgICAgICAgICAgICAkKCcjcmVwZWF0YWJsZVN1bW1lcm5vdGUnKS5zdW1tZXJub3RlKCdjb2RlJywgZm9ybWF0dGVkQ29kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29kZSA9ICQoJyNzdW1tZXJub3RlJykuc3VtbWVybm90ZSgnY29kZScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvcm1hdHRlZENvZGUgPSBmb3JtYXRGYWN0b3J5KGNvZGUpO1xyXG4gICAgICAgICAgICAgICAgJCgnI3N1bW1lcm5vdGUnKS5zdW1tZXJub3RlKCdjb2RlJywgZm9ybWF0dGVkQ29kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZGlwc0luaXQgKCkge1xyXG4gICAgICAgICAgICBsZXQgX3RoaXMgPSB0aGlzXHJcbiAgICAgICAgICAgIF90aGlzLnJlZGlwcy5pbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJ0ID0gUkVESVBTLnRhYmxlO1xyXG4gICAgICAgICAgICAgICAgcnQub25tb3VzZWRvd24oJ3JlZGlwc1RhYmxlJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcnQuY29sb3IuY2VsbCA9ICcjOUJCM0RBJztcclxuXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZWRpcHMubWVyZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUkVESVBTLnRhYmxlLm1lcmdlKCdoJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIFJFRElQUy50YWJsZS5tZXJnZSgndicpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZWRpcHMuc3BsaXQgPSBmdW5jdGlvbiAobW9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIFJFRElQUy50YWJsZS5zcGxpdChtb2RlKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVkaXBzLnJvdyA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUkVESVBTLnRhYmxlLnJvdygncmVkaXBzVGFibGUnLCB0eXBlKTtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgX3RoaXMucmVkaXBzLmNvbHVtbiA9IGZ1bmN0aW9uICh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUkVESVBTLnRhYmxlLmNvbHVtbigncmVkaXBzVGFibGUnLCB0eXBlKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZWRpcHMgPSBfdGhpcy5yZWRpcHNcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1bW1lcm5vdGVJbml0ICgpIHtcclxuICAgICAgICAgICAgbGV0IF90aGlzID0gdGhpc1xyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQoJyNzdW1tZXJub3RlJykuc3VtbWVybm90ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBmb2N1czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB0b29sYmFyOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnc3R5bGUnLCBbJ2JvbGQnLCAnaXRhbGljJywgJ3VuZGVybGluZScsICdjbGVhciddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydmb250JywgWydzdHJpa2V0aHJvdWdoJywgJ3N1cGVyc2NyaXB0JywgJ3N1YnNjcmlwdCddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydmb250c2l6ZScsIFsnZm9udHNpemUnXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnY29sb3InLCBbJ2NvbG9yJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ3BhcmEnLCBbJ3VsJywgJ29sJywgJ3BhcmFncmFwaCddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydoZWlnaHQnLCBbJ2hlaWdodCddXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgWydpbnNlcnQnLCBbJ3RhYmxlJywgJ2xpbmsnLCAnaHInXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsnbWlzaycsIFsndW5kbycsICdyZWRvJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbJ3ZpZXcnLCBbJ2Z1bGxzY3JlZW4nLCAnY29kZXZpZXcnXV1cclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvcG92ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFibGU6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnYWRkJywgWydhZGRDb2x1bW5QbHVnaW4nLCAnYWRkUm93UGx1Z2luJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWydkZWxldGUnLCBbJ3JlbW92ZUNvbHVtblBsdWdpbicsICdyZW1vdmVSb3dQbHVnaW4nXV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ3NwbGl0JywgWydzcGxpdEgnLCAnc3BsaXRWJ11dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWydjdXN0b20nLCBbJ2NlbGxIZWFkZXInLCAnbWVyZ2VDZWxscyddXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAkKCcjc3VtbWVybm90ZScpLm9uKCdzdW1tZXJub3RlLmNoYW5nZScsIGZ1bmN0aW9uICh3ZSwgY29udGVudHMsICRlZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdW1tZXJub3RlXFwncyBjb250ZW50IGlzIGNoYW5nZWQuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0YWJsZSA9ICQoJy5ub3RlLWVkaXRhYmxlIHRhYmxlOmZpcnN0JylcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGFibGUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmF0dHIoJ2lkJywgJ3JlZGlwc1RhYmxlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVkaXBzLmluaXQoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlICc8cD48YnI+PC9wPicgaW5zaWRlIHRhYmxlc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIChzdW1tZXJub3RlIGNyZWF0ZXMgdGhlbSB3aGVuIG5lc3RpbmcgdGFibGUgaW4gdGFibGUpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVzZWxlc3NQYXJhZ3JhcGhzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGFibGUgcCcpLCBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB1c2VsZXNzUGFyYWdyYXBocy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcCA9IHVzZWxlc3NQYXJhZ3JhcGhzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQgKCkge1xyXG4gICAgICAgIGxldCBfdGhpcyA9IHRoaXNcclxuICAgICAgICBfdGhpcy5yZWRpcHNJbml0KClcclxuICAgICAgICB0b2dnbGVIZWFkZXJJbml0KCk7XHJcbiAgICAgICAgbWVyZ2VDZWxsc0luaXQoKTtcclxuICAgICAgICBzcGxpdEgoKVxyXG4gICAgICAgIHNwbGl0VigpXHJcbiAgICAgICAgYWRkQ29sKClcclxuICAgICAgICBhZGRSb3coKVxyXG4gICAgICAgIHJlbW92ZUNvbCgpXHJcbiAgICAgICAgcmVtb3ZlUm93KClcclxuICAgICAgICBfdGhpcy5zdW1tZXJub3RlSW5pdCgpXHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4uY3JlYXRlLXRhYmxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uY3JlYXRlLXRhYmxlID4gaDIudGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uZXJyb3Ige1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAxMDgsIDEwOCk7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5mb3JtIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmZvcm0tY2hlY2sgbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi53eXNpd3lnIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ud3lzaXd5ZyAubW9kYWwtZGlhbG9nIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG4ud3lzaXd5ZyAudGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uYnRucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuPC9zdHlsZT4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY3JlYXRlLXRhYmxlXCIgfSwgW1xuICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtfdm0uX3YoXCLQodC+0LfQtNCw0L3QuNC1INGB0LXQutGG0LjQuFwiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImZvcm1cIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybVwiLFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgcmV0dXJuIF92bS5vbkhhbmRsZUNvbnRpbnVlKCRldmVudClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybS1ncm91cFwiIH0sIFtcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRpdGxlLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGl0bGVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybS1jb250cm9sXCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwi0JfQsNCz0L7Qu9C+0LLQvtC6XCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udGl0bGUgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBbXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0udGl0bGUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBfdm0ub25IYW5kbGVDaGFuZ2VcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm0tY2hlY2tcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yZXBlYXRhYmxlUm93LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmVwZWF0YWJsZVJvd1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNoZWNrLWlucHV0XCIsXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIsIGlkOiBcInJlcGVhdGFibGVSb3dcIiB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0ucmVwZWF0YWJsZVJvdylcbiAgICAgICAgICAgICAgICA/IF92bS5faShfdm0ucmVwZWF0YWJsZVJvdywgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICAgIDogX3ZtLnJlcGVhdGFibGVSb3dcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjaGFuZ2U6IFtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0ucmVwZWF0YWJsZVJvdyxcbiAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmIChfdm0ucmVwZWF0YWJsZVJvdyA9ICQkYS5jb25jYXQoWyQkdl0pKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLnJlcGVhdGFibGVSb3cgPSAkJGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsICQkaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdm0ucmVwZWF0YWJsZVJvdyA9ICQkY1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgX3ZtLm9uSGFuZGxlQ2hhbmdlXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtLWNoZWNrLWxhYmVsXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogXCJyZXBlYXRhYmxlUm93XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLQn9C+0LLRgtC+0YDRj9GO0YnQuNC10YHRjyDRgdGC0YDQvtC60LhcIildXG4gICAgICAgICAgKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZXJyb3IsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlcnJvclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlcnJvclwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAg0JLQstC10LTQuNGC0LUg0LfQsNCz0L7Qu9C+0LLQvtC6XFxuICAgICAgICBcIildXG4gICAgICAgIClcbiAgICAgIF1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3eXNpd3lnXCIgfSwgW1xuICAgICAgX2MoXCJoM1wiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCLQodC+0LfQtNCw0L3QuNC1INGB0YLRgNGD0LrRgtGD0YDRiyDRgtCw0LHQu9C40YbRi1wiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogXCJzdW1tZXJub3RlXCIgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ0bnNcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zZWNvbmRhcnlcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXJpZ2h0XCI6IFwiMTRweFwiIH0sXG4gICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uSGFuZGxlQmFjayB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwi0J3QsNC30LDQtFwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXJpZ2h0XCI6IFwiMTRweFwiIH0sXG4gICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uRm9ybWF0SHRtbCB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiRm9ybWF0ZSBodG1sXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkhhbmRsZUNvbnRpbnVlKCRldmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcItCf0YDQvtC00L7Qu9C20LjRgtGMXCIpXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9Il0sInNvdXJjZVJvb3QiOiIifQ==