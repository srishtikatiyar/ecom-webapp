import React,{useEffect} from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import './infocart.css';

import { useSelector} from 'react-redux';



function ItemInCart(){

const state= useSelector(state => state);
   console.log("state is", state);
        return(
            <div className='display'>
           {
                 state.slice(1).map(function(item,index){
                    return(
                        <div className="mainbox" key={index}>
                            
                    <img className="itemImg" src={item.src} alt="" />
                   
                    <div className="infoCart">
                    <p>Product Name : {item.productName}</p> 
                    
                    <p>Quantity : {item.Quantity}</p>
                    <p>Price:{item.cost}</p>
                  </div>
                  </div>
                    );
                    
                })
            }
               
            </div>
          
        );
    }

export default ItemInCart;

    
                
