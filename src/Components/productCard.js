import React from 'react';
import {Component} from 'react';
import './productCard.css';
import imgcart from '../pictures/external-cart-essentials-icongeek26-linear-colour-icongeek26.png';
import { useDispatch } from 'react-redux';
const functions=require('../redux/actions.js');



export function ProductCard({src,name,rating,price,brand}){
   
        const dispatch=useDispatch();
    
        return(
            <div style={{backgroundColor:'darksalmon'}}>
            <div className="container">
            <div className="img">
           <img src={src} alt={src}></img>
       </div>
       <div className="info">
       <div><u>Product Name:</u> {name}</div>
       <div><u>specification-</u>
           <div className="innerBlock"><p> <u>Brand:</u>  {brand}</p></div></div> 
       <div><u>Rating (Stars):</u>  {rating}</div>
       <div><u>Price:</u>  {price} rupees</div>
       </div>
       <img src={imgcart} className='cartImg' onClick={()=>{
       dispatch(functions.atc(src,price,name,price))}}/>
     
   </div>
   </div>
         );  
           
        
            
}

export default ProductCard;