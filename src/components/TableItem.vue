<template>
    <div class="table-item">
        <div class="title">
            <p>Название: {{table.name}}</p>
            <p>Название на латинском: {{table.latinName}}</p>
        </div>
        <div class="body" v-html="table.html">
        </div>
    </div>
</template>

<script>
export default {
    name: "TableItem",
    props: ['table']
}
</script>

<style scoped>
.table-item {
    padding: 18px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px 1px rgba(0, 0, 0, 0.16);
}
</style>