<template>
  <div id="app">
    <constructor-header></constructor-header>
    <div class="app-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header'
  export default {
     components: {
         'constructor-header': Header
     }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Poiret+One');
  @import '~bootstrap3/dist/css/bootstrap.min.css';
  @import '~@fortawesome/fontawesome-free/css/all.min.css';
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
      padding-top: 50px;
      height: 100%;
    }
  }
  .has-data {
    position: absolute;
    bottom: 4px;
    left: 4px;
    width: 16px;
  }
  th table, td table {
    margin-bottom: 0 !important;
    height: 100%;
  }
  td, th {
    min-width: 70px !important;
    cursor: pointer;
  }
  .indexed-line {
    th, td {
      background-color: #f4f8ff;
    }
  }
</style>
