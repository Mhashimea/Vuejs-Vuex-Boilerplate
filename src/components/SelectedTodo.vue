<template>
  <div class="card selected-card">
    <h1>{{ todo.title }}</h1>
    <h3 class="text-white">Todo Description</h3>
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
  @apply shadow border m-2 p-5 text-left rounded-md cursor-pointer;
  width: 47%;
}
.selected-card {
  @apply bg-gray-700 text-white hover:bg-gray-800;
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
