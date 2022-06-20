import React from 'react';
import NavBar from './navbar';
import ProductCard from './productCard';
import './mainPage.css';

import logo1 from '../pictures/istockphoto-1227414534-170667a.jpg';
import logo2 from '../pictures/istockphoto-1326570912-170667a.jpg';
import logo3 from '../pictures/photo-1542291026-7eec264c27ff.jpg';
import logo4 from '../pictures/photo-1548036328-c9fa89d128fa.jpg';
import logo5 from '../pictures/photo-1524805444758-089113d48a6d.jpg';
import logo6 from '../pictures/photo-1581101767113-1677fc2beaa8.jpg';
import logo7 from '../pictures/photo-1598560917807-1bae44bd2be8.jpg';
import logo8 from '../pictures/photo-1606689288233-96192d451cc3.jpg';



const  Obj=[
                {
                    src:`${logo1}`,
                    name:"Huda beauty products",
                    colour:"multiple",
                    brand:"Huda Beauty",
                    rating:"4",
                    price:297 
                },
                {
                    src:`${logo2}`,
                    name:" lavendar fragrance Perfume",
                    colour:"transparent",
                    brand:"Chanel",
                    rating:"4.8",
                    price:500 
                },
                {
                    src:`${logo3}`,
                    name:"shoes(sports)",
                    colour:"red",
                    brand:"nike",
                    rating:"3.8",
                    price:680 
                },
                {
                    src:`${logo4}`,
                    name:"Ladies handbag",
                    colour:"tan",
                    brand:"gucci",
                    rating:"4.4",
                    price:810 
                },
                {
                    src:`${logo5}`,
                    name:"Wristwatch",
                    colour:"brownish maroon",
                    brand:"rolex",
                    rating:"4.1",
                    price:310
                },
                {
                    src:`${logo6}`,
                    name:"High Heels",
                    colour:"shimmery pink and silver",
                    brand:"jimmy choo",
                    rating:"4.9",
                    price:790 
                },
                {
                    src:`${logo7}`,
                    name:"Ladies Diamond ring",
                    colour:"golden",
                    brand:"malabar",
                    rating:"3.9",
                    price:4100 
                },
                {
                    src:`${logo8}`,
                    name:"ladies jacket",
                    colour:"black ",
                    brand:"zara",
                    rating:"4.8",
                    price:2290 
                }
            ]
        
const MainPage=()=>{
    return(
       <div className="main">
           <NavBar />
           <>
           {
           Obj.map(function(item,index){
               return(
                <ProductCard key={index} name={item.name} colour={item.colour} brand={item.brand} rating={item.rating} price={item.price} src={item.src}/>
           );
               
           })}
           
           </>  
         
       </div>
    );
}
export default MainPage;




