import axiosClient from '../../api/axiosClient';
import {
    fetchCategoriesStart,
    fetchCategoriesSuccess,
    fetchCategoriesError,
    fetchCategoriesByIdStart,
    fetchCategoriesByIdSuccess,
    fetchCategoriesByIdError,
    addCategorySuccess,
    deleteCategorySuccess,
} from  './categorySlice';

export const fetchCategories = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
        const response = await axiosClient.get('/categories');
        dispatch(fetchCategoriesSuccess(response.data.data));
    } catch (error) {
        dispatch(fetchCategoriesError(error.message));
    }
};

// Fetch Categories By Id
export const fetchCategoriesById = (id) => async (dispatch) => {
    dispatch(fetchCategoriesByIdStart());
    try {
        const response = await axiosClient.get(`/categories/${id}`);
        console.log(response.data.data);
        dispatch(fetchCategoriesByIdSuccess(response.data.data));
    } catch (error) {
        dispatch(fetchCategoriesByIdError(error.message));
    }
};

// Add Categories
export const addCategory = (CategoriesName) => async (dispatch) => {
    try {
        const response = await axiosClient.post('/categories', CategoriesName);
        dispatch(addCategorySuccess(response.data.data));

        // optional: reload page
        // window.location.reload();
    } catch (error) {
        console.error(error);
    }
};

// Update Categories
export const updateCategory = (CategoriesName, id) => async () => {
    try {
        const response = await axiosClient.put(`/categories/${id}`, CategoriesName);
        // dispatch(addCategorySuccess(response.data.data));
        console.log(response);
        // optional: reload page
        window.location.reload();
    } catch (error) {
        console.error(error);
    }
};

// Delete Categories
export const deleteCategory = (id) => async (dispatch) => {
    try {
        await axiosClient.delete(`/categories/${id}`);
        dispatch(deleteCategorySuccess(id));
    } catch (error) {
        console.error(error);
    }
};
