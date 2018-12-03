<template>
    <div v-html="template" class="selection-table" @click="handleClick($event)"></div>
</template>


<script>
import { eventBus } from '../main';
export default {
    name: "selection-table",
    props: ['journal', 'table'],
    // data () {
    //     return {
    //         template: this.$store.getters['journalState/getSchemeTableHTML'](this.journal, this.table),
    //     }
    // },
    computed: {
        template: {
            cache: false,
            get: function() { 
                return this.$store.getters['journalState/getSchemeTableHTML'](this.journal, this.table)
            }
        }
    },
    watch: {
        table(value) {
            this.$store.dispatch("journalState/importTable", {
                journal: this.journal,
                table: value,
            })
        }
    },
    // render: function (createElement) {
    //     if (!this.template) {
    //         return createElement({template: '<div class="spinner-container"><i class="spinner"></i></div>'});
    //     } 
    //     else {
    //         return createElement({
    //             template: this.template,
    //             name: 'tableInner',
    //             data () {
    //                 return {
    //                     journal: this.journal,
    //                     table: this.table,
    //                 }
    //             },
    //             methods: {
    //                 insertField (field) {
    //                     eventBus.$emit('insertFieldIntoFormula',{
    //                         ...this.$data, 
    //                         field: field
    //                     })
    //                 }
    //             }
    //         })
    //     }
    // },

    methods: {
        handleClick(e) {
            if ($(e.target).attr("class") == "field-selector") {
                let name = $(e.target).text()
                eventBus.$emit("insertCellIntoFormula", {
                    journal: this.journal,
                    table: this.table,
                    field: name
                })
                eventBus.$emit('closeWizard')
            }
            console.log(e)
        }
    },
    mounted () {
        console.log(this.journal, this.table)
        // this.template = this.$store.getters['journalState/getSchemeTableHTML'](this.journal, this.table)
        this.$store.dispatch("journalState/importTable", {
            journal: this.journal,
            table: this.table,
        })
    }
}
</script>

<style>
.selection-table {
    overflow: auto;
    height: 300px;
}
</style>

