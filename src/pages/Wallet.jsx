import WalletForm from '../components/WalletForm';
import WalletList from '../components/WalletList';
import './Wallet.css'

export default function Wallet() {
  return (
    <div className='wallet'>
      <h2>Wallet List</h2>
      <WalletForm />
      <WalletList />
    </div>
  );
}
