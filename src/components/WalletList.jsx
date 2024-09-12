import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchWallets,
  deleteWallet,
  fetchWalletsById,
  updateWallet,
} from '../redux/wallets/walletActions';

const WalletList = () => {
  const [name, setName] = useState('');
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();
  const { items, loading, error, itemsDetail, loadingDetail, errorDetail } =
    useSelector((state) => state.wallets); // untuk manggil state di redux

  useEffect(() => {
    console.log('test');
    dispatch(fetchWallets());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleUpdate = (walletName, id) => {
    if (walletName.trim()) {
      const payload = {
        name: walletName,
      };
      dispatch(updateWallet(payload, id));
    }
  };
  return (
    <>
      <h6>Detail wallet yang dipilih</h6>
      {loadingDetail ? (
        <p>Loading...</p>
      ) : errorDetail ? (
        <p>Error: {errorDetail}</p>
      ) : (
        <>
          <p>id: {itemsDetail._id}</p>
          <p>name: {itemsDetail.name}</p>
          <button onClick={() => setShowInput(true)}>Edit</button>
          {showInput && (
            <>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Update Wallet Name"
              />
              <button onClick={() => handleUpdate(name, itemsDetail._id)}>
                Update
              </button>
            </>
          )}
        </>
      )}
      <br />
      ====================================
      <br />
      <ul>
        {items.map((wallet) => (
          <li key={wallet._id}>
            {wallet.name}
            <button onClick={() => dispatch(fetchWalletsById(wallet._id))}>
              Detail
            </button>
            <button onClick={() => dispatch(deleteWallet(wallet._id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default WalletList;
