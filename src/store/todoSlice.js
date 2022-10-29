import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    newTodo: '',
    todos: [],
    filteredTodos: [],
  },
  reducers: {
    newTodoHandler: (state, action) => {
      state.newTodo = action.payload;
    },

    addTodo: (state) => {
      if (state.newTodo.trim() !== '') {
        state.todos.push({
          id: state.todos.length + 1,
          text: state.newTodo,
          completed: false,
        });
        state.newTodo = '';
      }
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

    removeTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },

    filterTodos: (state, action) => {
      if (action.payload === 'Completed') {
        state.filteredTodos = state.todos.filter((todo) => todo.completed);
      } else if (action.payload === 'Active') {
        state.filteredTodos = state.todos.filter((todo) => !todo.completed);
      } else {
        state.filteredTodos = state.todos;
      }
    },

    clearCompleted: (state, action) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});

export const todoActions = todoSlice.actions;

export default todoSlice.reducer;
