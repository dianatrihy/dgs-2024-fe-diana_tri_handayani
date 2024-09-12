import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
    name: 'categories',
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
        fetchCategoriesStart: (state) => {
            state.loading = true;
        },
        fetchCategoriesSuccess: (state, action) => {
            state.loading = false;
            state.items = action.payload;
        },
        fetchCategoriesError: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        fetchCategoriesByIdStart: (state) => {
            state.loadingDetail = true;
        },
        fetchCategoriesByIdSuccess: (state, action) => {
            state.loadingDetail = false;
            state.itemsDetail = action.payload;
        },
        fetchCategoriesByIdError: (state, action) => {
            state.loadingDetail = false;
            state.errorDetail = action.payload;
        },
        addCategorySuccess: (state, action) => {
            state.items.push(action.payload);
        },
        deleteCategorySuccess: (state, action) => {
            state.items = state.items.filter(
                (category) => category._id !== action.payload
            );
        },
    },
})

export const {
    fetchCategoriesStart,
    fetchCategoriesSuccess,
    fetchCategoriesError,
    fetchCategoriesByIdStart,
    fetchCategoriesByIdSuccess,
    fetchCategoriesByIdError,
    addCategorySuccess,
    deleteCategorySuccess,
} = categorySlice.actions;

export default categorySlice.reducer;