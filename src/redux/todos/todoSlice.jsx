import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchTodosStart: (state) => {
      state.loading = true;
    },
    fetchTodosSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    fetchTodosError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addTodoSuccess: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodoSuccess: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const {
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodosError,
  addTodoSuccess,
  deleteTodoSuccess,
} = todoSlice.actions;

export default todoSlice.reducer;
