export default function () {
    $.extend($.summernote.plugins, {

        'mergeCells': function (context) {
            let self = this,
                ui = $.summernote.ui,
                options = context.options,
                $editor   = context.layoutInfo.editor,
                $editable = context.layoutInfo.editable;

            context.memo('button.mergeCells', function () {
                return ui.buttonGroup([
                    ui.button({
                        contents: '<b>M<b>',
                        tooltip:  'Merge Cells',
                        click: context.createInvokeHandler('mergeCells.showDialog')
                    }),
                ]).render();
            });

            this.mergeCells = function (cols, rows) {
                const rng = context.invoke('createRange', $editable);
                const dom = $.summernote.dom;
                if (rng.isCollapsed() && rng.isOnCell()) {
                    context.invoke('beforeCommand');
                    let cell = dom.ancestor(rng.commonAncestor(), dom.isCell)
                    let $cell = $(cell)
                    if (cols || rows) {
                        $cell.attr('colspan', cols)
                        $cell.attr('rowspan', rows)
                        let index = $cell.index()
                        let currentRow = $cell.parent()
                        let currentCellOffset = currentRow.get()[0].cells.length - (+cols) - index
                        if (currentCellOffset > 0) currentCellOffset = 0
                        for (let i = (+index) + 1; i < (+index) + (+cols) + currentCellOffset; i++) {
                            let col = currentRow.find(`td:not([${cols ? 'colspan' : 'rowspan'}])`).last()
                            if (col.length) col.remove()
                        }
                        for (let i = 0; i < (+rows) - 1; i++) {
                            currentRow = currentRow.next()
                            for (let j = (+index); j < (+index) + (+cols) + currentCellOffset; j++) {
                                let col = currentRow.find(`td:not([${cols ? 'colspan' : 'rowspan'}])`).last()
                                if (col.length) col.remove()
                            }
                        }
                    }
                    context.invoke('afterCommand');
                }
            }

            self.initialize = function () {
                let $container = options.dialogsInBody ? $(document.body) : $editor;

                let body = `<div>
                      <div class="form-group">
                        <label for="columns">Колонки</label>
                        <input type="number" class="form-control" id="columns" value="">
                      </div>
                      <div class="form-group">
                        <label for="rows">Строки</label>
                        <input type="number" class="form-control" id="rows" value="">
                      </div>
                    </div>`;
                let footer = '<button class="btn btn-primary minidiag-btn">OK</button>';

                self.$dialog = ui.dialog({
                    title: 'Merge cells',
                    fade: options.dialogsFade,
                    body: body,
                    footer: footer
                }).render().appendTo($container);

            };

            self.destroy = function () {
                self.$dialog.remove();
                self.$dialog = null;
            };

            self.showDialog = function () {
                context.invoke('beforeCommand');
                self
                    .openDialog()
                    .then(function (dialogData) {
                        ui.hideDialog(self.$dialog);
                        self.mergeCells(dialogData.cols, dialogData.rows)
                    })
                context.invoke('afterCommand');
            };

            self.openDialog = function () {
                return $.Deferred(function (deferred) {
                    let $dialogBtn = self.$dialog.find('.minidiag-btn');
                    let $colsInput = self.$dialog.find('#columns');
                    let $rowsInput = self.$dialog.find('#rows');

                    ui.onDialogShown(self.$dialog, function () {
                        context.triggerEvent('dialog.shown');
                        context.invoke('saveRange')
                        $dialogBtn
                            .click(function (event) {
                                event.preventDefault();

                                deferred.resolve(
                                    {
                                        cols: $colsInput.val(),
                                        rows: $rowsInput.val()
                                    }
                                );
                            });
                    });

                    ui.onDialogHidden(self.$dialog, function () {
                        $dialogBtn.off('click');
                        $colsInput.val('')
                        $rowsInput.val('')
                        context.invoke('restoreRange')
                        if (deferred.state() === 'pending') {
                            deferred.reject();
                        }
                    });

                    ui.showDialog(self.$dialog);
                });
            };
        }
    });
};
