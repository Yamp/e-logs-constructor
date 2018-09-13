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
  console.log($.summernote);
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
;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd3lzaXd5Z19tb2R1bGVzL3RvZ2dsZS1oZWFkZXIuanMiXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsIiQiLCJzdW1tZXJub3RlIiwiZXh0ZW5kIiwicGx1Z2lucyIsImNvbnRleHQiLCJzZWxmIiwidWkiLCJvcHRpb25zIiwiJGVkaXRvciIsImxheW91dEluZm8iLCJlZGl0b3IiLCIkZWRpdGFibGUiLCJlZGl0YWJsZSIsIm1lbW8iLCJidXR0b25Hcm91cCIsImJ1dHRvbiIsImNvbnRlbnRzIiwidG9vbHRpcCIsImNsaWNrIiwiZSIsInRvZ2dsZUNlbGxIZWFkZXIiLCJyZW5kZXIiLCJybmciLCJpbnZva2UiLCJkb20iLCJpc0NvbGxhcHNlZCIsImlzT25DZWxsIiwiY2VsbCIsImFuY2VzdG9yIiwiY29tbW9uQW5jZXN0b3IiLCJpc0NlbGwiLCIkY2VsbCIsImlzIiwicmVwbGFjZVRhZ3MiLCIkbm9kZXMiLCJuZXdUYWciLCJyZXBsYWNlV2l0aCIsImh0bWwiLCJjb2xzcGFuIiwiYXR0ciIsInJvd3NwYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O3lDQUFBLCtEQUFlLFlBQVk7QUFDdkJBLFVBQVFDLEdBQVIsQ0FBWUMsRUFBRUMsVUFBZDtBQUNBRCxJQUFFRSxNQUFGLENBQVNGLEVBQUVDLFVBQUYsQ0FBYUUsT0FBdEIsRUFBK0I7QUFFM0Isa0JBQWMsb0JBQVVDLE9BQVYsRUFBbUI7QUFDN0IsVUFBSUMsT0FBTyxJQUFYO0FBQUEsVUFDSUMsS0FBS04sRUFBRUMsVUFBRixDQUFhSyxFQUR0QjtBQUFBLFVBRUlDLFVBQVVILFFBQVFHLE9BRnRCO0FBQUEsVUFHSUMsVUFBWUosUUFBUUssVUFBUixDQUFtQkMsTUFIbkM7QUFBQSxVQUlJQyxZQUFZUCxRQUFRSyxVQUFSLENBQW1CRyxRQUpuQztBQU1BUixjQUFRUyxJQUFSLENBQWEsbUJBQWIsRUFBa0MsWUFBWTtBQUMxQyxlQUFPUCxHQUFHUSxXQUFILENBQWUsQ0FDbEJSLEdBQUdTLE1BQUgsQ0FBVTtBQUNOQyxvQkFBVSxjQURKO0FBRU5DLG1CQUFVLGVBRko7QUFHTkMsaUJBQU0sZUFBVUMsQ0FBVixFQUFhO0FBQ2ZkLGlCQUFLZSxnQkFBTDtBQUNIO0FBTEssU0FBVixDQURrQixDQUFmLEVBUUpDLE1BUkksRUFBUDtBQVNILE9BVkQ7O0FBWUEsV0FBS0QsZ0JBQUwsR0FBd0IsWUFBWTtBQUNoQyxZQUFNRSxNQUFNbEIsUUFBUW1CLE1BQVIsQ0FBZSxhQUFmLEVBQThCWixTQUE5QixDQUFaO0FBQ0EsWUFBTWEsTUFBTXhCLEVBQUVDLFVBQUYsQ0FBYXVCLEdBQXpCOztBQUNBLFlBQUlGLElBQUlHLFdBQUosTUFBcUJILElBQUlJLFFBQUosRUFBekIsRUFBeUM7QUFDckN0QixrQkFBUW1CLE1BQVIsQ0FBZSxlQUFmO0FBQ0EsY0FBSUksT0FBT0gsSUFBSUksUUFBSixDQUFhTixJQUFJTyxjQUFKLEVBQWIsRUFBbUNMLElBQUlNLE1BQXZDLENBQVg7QUFDQSxjQUFJQyxRQUFRL0IsRUFBRTJCLElBQUYsQ0FBWjs7QUFDQSxjQUFJSSxNQUFNQyxFQUFOLENBQVMsSUFBVCxDQUFKLEVBQW9CO0FBQ2hCM0IsaUJBQUs0QixXQUFMLENBQWlCRixLQUFqQixFQUF3QixJQUF4QjtBQUNILFdBRkQsTUFHSyxJQUFJQSxNQUFNQyxFQUFOLENBQVMsSUFBVCxDQUFKLEVBQW9CO0FBQ3JCM0IsaUJBQUs0QixXQUFMLENBQWlCRixLQUFqQixFQUF3QixJQUF4QjtBQUNIOztBQUNEM0Isa0JBQVFtQixNQUFSLENBQWUsY0FBZjtBQUNIO0FBQ0osT0FmRDs7QUFpQkEsV0FBS1UsV0FBTCxHQUFtQixVQUFTQyxNQUFULEVBQWlCQyxNQUFqQixFQUF5QjtBQUN4Q0QsZUFBT0UsV0FBUCxDQUFtQixZQUFXO0FBQzFCLGlCQUFPcEMsRUFBRSxNQUFNbUMsTUFBTixHQUFlLEtBQWpCLEVBQXdCO0FBQUNFLGtCQUFNckMsRUFBRSxJQUFGLEVBQVFxQyxJQUFSLEVBQVA7QUFBdUJDLHFCQUFTdEMsRUFBRSxJQUFGLEVBQVF1QyxJQUFSLENBQWEsU0FBYixDQUFoQztBQUF5REMscUJBQVN4QyxFQUFFLElBQUYsRUFBUXVDLElBQVIsQ0FBYSxTQUFiO0FBQWxFLFdBQXhCLENBQVA7QUFDSCxTQUZEO0FBR0gsT0FKRDtBQU1IO0FBNUMwQixHQUEvQjtBQThDSDtBQUFBLEMiLCJmaWxlIjoibWFpbi40ZTk2Y2JkZmU4MjViNzUyNWRkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc29sZS5sb2coJC5zdW1tZXJub3RlKVxyXG4gICAgJC5leHRlbmQoJC5zdW1tZXJub3RlLnBsdWdpbnMsIHtcclxuXHJcbiAgICAgICAgJ2NlbGxIZWFkZXInOiBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgICAgICAgICB1aSA9ICQuc3VtbWVybm90ZS51aSxcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBjb250ZXh0Lm9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAkZWRpdG9yICAgPSBjb250ZXh0LmxheW91dEluZm8uZWRpdG9yLFxyXG4gICAgICAgICAgICAgICAgJGVkaXRhYmxlID0gY29udGV4dC5sYXlvdXRJbmZvLmVkaXRhYmxlO1xyXG5cclxuICAgICAgICAgICAgY29udGV4dC5tZW1vKCdidXR0b24uY2VsbEhlYWRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1aS5idXR0b25Hcm91cChbXHJcbiAgICAgICAgICAgICAgICAgICAgdWkuYnV0dG9uKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudHM6ICc8Yj5IZWFkZXI8Yj4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiAgJ1RvZ2dsZSBoZWFkZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazpmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi50b2dnbGVDZWxsSGVhZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIF0pLnJlbmRlcigpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQ2VsbEhlYWRlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJuZyA9IGNvbnRleHQuaW52b2tlKCdjcmVhdGVSYW5nZScsICRlZGl0YWJsZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkb20gPSAkLnN1bW1lcm5vdGUuZG9tO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJuZy5pc0NvbGxhcHNlZCgpICYmIHJuZy5pc09uQ2VsbCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5pbnZva2UoJ2JlZm9yZUNvbW1hbmQnKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2VsbCA9IGRvbS5hbmNlc3RvcihybmcuY29tbW9uQW5jZXN0b3IoKSwgZG9tLmlzQ2VsbClcclxuICAgICAgICAgICAgICAgICAgICB2YXIgJGNlbGwgPSAkKGNlbGwpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRjZWxsLmlzKCd0ZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVwbGFjZVRhZ3MoJGNlbGwsICd0aCcpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCRjZWxsLmlzKCd0aCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVwbGFjZVRhZ3MoJGNlbGwsICd0ZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuaW52b2tlKCdhZnRlckNvbW1hbmQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVwbGFjZVRhZ3MgPSBmdW5jdGlvbigkbm9kZXMsIG5ld1RhZykge1xyXG4gICAgICAgICAgICAgICAgJG5vZGVzLnJlcGxhY2VXaXRoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKFwiPFwiICsgbmV3VGFnICsgXCIgLz5cIiwge2h0bWw6ICQodGhpcykuaHRtbCgpLCBjb2xzcGFuOiAkKHRoaXMpLmF0dHIoJ2NvbHNwYW4nKSwgcm93c3BhbjogJCh0aGlzKS5hdHRyKCdyb3dzcGFuJyl9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9