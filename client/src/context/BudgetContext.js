import React, {createContext, useReducer}from 'react';
import budgetReducer from './budgetReducer';
import axios from 'axios'
const initialState = {
    incomeTransactions:[],
    expenseTransactions:[],
    errors:null
}


export const BudgetContext = createContext(initialState);

export const BudgetContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(budgetReducer, initialState);

    const getIncomes = async () => {
        try {
         const res = await axios.get('/incomes')
         dispatch({
             type : 'GET_INCOMES',
             payload:res.data
         })
        } catch (err) {
          dispatch({
              type:'INCOMES_ERROR',
              payload:err.response.msg
          })
        }
    }
     

         const getExpenses = async () => {
             try {
             const res = await axios.get('/expenses')
             dispatch({
                 type: 'GET_EXPENSES',
                 payload:res.data
             })
             } catch (err) {
              dispatch ({
                type: 'EXPENSES_ERROR',
                payload:err.response.msg
              })
             }
         }



    const addIncome = async (incomeTransaction) => {
        const config = {
            'Content-Type':'Application/json'
        }
        try {
            const res = await axios.post('/incomes', incomeTransaction, config)
            dispatch({
                type:'ADD_INCOME',
                payload:res.data
            })

        } catch (err) {
            dispatch ({
                type: 'INCOMES_ERROR',
                payload:err.response.msg
            })

        }
        
    }

    const addExpense = async (expenseTransaction) => {
        const config = {
            'Content-Type' : 'Application/json'
        }
        try {
            const res = await axios.post('/expenses', expenseTransaction, config)
            dispatch({
                type:'ADD_EXPENSE',
                payload:res.data
            })
        } catch (err) {
            dispatch ({
                type: 'EXPENSES_ERROR',
                payload:err.response.msg
            })
        }
        
       
    };


    const deleteIncome = async (id) => {
        try {
            await axios.delete(`/incomes/${id}`)
            dispatch({
                type: 'DELETE_INCOME',
                payload:id,
    
            });
        } catch (err) {
            dispatch ({
                type: 'INCOMES_ERROR',
                payload:err.response.msg
            })

        }
        
    };


    const deleteExpense =async  (id) => {
        try{
            await axios.delete(`/expenses/${id}`)
            dispatch({
                type: 'DELETE_EXPENSE',
                payload:id,
            })

        } catch (err) {
            dispatch ({
                type: 'EXPENSES_ERROR',
                payload:err.response.msg
            })
        }
       
    };

    

    
    

   




    return (
        <BudgetContext.Provider value = {{ 
            incomeTransactions: state.incomeTransactions,
            expenseTransactions:  state.expenseTransactions,
            getIncomes,
            getExpenses,
            addIncome,
            addExpense,
            deleteIncome,
            deleteExpense,
            
        }}>
            {children}
        </BudgetContext.Provider>
    )
}