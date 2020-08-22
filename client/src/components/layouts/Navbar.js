import React, {useContext, Fragment} from 'react';
import {AuthContext} from '../../context/authContext'
import navbar from '../../css/navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const {logout, clearError, userAuth, user} = useContext(AuthContext)

    const onLogout = () => {
        logout()
        clearError()
    }

    const userLinks = (
        <Fragment>
          
          
                <li>
                    <a href ="#" onClick = {onLogout}>
                        <span className = "sm-hide" >Logout</span>
                       
                    </a>
                </li>
        </Fragment>
    )

    const authLinks = (
        <Fragment>
            <li>
                <Link to ='/register'>Sign in</Link>
                <Link to = '/login'>Login</Link>
            </li>
        </Fragment>
    )
    return (
        <div className = "logo">
            <ul className = "links">
               {userAuth ? userLinks : authLinks}
            </ul>
        </div>
    )
}

export default Navbar
