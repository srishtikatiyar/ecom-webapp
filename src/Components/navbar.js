import React from 'react';
import {Component} from 'react';
import  './navbar.css';
import store from '../redux/redux.js';
import {Link} from 'react-router-dom';
import { useSelector} from 'react-redux';

function NavBar(){
    const state= useSelector(state => state);
        return(
            <div className="navbar">
                <ul className="list">
                    <li style={{color:"Violet",textDecoration:"none",fontSize:"2.8rem"}}>Ecommerce App</li>
            <li><Link to="/"  style={{color:"yellowgreen"}}>About</Link></li>
            {/* <li>Products</li> */}
            <li><Link  to="/mycart" style={{color:"yellowgreen"}}>My Cart - {state.slice(1).length}</Link></li>
            <>
            
             </>
               </ul>            
            </div>
        );
    }

export default NavBar;