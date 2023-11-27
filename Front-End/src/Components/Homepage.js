import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () =>{
    return (
        <div>
        <div className="page"/>
        <h1 className="pname1">INDOOR EVENTS</h1>
        <h1 className="pname3">OUTDOOR EVENTS</h1>
       
        <div class="dropdown1">
  <img className="img1" src="https://m.media-amazon.com/images/I/71VJr9GHSkL._AC_UF1000,1000_QL80_.jpg" alt="Cinque Terre" width="400" height="250" top="90"/>
  <div class="dropdown-content1">
  
  <div class="desc1">
  <h3>Indoor Event:</h3>
  <br></br>Indoor Event means an event that is held exclusively indoors; does not include the use of decks, or other open areas.<br>
  </br> It requires that all doors and windows to be kept closed to prevent any excessive disturbance to Neighbouring Properties.Indoor activities are carried out inside a space.</div>
  </div>
</div>

<div class="dropdown2">
<img className="img2" src="https://blog.weddinghashers.com/wp-content/uploads/2022/04/shutterstock_1317423125-700x467.jpg" alt="Cinque Terre" width="400" height="250" top="90"/>
<div class="dropdown-content2">

<div class="desc2">
<h3>Outdoor Event:</h3>
<br></br>Outdoor event means an event held at a location gen- erally without a permanent structure and may include organized sports games, auctions, picnics, concerts, art shows, or short−term event.<br>
</br> Sunlight and fresh air always ensure a relaxed atmosphere. Your guests will enjoy moments much more in the open air.</div>
</div>
</div>
        <div className="Bg">
        <Link to={"/userlogin"}>
        <img id="login" className="login" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh_MB_1PF9b6kSpaIDL43jVGXsnQk0fZDpVA&usqp=CAU"></img>
        </Link>
        <h1 className="logo1">HAPPY SNAPS MANAGEMENTS</h1>
        <p className="logo2">Brings you Happiness!!!</p>
        <Link to="/first"><h1 id="home" className="home">About us</h1></Link>
        <Link to="/login"><h1 id="about" className="about">Admin Login</h1></Link>
        <h1 className="textzz">
        <Link to={"/userlogin"}>
        User Login
        </Link>
        </h1>
        </div>
        </div>
    )
}
export default Homepage;