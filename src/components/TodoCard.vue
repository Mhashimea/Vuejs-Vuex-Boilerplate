<template>
  <div class="card" @click="$emit('onClickTodo', todo)">
    <h1>{{ todo.title }}</h1>
    <h3>Todo Description</h3>
    <span
      >Status:
      <strong>{{ todo.completed ? 'Active' : ' Inactive' }}</strong></span
    >
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
};
</script>

<style>
.card {
  @apply shadow border m-2 p-5 text-left rounded-md cursor-pointer hover:bg-gray-100;
  width: 47%;
}
.card h1 {
  @apply font-semibold text-xl mb-1 capitalize;
}
.card h3 {
  @apply text-gray-500 text-sm mb-2;
}
.card span {
  @apply text-sm;
}
</style>
