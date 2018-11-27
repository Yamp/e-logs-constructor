<script>
import { eventBus } from '../main';
export default {
    name: "selection-table",
    props: ['journal', 'table'],
    data () {
        return {
            template: null,
        }
    },
    render: function (createElement) {
        if (!this.template) {
            return createElement({template: '<div class="spinner-container"><i class="spinner"></i></div>'});
        } 
        else {
            return createElement({
                template: this.template,
                name: 'tableInner',
                data () {
                    return {
                        journal: this.journal,
                        table: this.table,
                    }
                },
                methods: {
                    insertField (field) {
                        eventBus.$emit('insertFieldIntoFormula',{
                            ...this.$data, 
                            field: field
                        })
                    }
                }
            })
        }
    },
    mounted () {
        console.log(this.journal, this.table)
        this.template = this.$store.getters['journalState/getTableHTML'](this.journal, this.table)
        this.$store.dispatch("journalState/importTable", {
            journal: this.journal,
            table: this.table,
        })
    }
}
</script>
