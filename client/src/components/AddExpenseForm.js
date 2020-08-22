import React, {useState, useContext, useEffect} from 'react';
import {BudgetContext} from '../context/BudgetContext';
import addExpense from '../css/addExpense.css';

const AddExpenseForm = () => {
    
    const {addExpense} = useContext(BudgetContext)

     const [expense, setExpense]  = useState({
         
        expenseText: '',
        expenseAmount: ''
    });
   
    const {_id, expenseText, expenseAmount} = expense;


const onChangeExpense = (e) =>{
setExpense({...expense,[e.target.name] :e.target.value})
}



const onSubmitExpense = (e) => {
    e.preventDefault();
     addExpense({
         expenseText,
         expenseAmount:expenseAmount*1
     })
     setExpense({
         expenseText: '',
         expenseAmount: ''
     })
    
};



    
    return (
        <div className = "form-wrapper">
            <form onSubmit = {onSubmitExpense}>
                <div className = "input-group expense">
                    <input type = "text" placeholder ="Add Expense..." autoComplete = "off" onChange = {onChangeExpense} name = "expenseText" value = {expenseText}/>
                    <input type = "number" placeholder ="Amount" autoComplete = "off" onChange = {onChangeExpense} name = "expenseAmount" value = {expenseAmount}/>
                    <input type = "submit" value = "Submit"/>
                </div>
            </form>
            </div>
    )
}

export default AddExpenseForm
