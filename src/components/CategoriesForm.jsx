import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from '../redux/categories/categoryActions';

const CategoriesForm = () => {
    const [name, setName] = useState('');
    const [wallet, setWallet] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault(); // untuk mencegah reload halaman
        if (name.trim() && wallet > 0) {
        const expenseData = {
            name,
            wallet,
        };
        dispatch(addCategory(expenseData));
        setName('');
        setWallet('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
        />
        <input
            type="text"
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
            placeholder="Wallet ID"
        />
        <button type="submit">Add Expense</button>
        </form>
    );
};

export default CategoriesForm;
