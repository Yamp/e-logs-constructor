<template>
    <div class="create-journal">
        <h2 class="title">Создание секции</h2>
        <form class="form" @submit.prevent="onHandleCreate">
            <div class="form-group">
                <input type="text" class="form-control" v-model="title" placeholder="Заголовок" @input="onHandleChange" style="margin-bottom: 20px">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" v-model="name" placeholder="Название" @input="onHandleChange" style="margin-bottom: 20px">
            </div>
            <div v-show="error" class="error">
                Заполните все поля
            </div>
        </form>
        <div class="btns">
            <button class="btn btn-secondary" @click="onHandleBack" style="margin-right: 14px">Назад</button>
            <button class="btn btn-primary" @click.prevent="onHandleCreate" type="submit">Создать</button>
        </div>
    </div>
</template>

<script>
    import slugify from 'slugify'
    export default {
        name: "CreateJournalPage",
        data () {
            return {
                title: '',
                name: '',
                error: ''
            }
        },
        methods: {
            onHandleBack () {
                this.$router.back()
            },
            onHandleCreate (e) {
                if (this.title && this.name) {
                    this.$store.commit('journalState/setJournal', {title: this.title, name: slugify(this.name, '_')})
                    this.$router.push(`/journal/${slugify(this.name, '_')}`)
                }
                else this.error = true
            },
            onHandleChange (data) {
                data.target.value ? this.error = '' : this.error = true
            }
        }
    }
</script>

<style scoped>
.create-journal {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-top: 130px;
  height: 100%;
  box-sizing: border-box;
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
}
.btns {
  display: flex;
  justify-content: center;
}
</style>