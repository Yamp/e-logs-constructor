<template>
    <div class="table-item">
        <div class="title">
            <div>
                <p><span style="opacity: 0.6;">Заголовок:</span> {{table.name}}</p>
                <p><span style="opacity: 0.6;">Название:</span> {{table.latinName}}</p>
            </div>
            <div style="display: flex; align-items: center">
                <span class="delete-icon" @click="deleteTable">&times;</span>
            </div>
        </div>
        <div class="body" v-html="table.html">
        </div>
    </div>
</template>

<script>
export default {
    name: "TableItem",
    props: ['table'],
    methods: {
        deleteTable () {
            this.$store.commit('journalState/deleteTable', {tableName: this.table.latinName})
        }
    }
}
</script>

<style scoped>
.table-item {
    padding: 18px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px 1px rgba(0, 0, 0, 0.16);
}
.title {
    display: flex;
    justify-content: space-between;
}
.delete-icon {
    font-size: 36px;
    opacity: 0.6;
    transition: 0.2s;
}
.delete-icon:hover {
    opacity: 1;
    cursor: pointer;
}
</style>