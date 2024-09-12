import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchExpenses,
    deleteExpenses,
    fetchExpensesById,
    updateExpenses,
} from '../redux/expenses/expensesActions';

const ExpensesList = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [showInput, setShowInput] = useState(false);
    const dispatch = useDispatch();
    const { items, loading, error, itemsDetail, loadingDetail, errorDetail } =
        useSelector((state) => state.expenses);

    useEffect(() => {
        dispatch(fetchExpenses());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const handleUpdate = (expenseTitle, expenseAmount, id) => {
        if (expenseTitle.trim() && expenseAmount > 0) {
        const payload = {
            title: expenseTitle,
            amount: expenseAmount,
        };
        dispatch(updateExpenses(payload, id));
        }
    };

    return (
        <>
        <h6>Detail pengeluaran yang dipilih</h6>
        {loadingDetail ? (
            <p>Loading...</p>
        ) : errorDetail ? (
            <p>Error: {errorDetail}</p>
        ) : (
            <>
            <p>id: {itemsDetail._id}</p>
            <p>title: {itemsDetail.title}</p>
            <p>amount: {itemsDetail.amount}</p>
            <button onClick={() => setShowInput(true)}>Edit</button>
            {showInput && (
                <>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Update Expense Title"
                />
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Update Amount"
                />
                <button
                    onClick={() => handleUpdate(title, amount, itemsDetail._id)}
                >
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
            {items.map((expense) => (
            <li key={expense._id}>
                {expense.title} - {expense.amount}
                <button onClick={() => dispatch(fetchExpensesById(expense._id))}>
                Detail
                </button>
                <button onClick={() => dispatch(deleteExpenses(expense._id))}>
                Delete
                </button>
            </li>
            ))}
        </ul>
        </>
    );
};

export default ExpensesList;
