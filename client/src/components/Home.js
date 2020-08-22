import React, {useContext, useEffect} from 'react';
import {AuthContext} from '../context/authContext';
import Header from './Header';
import Balance from './Balance';
import AddTransaction from './AddTransaction';
import AddExpense from './AddExpenseForm';
import IncomeList from './IncomeList';
import ExpenseList from './ExpenseList';
import AddExpenseForm from './AddExpenseForm';

import home from '../css/home.css'

import {AuthContextProvider} from '../context/authContext';

const Home = () => {
  const {getUser} = useContext(AuthContext)
  useEffect(() => {
    getUser()
    //eslint-disable-next-line

  }, [])
    return (
        
        <div className="container">
      <div className = "app-wrapper">
         <Header/>
         <Balance/>
         <AddTransaction/>
         <AddExpenseForm/>
         <IncomeList/>
         <ExpenseList/>
        
      </div>
    
    </div>
   
    )
}

export default Home
