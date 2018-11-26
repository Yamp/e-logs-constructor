export default function () {
    $.extend($.summernote.plugins, {

        'splitV': function (context) {
            let self = this,
                ui = $.summernote.ui,
                options = context.options,
                $editor   = context.layoutInfo.editor,
                $editable = context.layoutInfo.editable;

            context.memo('button.splitV', function () {
                return ui.buttonGroup([
                    ui.button({
                        contents: '<b>Разделить |<b>',
                        tooltip:  'Разделить вертикально',
                        click:function (e) {
                            self.splitV();
                        }
                    }),
                ]).render();
            });

            this.splitV = function () {
                if (redips) redips.split('v')
            };
        }
    });
};
