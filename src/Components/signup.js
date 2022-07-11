import React, { useRef } from 'react'
import './signup.css';

function Signup() {
//     localStorage.setItem("username","");
//     const Submit=()=>{
//         console.log("submit called");
//         const formdata=new FormData(myref.current);
//         console.log(formdata);
//         localStorage.setItem("username",`${document.getElementById('formSignUp').Username.value}`);
//         const xhr=new XMLHttpRequest();
//         xhr.open('POST','http://127.0.0.1:7000/signup');
//         xhr.onload=function(event){
//             console.log(xhr.response);
//         }
//         xhr.send(formdata);
//     }
//    const myref=useRef();
const func=(e)=>{
    localStorage.setItem("username",e.target.value);
    }

  return (
    <><div className="form shapedividers_com-1909">
    <form id="formSignUp"method="post" action="http://127.0.0.1:7000/signup">
        <div className="fullname">
        <label>Fullname:</label>
        <input type="text" name="Fullname" placeholder="Fullname"></input>
    </div>
    <div className="username">
        <label>Username:</label>
        <input id="username" type="text" name="Username" placeholder="Username" onChange={func}></input>
    </div>
    <div className="email">
        <label>Email:</label>
        <input type="email" name="Email" placeholder="Email"></input>
    </div>
    <div className="password">
        <label>Password:</label>
        <input type="password" name="Password" placeholder="Password"></input>
    </div>
        <button className="button" >Submit</button>
    </form>
</div>
<div className="design"></div>
<div className="second-design"></div></>
  )
}

export default Signup;