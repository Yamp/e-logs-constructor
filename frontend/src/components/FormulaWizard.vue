<template>
<transition name="fade">
    <div :class="'wizard-container'" v-show="display" @click='(e) => {e.stopPropagation()}'>
        <div class="formula-wizard centered">
            <img src="../assets/icons/window-close.svg" class="icon close-button" @click="closeWizard">
            <div class="form-group input-container">
                <label for="plant">Выберите журнал</label>
                <select name="plant" id="journal" class="form-control" v-model="currentJournal">
                    <option v-for="journal in journals" :key="journal" :value="journal">{{ journal }}</option>
                </select>
            </div>
            <div class="form-group input-container" v-if="currentJournal">
                <label for="plant">Выберите таблицу</label>
                <select name="plant" id="table" class="form-control" v-model="currentTable">
                    <option v-for="table in tables" :key="table" :value="table">{{ table }}</option>
                </select>
            </div>
            <div v-if='currentTable && currentJournal'>
                <selection-table :journal='currentJournal' :table='currentTable'></selection-table>
            </div>
            
        </div>
    </div>
</transition>
</template>

<script>
import { eventBus } from '../main';
import SelectionTable from './SelectionTable.vue'
export default {
    name: "FormulaWizard",
    props: ['display'],
    components: {SelectionTable},
    data () {
        return {
            currentJournal: null,
            journals: null,
            currentTable: null,
            tables: null,
        }
    },
    watch: {
        currentJournal(value) {
            this.currentTable = null;
            this.tables = this.$store.getters["journalState/getJournalTableNames"](value);
        }

    },
    methods: {
        closeWizard () {
            eventBus.$emit("closeWizard")
        }
    },
    mounted () {
        this.journals = this.$store.getters["journalState/getJournalNames"]()
    }
}
</script>

<style>

.insert-field-button {
    float: right;
}

.close-button {
    position: absolute;
    right: 10px;
    top: 5px;
}

.formula-wizard {
    width: 500px;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
}


.icon {
    width: 20px;
    font-size: 36px;
    opacity: 0.6;
    text-align: right;
}

.icon:active {
    opacity: 0.2;
}

.icon:hover {
    cursor: pointer;
}

.wizard-container {
    position: absolute;
    z-index: 5;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    /* transition: background-color .5s; */
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

/* .wizard-container-hidden {
    background-color: rgba(0, 0, 0, 0.0);
} */

.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}

cell {
    position: relative;
    height: 100%;
    display: block;
    padding: 4px;
}

</style>
