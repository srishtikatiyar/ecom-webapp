import React from 'react';
import {Component} from 'react';
import  './navbar.css';
import store from '../redux/redux.js';
import {Link} from 'react-router-dom';
import { useSelector} from 'react-redux';
import AutoCompleteText from './AutoCompleteText';
function NavBar(){
    const state= useSelector(state => state);
        return(
            <div className="navbar">
                <ul className="list">
                    <li style={{color:"Violet",textDecoration:"none",fontSize:"2.8rem"}}>Ecommerce App</li>
            <li>About</li>
            <li>Products</li>
            {/* <li><AutoCompleteText  style={{zindex:"4"}} /></li> */}
            <li><Link className="link" to="/mycart" style={{color:"yellowgreen"}}>My Cart - {state.slice(1).length}</Link></li>
            {/* <li><Link className="link" to="/signin" style={{color:"yellowgreen"}}>SignIn</Link></li>
            <li><Link className="link" to="/signup" style={{color:"yellowgreen"}}>SignUp</Link></li> */}
               </ul>            
            </div>
        );
    }

export default NavBar;