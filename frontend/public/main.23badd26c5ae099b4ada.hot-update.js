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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd3lzaXd5Z19tb2R1bGVzL3RvZ2dsZS1oZWFkZXIuanMiXSwibmFtZXMiOlsiJCIsImV4dGVuZCIsInN1bW1lcm5vdGUiLCJwbHVnaW5zIiwiY29udGV4dCIsInNlbGYiLCJ1aSIsIm9wdGlvbnMiLCIkZWRpdG9yIiwibGF5b3V0SW5mbyIsImVkaXRvciIsIiRlZGl0YWJsZSIsImVkaXRhYmxlIiwibWVtbyIsImJ1dHRvbkdyb3VwIiwiYnV0dG9uIiwiY29udGVudHMiLCJ0b29sdGlwIiwiY2xpY2siLCJlIiwidG9nZ2xlQ2VsbEhlYWRlciIsInJlbmRlciIsInJuZyIsImludm9rZSIsImRvbSIsImlzQ29sbGFwc2VkIiwiaXNPbkNlbGwiLCJjZWxsIiwiYW5jZXN0b3IiLCJjb21tb25BbmNlc3RvciIsImlzQ2VsbCIsIiRjZWxsIiwiaXMiLCJyZXBsYWNlVGFncyIsIiRub2RlcyIsIm5ld1RhZyIsInJlcGxhY2VXaXRoIiwiaHRtbCIsImNvbHNwYW4iLCJhdHRyIiwicm93c3BhbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7eUNBQUEsK0RBQWUsWUFBWTtBQUN2QkEsSUFBRUMsTUFBRixDQUFTRCxFQUFFRSxVQUFGLENBQWFDLE9BQXRCLEVBQStCO0FBRTNCLGtCQUFjLG9CQUFVQyxPQUFWLEVBQW1CO0FBQzdCLFVBQUlDLE9BQU8sSUFBWDtBQUFBLFVBQ0lDLEtBQUtOLEVBQUVFLFVBQUYsQ0FBYUksRUFEdEI7QUFBQSxVQUVJQyxVQUFVSCxRQUFRRyxPQUZ0QjtBQUFBLFVBR0lDLFVBQVlKLFFBQVFLLFVBQVIsQ0FBbUJDLE1BSG5DO0FBQUEsVUFJSUMsWUFBWVAsUUFBUUssVUFBUixDQUFtQkcsUUFKbkM7QUFNQVIsY0FBUVMsSUFBUixDQUFhLG1CQUFiLEVBQWtDLFlBQVk7QUFDMUMsZUFBT1AsR0FBR1EsV0FBSCxDQUFlLENBQ2xCUixHQUFHUyxNQUFILENBQVU7QUFDTkMsb0JBQVUsY0FESjtBQUVOQyxtQkFBVSxlQUZKO0FBR05DLGlCQUFNLGVBQVVDLENBQVYsRUFBYTtBQUNmZCxpQkFBS2UsZ0JBQUw7QUFDSDtBQUxLLFNBQVYsQ0FEa0IsQ0FBZixFQVFKQyxNQVJJLEVBQVA7QUFTSCxPQVZEOztBQVlBLFdBQUtELGdCQUFMLEdBQXdCLFlBQVk7QUFDaEMsWUFBTUUsTUFBTWxCLFFBQVFtQixNQUFSLENBQWUsYUFBZixFQUE4QlosU0FBOUIsQ0FBWjtBQUNBLFlBQU1hLE1BQU14QixFQUFFRSxVQUFGLENBQWFzQixHQUF6Qjs7QUFDQSxZQUFJRixJQUFJRyxXQUFKLE1BQXFCSCxJQUFJSSxRQUFKLEVBQXpCLEVBQXlDO0FBQ3JDdEIsa0JBQVFtQixNQUFSLENBQWUsZUFBZjtBQUNBLGNBQUlJLE9BQU9ILElBQUlJLFFBQUosQ0FBYU4sSUFBSU8sY0FBSixFQUFiLEVBQW1DTCxJQUFJTSxNQUF2QyxDQUFYO0FBQ0EsY0FBSUMsUUFBUS9CLEVBQUUyQixJQUFGLENBQVo7O0FBQ0EsY0FBSUksTUFBTUMsRUFBTixDQUFTLElBQVQsQ0FBSixFQUFvQjtBQUNoQjNCLGlCQUFLNEIsV0FBTCxDQUFpQkYsS0FBakIsRUFBd0IsSUFBeEI7QUFDSCxXQUZELE1BR0ssSUFBSUEsTUFBTUMsRUFBTixDQUFTLElBQVQsQ0FBSixFQUFvQjtBQUNyQjNCLGlCQUFLNEIsV0FBTCxDQUFpQkYsS0FBakIsRUFBd0IsSUFBeEI7QUFDSDs7QUFDRDNCLGtCQUFRbUIsTUFBUixDQUFlLGNBQWY7QUFDSDtBQUNKLE9BZkQ7O0FBaUJBLFdBQUtVLFdBQUwsR0FBbUIsVUFBU0MsTUFBVCxFQUFpQkMsTUFBakIsRUFBeUI7QUFDeENELGVBQU9FLFdBQVAsQ0FBbUIsWUFBVztBQUMxQixpQkFBT3BDLEVBQUUsTUFBTW1DLE1BQU4sR0FBZSxLQUFqQixFQUF3QjtBQUFDRSxrQkFBTXJDLEVBQUUsSUFBRixFQUFRcUMsSUFBUixFQUFQO0FBQXVCQyxxQkFBU3RDLEVBQUUsSUFBRixFQUFRdUMsSUFBUixDQUFhLFNBQWIsQ0FBaEM7QUFBeURDLHFCQUFTeEMsRUFBRSxJQUFGLEVBQVF1QyxJQUFSLENBQWEsU0FBYjtBQUFsRSxXQUF4QixDQUFQO0FBQ0gsU0FGRDtBQUdILE9BSkQ7QUFNSDtBQTVDMEIsR0FBL0I7QUE4Q0g7QUFBQSxDIiwiZmlsZSI6Im1haW4uMjNiYWRkMjZjNWFlMDk5YjRhZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcclxuICAgICQuZXh0ZW5kKCQuc3VtbWVybm90ZS5wbHVnaW5zLCB7XHJcblxyXG4gICAgICAgICdjZWxsSGVhZGVyJzogZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgICAgICAgICAgdWkgPSAkLnN1bW1lcm5vdGUudWksXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gY29udGV4dC5vcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgJGVkaXRvciAgID0gY29udGV4dC5sYXlvdXRJbmZvLmVkaXRvcixcclxuICAgICAgICAgICAgICAgICRlZGl0YWJsZSA9IGNvbnRleHQubGF5b3V0SW5mby5lZGl0YWJsZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRleHQubWVtbygnYnV0dG9uLmNlbGxIZWFkZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdWkuYnV0dG9uR3JvdXAoW1xyXG4gICAgICAgICAgICAgICAgICAgIHVpLmJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzOiAnPGI+SGVhZGVyPGI+JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogICdUb2dnbGUgaGVhZGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6ZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudG9nZ2xlQ2VsbEhlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBdKS5yZW5kZXIoKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUNlbGxIZWFkZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBybmcgPSBjb250ZXh0Lmludm9rZSgnY3JlYXRlUmFuZ2UnLCAkZWRpdGFibGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZG9tID0gJC5zdW1tZXJub3RlLmRvbTtcclxuICAgICAgICAgICAgICAgIGlmIChybmcuaXNDb2xsYXBzZWQoKSAmJiBybmcuaXNPbkNlbGwoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQuaW52b2tlKCdiZWZvcmVDb21tYW5kJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNlbGwgPSBkb20uYW5jZXN0b3Iocm5nLmNvbW1vbkFuY2VzdG9yKCksIGRvbS5pc0NlbGwpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRjZWxsID0gJChjZWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkY2VsbC5pcygndGQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlcGxhY2VUYWdzKCRjZWxsLCAndGgnKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICgkY2VsbC5pcygndGgnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlcGxhY2VUYWdzKCRjZWxsLCAndGQnKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0Lmludm9rZSgnYWZ0ZXJDb21tYW5kJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlcGxhY2VUYWdzID0gZnVuY3Rpb24oJG5vZGVzLCBuZXdUYWcpIHtcclxuICAgICAgICAgICAgICAgICRub2Rlcy5yZXBsYWNlV2l0aChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJChcIjxcIiArIG5ld1RhZyArIFwiIC8+XCIsIHtodG1sOiAkKHRoaXMpLmh0bWwoKSwgY29sc3BhbjogJCh0aGlzKS5hdHRyKCdjb2xzcGFuJyksIHJvd3NwYW46ICQodGhpcykuYXR0cigncm93c3BhbicpfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==