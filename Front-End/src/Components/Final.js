import React from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
function Final(){
return(
    <div id="final">
    <div id="fhead">HAPPY SNAPS MANAGEMENTS</div>
   
    <marquee class="content" behaviour="scroll" direction="up">
    <span>You're our HAPPY customer!!</span>
    <br></br>
    <span>We'll confirm your event booking and price details by sending email within 1 hour.</span>
    <br></br>
    <span>Our HAPPY SNAPS MANAGEMENTS will make your guest happy and satisfied.</span>
    <br></br>
    <span>Thanks for booking in Our happy snaps managements.</span>
    
    </marquee>
    <Link to="/"><button id="homee">Home</button></Link>
    </div>
    
)
}

export default Final