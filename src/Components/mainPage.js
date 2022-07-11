import React, { useState, useEffect } from 'react';
import NavBar from './navbar';
import ProductCard from './productCard';
import './mainPage.css';
import axios from 'axios';

import AutoCompleteText from './AutoCompleteText';
import NewComp from './NewComp';



class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query:"",
            obj: []
        }
    }

    render() {
        return (
            <div className="main">
                <NavBar  />
                <div className='content'>
                    <div className='left'>
                        <h3>FILTER</h3>
                        <AutoCompleteText />
                    </div>
                    <div className='right'>
                        <NewComp data="allproducts"/>
                   
                    </div>
                </div>
            </div>
        );
    }
}

export default MainPage;




