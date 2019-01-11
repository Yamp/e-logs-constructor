<template>
    <div class="table-item">
        <div class="title">
            <div class="table-name">
                <span v-if="!editingTableName" title="Изменить название" @click="onStartEditTableName">{{table.title}}</span>
                <form v-else @submit.prevent="onTableNameSave">
                    <div class="form-group table-name-group">
                        <input
                                type="text"
                                class="form-control table-name-input"
                                v-model="newTableName"
                                placeholder="Имя таблицы"
                                v-on:blur="onTableNameSave"
                        >
                        <div v-show="tableNameError" class="error">
                            Введите название таблицы
                        </div>
                    </div>
                </form>
            </div>
            <div style="display: flex; align-items: center">
                <img src="../assets/icons/edit.svg" class="edit-icon" @click="editTable(table.name)">
                <img src="../assets/icons/trash.svg" class="delete-icon" @click="deleteTable">
            </div>
        </div>
        <div class="body" v-html="table.html">
        </div>
    </div>
</template>

<script>
    // import bootbox from 'bootbox'
import slugify from 'slugify'
export default {
    name: "TableItem",
    props: ['table'],
    data () {
        return {
            editingTableName: false,
            tableNameError: false,
            newTableName: this.table.title
        }
    },
    computed: {
        getJournalName () {
            return this.$store.getters['journalState/getJournalName']
        }
    },
    methods: {
        onStartEditTableName() {
            this.editingTableName = true
            setTimeout(() => $('.table-name-input').focus(), 0)
        },
        onTableNameSave() {
            if (this.newTableName) {
                this.$store.commit('journalState/setTableName', {
                    oldName: this.table.name,
                    title: this.newTableName,
                    name: slugify(this.newTableName, '_')
                })

                this.editingTableName = false
                this.tableNameError = false
            }
            else this.tableNameError = true
        },
        deleteTable () {
            let _this = this

            bootbox.confirm({
                size: "small",
                backdrop: true,
                message: "Вы уверены, что хотите удалить таблицу?",
                buttons: {
                    confirm: {
                        label: 'Да',
                        className: 'btn-default'
                    },
                    cancel: {
                        label: 'Нет',
                        className: 'btn-primary'
                    }
                },
                callback: function (result) {
                    if (result) {
                        _this.$store.commit('journalState/deleteTable', {tableName: _this.table.name})
                    }
                }
            });
        },
        editTable (tableName) {
            this.$router.push(
                `/journal/${this.getJournalName}/table/create?table=${tableName}`
            )
            // this.$router.push(
            //     `/journal/${this.getJournalName}/table/create?table=${tableName}${this.getUrlParams('plant') ? '&plant=' + this.getUrlParams('plant') : ''}`
            // )
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
    }
}
</script>

<style scoped lang="scss">
.table-item {
    padding: 18px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px 1px rgba(0, 0, 0, 0.16);
}
.title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;
}
.table-name {
    max-width: 80%;
    word-break: break-word;
    transition: 0.2s;

    span {
        cursor: pointer;

        &:hover {
            color: #000;
        }
    }
}
.table-name-group {
    display: flex;
    align-items: center;
    margin-bottom: 0;

    .table-name-input {
        width: 220px;
        margin-right: 10px;
    }
}
.body {
    overflow-x: auto;
    box-shadow: 0 0 4px #cccccc;
    padding: 6px;
}
.delete-icon, .edit-icon {
    width: 20px;
    font-size: 36px;
    opacity: 0.6;
    transition: 0.2s;
}
.edit-icon {
    margin-right: 20px;
}

.delete-icon:hover, .edit-icon:hover {
    opacity: 1;
    cursor: pointer;
}

.error {
    display: flex;
    align-items: center;
    background-color: #f56c6c;
    color: white;
    height: 34px;
    border-radius: 6px;
    padding: 0px 15px;
    font-size: 14px;
}
</style>