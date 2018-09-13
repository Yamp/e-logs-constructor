webpackHotUpdate("main",{

/***/ "./src/wysiwyg_modules/toggle-header.js":
/*!**********************************************!*\
  !*** ./src/wysiwyg_modules/toggle-header.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony default export */ __webpack_exports__["default"] = (function () {
  $(document).ready(function () {
    $.extend($.summernote.plugins, {
      'cellHeader': function cellHeader(context) {
        var self = this,
            ui = $.summernote.ui,
            options = context.options,
            $editor = context.layoutInfo.editor,
            $editable = context.layoutInfo.editable;
        context.memo('button.cellHeader', function () {
          return ui.buttonGroup([ui.button({
            contents: '<b>Header<b>',
            tooltip: 'Toggle header',
            click: function click(e) {
              self.toggleCellHeader();
            }
          })]).render();
        });

        this.toggleCellHeader = function () {
          var rng = context.invoke('createRange', $editable);
          var dom = $.summernote.dom;

          if (rng.isCollapsed() && rng.isOnCell()) {
            context.invoke('beforeCommand');
            var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
            var $cell = $(cell);

            if ($cell.is('td')) {
              self.replaceTags($cell, 'th');
            } else if ($cell.is('th')) {
              self.replaceTags($cell, 'td');
            }

            context.invoke('afterCommand');
          }
        };

        this.replaceTags = function ($nodes, newTag) {
          $nodes.replaceWith(function () {
            return $("<" + newTag + " />", {
              html: $(this).html(),
              colspan: $(this).attr('colspan'),
              rowspan: $(this).attr('rowspan')
            });
          });
        };
      }
    });
  });
});
;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd3lzaXd5Z19tb2R1bGVzL3RvZ2dsZS1oZWFkZXIuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJleHRlbmQiLCJzdW1tZXJub3RlIiwicGx1Z2lucyIsImNvbnRleHQiLCJzZWxmIiwidWkiLCJvcHRpb25zIiwiJGVkaXRvciIsImxheW91dEluZm8iLCJlZGl0b3IiLCIkZWRpdGFibGUiLCJlZGl0YWJsZSIsIm1lbW8iLCJidXR0b25Hcm91cCIsImJ1dHRvbiIsImNvbnRlbnRzIiwidG9vbHRpcCIsImNsaWNrIiwiZSIsInRvZ2dsZUNlbGxIZWFkZXIiLCJyZW5kZXIiLCJybmciLCJpbnZva2UiLCJkb20iLCJpc0NvbGxhcHNlZCIsImlzT25DZWxsIiwiY2VsbCIsImFuY2VzdG9yIiwiY29tbW9uQW5jZXN0b3IiLCJpc0NlbGwiLCIkY2VsbCIsImlzIiwicmVwbGFjZVRhZ3MiLCIkbm9kZXMiLCJuZXdUYWciLCJyZXBsYWNlV2l0aCIsImh0bWwiLCJjb2xzcGFuIiwiYXR0ciIsInJvd3NwYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O3lDQUFBLCtEQUFlLFlBQVk7QUFDdkJBLElBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFZO0FBQzFCRixNQUFFRyxNQUFGLENBQVNILEVBQUVJLFVBQUYsQ0FBYUMsT0FBdEIsRUFBK0I7QUFFM0Isb0JBQWMsb0JBQVVDLE9BQVYsRUFBbUI7QUFDN0IsWUFBSUMsT0FBTyxJQUFYO0FBQUEsWUFDSUMsS0FBS1IsRUFBRUksVUFBRixDQUFhSSxFQUR0QjtBQUFBLFlBRUlDLFVBQVVILFFBQVFHLE9BRnRCO0FBQUEsWUFHSUMsVUFBWUosUUFBUUssVUFBUixDQUFtQkMsTUFIbkM7QUFBQSxZQUlJQyxZQUFZUCxRQUFRSyxVQUFSLENBQW1CRyxRQUpuQztBQU1BUixnQkFBUVMsSUFBUixDQUFhLG1CQUFiLEVBQWtDLFlBQVk7QUFDMUMsaUJBQU9QLEdBQUdRLFdBQUgsQ0FBZSxDQUNsQlIsR0FBR1MsTUFBSCxDQUFVO0FBQ05DLHNCQUFVLGNBREo7QUFFTkMscUJBQVUsZUFGSjtBQUdOQyxtQkFBTSxlQUFVQyxDQUFWLEVBQWE7QUFDZmQsbUJBQUtlLGdCQUFMO0FBQ0g7QUFMSyxXQUFWLENBRGtCLENBQWYsRUFRSkMsTUFSSSxFQUFQO0FBU0gsU0FWRDs7QUFZQSxhQUFLRCxnQkFBTCxHQUF3QixZQUFZO0FBQ2hDLGNBQU1FLE1BQU1sQixRQUFRbUIsTUFBUixDQUFlLGFBQWYsRUFBOEJaLFNBQTlCLENBQVo7QUFDQSxjQUFNYSxNQUFNMUIsRUFBRUksVUFBRixDQUFhc0IsR0FBekI7O0FBQ0EsY0FBSUYsSUFBSUcsV0FBSixNQUFxQkgsSUFBSUksUUFBSixFQUF6QixFQUF5QztBQUNyQ3RCLG9CQUFRbUIsTUFBUixDQUFlLGVBQWY7QUFDQSxnQkFBSUksT0FBT0gsSUFBSUksUUFBSixDQUFhTixJQUFJTyxjQUFKLEVBQWIsRUFBbUNMLElBQUlNLE1BQXZDLENBQVg7QUFDQSxnQkFBSUMsUUFBUWpDLEVBQUU2QixJQUFGLENBQVo7O0FBQ0EsZ0JBQUlJLE1BQU1DLEVBQU4sQ0FBUyxJQUFULENBQUosRUFBb0I7QUFDaEIzQixtQkFBSzRCLFdBQUwsQ0FBaUJGLEtBQWpCLEVBQXdCLElBQXhCO0FBQ0gsYUFGRCxNQUdLLElBQUlBLE1BQU1DLEVBQU4sQ0FBUyxJQUFULENBQUosRUFBb0I7QUFDckIzQixtQkFBSzRCLFdBQUwsQ0FBaUJGLEtBQWpCLEVBQXdCLElBQXhCO0FBQ0g7O0FBQ0QzQixvQkFBUW1CLE1BQVIsQ0FBZSxjQUFmO0FBQ0g7QUFDSixTQWZEOztBQWlCQSxhQUFLVSxXQUFMLEdBQW1CLFVBQVNDLE1BQVQsRUFBaUJDLE1BQWpCLEVBQXlCO0FBQ3hDRCxpQkFBT0UsV0FBUCxDQUFtQixZQUFXO0FBQzFCLG1CQUFPdEMsRUFBRSxNQUFNcUMsTUFBTixHQUFlLEtBQWpCLEVBQXdCO0FBQUNFLG9CQUFNdkMsRUFBRSxJQUFGLEVBQVF1QyxJQUFSLEVBQVA7QUFBdUJDLHVCQUFTeEMsRUFBRSxJQUFGLEVBQVF5QyxJQUFSLENBQWEsU0FBYixDQUFoQztBQUF5REMsdUJBQVMxQyxFQUFFLElBQUYsRUFBUXlDLElBQVIsQ0FBYSxTQUFiO0FBQWxFLGFBQXhCLENBQVA7QUFDSCxXQUZEO0FBR0gsU0FKRDtBQU1IO0FBNUMwQixLQUEvQjtBQThDSCxHQS9DRDtBQWdESDtBQUFBLEMiLCJmaWxlIjoibWFpbi5iYTA3ODI0ZjUyYjQ1Njg2ZDY0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQuZXh0ZW5kKCQuc3VtbWVybm90ZS5wbHVnaW5zLCB7XHJcblxyXG4gICAgICAgICAgICAnY2VsbEhlYWRlcic6IGZ1bmN0aW9uIChjb250ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdWkgPSAkLnN1bW1lcm5vdGUudWksXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IGNvbnRleHQub3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAkZWRpdG9yICAgPSBjb250ZXh0LmxheW91dEluZm8uZWRpdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICRlZGl0YWJsZSA9IGNvbnRleHQubGF5b3V0SW5mby5lZGl0YWJsZTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb250ZXh0Lm1lbW8oJ2J1dHRvbi5jZWxsSGVhZGVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1aS5idXR0b25Hcm91cChbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVpLmJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50czogJzxiPkhlYWRlcjxiPicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiAgJ1RvZ2dsZSBoZWFkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnRvZ2dsZUNlbGxIZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgXSkucmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUNlbGxIZWFkZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm5nID0gY29udGV4dC5pbnZva2UoJ2NyZWF0ZVJhbmdlJywgJGVkaXRhYmxlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkb20gPSAkLnN1bW1lcm5vdGUuZG9tO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChybmcuaXNDb2xsYXBzZWQoKSAmJiBybmcuaXNPbkNlbGwoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0Lmludm9rZSgnYmVmb3JlQ29tbWFuZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2VsbCA9IGRvbS5hbmNlc3RvcihybmcuY29tbW9uQW5jZXN0b3IoKSwgZG9tLmlzQ2VsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyICRjZWxsID0gJChjZWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGNlbGwuaXMoJ3RkJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVwbGFjZVRhZ3MoJGNlbGwsICd0aCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoJGNlbGwuaXMoJ3RoJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVwbGFjZVRhZ3MoJGNlbGwsICd0ZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dC5pbnZva2UoJ2FmdGVyQ29tbWFuZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXBsYWNlVGFncyA9IGZ1bmN0aW9uKCRub2RlcywgbmV3VGFnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG5vZGVzLnJlcGxhY2VXaXRoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJChcIjxcIiArIG5ld1RhZyArIFwiIC8+XCIsIHtodG1sOiAkKHRoaXMpLmh0bWwoKSwgY29sc3BhbjogJCh0aGlzKS5hdHRyKCdjb2xzcGFuJyksIHJvd3NwYW46ICQodGhpcykuYXR0cigncm93c3BhbicpfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9