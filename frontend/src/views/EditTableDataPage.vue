<template>
    <div class="edit-data">
        <h2 class="title">Заполнение данными</h2>
        <div v-show="error" class="error">
            Все имена полей должны быть заполнены!
        </div>
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
            return {
                error: false
            }
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
                if (this.$store.getters['journalState/getTableCells'](this.$route.params.tableName).every(item => item['field_name'])) {
                    $('.editor .cell').removeClass("selected")
                    this.$store.commit('journalState/setTable',
                        {
                            name: this.$route.params.tableName,
                            html: formatFactory($('#editor-content').html())
                        }
                    )
                    this.$router.push(`/journal/${this.$route.params.journalName}${this.getUrlParams('plant') ? '?plant=' + this.getUrlParams('plant') : ''}`)
                }
                else {
                    this.error = true
                }
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
    .error {
        display: flex;
        align-items: center;
        background-color: rgb(245, 108, 108);
        color: rgb(255, 255, 255);
        height: 40px;
        border-radius: 6px;
        padding: 0px 15px;
        margin-bottom: 20px;
    }
</style>
