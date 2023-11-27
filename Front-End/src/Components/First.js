import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"

function First() {
  return (
    
    
    <div id="first">
    <div id="fhead">HAPPY SNAPS MANAGEMENTS</div>
    <marquee class="content" behaviour="scroll" direction="up">
    <span>Welcome to HAPPY SNAPS MANAGEMENTS!!</span>
    <br></br>
    <span>You're our HAPPY customer!!</span>
    <br></br>
    <span>Here you can book your event.</span>
    <br></br>
    <span>Our HAPPY SNAPS MANAGEMENTS will make your guest happy and satisfied.</span>
    <br></br>
    <span>Founded in 2003, HAPPY SNAPS MANAGEMENTS has become one of the leading event management companies in India. </span>
    <br></br>
    <span>One company that has been at the forefront of this industry for the past 10 years is HAPPY        
    <br></br> SNAPS MANAGEMENTS.</span>
    
    </marquee>
    <Link to="/usersignup"><button id="homee">Get Started</button> </Link>
    </div>
  )
}

export default First