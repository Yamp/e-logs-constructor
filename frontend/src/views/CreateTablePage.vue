<template>
    <div class="create-table">
        <h2 class="title">Создание таблицы</h2>
        <form class="form" @submit.prevent="onHandleCreate">
            <div class="form-group">
                <input type="text" class="form-control" v-model="title" placeholder="Заголовок" @input="onHandleChange" style="margin-bottom: 20px">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" v-model="name" placeholder="Название" @input="onHandleChange" style="margin-bottom: 20px">
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="repeatableRow" v-model="repeatableRow" @change="onHandleChange" style="margin-bottom: 20px">
                <label class="form-check-label" for="repeatableRow">Повторяющиеся строки</label>
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
        name: "CreateTablePage",
        data () {
            return {
                title: '',
                name: '',
                repeatableRow: false,
                error: ''
            }
        },
        methods: {
            onHandleBack () {
                this.$router.back()
            },
            onHandleCreate () {
                if (this.title && this.name && this.$store.getters['journalState/getJournalName']) {
                    this.$store.commit('journalState/addTable',
                        {
                            title: this.title,
                            name: slugify(this.name, '_'),
                            fields: [],
                            html: '',
                            repeatable_row: this.repeatableRow
                        }
                    )
                    this.$router.push(`/journal/${this.$route.params.journalName}/table/${slugify(this.name, '_')}/edit`)
                }
                else if (!this.$store.getters['journalState/getJournalName']) {
                    this.$router.push('/journal/create')
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
.create-table {
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
.form-check label {
    font-weight: normal;
}
.btns {
  display: flex;
  justify-content: center;
}
</style>