import { createSlice } from '@reduxjs/toolkit';

// Contoh penggunaan state di lokal
// const [wallet, setWallet] = useState({
//   items: [],
//   loading: false,
//   error: null,
// })

const walletSlice = createSlice({
  name: 'wallets',
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
    fetchWalletsStart: (state) => {
      state.loading = true;
    },
    fetchWalletsSuccess: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    fetchWalletsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchWalletsByIdStart: (state) => {
      state.loadingDetail = true;
    },
    fetchWalletsByIdSuccess: (state, action) => {
      state.loadingDetail = false;
      state.itemsDetail = action.payload;
    },
    fetchWalletsByIdError: (state, action) => {
      state.loadingDetail = false;
      state.errorDetail = action.payload;
    },
    addWalletSuccess: (state, action) => {
      state.items.push(action.payload);
    },
    deleteWalletSuccess: (state, action) => {
      state.items = state.items.filter(
        (wallet) => wallet._id !== action.payload
      );
    },
  },
});

export const {
  fetchWalletsStart,
  fetchWalletsSuccess,
  fetchWalletsError,
  fetchWalletsByIdStart,
  fetchWalletsByIdSuccess,
  fetchWalletsByIdError,
  addWalletSuccess,
  deleteWalletSuccess,
} = walletSlice.actions;

export default walletSlice.reducer;
