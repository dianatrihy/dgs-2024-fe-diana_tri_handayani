import { createSlice } from '@reduxjs/toolkit';

const expensesSlice = createSlice({
    name: 'expenses',
    initialState: {
        items: [],
        loading: false,
        error: null,
        itemsDetail: {},
        loadingDetail: false,
        errorDetail: null,
    },
    reducers: {
    // CRUD untuk ngubah value initialState
        fetchExpensesStart: (state) => {
            state.loading = true;
        },
        fetchExpensesSuccess: (state, action) => {
            state.loading = false;
            state.items = action.payload;
        },
        fetchExpensesError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        fetchExpensesByIdStart: (state) => {
            state.loadingDetail = true;
        },
        fetchExpensesByIdSuccess: (state, action) => {
            state.loadingDetail = false;
            state.itemsDetail = action.payload;
        },
        fetchExpensesByIdError: (state, action) => {
            state.loadingDetail = false;
            state.errorDetail = action.payload;
        },
        addExpensesuccess: (state, action) => {
            state.items.push(action.payload);
        },
        deleteExpensesuccess: (state, action) => {
            state.items = state.items.filter(
                (expenses) => expenses._id !== action.payload
            );
        },
    },
    });

    export const {
        fetchExpensesStart,
        fetchExpensesSuccess,
        fetchExpensesError,
        fetchExpensesByIdStart,
        fetchExpensesByIdSuccess,
        fetchExpensesByIdError,
        addExpensesuccess,
        deleteExpensesuccess,
    } = expensesSlice.actions;

export default expensesSlice.reducer;
