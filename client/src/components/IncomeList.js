import React, {useContext, useEffect} from 'react';
import { BudgetContext} from '../context/BudgetContext';
import IncomeTransaction from './IncomeTransactions'
import incomeList from '../css/incomeList.css'

const IncomeList = () => {
    const {incomeTransactions, getIncomes} = useContext(BudgetContext);

    useEffect(() => {
        getIncomes()
        //eslint-disable-next-line
    }, [])
   
    return (
        <div className = "transactions transactions-income">
            <h2>Transaction History</h2>
            <ul className = "transaction-list">
                {incomeTransactions.map(incomeTransaction => ( 
                <IncomeTransaction  key = {incomeTransaction._id}incomeTransaction = {incomeTransaction}/>
                ))}
               
            </ul>
            
        </div>
    )
}

export default IncomeList
