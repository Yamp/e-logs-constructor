<template>
    <div class="edit-data">
        <h2 class="title">Заполнение данными</h2>
        <div v-show="error" class="error">
            {{error}}
        </div>
        <editor class="editor"></editor>
        <div class="btns">
            <button class="btn btn-secondary" @click="onHandleCancel" style="margin-right: 14px">Отмена</button>
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
            }
        },
        methods: {
            onHandleCancel() {
                this.$store.commit('journalState/setCurrentTable', null)
                this.$router.push(`/journal/${this.$store.getters['journalState/getJournalName']}`)
            },
            onHandleSave() {
                console.log(this.getCurrentTable)
                let hasAllNames = this.getCurrentTable.fields.every(item => item['name'])

                let repeatableNames = []
                let hasReapitebleNames = false

                this.getCurrentTable.fields.map(field => {
                    $(`#${field.cell}`).removeClass('is-repeated')
                })
                
                for(let index = 0; index < this.getCurrentTable.fields.length - 1; index++) {
                    if (this.getCurrentTable.fields[index].name === this.getCurrentTable.fields[index+1].name) {
                        this.getCurrentTable.fields.map(field => {
                            if (this.getCurrentTable.fields[index].name === field.name) {
                                $(`#${field.cell}`).addClass('is-repeated')
                            }
                        })
                        
                        hasReapitebleNames = true
                    }
                }

                if (hasAllNames && !hasReapitebleNames) {
                    $('.editor .cell').removeClass("selected")
                    // this.$store.commit('journalState/setTable',
                    //     {
                    //         name: this.$route.params.tableName,
                    //         html: formatFactory($('#editor-content').html())
                    //     }
                    // )

                    this.$store.commit('journalState/addTable', this.getCurrentTable)
                    // this.$router.push(`/journal/${this.$route.params.journalName}${this.getUrlParams('plant') ? '?plant=' + this.getUrlParams('plant') : ''}`)
                    this.$router.push(`/journal/${this.$route.params.journalName}`)
                }
                else if (!hasAllNames) {
                    this.error = 'Все имена полей должны быть заполнены!'
                }
                else if (hasReapitebleNames) {
                    this.error = 'Имена полей не должны повторяться!'
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
