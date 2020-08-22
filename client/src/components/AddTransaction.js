import React, {useState, useContext, useEffect} from 'react';
import {BudgetContext} from '../context/BudgetContext';
import addTransaction from '../css/addTransaction.css'

const AddTransaction = () => {
 const {addIncome} = useContext(BudgetContext)
 const [income, setIncome] = useState({
        incomeText: '',
        incomeAmount:''
    });
   
    const {incomeText, incomeAmount} = income;
 const onChangeIncome = (e) =>{
setIncome({...income,[e.target.name] :e.target.value})
}



const onSubmitIncome = (e) => {
    e.preventDefault();
     addIncome({
         incomeText,
         incomeAmount:incomeAmount*1
     })
     setIncome({
         incomeText: '',
         incomeAmount: ''
     })
    
};



    
    return (
        <div className = "form-wrapper">
            <form onSubmit = {onSubmitIncome}>
                <div className = "input-group income">
                    <input type = "text" placeholder ="Add Income..." autoComplete = "off" onChange = {onChangeIncome} name = "incomeText" value = {incomeText}/>
                    <input type = "number" placeholder ="Amount" autoComplete = "off" onChange = {onChangeIncome} name = "incomeAmount" value = {incomeAmount}/>
                    <input type = "submit" value = "Submit"/>
                </div>
            </form>
            </div>
    )
}

export default AddTransaction
