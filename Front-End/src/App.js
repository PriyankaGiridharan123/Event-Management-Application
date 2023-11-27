import './App.css';
import './Components/login.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Components/login.js';
import Signup from './Components/Signup';
import Home from './Components/Home';
import AddOrUpdate from './Components/AddOrUpdate';
import First from './Components/First';
import UserLogin from './Components/Userlogin';
import UserSignup from './Components/Usersignup';
import Final from './Components/Final';
import Homepage from './Components/Homepage';
import Update from './Components/New';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element ={<Homepage />}></Route>
    <Route path="/first" element ={<First />}></Route>
    <Route path="/login" element ={<Login />}></Route>
    <Route path="/register" element ={<Signup />}></Route>
    <Route path="/home" element ={<Home />}></Route>
    <Route path="/add" element ={<AddOrUpdate />}></Route>
    <Route path="/update/:id" element ={<AddOrUpdate />}></Route>
    <Route path="/userlogin" element ={<UserLogin />}></Route>
    <Route path="/usersignup" element ={<UserSignup />}></Route>
    <Route path="/final" element ={<Final />}></Route>
    
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
