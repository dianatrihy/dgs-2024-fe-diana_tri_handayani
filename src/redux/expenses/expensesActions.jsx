/* eslint-disable no-unused-vars */
import axiosClient from '../../api/axiosClient';
import {
    fetchExpensesStart,
    fetchExpensesSuccess,
    fetchExpensesError,
    fetchExpensesByIdStart,
    fetchExpensesByIdSuccess,
    fetchExpensesByIdError,
    addExpensesuccess,
    deleteExpensesuccess,
} from './expensesSlice';

// CRUD ke api
// Fetch All Expensess
export const fetchExpenses = () => async (dispatch) => {
    dispatch(fetchExpensesStart());
    try {
        const response = await axiosClient.get('/expense-items');
        dispatch(fetchExpensesSuccess(response.data.data));
    } catch (error) {
        dispatch(fetchExpensesError(error.message));
    }
};

// Fetch Expensess By Id
export const fetchExpensesById = (id) => async (dispatch) => {
    dispatch(fetchExpensesByIdStart());
    try {
        const response = await axiosClient.get(`/expense-items/${id}`);
        console.log(response.data.data);
        dispatch(fetchExpensesByIdSuccess(response.data.data));
    } catch (error) {
        dispatch(fetchExpensesByIdError(error.message));
    }
};

// Add Expenses
export const addExpenses = (ExpensesName) => async (dispatch) => {
    try {
        const response = await axiosClient.post('/expense-items', ExpensesName);
        dispatch(addExpensesuccess(response.data.data));

        // optional: reload page
        // window.location.reload();
    } catch (error) {
        console.error(error);
    }
};

// Update Expenses
export const updateExpenses = (ExpensesName, id) => async (dispatch) => {
    try {
        const response = await axiosClient.put(`/expense-items/${id}`, ExpensesName);
        // dispatch(addExpensesSuccess(response.data.data));
        console.log(response);
        // optional: reload page
        window.location.reload();
    } catch (error) {
        console.error(error);
    }
};

// Delete Expenses
export const deleteExpenses = (id) => async (dispatch) => {
    try {
        await axiosClient.delete(`/expense-items/${id}`);
        dispatch(deleteExpensesuccess(id));
    } catch (error) {
        console.error(error);
    }
};
