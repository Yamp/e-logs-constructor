<template>
  <div class="home">
    <h1 class="title">
      <span>Реальный конструктор</span>
      <span>для нереальных таблиц</span>
    </h1>
    <button class="btn btn-primary" @click="onHandleClick">Создать журнал</button>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
      onHandleClick () {
          this.$router.push('/journal/create')
      }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 130px;
  height: 100%;
  box-sizing: border-box;
}
.title {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 130px;
}
.title span:first-child {
  font-size: 40px;
  opacity: 0.9;
}
.title span:last-child {
  font-size: 44px;
}
</style>