import { createStore } from 'vuex';
import TodoModule from './todos/index';

const store = createStore({
  modules: {
    TodoModule,
  },
});

export default store;
