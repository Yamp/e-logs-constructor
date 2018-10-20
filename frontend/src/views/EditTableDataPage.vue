<template>
    <div class="edit-data">
        <h2 class="title">Заполнение данными</h2>
        <editor class="editor"></editor>
        <div class="btns">
            <button class="btn btn-secondary" @click="onHandleBack" style="margin-right: 14px">Назад</button>
            <button class="btn btn-primary" @click.prevent="onHandleSave" type="submit">Сохранить</button>
        </div>
    </div>
</template>

<script>
    import Editor from '../components/Editor.vue'
    import formatFactory from '../utils/formatFactory.js'

    export default {
        name: 'EditTableDataPage',
        data() {
            return {}
        },
        methods: {
            onHandleBack() {
                this.$store.commit('journalState/recoverFields',
                    {
                        name: this.$route.params.tableName,
                    }
                )
                this.$router.push(`/journal/${this.$store.getters['journalState/getJournalName']}/table/create?table=${this.$route.params.tableName}${this.getUrlParams('plant') ? '?plant=' + this.getUrlParams('plant') : ''}`)
            },
            onHandleSave() {
                $('.editor .cell').removeClass("selected")
                this.$store.commit('journalState/setTable',
                    {
                        name: this.$route.params.tableName,
                        html: formatFactory($('#editor-content').html())
                    }
                )
                this.$router.push(`/journal/${this.$route.params.journalName}${this.getUrlParams('plant') ? '?plant=' + this.getUrlParams('plant') : ''}`)
            },
            getUrlParams(name, url) {
                if (!url) url = window.location.href;
                name = name.replace(/[\[\]]/g, '\\$&');
                var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                    results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                return decodeURIComponent(results[2].replace(/\+/g, ' '));
            },
        },
        components: {Editor},
    }
</script>

<style scoped>
    .edit-data {
        padding: 20px;
        height: 100%;
        box-sizing: border-box;
    }

    .edit-data .title {
        margin-top: 0;
        margin-bottom: 20px;
    }

    .editor {
        margin-bottom: 20px;
    }

    .btns {
        display: flex;
        justify-content: flex-end;
    }
</style>
