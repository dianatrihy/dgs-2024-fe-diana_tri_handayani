import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../redux/todos/todoSlice';
import walletReducer from '../redux/wallets/walletSlice';
import expenseReducer from '../redux/expenses/expensesSlice';
import categoriesReducer from '../redux/categories/categorySlice'

const store = configureStore({
  reducer: {
    todos: todoReducer,
    wallets: walletReducer,
    expenses: expenseReducer,
    categories: categoriesReducer,
  },
});

export default store;
