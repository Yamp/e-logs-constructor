<template>
    <div :class="{'header': true, 'header-hidden': isHidden}">
        <div class="title" @click="goHome">
            <span>Конструктор журналов</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        props: {
            isHidden: Boolean
        },
        data () {
            return {
                showedTimer: null,
                hiddenTimer: null,
                timeTillShow: 300
            }
        },
        methods: {
            goHome() {
                if (this.journal) {
                    this.$router.push(`/journal/${this.journalName}${this.plant ? '?plant=' + this.plant : ''}`)
                    this.$store.commit('journalState/setCurrentTable', null)
                }
                else this.$router.push('/')
            },
            mousemoveHandler (e) {
                if (e.pageY <= 20 && this.isHidden) {
                    !this.showedTimer ?
                        this.showedTimer = setTimeout(() => {
                            this.$emit('showHeader')
                        }, this.timeTillShow)
                        : null
                }
                else if (e.pageY > 50) {
                    !this.hiddenTimer ?
                        this.hiddenTimer = setTimeout(() => {
                            this.showedTimer = clearTimeout(this.showedTimer)
                            this.hiddenTimer = clearTimeout(this.hiddenTimer)

                            !this.isHidden ? this.$emit('hideHeader') : null
                        }, 3 * this.timeTillShow)
                        : null
                }
                else if (e.pageY <= 50 && !this.isHidden) {
                    this.hiddenTimer = clearTimeout(this.hiddenTimer)
                }
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
        },
        mounted () {
            $(document).on('mousemove', this.mousemoveHandler)
        },
        destroyed() {
            $(document).off('mousemove', this.mousemoveHandler)
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
        transition: .2s;
        z-index: 1000;

        &.header-hidden {
            transform: translateY(-50px);
        }

        .title {
            font-family: 'Poiret One';
            color: #ffffff;
            font-size: 24px;
            font-weight: bold;
            cursor: pointer;
        }
    }
</style>