<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import '~bootstrap3/dist/css/bootstrap.min.css';
  @import '~@fortawesome/fontawesome-free/css/all.min.css';
  /*@import '~bootstrap3/dist/css/bootstrap-theme.min.css';*/

  html, body {
    padding: 0;
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    color: #2c3e50;
    box-sizing: border-box;
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
</style>
