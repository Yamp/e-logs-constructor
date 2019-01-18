<template>
  <div id="app">
    <constructor-header :is-hidden="headerIsHidden" @showHeader="showHeader" @hideHeader="hideHeader"></constructor-header>
    <div class="app-content" :style="{'transform': headerIsHidden ? 'translateY(0)' : 'translateY(50px)'}">
      <router-view/>
      <notifications classes='vue-notification'/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
    components: {
        'constructor-header': Header
    },
    data () {
        return {
            headerIsHovered: false
        }
    },
    computed: {
        headerIsHidden () {
            return this.$route.name !== 'home' && !this.headerIsHovered
            // return false
        }
    },
    methods: {
        showHeader () {
            this.headerIsHovered = true
        },
        hideHeader () {
            this.headerIsHovered = false
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poiret+One');
@import '~bootstrap3/dist/css/bootstrap.min.css';
@import '~@fortawesome/fontawesome-free/css/all.min.css';
@import 'assets/scss/variables.scss';
/*@import '~bootstrap3/dist/css/bootstrap-theme.min.css';*/

html, body {
    padding: 0;
    margin: 0;
    height: 100%;
}

#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    color: #2c3e50;
    box-sizing: border-box;

    .app-content {
        height: 100%;
        transition: .2s;
    }
}

input[type=file] {
    display: flex !important;
    font-size: 14px !important;
}

.btn {
    transition: 0.2s;
}

.vue-notification {
    padding: 10px;
    font-size: 14px !important;
    border-radius: 4px;

    color: #ffffff;
    background: $color-main !important;
    border-left: 5px solid darken($color-main, 10) !important;

    &.warn {
      background: $accent-orange !important;
      border-left-color: darken($accent-orange, 10) !important;
    }

    &.error {
      background: $color-acent !important;
      border-left-color: darken($color-acent, 10) !important;
    }

    &.success {
      background: $accent-green !important;
      border-left-color: darken($accent-green, 10) !important;
    }
}

.notifications {
    span {
      .notification-wrapper {
        &:first-child {
          margin-top: 60px !important;
        }
      }
    }
}
</style>
