<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>{{ this.$store.state.name }}</h1>
  <h3 v-for="(item, i) in todos" :key="i">{{ item.title }}</h3>
</template>

<script>
export default {
  computed: {
    todos: function() {
      return this.$store.state.TodoModule.todos;
    },
  },
  created() {
    this.$store.dispatch('getTodos');
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
