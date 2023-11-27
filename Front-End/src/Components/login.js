import React, { useEffect, useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import "./login.css"
function Login() {
  const nav=useNavigate();
  const[username,setUsername]=useState('');
  const[password,setpassword]=useState('');
  const[user,setUser]=useState('');
  const fetchData = () => {
    return fetch("http://localhost:8080/login/get")
    .then((response) => response.json())
    .then((data) => setUser(data));
  }
  useEffect(() => {
    fetchData();
  },[])
  const authenticate=(e)=>{
    e.preventDefault();
  const usercheck = user.find(user => (user.username === username && user.password === password));
 if(username.length===0){
  alert("Enter Username")
 }
 else if(password.length===0){
  alert("Enter password")
 }
  else if(!usercheck){
    alert("Wrong Username or Password!")
  }
  else {
    nav("/home")
  }
}
  return (
    <div id="body">
    <div className="signup-form">
    <div className="container">
      <div className="header">
      <h1>HAPPY SNAPS MANAGEMENTS</h1>
        <p>Admin Login</p>
      </div>
   
      <form>
        <div className="input">
          <i className="fa-solid fa-user"></i>
          <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
        </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="Password" />
        </div>
        <input onClick={authenticate} className="signup-btn" type="submit" value="LOGIN" />
      </form>
    
      
    </div>
  </div>
  </div>
  )
}

export default Login;