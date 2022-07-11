import React,{useEffect} from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import './signin.css';

function Signin() {
//   const Submit=()=>{
//     const formdata=new FormData(document.getElementById('formSignIn'));
//     console.log(formdata);
//     localStorage.setItem("username",`${document.getElementById('formSignIn').Username.value}`);
//     const xhr=new XMLHttpRequest();
//     xhr.open('POST','http://127.0.0.1:7000/sigin');
//     xhr.onload=function(event){
//         console.log(xhr.response);
//     }
//     xhr.send(formdata);
// }
const func=(e)=>{
localStorage.setItem("username",e.target.value);
}
  return (
    <>   <div className="form shapedividers_com-1909">
    <form id="formSignIn" method="post" action="http://127.0.0.1:7000/signin">
        
        <div className="username">
            <label >Username:</label>
            <input type="text" name="Username" placeholder="Username" onChange={func}></input>
    </div>
    <div className="password">
        <label >Password:</label>
        <input type="password" name="Password" placeholder="Password"></input>
    </div>
        <button className="button" >Submit</button>
    </form>
</div>
<div className="design"></div>
<div className="second-design"></div></>
  )
}

export default Signin;