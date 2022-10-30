import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    newTodo: '',
    todos: [],
    filterStatus: 'All',
    filteredTodos: [],
    loading: false,
  },
  reducers: {
    showSpinner(state, action) {
      state.loading = action.payload;
    },

    newTodoHandler: (state, action) => {
      state.newTodo = action.payload;
    },

    clearInput: (state) => {
      state.newTodo = '';
    },

    addNewTodo: (state, action) => {
      state.todos.push(action.payload);
    },

    setTodos: (state, action) => {
      state.todos = action.payload;
    },

    toggleTodo: (state, action) => {
      const clickedTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      clickedTodo.completed = !clickedTodo.completed;
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    filterTodos: (state, action) => {
      state.filterStatus = action.payload;

      if (state.filterStatus === 'Completed') {
        state.filteredTodos = state.todos.filter((todo) => todo.completed);
      } else if (state.filterStatus === 'Active') {
        state.filteredTodos = state.todos.filter((todo) => !todo.completed);
      } else {
        state.filteredTodos = state.todos;
      }
    },

    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
