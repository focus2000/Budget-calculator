import React from 'react';
import Home from './components/Home';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';

import {BudgetContextProvider} from './context/BudgetContext';
import {AuthContextProvider} from './context/authContext';
import PrivateRoute from './components/routes/PrivateRoute';
import setToken from '../src/extra/setToken'

if(localStorage.token) {
  setToken(localStorage.token)
}


function App() {
  return (
    <AuthContextProvider>
    <BudgetContextProvider>
      <Router>
    <div>
      <Navbar/>
      <Switch>
        <PrivateRoute exact path = '/' component = {Home}/>
        <Route path = '/register' component = {Register}/>
        <Route path = '/login' component = {Login}/>
      </Switch>
    
    </div>
    </Router>
    </BudgetContextProvider>
    </AuthContextProvider>
  );
}

export default App;
