import React, {useContext} from 'react';
import {BudgetContext} from '../context/BudgetContext';
import incomeTransaction from '../css/incomeTransaction.css'

const IncomeTransactions = ({incomeTransaction}) => {
    const {deleteIncome} = useContext(BudgetContext)
    return (
        <div>
             <li className ="transaction">
          <span className = "transaction-text">{incomeTransaction.incomeText}</span>
          <span className = "transaction-amount">${incomeTransaction.incomeAmount}</span>
          <button className = "delete-btn" onClick = {() => deleteIncome(incomeTransaction._id)}>
              <i className = "fas fa-trash"></i>
          </button>
         </li>
        </div>
    )
}

export default IncomeTransactions
