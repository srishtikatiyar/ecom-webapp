import React from 'react'
import { Link } from 'react-router-dom';
import './About.css';

localStorage.setItem("username", "");
function About() {
    return (
        <div>
            <div className='navbar'>
                {/* <div className='body'> */}
                    <ul className='list'>
                        <li style={{ color: "Violet", textDecoration: "none", fontSize: "2.8rem" }}>Ecommerce App</li>
                        {localStorage.getItem("username") == "" ? <><li><Link className="link" to="/signin" style={{ color: "yellowgreen" }}>SignIn</Link></li>
                            <li><Link className="link" to="/signup" style={{ color: "yellowgreen" }}>SignUp</Link></li></> : ` ${localStorage.getItem("username")}`
                        }
                    </ul>
                {/* </div> */}

            </div>
            <div className='body'>
                <Link to="/allproducts" style={{fontSize:"2rem"}}>Buy Products</Link><br/><br/><br/>
                AN EXCITING PLACE FOR WHOLE FAMILY TO SHOP.
                THIS WEBSITE IS AN ECOMMERCE WEBSITE DESIGNED BY <b>SRISHTI KATIYAR</b>.
                THIS IS A ONE STOP SHOP WHERE WE ASSURE TO FULFILL ALL YOUR NEEDS.
            </div>
        </div>
    )
}

export default About