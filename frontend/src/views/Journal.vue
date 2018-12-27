<template>
    <div class="journal">
        <div class="side-bar">
            <button
                    class="btn btn-primary home-btn"
                    @click="$router.push('/')"
            >
                На начальный экран
            </button>
            <h3>Журнал
                <div class="journal-name-container" @click="onStartEditJournalName" v-if="!editingJournalName">
                    <span class="journal-name">{{getJournalTitle}}</span>
                    <img src="../assets/icons/edit-white.svg" class="edit-icon">
                </div>
                <form v-else @submit.prevent="onJournalNameSave">
                    <div class="form-group journal-name-group">
                        <input
                                type="text"
                                class="form-control journal-name-input"
                                v-model="newJournalName"
                                placeholder="Имя журнала"
                                v-on:blur="onJournalNameSave"
                        >
                        <div v-show="journalNameError" class="error">
                            Введите название журнала
                        </div>
                    </div>
                </form>
            </h3>
            <hr style="margin-bottom: 10px">
            <span class="no-items-text" v-if="!getTables.length">Таблиц нет</span>
            <ul v-if="getTables.length" id="section-list">
                <li v-for="table in getTables" :key="table.name">
                    <div><span>{{table.title}}</span></div>
                    <div><img class="move-icon" src="../assets/icons/scroll.svg"></div>
                </li>
            </ul>
        </div>
        <div class="body">
            <div class="title">
                <h3>Текущие таблицы</h3>
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
                        Добавить таблицу
                    </button>
                    <ul class="dropdown-menu dropdown-menu-right">
                        <li><a href="#" @click.prevent="openCreateModal">Создать</a></li>
                        <li><a href="#" @click.prevent="openImportModal">Загрузить</a></li>
                    </ul>
                </div>
            </div>
            <div class="body__content">
                <template v-if="getTables.length">
                    <table-item v-for="table in getTables" :table="table" :key="table.name"
                                style="margin-bottom: 18px"></table-item>
                </template>
                <span class="no-items-text" v-if="!getTables.length">Пока что таблиц нет, вы можете добавить их</span>
            </div>
            <div class="btns" v-if="getTables.length">
                <button class="btn btn-success" @click="onDownload">Скачать журнал</button>
                <button class="btn btn-primary" @click="onSave" v-if="plant">Сохранить изменения</button>
                <button class="btn btn-primary" @click="onSaveAs">Начать использовать</button>
                <div class="status" :style="{color: statusColor}">{{status}}</div>
            </div>
        </div>
        <modal v-show="isShowCreate" @close="isShowCreate = false" :action="addTableAction">
            <div class="form">
                <div class="form-group title-group">
                    <div class="title-label">Введите название таблицы</div>
                    <input type="text" class="form-control table-name-input" v-model="tableName" placeholder="Название таблицы">
                    <div v-show="nameError" class="error">
                        {{nameError}}
                    </div>
                </div>
            </div>
        </modal>
        <modal v-show="isShowImport" @close="isShowImport = false" :action="importTableAction">
            <div class="form">
                <div class="form-group title-group">
                    <div class="title-label">Введите название таблицы</div>
                    <input type="text" class="form-control table-name-input" v-model="tableName" placeholder="Название таблицы">
                    <div v-show="nameError" class="error">
                        {{nameError}}
                    </div>
                    <div class="title-label" style="margin-top: 14px">Выберите файл для загрузки</div>
                    <input
                        accept="text/html, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        type="file"
                        value="Обзор"
                        @change="(e) => {importFile = e.target.files[0]}"
                    />
                    <div v-show="fileError" class="error">
                        {{fileError}}
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>
<script>
    import TableItem from '../components/TableItem.vue'
    import axios from 'axios'
    import sortable from 'sortablejs'
    import Modal from "../components/Modal.vue";
    import slugify from 'slugify'

    export default {
        name: "JournalPage",
        data() {
            return {
                downloadLink: '#',
                status: '',
                statusColor: '#2c3e50',
                editingJournalName: false,
                newJournalName: this.$store.getters['journalState/getJournalTitle'],
                nameError: false,
                fileError: false,
                journalNameError: false,
                isShowCreate: false,
                isShowImport: false,
                tableName: '',
                addTableAction: {
                    title: 'Добавить',
                    callback: this.onHandleCreate
                },
                importTableAction: {
                    title: 'Добавить',
                    callback: this.onHandleImport
                },
                importFile: null
            }
        },
        components: {Modal, TableItem},
        methods: {
            onStartEditJournalName() {
                this.editingJournalName = true
                setTimeout(() => $('.journal-name-input').focus(), 0)
            },
            onJournalNameSave() {
                if (this.newJournalName) {
                    this.$store.commit('journalState/setJournalName', {
                        title: this.newJournalName,
                        name: slugify(this.newJournalName, '_')
                    })

                    this.editingJournalName = false
                    this.journalNameError = false
                }
                else this.journalNameError = true
            },
            onDownload() {
                this.onHandleSend(() => {
                    console.log('download')
                    let a = document.createElement('A');
                    a.href = this.downloadLink;
                    a.download = this.downloadLink.substr(this.downloadLink.lastIndexOf('/') + 1);
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                })
            },
            onSave() {
                this.onHandleSend(() => {
                    let url = `${window.ELOGS_SERVER}/api/constructor/transfer/?hash=${this.getUrlParams('hash', this.downloadLink)}`;
                    let self = this;
                    axios.get(url)
                        .then(() => {
                            let formData = new FormData();

                            formData.append("hash", this.getUrlParams('hash', this.downloadLink));
                            formData.append("plant", this.getUrlParams('plant'));

                            axios.post(`${window.ELOGS_SERVER}/api/constructor/upload/`, formData)
                        })
                        .then((response) => {
                            this.status = 'Журнал успешно сохранен!'
                            this.statusColor = '#5cb85c'
                        })
                        .catch(() => {
                            this.status = 'Произошла ошибка!'
                            this.statusColor = '#e00101'
                        })
                })
            },
            onSaveAs() {
                this.onHandleSend(() => {
                    console.log('save')
                    let url = `${window.ELOGS_SERVER}/api/constructor/transfer/?hash=${this.getUrlParams('hash', this.downloadLink)}`;
                    let self = this;
                    axios.get(url)
                        .then(() => {
                            let link = `${window.ELOGS_FRONT}/addjournal?hash=${this.getUrlParams('hash', this.downloadLink)}`;
                            let plant = this.plant;
                            let journal = this.$store.getters['journalState/getJournalName'];
                            if (this.plant) {
                                link = link + `&plant=${plant}&journalName=${journal}`
                            }
                            window.open(link, '_blank')
                        })
                })
            },
            openCreateModal() {
                this.isShowCreate = true
                setTimeout(() => $('.table-name-input').focus(), 0)
            },
            openImportModal() {
                this.isShowImport = true
                setTimeout(() => $('.table-name-input').focus(), 0)
            },
            onHandleCreate() {
                if (this.tableName && !this.getTablesNames.includes(this.tableName)) {
                    this.nameError = false

                    this.$store.commit('journalState/setCurrentTable', {
                        title: this.tableName,
                        name: slugify(this.tableName, '_'),
                        fields: [],
                        html: '',
                    })
                    this.$store.getters['journalState/getJournalName'] ?
                        // this.$router.push(`/journal/${this.getJournalName}/table/create${this.getUrlParams('plant') ? '?plant=' + this.getUrlParams('plant') : ''}`)
                        this.$router.push(`/journal/${this.getJournalName}/table/create`)
                        : this.$router.push('/')
                }
                else if (!this.tableName) this.nameError = 'Введите название таблицы'
                else if (this.getTablesNames.includes(this.tableName)) this.nameError = 'Данное имя таблицы уже существует'
            },
            onHandleImport() {
                if (this.importFile && this.tableName && !this.getTablesNames.includes(this.tableName)) {
                    this.fileError = false

                    let url = window.ELOGS_SERVER + '/import';
                    let data = new FormData()
                    data.append('data', this.importFile)

                    axios.post(url, data)
                        .then((response) => {
                            this.$store.commit('journalState/setCurrentTable', {
                                title: this.tableName,
                                name: slugify(this.tableName, '_'),
                                fields: [],
                                html: response.data,
                            })
                            this.$store.getters['journalState/getJournalName'] ?
                                // this.$router.push(`/journal/${this.getJournalName}/table/create${this.getUrlParams('plant') ? '?plant=' + this.getUrlParams('plant') : ''}`)
                                this.$router.push(`/journal/${this.getJournalName}/table/create`)
                                : this.$router.push('/')
                        })
                        .catch((err) => {
                            this.nameError = false
                            this.fileError = 'Ошибка при загрузке файла'
                        })
                }
                else if (!this.tableName) this.nameError = 'Введите название таблицы'
                else if (this.getTablesNames.includes(this.tableName)) this.nameError = 'Данное имя таблицы уже существует'
                else if (!this.importFile) {
                    this.nameError = false
                    this.fileError = 'Выберите файл'
                }
            },
            getAllAttributes(node) {
                let attr = {}
                Array.from(node.attributes).map(item => attr[item.name] = item.value)
                return attr
            },
            removeCells(table_html) {
                let refactoredHtml = table_html
                refactoredHtml = refactoredHtml.split('<cell').join('<div class="cell"')
                refactoredHtml = refactoredHtml.split('</cell>').join('</div>')
                return refactoredHtml
            },
            addCells(table_html) {
                let $html = $('<div>' + table_html + '</div>')
                $html.find('.cell').replaceWith(function () {
                    return `<cell ` +
                        `${$(this).attr('field-name') ? `field-name="${$(this).attr('field-name')}"` : ''}` +
                        `${$(this).attr('row-index') ?
                            `row-index="${$(this).attr("row-index")}"`
                            : $(this).attr(':row-index') ?
                                `:row-index="${$(this).attr(":row-index")}"`
                                : 'row-index="0"'}` +
                        `></cell>`
                })

                return $html.html()
            },
            onHandleSend(callback) {

                let journalObserver = this.$store.getters['journalState/getJournal'];
                console.log(journalObserver);
                let journal = JSON.parse(JSON.stringify(journalObserver));
                journal.tables.map(item => {
                    item.html = this.addCells(item.html).replace(/(\sid=\".+\")/gmi, '')
                });
                console.log(journal);
                window.journal = journal;
                let url = `${window.ELOGS_SERVER}/api/constructor/save/`;
                let self = this;
                return axios.post(url, journal).then(function (response) {
                    console.log("data", response.data);
                    self.downloadLink = response.data.download_link;
                })
                    .then(() => {
                        callback()
                    })
                    .catch(() => {
                        this.status = 'Произошла ошибка!'
                        this.statusColor = '#e00101'
                    })
            },
            clearJson(json) {
                let result = json.replace('"', "'");
                // json.replace(/\//g, '');
                console.log("json:", result);
                return result;
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
            initSectionList() {
                let _this = this

                if (document.getElementById('section-list')) {
                    sortable.create(document.getElementById('section-list'), {
                        chosenClass: "sortable-drag",
                        onEnd: function (event) {
                            const movedItem = _this.getTables.find((item, index) => index === event.oldIndex)
                            const remainingItems = _this.getTables.filter((item, index) => index !== event.oldIndex)

                            const reorderedItems = [
                                ...remainingItems.slice(0, event.newIndex),
                                movedItem,
                                ...remainingItems.slice(event.newIndex)
                            ]

                            _this.$store.commit('journalState/setTablesList', {tables: reorderedItems})
                        }
                    })
                }
            }
        },
        computed: {
            getTables() {
                return this.$store.getters['journalState/getTables']
            },
            getJournalTitle() {
                return this.$store.getters['journalState/getJournalTitle']
            },
            getJournalName() {
                return this.$store.getters['journalState/getJournalName']
            },
            imported() {
                return this.$store.getters['journalState/getJournalImported']
            },
            plant() {
                return this.$store.getters['journalState/getJournalPlant']
            },
            getTablesNames() {
                return this.$store.getters['journalState/getTablesVerboseNames']
            }
        },
        mounted() {
            console.log('journal', this.$store.getters['journalState/getJournal'])

            if (this.getUrlParams('plant') && !this.plant) {
                this.$store.dispatch('journalState/importJournal', {
                    plant: this.getUrlParams('plant'),
                    journal: this.$route.params.journalName,
                    version: this.getUrlParams('version')
                })
                    .then((response) => {
                        let journal = response.data
                        journal.tables.map(item => {
                            item.html = this.removeCells(item.html)
                        });
                        this.$store.commit('journalState/setJournal', journal)
                        this.$store.commit('journalState/setJournalPlant', this.getUrlParams('plant'))
                        console.log('journal2', this.$store.getters['journalState/getJournal'])
                    })
            } else if (this.getUrlParams('imported') && !this.imported) {
                let journalObserver = this.$store.getters['journalState/getJournal'];
                let journal = JSON.parse(JSON.stringify(journalObserver));
                journal.tables.map(item => {
                    item.html = this.removeCells(item.html)
                });
                this.$store.commit('journalState/setJournal', journal)
                this.$store.commit('journalState/setJournalImported', true)
                console.log('journal3', this.$store.getters['journalState/getJournal'])
            }

            this.initSectionList()

            var ThirdPartyAPI = window.ELOGS_SERVER + '/api';
            axios.get(ThirdPartyAPI + '/scheme').then((response) => {
                var data = response.data;
                this.$store.commit('journalState/setScheme', data)
            })

        }
    }
</script>

<style lang="scss" scoped>
    .journal {
        display: flex;
        height: 100%;
        font-size: 18px;
        box-sizing: border-box;
        overflow-y: hidden;
    }

    .journal-name-container {
        display: inline-block;
        position: relative;
        cursor: pointer;

        .journal-name {
            font-weight: bold;
            word-break: break-word;
            margin-right: 10px;
        }

        .edit-icon {
            position: absolute;
            width: 20px;
            visibility: hidden;
            opacity: 0;
            transition: 0.2s;
        }
    }

    .journal-name-container:hover {
        .edit-icon {
            opacity: 1;
            visibility: visible;
        }
    }

    .journal-name-group {

        input, button {
            margin-top: 10px;
        }

        button {
            width: 100%;
        }
    }

    .side-bar {
        width: 280px;
        height: 100%;
        background-color: #337ab7;
        border-right: 6px solid #2e6da4;
        color: #fff;
        padding: 20px;
        overflow-y: auto;
    }

    .side-bar {
        .home-btn, .cancel-btn {
            width: 100%;
            border-color: #fff;
        }

        .home-btn {
            margin-bottom: 20px;
            font-size: 18px;
        }
    }

    .side-bar ul {
        list-style-type: decimal-leading-zero;
    }

    .side-bar li {
        padding: 10px 0 10px 10px;
        cursor: move;
    }

    .side-bar li div {
        display: inline-block;
        width: 88%;
    }

    .side-bar li div:last-child {
        display: inline-block;
        width: 12%;
        text-align: right;
    }

    .side-bar li .move-icon {
        width: 24px;
        opacity: 0.4;
        transition: 0.2s;
    }

    .side-bar li:hover .move-icon {
        opacity: 1;
    }

    .sortable-drag {
        background-color: #2e6da4;
    }

    .side-bar .no-items-text {
        padding-top: 10px;
    }

    .side-bar h3 {
        margin-top: 0;
        margin-bottom: 20px;
    }

    .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .dropdown-menu > li > a {
        display: flex;
        align-items: center;
        height: 34px;
    }

    .body {
        width: calc(100% - 280px);
        height: 100%;
        margin-bottom: 30px;
        padding: 20px;
        overflow-y: auto;
    }

    .body h3 {
        margin-top: 0;
        margin-bottom: 0;
    }

    .body__content {
        opacity: 0.8;
    }

    .no-items-text {
        opacity: 0.6;
    }

    .btns {
        display: flex;
        justify-content: flex-end;
        position: relative;
        margin-bottom: 20px;
    }

    .btns a, .btns button {
        margin-left: 10px;
    }

    .status {
        position: absolute;
        right: 0;
        bottom: -30px;
    }

    .modal-title {
        margin-bottom: 20px;
        font-size: 20px;
    }

    .modal-btn {
        margin-right: 10px;
    }

    .modal-btn:last-child {
        margin-right: 0;
    }

    .title-label {
        text-align: left;
        font-size: 18px;
        margin-bottom: 10px;
    }

    .error {
        display: flex;
        align-items: center;
        background-color: #f56c6c;
        color: white;
        height: 40px;
        border-radius: 6px;
        padding: 0px 15px;
        font-size: 14px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

</style>
