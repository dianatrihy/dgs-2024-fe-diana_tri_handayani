/* eslint-disable no-unused-vars */
import axiosClient from '../../api/axiosClient';
import {
  fetchWalletsStart,
  fetchWalletsSuccess,
  fetchWalletsError,
  fetchWalletsByIdStart,
  fetchWalletsByIdSuccess,
  fetchWalletsByIdError,
  addWalletSuccess,
  deleteWalletSuccess,
} from './walletSlice';

// CRUD ke api
// Fetch All Wallets
export const fetchWallets = () => async (dispatch) => {
  dispatch(fetchWalletsStart());
  try {
    const response = await axiosClient.get('/wallets');
    dispatch(fetchWalletsSuccess(response.data.data));
  } catch (error) {
    dispatch(fetchWalletsError(error.message));
  }
};

// Fetch Wallets By Id
export const fetchWalletsById = (id) => async (dispatch) => {
  dispatch(fetchWalletsByIdStart());
  try {
    const response = await axiosClient.get(`/wallets/${id}`);
    console.log(response.data.data);
    dispatch(fetchWalletsByIdSuccess(response.data.data));
  } catch (error) {
    dispatch(fetchWalletsByIdError(error.message));
  }
};

// Add Wallet
export const addWallet = (walletName) => async (dispatch) => {
  try {
    const response = await axiosClient.post('/wallets', walletName);
    dispatch(addWalletSuccess(response.data.data));

    // optional: reload page
    // window.location.reload();
  } catch (error) {
    console.error(error);
  }
};

// Update Wallet
export const updateWallet = (walletName, id) => async (dispatch) => {
  try {
    const response = await axiosClient.put(`/wallets/${id}`, walletName);
    // dispatch(addWalletSuccess(response.data.data));
    console.log(response);
    // optional: reload page
    window.location.reload();
  } catch (error) {
    console.error(error);
  }
};

// Delete Wallet
export const deleteWallet = (id) => async (dispatch) => {
  try {
    await axiosClient.delete(`/wallets/${id}`);
    dispatch(deleteWalletSuccess(id));
  } catch (error) {
    console.error(error);
  }
};
