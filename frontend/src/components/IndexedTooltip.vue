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
                let _this = this

                $(row).find('th, td').each(function () {
                    if ($(this).css("background-color")) {
                        _this.coloredRows.push({
                            field: $(this),
                            color: $(this).css("background-color")
                        })
                    }
                    $(this).css("background-color", "#b8cae6")
                })
            },
            handleMouseLeave(row) {
                let _this = this

                $(row).find('th, td').css("background-color", '')
                _this.coloredRows.map((item) => {
                    item.field.css("background-color", item.color)
                })
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
        transition: 0.1s;
        z-index: 1000;
    }
</style>