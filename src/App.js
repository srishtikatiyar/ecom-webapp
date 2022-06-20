import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import MainPage from './Components/mainPage.js';
import Mycart from './Components/MyCart.js';
import Signin from './Components/signin.js';
import Signup from './Components/signup.js';

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainPage/>}>
           
            </Route>
        
        <Route path="/mycart" element={<Mycart/>}>
            </Route>
            <Route path="/signup" element={<Signup/>}>
            </Route>
            <Route path="/signin" element={<Signin/>}>
            </Route>
        </Routes>
        </BrowserRouter>
        
    )
}

export default App;
