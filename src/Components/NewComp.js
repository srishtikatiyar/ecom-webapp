import React, { useState, useEffect } from 'react';
import NavBar from './navbar';
import ProductCard from './productCard';
import './mainPage.css';
import axios from 'axios';

// import AutoCompleteText from './AutoCompleteText';

// localStorage.setItem('product',"allproducts");

class NewComp extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            query:"",
            obj: []
        }
        // this.changeQuery.bind(this);
    }

    componentDidMount() {
    // console.log("newcomp state ",this.state.query);
        axios.get(`http://127.0.0.1:7000/${this.props.data}`).then(response => {
            console.log("response is ",response.data.data);
            console.log(response.data.data);
            this.setState({
                obj: response.data.data
            })
     
    })
    

    }

    render() {
        return (
           <>
                        {
                            this.state.obj.map(function (item, index) {
                                return (
                                    <ProductCard key={index} name={item.ProductName} brand={item.Brand} rating={item.Review} price={item.Price} src={item.Img}/>
                                );

                            })}

                    </>
        );
    
}
    }
export default NewComp;




