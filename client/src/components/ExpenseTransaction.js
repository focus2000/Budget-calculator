import React, {useContext} from 'react';
import {BudgetContext} from '../context/BudgetContext';

const ExpenseTransaction = ({expenseTransaction}) => {
    const {deleteExpense} = useContext(BudgetContext)
    return (
        <div>
             <li className ="transaction">
           
          <span className = "transaction-text">{expenseTransaction.expenseText}</span>
          <span className = "transaction-amount">${expenseTransaction.expenseAmount}</span>
          <button className = "delete-btn" onClick = {() => deleteExpense(expenseTransaction._id)}>
              <i className = "fas fa-trash"></i>
              </button>

             
         </li>
        </div>
    )
}

export default ExpenseTransaction
