const state = {
  todos: [],
  selectedTodo: {},
};

const mutations = {
  GET_TODO(state, payload) {
    state.todos = payload;
  },
};

const actions = {
  async getTodos(conetxt) {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    conetxt.commit('GET_TODO', await res.json());
  },
};

const getters = {
  todos: state => {
    return state.todos;
  },
  selectedTodo: state => id => {
    return state.todos.find(todo => todo.id === id);
  },
};

const todoModule = {
  state,
  mutations,
  actions,
  getters,
};

export default todoModule;
