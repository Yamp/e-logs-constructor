<template>
  <div class="journal">
    <div class="side-bar">
        <button
            class="btn btn-primary home-btn"
            @click="$router.push('/')"
        >
            На начальный экран
        </button>
      <h3>Журнал <span style="font-weight: bold">{{getJournalTitle}}</span></h3>
      <hr style="margin-bottom: 10px">
      <span class="no-items-text" v-if="!getTables.length">Таблиц нет</span>
      <ul v-if="getTables.length" id="section-list">
        <li v-for="table in getTables" :key="table.name"><div><span>{{table.title}}</span></div><div><img class="move-icon" src="../assets/icons/scroll.svg"></div></li>
      </ul>
    </div>
    <div class="body">
      <div class="title">
        <h3>Текущие таблицы</h3>
        <button class="btn btn-primary" @click.prevent="onHandleAdd" type="submit">Добавить таблицу</button>
      </div>
      <div class="content">
        <template v-if="getTables.length">
          <table-item v-for="table in getTables" :table="table" :key="table.name" style="margin-bottom: 18px"></table-item>
        </template>
        <span class="no-items-text" v-if="!getTables.length">Пока что таблиц нет, вы можете добавить их</span>
      </div>
      <div class="btns" v-if="getTables.length">
        <button class="btn btn-primary" @click.prevent="showDownloadModal" type="submit">Отправить</button>
      </div>
    </div>
    <modal v-show="isShowDownload" @close="isShowDownload = false">
      <div>
        <p class="modal-title">Журнал успешно сохранен!</p>
        <a class="btn btn-success modal-btn" :href="downloadLink">Скачать журнал</a>
        <button class="btn btn-primary modal-btn" v-if="imported" @click="onSave">Сохранить</button>
        <button class="btn btn-primary modal-btn" v-if="imported" @click="onSaveAs">Сохранить как</button>
      </div>
    </modal>
  </div>
</template>
<script>
import TableItem from '../components/TableItem.vue'
import axios from 'axios'
import sortable from 'sortablejs'
import Modal from "../components/Modal.vue";

export default {
    name: "JournalPage",
    data() {
        return {
            isShowDownload: false,
            downloadLink: '#'
        }
    },
    components: {Modal, TableItem},
    methods: {
        onSave () {
            let url = `http://${window.location.hostname}:8000/api/constructor/transfer/?hash=${this.getUrlParams('hash', this.downloadLink)}`;
            let self = this;
            axios.get(url)
                .then(() => {
                    let formData = new FormData();

                    formData.append("hash", this.getUrlParams('hash', this.downloadLink));
                    formData.append("plant", this.getUrlParams('plant'));

                    axios.post(`http://${window.location.hostname}:8000/api/constructor/upload/`, formData)
                })
                .then((response) => {
                    self.isShowDownload = false;
                });
        },
        onSaveAs () {
            let url = `http://${window.location.hostname}:8000/api/constructor/transfer/?hash=${this.getUrlParams('hash', this.downloadLink)}`;
            let self = this;
            axios.get(url)
                .then(() => {
                    window.open(`http://${window.location.hostname}:8080/addjournal?hash=${this.getUrlParams('hash', this.downloadLink)}`,
                    '_blank')
                })
        },
        onHandleAdd () {
            this.$store.commit('journalState/setCurrentTable', {
                title: '',
                name: '',
                fields: [],
                html: '',
                // repeatable_row: false
            })
            this.$store.getters['journalState/getJournalName'] ?
                // this.$router.push(`/journal/${this.getJournalName}/table/create${this.getUrlParams('plant') ? '?plant=' + this.getUrlParams('plant') : ''}`)
                this.$router.push(`/journal/${this.getJournalName}/table/create`)
                : this.$router.push('/')
        },
        getAllAttributes (node) {
            let attr = {}
            Array.from(node.attributes).map(item => attr[item.name] = item.value)
            return attr
        },
        removeCells (table_html) {
            let refactoredHtml = table_html
            refactoredHtml = refactoredHtml.split('<cell').join('<div class="cell"')
            refactoredHtml = refactoredHtml.split('</cell>').join('</div>')
            return refactoredHtml
        },
        addCells (table_html) {
            let refactoredHtml = table_html
            console.log($(table_html).find('table'))
            // .addClass('elog-journal-table')
            refactoredHtml = refactoredHtml.split('div').join('cell')
            refactoredHtml = refactoredHtml.split('class="cell"').join('')
            return refactoredHtml
        },
        showDownloadModal() {
            this.onHandleSend();
        },
        onHandleSend () {
            let journalObserver = this.$store.getters['journalState/getJournal'];
            console.log(journalObserver);
            let journal = JSON.parse(JSON.stringify(journalObserver));
            journal.tables.map(item => {
                item.html = this.addCells(item.html)
            });
            console.log(journal);
            window.journal = journal;
            let url = 'http://127.0.0.1:8000/api/constructor/save/';
            let self = this;
            axios.post(url, journal).then( function (response) {
                console.log("data", response.data);
                self.downloadLink = response.data.download_link;
                self.isShowDownload = true;
            });
        },
        clearJson(json) {
            let result = json.replace('"',"'");
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
        initSectionList () {
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
        getTables () {
            return this.$store.getters['journalState/getTables']
        },
        getJournalTitle () {
            return this.$store.getters['journalState/getJournalTitle']
        },
        getJournalName () {
            return this.$store.getters['journalState/getJournalName']
        },
        imported () {
            return this.$store.getters['journalState/getJournalImported']
        }
    },
    mounted () {
        let _this = this
        console.log('journal', this.$store.getters['journalState/getJournal'])

        if (_this.getUrlParams('imported') === 'true') {

            this.$store.commit('journalState/setJournalImported', true)

            if (this.getUrlParams('plant')) {
                this.$store.dispatch('journalState/importJournal', {
                    plant: this.getUrlParams('plant'), 
                    journal: this.$route.params.journalName
                })    
            }

            let journalObserver = this.$store.getters['journalState/getJournal'];
            let journal = JSON.parse(JSON.stringify(journalObserver));
            journal.tables.map(item => {
                item.html = this.removeCells(item.html)
            });
            this.$store.commit('journalState/setJournal', journal)
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

<style scoped>
.journal {
  display: flex;
  height: 100%;
  font-size: 18px;
  box-sizing: border-box;
  overflow-y: hidden;
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
.side-bar .home-btn {
    width: 100%;
    margin-bottom: 20px;
    font-size: 18px;
    border-color: #fff;
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
.content {
  opacity: 0.8;
}
.no-items-text {
  opacity: 0.6;
}
.btns {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
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
</style>
