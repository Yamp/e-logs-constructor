<template>
    <div class="header">
        <div class="title" @click="goHome">
            <span>Конструктор журналов</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        methods: {
            goHome() {
                if (this.journal) {
                    this.$router.push(`/journal/${this.journalName}${this.plant ? '?plant=' + this.plant : ''}`)
                }
                else this.$router.push('/')
            }
        },
        computed: {
            journal() {
                return this.$store.getters['journalState/getJournal']
            },
            journalName() {
                return this.$store.getters['journalState/getJournalName']
            },
            plant () {
                return this.$store.getters['journalState/getJournalPlant']
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        position: fixed;
        align-items: center;
        width: 100%;
        height: 50px;
        background-color: #337ab7;
        padding: 10px 20px;
        box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.4);
        z-index: 1000;

        .title {
            font-family: 'Poiret One';
            color: #ffffff;
            font-size: 24px;
            font-weight: bold;
            cursor: pointer;
        }
    }
</style>