<template>
    <div class="edit-data">
        <h2 class="title">Заполнение данными</h2>
        <div v-show="error" class="error">
            {{error}}
        </div>
        <editor class="editor"></editor>
        <div class="btns">
            <button class="btn btn-default" @click="onHandleCancel" style="margin-right: 10px">Отмена</button>
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
                error: ''
            }
        },
        computed: {
            getCurrentTable () {
                return this.$store.getters['journalState/getCurrentTable']
            },
            getTableCells () {
                return this.$store.getters['journalState/getTableCells'](this.$route.params.tableName)
            },
            plant () {
                return this.$store.getters['journalState/getJournalPlant']
            }
        },
        methods: {
            onHandleCancel() {
                this.$store.commit('journalState/setCurrentTable', null)
                this.$router.push(`/journal/${this.$store.getters['journalState/getJournalName']}`)
            },
            onHandleSave() {
                let hasReapitebleNames = false
                let hasAllNames = true

                this.getCurrentTable.fields.map(field => {
                    $(`#${field.cell}`).removeClass('is-repeated').removeClass('is-empty')
                })

                this.getCurrentTable.fields.map(field => {
                    if (!field['name']) {
                        $(`#${field.cell}`).addClass('is-empty')
                        hasAllNames = false
                    }
                })

                if (!hasAllNames) {
                    this.error = 'Все имена полей должны быть заполнены!'
                    return;
                }

                for(let index = 0; index < this.getCurrentTable.fields.length; index++) {
                    this.getCurrentTable.fields.map((field, i) => {
                        if (index != i && this.getCurrentTable.fields[index].name === field.name) {
                            $(`#${field.cell}`).addClass('is-repeated')
                            hasReapitebleNames = true
                        }
                    })
                }

                if (hasReapitebleNames) {
                    this.error = 'Имена полей не должны повторяться!'
                    return;
                }

                // If everything is ok
                $('.editor .cell').removeClass("selected")

                this.getCurrentTable.fields.map(field => {
                    $(`#${field.cell}`).attr('class', 'cell')
                })

                this.$store.commit('journalState/updateCurrentTable',
                    {
                        html: formatFactory($('#editor-content').html())
                    }
                )

                this.$store.commit('journalState/addTable', this.getCurrentTable)
                this.$store.commit('journalState/setCurrentTable', null)
                // this.$router.push(`/journal/${this.$route.params.journalName}${this.getUrlParams('plant') ? '?plant=' + this.getUrlParams('plant') : ''}`)
                this.$router.push(`/journal/${this.$route.params.journalName}${this.plant ? '?plant=' + this.plant : ''}`)
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
