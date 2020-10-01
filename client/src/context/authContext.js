import React, {createContext, useReducer} from 'react';
import authReducer from './authReducer';
import axios from 'axios'
import setToken from '../extra/setToken'




const initialState = {
    user:null,
    userAuth:null,
    errors:null
}



export const AuthContext = createContext(initialState)

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, initialState)

    

    //get user

    const getUser = async() =>{
        if(localStorage.token) {
            setToken(localStorage.token)
          }

          try {
           const res = await axios.get('/auth')
           dispatch ({
               type: "SET_USER",
               payload:res.data
           })
          } catch (err) {
            dispatch({
                type: 'AUTH_ERROR',
                payload:err
            })
          }
    }

    //Register user

    const registerUser = async userData => {
        const config = {
            header: {
                'content-type':'application/json'
            }
        }
        try {
            const res = await axios.post('/register', userData, config)
            dispatch({
                type: 'REGISTER_USER',
                payload:res.data
            })
            getUser()

        } catch (err) {
            dispatch({
                type:'FAIL_REGISTER',
                payload:err.response.data
            })

        }
    }


//Login user


const loginUser = async userData => {
    const config = {
        header: {
            'content-type':'application/json'
        }
    }
    try {
        const res = await axios.post('/auth', userData, config)
        dispatch({
            type: 'LOGIN_USER',
            payload:res.data
        })
        getUser()

    } catch (err) {
        dispatch({
            type:'FAIL_LOGIN',
            payload:err.response.data
        })

    }
}

const logout = () => {
    dispatch({
        type:'LOG_OUT'
    })
}

const setError = err => {
    dispatch({
        type: 'SET_ERROR',
        payload:err
    })
}

const clearError = () => {
    dispatch({
        type: 'CLEAR_ERROR',
        
    })
}

    return (
        <AuthContext.Provider value ={{
            user:state.user,
            userAuth:state.userAuth,
            errors:state.errors,
            getUser:getUser,
            registerUser,
            loginUser,
            logout,
            setError,
            clearError

        }}> 
        {children}

        </AuthContext.Provider>
    )
}
