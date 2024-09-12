import axiosClient from '../../api/axiosClient';
import {
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodosError,
  addTodoSuccess,
  deleteTodoSuccess,
} from './todoSlice';

export const fetchTodos = () => async (dispatch) => {
  dispatch(fetchTodosStart());
  try {
    const response = await axiosClient.get('/todos');
    dispatch(fetchTodosSuccess(response.data));
  } catch (error) {
    dispatch(fetchTodosError(error.message));
  }
};

export const addTodo = (todo) => async (dispatch) => {
  try {
    const response = await axiosClient.post('/todos', todo);
    dispatch(addTodoSuccess(response.data));
  } catch (error) {
    console.error(error);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await axiosClient.delete(`/todos/${id}`);
    dispatch(deleteTodoSuccess(id));
  } catch (error) {
    console.error(error);
  }
};
