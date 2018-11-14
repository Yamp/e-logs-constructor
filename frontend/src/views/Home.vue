<template>
  <div class="home">
    <h1 class="title">
      <span>Конструктор журналов</span>
    </h1>
    <form class="form" @submit.prevent="onHandleCreate">
      <div class="form-group">
        <input type="text" class="form-control" v-model="title" placeholder="Заголовок" @input="onHandleChange" style="margin-bottom: 20px">
      </div>
      <div v-show="error" class="error">
        Введите заголовок
      </div>
      <div class="buttons-container">
        <button class="btn" @click="isShowImport = true">Загрузить журнал</button>
        <button class="btn btn-primary" @click="onHandleCreate">Создать журнал</button>
      </div>
      <modal v-show="isShowImport" @close="isShowImport = false">
            <div>
                <p class="modal-title">Выберите файл для загрузки</p>
                <div class="modal-form">
                    <input 
                        accept=".jrn" 
                        type="file" 
                        value="Обзор" 
                        @change="(e) => {importFile = e.target.files[0]}"
                    />
                    <button class="btn btn-primary modal-btn" @click="onHandleImport">Загрузить</button>
                </div>
            </div>
        </modal>
    </form>
  </div>
</template>

<script>
import slugify from 'slugify'
import axios from 'axios'

import Modal from "../components/Modal.vue";

export default {
  name: "HomePage",
  components: {Modal},
  data () {
      return {
          title: '',
          isShowImport: false,
          error: ''
      }
  },
  methods: {
      onHandleCreate (e) {
          if (this.title) {
              this.$store.commit('journalState/setJournal', {title: this.title, name: slugify(this.title, '_')})
              this.$router.push(`/journal/${slugify(this.title, '_')}`)
          }
          else this.error = true
      },
      onHandleChange (data) {
          data.target.value ? this.error = '' : this.error = true
      },
      onHandleImport () {
            let self = this

            let reader = new FileReader();

            reader.onload = function(e) {
                self.$store.commit('journalState/setJournal', JSON.parse(reader.result))
                this.isShowImport = false
                self.$router.push(`/journal/${self.$store.getters['journalState/getJournalName']}`)
            }

            reader.readAsText(this.importFile);
        }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 130px;
  height: 100%;
  box-sizing: border-box;
}
.title {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 100px;
}
.title span {
  font-size: 44px;
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
.form {
  width: 300px;
  margin: 10px 0 0 0;
  text-align: center;
}

.buttons-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.modal-title {
  margin-bottom: 20px;
  font-size: 20px;
}
.modal-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
}
.modal-btn {
  margin-left: 10px;
}
</style>