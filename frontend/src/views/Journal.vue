<template>
  <div class="journal">
    <div class="side-bar">
      <h3>Журнал <span style="font-weight: bold">{{this.$route.params.journalName}}</span></h3>
      <hr style="margin-bottom: 10px">
      <span class="no-items-text" v-if="!getTables.length">Секций нет</span>
      <ul v-if="getTables.length" id="section-list">
        <li v-for="table in getTables" :key="table.name"><div><span>{{table.title}}</span></div><div><img class="move-icon" src="../assets/scroll.svg"></div></li>
      </ul>
    </div>
    <div class="body">
      <div class="title">
        <h3>Текущие секции</h3>
        <button class="btn btn-primary" @click.prevent="onHandleClick" type="submit">Добавить секцию</button>
      </div>
      <div class="content">
        <template v-if="getTables.length">
          <table-item v-for="table in getTables" :table="table" :key="table.name" style="margin-bottom: 18px"></table-item>
        </template>
        <span class="no-items-text" v-if="!getTables.length">Пока что секций нет, вы можете добавить их</span>
      </div>
      <div class="btns" v-if="getTables.length">
        <button class="btn btn-primary" @click.prevent="showDownloadModal" type="submit">Отправить</button>
      </div>
    </div>
    <modal v-show="isShowDownload" @close="isShowDownload = false">
      <div>
        <p class="modal-title">Журнал успешно сохранен!</p>
        <a class="btn btn-success modal-btn" :href="downloadLink">Скачать журнал</a>
        <button class="btn btn-primary modal-btn">Добавить в E-logs</button>
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
      onHandleClick () {
          this.$store.getters['journalState/getJournalName'] ?
              this.$router.push(`/journal/${this.$route.params.journalName}/table/create`)
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
          let url = 'http://localhost:3000/save';
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
      }
  },
  mounted () {
      let _this = this
      if (_this.getUrlParams('imported') == 'true') {
          this.$store.dispatch('journalState/importJournal', this.$route.params.journalName)
            .then(() => {
              let journalObserver = this.$store.getters['journalState/getJournal'];
              console.log(journalObserver);
              let journal = JSON.parse(JSON.stringify(journalObserver));
              journal.tables.map(item => {
                  item.html = this.removeCells(item.html)
              });
              this.$store.commit('journalState/setJournal', journal)
            })
            .then(() => {
              _this.initSectionList()
            })
      }

      this.initSectionList()
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
.side-bar ul {
  list-style-type: decimal-leading-zero;
}
.side-bar li {
  padding: 10px 0 10px 10px;
  cursor: move;
}
.side-bar li div {
  display: inline-block;
  width: 50%;
}
.side-bar li div:last-child {
  display: inline-block;
  width: 50%;
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
