import React from 'react'
import './signup.css';

function signup() {
  return (
    <><div class="form shapedividers_com-1909">
    <form method="post" action="http://127.0.0.1:5000/signup">
        <div class="fullname">
        <label>Fullname:</label>
        <input type="text" name="Fullname" placeholder="Fullname"></input>
    </div>
    <div class="username">
        <label>Username:</label>
        <input id="username" type="text" name="Username" placeholder="Username"></input>
    </div>
    <div class="email">
        <label>Email:</label>
        <input type="email" name="Email" placeholder="Email"></input>
    </div>
    <div class="password">
        <label>Password:</label>
        <input type="password" name="Password" placeholder="Password"></input>
    </div>
        <button class="button">Submit</button>
    </form>
</div>
<div class="design"></div>
<div class="second-design"></div></>
  )
}

export default signup;