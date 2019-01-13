<template>
    <div
            id="indexed-tooltip"
            class="indexed-tooltip-container"
            :style="{visibility: show ? 'visible' : 'hidden', left: left + 'px', top: top + 'px', transform: 'scale('+ +show +')'}"
    >
        <div class="note-btn-group btn-group note-row">
            <div class="note-btn-group btn-group" v-for="row in rowsData">
                <button
                        v-if="!checkIndexed(row)"
                        type="button"
                        class="note-btn btn btn-default btn-sm"
                        @mouseenter="handleMouseEnter(row)"
                        @mouseleave="handleMouseLeave(row)"
                        @click="addIndexed(row)"
                >
                    <i class="fas fa-redo-alt"></i>
                </button>
                <button
                        v-else
                        type="button"
                        class="note-btn btn btn-default btn-sm"
                        @mouseenter="handleMouseEnter(row)"
                        @mouseleave="handleMouseLeave(row)"
                        @click="removeIndexed(row)"
                >
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IndexedTooltip",
        props: ['show', 'left', 'top', 'rowsData'],
        data () {
            return {
                coloredRows: []
            }
        },
        methods: {
            checkIndexed(row) {
                return !!$(row).attr('v-for')
            },
            handleMouseEnter(row) {
                $(row).addClass('selected-line')
            },
            handleMouseLeave(row) {
                $(row).removeClass('selected-line')
            },
            addIndexed(row) {
                $(row).addClass('indexed-line').attr('v-for', '(value, index) in rowsCount').attr(':key', 'index')
                $(row).find('th, td').attr('row-index', '')
                $(row).find('th, td').attr(':row-index', 'index')
                this.$forceUpdate()
            },
            removeIndexed(row) {
                $(row).removeClass('indexed-line').attr('v-for', '').attr(':key', '')
                $(row).find('th, td').attr('row-index', '0')
                $(row).find('th, td').attr(':row-index', '')
                this.$forceUpdate()
            }
        }
    }
</script>

<style scoped>
    .indexed-tooltip-container {
        position: absolute;
        padding: 6px;
        background-color: #fff;
        border: 1px solid rgba(0,0,0,.2);
        border-radius: 6px;
        box-shadow: 0 0 10px rgba(0,0,0,.2);
        transition: 0.05s;
        z-index: 10000;
    }
</style>