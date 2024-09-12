import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpenses } from '../redux/expenses/expensesActions';
import './Form.css'

const ExpenseForm = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [wallet, setWallet] = useState('');
    const [category, setCategory] = useState('');
    const [flowType, setFlowType] = useState('outcome'); // default to 'outcome'

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault(); // untuk mencegah reload halaman
        if (title.trim() && amount > 0 && wallet && category) {
        const expenseData = {
            title,
            amount: parseFloat(amount), // convert amount to number
            wallet,
            category,
            flowType,
        };
        dispatch(addExpenses(expenseData));
        setTitle('');
        setAmount('');
        setWallet('');
        setCategory('');
        setFlowType('outcome');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Expense Title"
            />
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Amount"
            />
            <input
                type="text"
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
                placeholder="Wallet ID"
            />
            <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category ID"
            />
            <select value={flowType} onChange={(e) => setFlowType(e.target.value)}>
                <option value="outcome">Outcome</option>
                <option value="income">Income</option>
            </select>
            <button type="submit">Add Expense</button>
            </form>
        </div>
    );
};

export default ExpenseForm;
