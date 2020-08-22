import React, {useContext, useEffect} from 'react';
import { BudgetContext} from '../context/BudgetContext';
import ExpenseTransaction from './ExpenseTransaction';
import expenseList from '../css/expenseList.css';

const ExpenseList = () => {
    const {expenseTransactions, getExpenses} = useContext(BudgetContext);

    useEffect(() => {
        getExpenses()
        //eslint-disable-next-line
    }, [])
   
    return (
        <div className = "transactions transactions-expense">
            <h2>Transaction History</h2>
            <ul className = "transaction-list">
               {expenseTransactions.map(expenseTransaction => (
                   <ExpenseTransaction key = {expenseTransaction._id} expenseTransaction = {expenseTransaction}/>
               ))}
            </ul>
            
        </div>
    )
}

export default ExpenseList
