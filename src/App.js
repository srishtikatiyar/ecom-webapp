import React from 'react';
import { BrowserRouter,Routes,Route,Switch } from 'react-router-dom';
import './App.css';
import MainPage from './Components/mainPage.js';
import Mycart from './Components/MyCart.js';
import Signin from './Components/signin.js';
import Signup from './Components/signup.js';
import NewComp from './Components/NewComp';
import NavBar from './Components/navbar';
import About from './Components/About';

function App() {
    
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<About/>}>
            </Route>
        <Route path="/mycart" element={<Mycart/>}>
            </Route>
            <Route path="/allproducts" element={<MainPage/>}>
            </Route>
            <Route path="allproducts/ClothingMen" element={<><NavBar/><NewComp data="ClothingMen"/></>}>
            </Route>
            <Route path="allproducts/ClothingWomen" element={<><NavBar/><NewComp data="ClothingWomen"/></>}>
            </Route>
            <Route path="allproducts/Stationery" element={<><NavBar/><NewComp data="Stationery"/></>}>
            </Route>
            <Route path="allproducts/Shoes" element={<><NavBar/><NewComp data="Shoes"/></>}>
            </Route>
            <Route path="allproducts/Jwellery" element={<><NavBar/><NewComp data="Jwellery"/></>}>
            </Route>
            <Route path="/signin" element={<Signin/>}>
            </Route>
            <Route path="/signup" element={<Signup/>}>
            </Route>
        </Routes>
        </BrowserRouter>
        
    )
}

export default App;
