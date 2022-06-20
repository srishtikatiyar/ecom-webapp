import React,{useEffect} from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
import './signin.css';

function signin() {
  return (
    <>   <div class="form shapedividers_com-1909">
    <form method="post" action="http://127.0.0.1:5000/signin">
        
        <div class="username">
            <label >Username:</label>
            <input type="text" name="Username" placeholder="Username"></input>
    </div>
    <div class="password">
        <label >Password:</label>
        <input type="password" name="Password" placeholder="Password"></input>
    </div>
        <button class="button">Submit</button>
    </form>
</div>
<div class="design"></div>
<div class="second-design"></div></>
  )
}

export default signin;