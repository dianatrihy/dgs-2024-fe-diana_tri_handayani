import { useState } from 'react';
import ExpenseForm from '../components/ExpensesForm';
import ExpensesList from '../components/ExpensesList';
import './Expenses.css'

export default function Expenses() {
    const [date] = useState(new Date());

    return (
        <div className='expenses'>
            <h2>Your Expenses</h2>
            <div className='information'>
                <div className='date'>Today: {date.toDateString()}</div>
                <div className='info'>Number of Transaction: </div>
                <div className='info'>Total Expenses: </div>
            </div>
            <div className='form'>
                <p>Add your expense:</p>
                <ExpenseForm />
            </div>
            <ExpensesList />
        </div>
    );
}