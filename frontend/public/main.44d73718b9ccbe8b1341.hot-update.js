webpackHotUpdate("main",{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Modal.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/*
    Setup component:
    import modal from "./Modal.vue"
     Using example:
    <modal v-show="showCalendar" @close="showCalendar = false" >
        <full-calendar :events="events" :config="fullCalendarConfig" ref="calendar" />
    </modal>
 */
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'modal',
  props: {
    action: Object
  },
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/views/Journal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/Journal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_manshind_Desktop_Projects_e_logs_constructor_frontend_node_modules_babel_runtime_helpers_builtin_es6_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/builtin/es6/toConsumableArray */ "./node_modules/@babel/runtime/helpers/builtin/es6/toConsumableArray.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
/* harmony import */ var core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.array.from */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_TableItem_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TableItem.vue */ "./src/components/TableItem.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/Sortable.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sortablejs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Modal_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Modal.vue */ "./src/components/Modal.vue");







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
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "JournalPage",
  data: function data() {
    return {
      isShowDownload: false,
      downloadLink: '#'
    };
  },
  components: {
    Modal: _components_Modal_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    TableItem: _components_TableItem_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  methods: {
    onHandleClick: function onHandleClick() {
      this.$store.getters['journalState/getJournalName'] ? this.$router.push("/journal/".concat(this.$route.params.journalName, "/table/create")) : this.$router.push('/');
    },
    getAllAttributes: function getAllAttributes(node) {
      var attr = {};
      Array.from(node.attributes).map(function (item) {
        return attr[item.name] = item.value;
      });
      return attr;
    },
    removeCells: function removeCells(table_html) {
      var refactoredHtml = table_html;
      refactoredHtml = refactoredHtml.split('<cell').join('<div class="cell"');
      refactoredHtml = refactoredHtml.split('</cell>').join('</div>');
      return refactoredHtml;
    },
    addCells: function addCells(table_html) {
      var refactoredHtml = table_html;
      refactoredHtml = refactoredHtml.split('div').join('cell');
      refactoredHtml = refactoredHtml.split('class="cell"').join('');
      return refactoredHtml;
    },
    showDownloadModal: function showDownloadModal() {
      this.onHandleSend();
    },
    onHandleSend: function onHandleSend() {
      var _this2 = this;

      var journalObserver = this.$store.getters['journalState/getJournal'];
      console.log(journalObserver);
      var journal = JSON.parse(JSON.stringify(journalObserver));
      journal.tables.map(function (item) {
        item.html = _this2.addCells(item.html);
      });
      console.log(journal);
      window.journal = journal;
      var url = 'http://localhost:3000/save';
      var self = this;
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post(url, journal).then(function (response) {
        console.log("data", response.data);
        self.downloadLink = response.data.download_link;
        self.isShowDownload = true;
      });
    },
    clearJson: function clearJson(json) {
      var result = json.replace('"', "'"); // json.replace(/\//g, '');

      console.log("json:", result);
      return result;
    },
    getUrlParams: function getUrlParams(name, url) {
      if (!url) url = window.location.href;
      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
  },
  computed: {
    getTables: function getTables() {
      return this.$store.getters['journalState/getTables'];
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    var _this = this;

    if (_this.getUrlParams('imported') == 'true') {
      this.$store.dispatch('journalState/importJournal', this.$route.params.journalName).then(function () {
        var journalObserver = _this3.$store.getters['journalState/getJournal'];
        console.log(journalObserver);
        var journal = JSON.parse(JSON.stringify(journalObserver));
        journal.tables.map(function (item) {
          item.html = _this3.removeCells(item.html);
        });

        _this3.$store.commit('journalState/setJournal', journal);
      });
    }

    if (document.getElementById('section-list')) {
      sortablejs__WEBPACK_IMPORTED_MODULE_9___default.a.create(document.getElementById('section-list'), {
        chosenClass: "sortable-drag",
        onEnd: function onEnd(event) {
          var movedItem = _this.getTables.find(function (item, index) {
            return index === event.oldIndex;
          });

          var remainingItems = _this.getTables.filter(function (item, index) {
            return index !== event.oldIndex;
          });

          var reorderedItems = Object(_Users_manshind_Desktop_Projects_e_logs_constructor_frontend_node_modules_babel_runtime_helpers_builtin_es6_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(remainingItems.slice(0, event.newIndex)).concat([movedItem], Object(_Users_manshind_Desktop_Projects_e_logs_constructor_frontend_node_modules_babel_runtime_helpers_builtin_es6_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(remainingItems.slice(event.newIndex)));

          _this.$store.commit('journalState/setTablesList', {
            tables: reorderedItems
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.modal-mask[data-v-701ac82d] {\n  position: fixed;\n  z-index: 9998;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: table;\n  transition: opacity .3s ease;\n}\n.modal-wrapper[data-v-701ac82d] {\n  display: table-cell;\n  vertical-align: middle;\n}\n.modal-container[data-v-701ac82d] {\n  width: 1024px;\n  margin: 0px auto;\n  padding: 20px 30px;\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);\n  transition: all .3s ease;\n  font-family: Helvetica, Arial, sans-serif;\n}\n.modal-header h3[data-v-701ac82d] {\n  margin-top: 0;\n  color: #42b983;\n}\n.modal-body[data-v-701ac82d] {\n  margin: 20px 0;\n}\n.modal-default-button[data-v-701ac82d] {\n  float: right;\n}\n\n/*\n * The following styles are auto-applied to elements with\n * transition=\"modal\" when their visibility is toggled\n * by Vue.js.\n *\n * You can easily play with the modal transition by editing\n * these styles.\n */\n.modal-enter[data-v-701ac82d] {\n  opacity: 0;\n}\n.modal-leave-active[data-v-701ac82d] {\n  opacity: 0;\n}\n.modal-enter .modal-container[data-v-701ac82d],\n.modal-leave-active .modal-container[data-v-701ac82d] {\n  -webkit-transform: scale(1.1);\n  transform: scale(1.1);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Modal.vue?vue&type=template&id=701ac82d&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal.vue?vue&type=template&id=701ac82d&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************/
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
  return _c("transition", { attrs: { name: "modal" } }, [
    _c("div", { staticClass: "modal-mask" }, [
      _c("div", { staticClass: "modal-wrapper" }, [
        _c("div", { staticClass: "modal-container" }, [
          _c("div", { staticClass: "modal-body" }, [_vm._t("default")], 2),
          _vm._v(" "),
          _c("div", { staticClass: "modal-footer" }, [
            _vm.action
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-success",
                    on: { click: _vm.action.callback }
                  },
                  [_vm._v(_vm._s(_vm.action.title))]
                )
              : _vm._e(),
            _vm._v(" \n            "),
            _c(
              "button",
              {
                staticClass: "modal-default-button btn btn-default",
                on: {
                  click: function($event) {
                    _vm.$emit("close")
                  }
                }
              },
              [_vm._v("Закрыть")]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("edc057b6", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/Modal.vue":
/*!**********************************!*\
  !*** ./src/components/Modal.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_vue_vue_type_template_id_701ac82d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=701ac82d&scoped=true& */ "./src/components/Modal.vue?vue&type=template&id=701ac82d&scoped=true&");
/* harmony import */ var _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.vue?vue&type=script&lang=js& */ "./src/components/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Modal_vue_vue_type_style_index_0_id_701ac82d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss&scoped=true& */ "./src/components/Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Modal_vue_vue_type_template_id_701ac82d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Modal_vue_vue_type_template_id_701ac82d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "701ac82d",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('701ac82d', component.options)
    } else {
      api.reload('701ac82d', component.options)
    }
    module.hot.accept(/*! ./Modal.vue?vue&type=template&id=701ac82d&scoped=true& */ "./src/components/Modal.vue?vue&type=template&id=701ac82d&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Modal_vue_vue_type_template_id_701ac82d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal.vue?vue&type=template&id=701ac82d&scoped=true& */ "./src/components/Modal.vue?vue&type=template&id=701ac82d&scoped=true&");
(function () {
      api.rerender('701ac82d', {
        render: _Modal_vue_vue_type_template_id_701ac82d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Modal_vue_vue_type_template_id_701ac82d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/components/Modal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/Modal.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/components/Modal.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Modal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/components/Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss&scoped=true& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_701ac82d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/components/Modal.vue?vue&type=style&index=0&id=701ac82d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_701ac82d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_701ac82d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_701ac82d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_701ac82d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_style_index_0_id_701ac82d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/Modal.vue?vue&type=template&id=701ac82d&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./src/components/Modal.vue?vue&type=template&id=701ac82d&scoped=true& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_701ac82d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Modal.vue?vue&type=template&id=701ac82d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/Modal.vue?vue&type=template&id=701ac82d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_701ac82d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_template_id_701ac82d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTW9kYWwudnVlIiwid2VicGFjazovLy9zcmMvdmlld3MvSm91cm5hbC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwudnVlPzYyYmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwudnVlPzAzMzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwudnVlP2UzNjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vZGFsLnZ1ZT8wM2IxIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vZGFsLnZ1ZT8wMGU4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01vZGFsLnZ1ZT8xMzI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQkE7Ozs7Ozs7O0FBU0E7QUFDQSxlQURBO0FBRUE7QUFDQTtBQURBLEdBRkE7QUFLQSxNQUxBLGtCQUtBO0FBQ0E7QUFFQTtBQVJBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0tBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxxQkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLDJCQURBO0FBRUE7QUFGQTtBQUlBLEdBUEE7QUFRQTtBQUFBO0FBQUE7QUFBQSxHQVJBO0FBU0E7QUFDQSxpQkFEQSwyQkFDQTtBQUNBLDJEQUNBLHNGQURBLEdBRUEsc0JBRkE7QUFHQSxLQUxBO0FBTUEsb0JBTkEsNEJBTUEsSUFOQSxFQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBLEtBVkE7QUFXQSxlQVhBLHVCQVdBLFVBWEEsRUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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MUYsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyx3R0FBNEc7QUFDaEksY0FBYyxtQkFBTyxDQUFDLCtDQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IscUlBQXdELEVBQUU7QUFBQTtBQUNoRjtBQUNBLGdCQUFnQiw0RkFBTTtBQUN0Qix5QkFBeUIscUdBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBK0ssQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbk07QUFBQTtBQUFBO0FBQUE7QUFBdVYsQ0FBZ0Isd1lBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBM1c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6Im1haW4uNDRkNzM3MThiOWNjYmU4YjEzNDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8dHJhbnNpdGlvbiBuYW1lPVwibW9kYWxcIj5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtbWFza1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICA8c2xvdD5cbiAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdi1pZj1cImFjdGlvblwiIEBjbGljaz1cImFjdGlvbi5jYWxsYmFja1wiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+e3thY3Rpb24udGl0bGV9fTwvYnV0dG9uPiZuYnNwO1xuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9kYWwtZGVmYXVsdC1idXR0b24gYnRuIGJ0bi1kZWZhdWx0XCIgQGNsaWNrPVwiJGVtaXQoJ2Nsb3NlJylcIj7Ql9Cw0LrRgNGL0YLRjDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L3RyYW5zaXRpb24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIC8qXG4gICAgICAgIFNldHVwIGNvbXBvbmVudDpcbiAgICAgICAgaW1wb3J0IG1vZGFsIGZyb20gXCIuL01vZGFsLnZ1ZVwiXG5cbiAgICAgICAgVXNpbmcgZXhhbXBsZTpcbiAgICAgICAgPG1vZGFsIHYtc2hvdz1cInNob3dDYWxlbmRhclwiIEBjbG9zZT1cInNob3dDYWxlbmRhciA9IGZhbHNlXCIgPlxuICAgICAgICAgICAgPGZ1bGwtY2FsZW5kYXIgOmV2ZW50cz1cImV2ZW50c1wiIDpjb25maWc9XCJmdWxsQ2FsZW5kYXJDb25maWdcIiByZWY9XCJjYWxlbmRhclwiIC8+XG4gICAgICAgIDwvbW9kYWw+XG4gICAgICovXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ21vZGFsJyxcbiAgICBwcm9wczoge1xuICAgICAgICBhY3Rpb246IE9iamVjdFxuICAgIH0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgfVxuICAgIH0sXG59XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbiAgICAubW9kYWwtbWFzayB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgei1pbmRleDogOTk5ODtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcbiAgICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGVhc2U7XG4gICAgfVxuXG4gICAgLm1vZGFsLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cblxuICAgIC5tb2RhbC1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAyNHB4O1xuICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgLjMzKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xuICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICB9XG5cbiAgICAubW9kYWwtaGVhZGVyIGgzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgY29sb3I6ICM0MmI5ODM7XG4gICAgfVxuXG4gICAgLm1vZGFsLWJvZHkge1xuICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICB9XG5cbiAgICAubW9kYWwtZGVmYXVsdC1idXR0b24ge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuXG5cbi8qXG4gKiBUaGUgZm9sbG93aW5nIHN0eWxlcyBhcmUgYXV0by1hcHBsaWVkIHRvIGVsZW1lbnRzIHdpdGhcbiAqIHRyYW5zaXRpb249XCJtb2RhbFwiIHdoZW4gdGhlaXIgdmlzaWJpbGl0eSBpcyB0b2dnbGVkXG4gKiBieSBWdWUuanMuXG4gKlxuICogWW91IGNhbiBlYXNpbHkgcGxheSB3aXRoIHRoZSBtb2RhbCB0cmFuc2l0aW9uIGJ5IGVkaXRpbmdcbiAqIHRoZXNlIHN0eWxlcy5cbiAqL1xuXG4gICAgLm1vZGFsLWVudGVyIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAubW9kYWwtbGVhdmUtYWN0aXZlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAubW9kYWwtZW50ZXIgLm1vZGFsLWNvbnRhaW5lcixcbiAgICAubW9kYWwtbGVhdmUtYWN0aXZlIC5tb2RhbC1jb250YWluZXIge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIH1cblxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiam91cm5hbFwiPlxuICAgIDxkaXYgY2xhc3M9XCJzaWRlLWJhclwiPlxuICAgICAgPGgzPtCW0YPRgNC90LDQuyA8c3BhbiBzdHlsZT1cImZvbnQtd2VpZ2h0OiBib2xkXCI+e3t0aGlzLiRyb3V0ZS5wYXJhbXMuam91cm5hbE5hbWV9fTwvc3Bhbj48L2gzPlxuICAgICAgPGhyIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMTBweFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJuby1pdGVtcy10ZXh0XCIgdi1pZj1cIiFnZXRUYWJsZXMubGVuZ3RoXCI+0KHQtdC60YbQuNC5INC90LXRgjwvc3Bhbj5cbiAgICAgIDx1bCB2LWlmPVwiZ2V0VGFibGVzLmxlbmd0aFwiIGlkPVwic2VjdGlvbi1saXN0XCI+XG4gICAgICAgIDxsaSB2LWZvcj1cInRhYmxlIGluIGdldFRhYmxlc1wiIDprZXk9XCJ0YWJsZS5uYW1lXCI+PGRpdj48c3Bhbj57e3RhYmxlLnRpdGxlfX08L3NwYW4+PC9kaXY+PGRpdj48aW1nIGNsYXNzPVwibW92ZS1pY29uXCIgc3JjPVwiLi4vYXNzZXRzL3Njcm9sbC5zdmdcIj48L2Rpdj48L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiYm9keVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgIDxoMz7QotC10LrRg9GJ0LjQtSDRgdC10LrRhtC40Lg8L2gzPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgQGNsaWNrLnByZXZlbnQ9XCJvbkhhbmRsZUNsaWNrXCIgdHlwZT1cInN1Ym1pdFwiPtCU0L7QsdCw0LLQuNGC0Ywg0YHQtdC60YbQuNGOPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiZ2V0VGFibGVzLmxlbmd0aFwiPlxuICAgICAgICAgIDx0YWJsZS1pdGVtIHYtZm9yPVwidGFibGUgaW4gZ2V0VGFibGVzXCIgOnRhYmxlPVwidGFibGVcIiA6a2V5PVwidGFibGUubmFtZVwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMThweFwiPjwvdGFibGUtaXRlbT5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJuby1pdGVtcy10ZXh0XCIgdi1pZj1cIiFnZXRUYWJsZXMubGVuZ3RoXCI+0J/QvtC60LAg0YfRgtC+INGB0LXQutGG0LjQuSDQvdC10YIsINCy0Ysg0LzQvtC20LXRgtC1INC00L7QsdCw0LLQuNGC0Ywg0LjRhTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImJ0bnNcIiB2LWlmPVwiZ2V0VGFibGVzLmxlbmd0aFwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgQGNsaWNrLnByZXZlbnQ9XCJzaG93RG93bmxvYWRNb2RhbFwiIHR5cGU9XCJzdWJtaXRcIj7QntGC0L/RgNCw0LLQuNGC0Yw8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxtb2RhbCB2LXNob3c9XCJpc1Nob3dEb3dubG9hZFwiIEBjbG9zZT1cImlzU2hvd0Rvd25sb2FkID0gZmFsc2VcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgdGFyZ2V0PVwiX2JsYW5rXCIgOmhyZWY9XCJkb3dubG9hZExpbmtcIj5Eb3dubG9hZCBqb3VybmFsPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9tb2RhbD5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbmltcG9ydCBUYWJsZUl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9UYWJsZUl0ZW0udnVlJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHNvcnRhYmxlIGZyb20gJ3NvcnRhYmxlanMnXG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvTW9kYWwudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJKb3VybmFsUGFnZVwiLFxuICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpc1Nob3dEb3dubG9hZDogZmFsc2UsXG4gICAgICAgICAgZG93bmxvYWRMaW5rOiAnIydcbiAgICAgIH1cbiAgfSxcbiAgY29tcG9uZW50czoge01vZGFsLCBUYWJsZUl0ZW19LFxuICBtZXRob2RzOiB7XG4gICAgICBvbkhhbmRsZUNsaWNrICgpIHtcbiAgICAgICAgICB0aGlzLiRzdG9yZS5nZXR0ZXJzWydqb3VybmFsU3RhdGUvZ2V0Sm91cm5hbE5hbWUnXSA/XG4gICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKGAvam91cm5hbC8ke3RoaXMuJHJvdXRlLnBhcmFtcy5qb3VybmFsTmFtZX0vdGFibGUvY3JlYXRlYClcbiAgICAgICAgICAgICAgOiB0aGlzLiRyb3V0ZXIucHVzaCgnLycpXG4gICAgICB9LFxuICAgICAgZ2V0QWxsQXR0cmlidXRlcyAobm9kZSkge1xuICAgICAgICAgIGxldCBhdHRyID0ge31cbiAgICAgICAgICBBcnJheS5mcm9tKG5vZGUuYXR0cmlidXRlcykubWFwKGl0ZW0gPT4gYXR0cltpdGVtLm5hbWVdID0gaXRlbS52YWx1ZSlcbiAgICAgICAgICByZXR1cm4gYXR0clxuICAgICAgfSxcbiAgICAgIHJlbW92ZUNlbGxzICh0YWJsZV9odG1sKSB7XG4gICAgICAgICAgbGV0IHJlZmFjdG9yZWRIdG1sID0gdGFibGVfaHRtbFxuICAgICAgICAgIHJlZmFjdG9yZWRIdG1sID0gcmVmYWN0b3JlZEh0bWwuc3BsaXQoJzxjZWxsJykuam9pbignPGRpdiBjbGFzcz1cImNlbGxcIicpXG4gICAgICAgICAgcmVmYWN0b3JlZEh0bWwgPSByZWZhY3RvcmVkSHRtbC5zcGxpdCgnPC9jZWxsPicpLmpvaW4oJzwvZGl2PicpXG4gICAgICAgICAgcmV0dXJuIHJlZmFjdG9yZWRIdG1sXG4gICAgICB9LFxuICAgICAgYWRkQ2VsbHMgKHRhYmxlX2h0bWwpIHtcbiAgICAgICAgICBsZXQgcmVmYWN0b3JlZEh0bWwgPSB0YWJsZV9odG1sXG4gICAgICAgICAgcmVmYWN0b3JlZEh0bWwgPSByZWZhY3RvcmVkSHRtbC5zcGxpdCgnZGl2Jykuam9pbignY2VsbCcpXG4gICAgICAgICAgcmVmYWN0b3JlZEh0bWwgPSByZWZhY3RvcmVkSHRtbC5zcGxpdCgnY2xhc3M9XCJjZWxsXCInKS5qb2luKCcnKVxuICAgICAgICAgIHJldHVybiByZWZhY3RvcmVkSHRtbFxuICAgICAgfSxcbiAgICAgIHNob3dEb3dubG9hZE1vZGFsKCkge1xuICAgICAgICAgIHRoaXMub25IYW5kbGVTZW5kKCk7XG4gICAgICB9LFxuICAgICAgb25IYW5kbGVTZW5kICgpIHtcbiAgICAgICAgICBsZXQgam91cm5hbE9ic2VydmVyID0gdGhpcy4kc3RvcmUuZ2V0dGVyc1snam91cm5hbFN0YXRlL2dldEpvdXJuYWwnXTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhqb3VybmFsT2JzZXJ2ZXIpO1xuICAgICAgICAgIGxldCBqb3VybmFsID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShqb3VybmFsT2JzZXJ2ZXIpKTtcbiAgICAgICAgICBqb3VybmFsLnRhYmxlcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgIGl0ZW0uaHRtbCA9IHRoaXMuYWRkQ2VsbHMoaXRlbS5odG1sKVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGpvdXJuYWwpO1xuICAgICAgICAgIHdpbmRvdy5qb3VybmFsID0gam91cm5hbDtcbiAgICAgICAgICBsZXQgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9zYXZlJztcbiAgICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgYXhpb3MucG9zdCh1cmwsIGpvdXJuYWwpLnRoZW4oIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgIHNlbGYuZG93bmxvYWRMaW5rID0gcmVzcG9uc2UuZGF0YS5kb3dubG9hZF9saW5rO1xuICAgICAgICAgICAgICBzZWxmLmlzU2hvd0Rvd25sb2FkID0gdHJ1ZTtcbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBjbGVhckpzb24oanNvbikge1xuICAgICAgICBsZXQgcmVzdWx0ID0ganNvbi5yZXBsYWNlKCdcIicsXCInXCIpO1xuICAgICAgICAgICAgLy8ganNvbi5yZXBsYWNlKC9cXC8vZywgJycpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImpzb246XCIsIHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9LFxuICAgICAgZ2V0VXJsUGFyYW1zKG5hbWUsIHVybCkge1xuICAgICAgICAgIGlmICghdXJsKSB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgICBuYW1lID0gbmFtZS5yZXBsYWNlKC9bXFxbXFxdXS9nLCAnXFxcXCQmJyk7XG4gICAgICAgICAgdmFyIHJlZ2V4ID0gbmV3IFJlZ0V4cCgnWz8mXScgKyBuYW1lICsgJyg9KFteJiNdKil8JnwjfCQpJyksXG4gICAgICAgICAgICAgIHJlc3VsdHMgPSByZWdleC5leGVjKHVybCk7XG4gICAgICAgICAgaWYgKCFyZXN1bHRzKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICBpZiAoIXJlc3VsdHNbMl0pIHJldHVybiAnJztcbiAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csICcgJykpO1xuICAgICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgICAgZ2V0VGFibGVzICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1snam91cm5hbFN0YXRlL2dldFRhYmxlcyddXG4gICAgICB9XG4gIH0sXG4gIG1vdW50ZWQgKCkge1xuICAgICAgbGV0IF90aGlzID0gdGhpc1xuICAgICAgaWYgKF90aGlzLmdldFVybFBhcmFtcygnaW1wb3J0ZWQnKSA9PSAndHJ1ZScpIHtcbiAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnam91cm5hbFN0YXRlL2ltcG9ydEpvdXJuYWwnLCB0aGlzLiRyb3V0ZS5wYXJhbXMuam91cm5hbE5hbWUpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBqb3VybmFsT2JzZXJ2ZXIgPSB0aGlzLiRzdG9yZS5nZXR0ZXJzWydqb3VybmFsU3RhdGUvZ2V0Sm91cm5hbCddO1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhqb3VybmFsT2JzZXJ2ZXIpO1xuICAgICAgICAgICAgICBsZXQgam91cm5hbCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoam91cm5hbE9ic2VydmVyKSk7XG4gICAgICAgICAgICAgIGpvdXJuYWwudGFibGVzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgIGl0ZW0uaHRtbCA9IHRoaXMucmVtb3ZlQ2VsbHMoaXRlbS5odG1sKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdqb3VybmFsU3RhdGUvc2V0Sm91cm5hbCcsIGpvdXJuYWwpXG4gICAgICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24tbGlzdCcpKSB7XG4gICAgICAgICAgc29ydGFibGUuY3JlYXRlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uLWxpc3QnKSwge1xuICAgICAgICAgICAgICBjaG9zZW5DbGFzczogXCJzb3J0YWJsZS1kcmFnXCIsXG4gICAgICAgICAgICAgIG9uRW5kOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IG1vdmVkSXRlbSA9IF90aGlzLmdldFRhYmxlcy5maW5kKChpdGVtLCBpbmRleCkgPT4gaW5kZXggPT09IGV2ZW50Lm9sZEluZGV4KVxuICAgICAgICAgICAgICAgICAgY29uc3QgcmVtYWluaW5nSXRlbXMgPSBfdGhpcy5nZXRUYWJsZXMuZmlsdGVyKChpdGVtLCBpbmRleCkgPT4gaW5kZXggIT09IGV2ZW50Lm9sZEluZGV4KVxuXG4gICAgICAgICAgICAgICAgICBjb25zdCByZW9yZGVyZWRJdGVtcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5yZW1haW5pbmdJdGVtcy5zbGljZSgwLCBldmVudC5uZXdJbmRleCksXG4gICAgICAgICAgICAgICAgICAgICAgbW92ZWRJdGVtLFxuICAgICAgICAgICAgICAgICAgICAgIC4uLnJlbWFpbmluZ0l0ZW1zLnNsaWNlKGV2ZW50Lm5ld0luZGV4KVxuICAgICAgICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICAgICAgICBfdGhpcy4kc3RvcmUuY29tbWl0KCdqb3VybmFsU3RhdGUvc2V0VGFibGVzTGlzdCcsIHt0YWJsZXM6IHJlb3JkZXJlZEl0ZW1zfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmpvdXJuYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuLnNpZGUtYmFyIHtcbiAgd2lkdGg6IDI4MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjc7XG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkICMyZTZkYTQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuLnNpZGUtYmFyIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsLWxlYWRpbmctemVybztcbn1cbi5zaWRlLWJhciBsaSB7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDEwcHg7XG4gIGN1cnNvcjogbW92ZTtcbn1cbi5zaWRlLWJhciBsaSBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MCU7XG59XG4uc2lkZS1iYXIgbGkgZGl2Omxhc3QtY2hpbGQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnNpZGUtYmFyIGxpIC5tb3ZlLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgb3BhY2l0eTogMC40O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLnNpZGUtYmFyIGxpOmhvdmVyIC5tb3ZlLWljb24ge1xuICBvcGFjaXR5OiAxO1xufVxuLnNvcnRhYmxlLWRyYWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmU2ZGE0O1xufVxuLnNpZGUtYmFyIC5uby1pdGVtcy10ZXh0IHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uc2lkZS1iYXIgaDMge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmJvZHkge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjgwcHgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG4uYm9keSBoMyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uY29udGVudCB7XG4gIG9wYWNpdHk6IDAuODtcbn1cbi5uby1pdGVtcy10ZXh0IHtcbiAgb3BhY2l0eTogMC42O1xufVxuLmJ0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm1vZGFsLW1hc2tbZGF0YS12LTcwMWFjODJkXSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiA5OTk4O1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgZGlzcGxheTogdGFibGU7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcyBlYXNlO1xcbn1cXG4ubW9kYWwtd3JhcHBlcltkYXRhLXYtNzAxYWM4MmRdIHtcXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4ubW9kYWwtY29udGFpbmVyW2RhdGEtdi03MDFhYzgyZF0ge1xcbiAgd2lkdGg6IDEwMjRweDtcXG4gIG1hcmdpbjogMHB4IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zMyk7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XFxuICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG59XFxuLm1vZGFsLWhlYWRlciBoM1tkYXRhLXYtNzAxYWM4MmRdIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBjb2xvcjogIzQyYjk4MztcXG59XFxuLm1vZGFsLWJvZHlbZGF0YS12LTcwMWFjODJkXSB7XFxuICBtYXJnaW46IDIwcHggMDtcXG59XFxuLm1vZGFsLWRlZmF1bHQtYnV0dG9uW2RhdGEtdi03MDFhYzgyZF0ge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbn1cXG5cXG4vKlxcbiAqIFRoZSBmb2xsb3dpbmcgc3R5bGVzIGFyZSBhdXRvLWFwcGxpZWQgdG8gZWxlbWVudHMgd2l0aFxcbiAqIHRyYW5zaXRpb249XFxcIm1vZGFsXFxcIiB3aGVuIHRoZWlyIHZpc2liaWxpdHkgaXMgdG9nZ2xlZFxcbiAqIGJ5IFZ1ZS5qcy5cXG4gKlxcbiAqIFlvdSBjYW4gZWFzaWx5IHBsYXkgd2l0aCB0aGUgbW9kYWwgdHJhbnNpdGlvbiBieSBlZGl0aW5nXFxuICogdGhlc2Ugc3R5bGVzLlxcbiAqL1xcbi5tb2RhbC1lbnRlcltkYXRhLXYtNzAxYWM4MmRdIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5tb2RhbC1sZWF2ZS1hY3RpdmVbZGF0YS12LTcwMWFjODJkXSB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4ubW9kYWwtZW50ZXIgLm1vZGFsLWNvbnRhaW5lcltkYXRhLXYtNzAxYWM4MmRdLFxcbi5tb2RhbC1sZWF2ZS1hY3RpdmUgLm1vZGFsLWNvbnRhaW5lcltkYXRhLXYtNzAxYWM4MmRdIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidHJhbnNpdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwibW9kYWxcIiB9IH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLW1hc2tcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLXdyYXBwZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtYm9keVwiIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWZvb3RlclwiIH0sIFtcbiAgICAgICAgICAgIF92bS5hY3Rpb25cbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmFjdGlvbi5jYWxsYmFjayB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmFjdGlvbi50aXRsZSkpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIsKgXFxuICAgICAgICAgICAgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1kZWZhdWx0LWJ1dHRvbiBidG4gYnRuLWRlZmF1bHRcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJjbG9zZVwiKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcItCX0LDQutGA0YvRgtGMXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcwMWFjODJkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiZWRjMDU3YjZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01vZGFsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcwMWFjODJkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzAxYWM4MmQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Nb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzAxYWM4MmQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Nb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzAxYWM4MmQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3MDFhYzgyZFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9tYW5zaGluZC9EZXNrdG9wL1Byb2plY3RzL2UtbG9ncy1jb25zdHJ1Y3Rvci9mcm9udGVuZC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzAxYWM4MmQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzAxYWM4MmQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MDFhYzgyZCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3MDFhYzgyZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvTW9kYWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0wLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Nb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMC0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Nb2RhbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MDFhYzgyZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTW9kYWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzAxYWM4MmQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MDFhYzgyZCZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=