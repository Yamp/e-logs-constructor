export default function () {
    $.extend($.summernote.lang, {
        'ru-RU': {
            font: {
                bold: 'Жирный',
                italic: 'Курсив',
                underline: 'Подчеркнутый',
                clear: 'Удалить все стили',
                height: 'Высота интервалов между строк',
                strikethrough: 'Перечеркнутый',
                superscript: 'Верхний текст',
                subscript: 'Нижний текст',
                size: 'Размер шрифта',
            },
            link: {
                link: 'Ссылка',
                insert: 'Вставить ссылку',
                unlink: 'Удалить ссылку',
                edit: 'Изменить ссылку',
                textToDisplay: 'Отображаемый текст',
                url: 'Адрес',
                openInNewWindow: 'Открывать в новом окне',
            },
            table: {
                table: 'Таблица'
            },
            hr: {
                insert: 'Горизонтальная линия',
            },
            style: {
                style: 'Стили',
                p: 'Параграф',
                blockquote: 'Цитата',
                pre: 'Форматированный текст',
                h1: 'Заголовок 1',
                h2: 'Заголовок 2',
                h3: 'Заголовок 3',
                h4: 'Заголовок 4',
                h5: 'Заголовок 5',
                h6: 'Заголовок 6',
            },
            lists: {
                unordered: 'Маркированный список',
                ordered: 'Нумерованный список',
            },
            options: {
                help: 'Помощь',
                fullscreen: 'Полный экран',
                codeview: 'Показать код',
            },
            paragraph: {
                paragraph: 'Выравнивание',
                outdent: 'Отступ слева',
                indent: 'Отступ справа',
                left: 'По левому краю',
                center: 'По центру',
                right: 'По правому краю',
                justify: 'На всю ширину',
            },
            color: {
                recent: 'Последний цвет',
                more: 'Больше',
                background: 'Задний фон',
                foreground: 'Передний фон',
                transparent: 'Прозрачный',
                setTransparent: 'Сделать прозрачным',
                reset: 'Отменить',
                resetToDefault: 'Вернуть к начальному',
            },
            history: {
                undo: 'Назад',
                redo: 'Вперед',
            }
        },
    });
}