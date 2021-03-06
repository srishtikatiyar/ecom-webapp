import React from 'react';
import './myCart.css';
import {Link} from 'react-router-dom'
import ItemInCart from './infocart.js';
import { useSelector} from 'react-redux';

function Mycart() {
    const state= useSelector(state => state);
        return(
            <div className='backdrop'>
            <div className="cart">
                <Link to="/allproducts" style={{marginLeft:"0",fontSize:"1.5rem" ,backgroundColor:"black",color:"white",textDecoration:"none"}}><center>Back To Main Page</center></Link>
                <div className="mainCart">
                <div className="itemsInCart" >
               <ItemInCart />
                
                </div>
                </div>
                <div className="totalprice">
                   <center> TOTAL PRICE : {state[0]}</center>
                </div>
            </div>
            </div>
        )
    }

export default Mycart;