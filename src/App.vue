<template>
  <h1 class="p-2 text-xl font-semibold">Todo List</h1>
  <div class="flex">
    <div class="flex flex-wrap w-1/2">
      <TodoCard
        :todo="item"
        v-for="(item, i) in todos"
        :key="i"
        @onClickTodo="setTodos"
      />
    </div>
    <div class="w-1/2">
      <SelectedTodo :todo="selectedTodo" v-if="selectedTodo.title" />
      <div
        v-else
        class="flex font-semibold h-64 items-center justify-center text-gray-600 text-xl"
      >
        Click on the todo to see the details
      </div>
    </div>
  </div>
</template>

<script>
import TodoCard from './components/TodoCard';
import SelectedTodo from './components/SelectedTodo';
export default {
  components: { TodoCard, SelectedTodo },
  computed: {
    todos: function() {
      return this.$store.state.TodoModule.todos;
    },
    selectedTodo: function() {
      return this.$store.state.TodoModule.selectedTodo;
    },
  },
  methods: {
    setTodos(e) {
      this.$store.dispatch('setTodos', e);
    },
  },
  created() {
    this.$store.dispatch('getTodos');
  },
};
</script>
