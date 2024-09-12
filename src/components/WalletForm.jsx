import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWallet } from '../redux/wallets/walletActions';

const WalletForm = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault(); // untuk mencegah reload halaman
    if (name.trim()) {
      dispatch(addWallet({ name }));
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New Wallet"
      />
      <button type="submit">Add Wallet</button>
    </form>
  );
};

export default WalletForm;
