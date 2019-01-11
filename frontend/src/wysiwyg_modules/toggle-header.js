export default function () {
    $.extend($.summernote.plugins, {

        'cellHeader': function (context) {
            var self = this,
                ui = $.summernote.ui,
                options = context.options,
                $editor   = context.layoutInfo.editor,
                $editable = context.layoutInfo.editable;

            context.memo('button.cellHeader', function () {
                return ui.buttonGroup([
                    ui.button({
                        contents: '<b>Заголовок<b>',
                        tooltip:  'Переключить заголовок',
                        click:function (e) {
                            self.toggleCellHeader();
                        }
                    }),
                ]).render();
            });

            this.toggleCellHeader = function () {
                const rng = context.invoke('createRange', $editable);
                const dom = $.summernote.dom;
                // if (rng.isCollapsed() && rng.isOnCell()) {
                    context.invoke('beforeCommand');
                    // var cell = dom.ancestor(rng.commonAncestor(), dom.isCell)
                    $('table *').each(function () {
                        let $item = $(this)
                        // if($item.attr('style') && $item.attr('style').includes('background-color: rgb(155, 179, 218)')) {
                        if($item[0].redips && $item[0].redips.selected) {
                            if ($item.is('td')) {
                                self.replaceTags($item, 'th')
                            }
                            else if ($item.is('th')) {
                                self.replaceTags($item, 'td')
                            }
                        }
                    })
                    context.invoke('afterCommand');
                // }
            };

            this.replaceTags = function($nodes, newTag) {
                $nodes.replaceWith(function() {
                    return $("<" + newTag + " />", {html: $(this).html(), colspan: $(this).attr('colspan'), rowspan: $(this).attr('rowspan')});
                });
            }

        }
    });
};
