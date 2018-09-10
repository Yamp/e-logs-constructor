<template>
  <div class="journal">
    <div class="title">
      <h2>Журнал {{this.$route.params.journalName}}</h2>
      <button class="btn btn-primary" @click.prevent="onHandleClick" type="submit">Создать таблицу</button>
    </div>
    <div class="body">
      <h3>Текущие таблицы</h3>
      <div class="content">
        <template v-if="getTables.length">
          <table-item v-for="table in getTables" :table="table" :key="table.latinName" style="margin-bottom: 18px"></table-item>
        </template>
        <span class="no-items-text" v-if="!getTables.length">Пока что таблиц нет, вы можете добавить их</span>
      </div>
    </div>
    <div class="btns" v-if="getTables.length">
      <button class="btn btn-primary" @click.prevent="onHandleSend" type="submit">Отправить</button>
    </div>
  </div>
</template>

<script>
import TableItem from '../components/TableItem'
export default {
  name: "JournalPage",
  components: {TableItem},
  methods: {
      onHandleClick () {
          this.$store.getters['journalState/getJournalName'] ?
              this.$router.push(`/journal/${this.$store.getters['journalState/getJournalName']}/table/create`)
              : this.$router.push('/journal/create')
      },
      onHandleSend () {
          console.log(this.$store.getters['journalState/getJournal'])
      }
  },
    computed: {
      getTables () {
          return this.$store.getters['journalState/getTables']
      }
    }
}
</script>

<style scoped>
.journal {
  height: 100%;
  box-sizing: border-box;
  padding: 20px 40px;
}
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title h2 {
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
}
.body {
  margin-bottom: 30px;
}
.body h3 {
  margin-bottom: 20px;
}
.content {
  font-size: 18px;
  opacity: 0.8;
}
.content .no-items-text{
  opacity: 0.6;
}
.btns {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>