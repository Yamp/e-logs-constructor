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
import Editor from '../components/Editor'
export default {
  name: 'EditTableDataPage',
  data () {
    return {

    }
  },
  methods: {
      onHandleBack () {
        this.$router.back()
      },
      onHandleSave () {
        this.$store.commit('journalState/setTable',
            {
                tableName: this.$route.params.tableName,
                data: {
                    html: $('#editor-content').html()
                }
            }
        )
        this.$router.push(`/journal/${this.$route.params.journalName}`)
      }
  },
  components: { Editor },
}
</script>

<style scoped>
.edit-data {
  padding: 20px;
  height: 100%;
  box-sizing: border-box;
}
.edit-data .title{
    margin-top: 0;
    margin-bottom: 20px;
    text-align: center;
}
.editor {
    margin-bottom: 20px;
}
.btns {
  display: flex;
  justify-content: center;
}
</style>
