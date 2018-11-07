<template>
    <div class="formula-editor"></div>
</template>

<script>
    import * as ace from 'brace';
    import 'brace/mode/javascript';
    import 'brace/theme/monokai';
 
    const editor = ace.edit('formula-editor');
    editor.getSession().setMode('ace/mode/javascript');
    editor.setTheme('ace/theme/monokai');
</script>
