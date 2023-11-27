import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import EventService from '../Service/EventService';

const Update=()=> {
  const nav=useNavigate();
  const[name,setname]=useState('');
  const[age,setAge]=useState('');
  const[phone,setphone]=useState('');
  const[event,setevent]=useState('');
  const[noOfMembers,setnoOfMembers]=useState('');
  const[date,setdate]=useState('');
  const[venue,setvenue]=useState('');
  const {id} = useParams();
    const Update1 = (e) => 
    {
      e.preventDefault();

      if(age.length==0||name.length==0||phone.length==0||venue.length==0||event.length==0||noOfMembers==0){
        alert("Enter all the details")
      }
       else if(phone.length<10){
         alert("Enter Correct Phone Number!")
       }
      
      else if(age<18||age>65){
        alert("Enter Correct Age!")
      }
      else{
        if (window.confirm("Details Updated!") == true) {
          e.preventDefault();
          const employee = {id, name, age,phone,event,noOfMembers,date,venue}
          if(id){
            EventService.updateEmployee(id, employee).then((response) => {
              nav('/home')
              
            }).catch(error => {
              console.log(error)
              
              })
  
          }
        }
      }
    } 
  
      useEffect(() => {
          EventService.getEmployeeById(id).then((response) =>{
              setname(response.data.name)
              setAge(response.data.age)
              setphone(response.data.phone)
              setnoOfMembers(response.data.noOfMembers)
              setevent(response.data.event)
              setdate(response.data.date)
              setvenue(response.data.venue)

          }).catch(error => {
              console.log(error)
          })
      }, [])
      const title = () => {

        if(id){
            return <h1>Update Event</h1>
        }
    }
  return (
    <div id="body">
    <div className="signup-form1">
    <div className="container">
      <div className="header">
        {title()}
        <p>Enter Event Details</p>
      </div>
      <form>
        <div className="input">
          <input type="text" placeholder="Customer Name" value={name} onChange={(e)=>setname(e.target.value)}  />
        </div>
        <div className="input">
          <input type="text" placeholder="Customer Phone" value={phone}  pattern="[0-9]+"
                   maxLength="10"  onChange={(e)=>setphone(e.target.value)} />
        </div>
        <div className="input">
          <input type="number" placeholder="Customer Age" value={age}  onChange={(e)=>setAge(e.target.value)}/>
        </div>
        <div className="input">
          <select name="event" placeholder="Type of Event" value={event} onChange={(e)=>setevent(e.target.value)}>
          <option value="" disabled selected hidden>Select your option</option>
          <option value="Birthday Party">Birthday Party</option>
          <option value="Marriage Function">Marriage Function</option>
          <option value="Office Meetings">Office Meetings</option>
          <option value="Musical Event">Musical Event</option>
          <option value="Graduation">Graduation</option>
        </select>
        </div>
        <div className="input">
          <input type="text" placeholder="Total no of members" value={noOfMembers} pattern="[0-9]+"   onChange={(e)=>setnoOfMembers(e.target.value)} />
        </div>
        <div className="input">
          <input type="date" placeholder="date of event" value={date} onChange={(e)=>setdate(e.target.value)}/>
        </div>
        <div className="input">
          <input type="text" placeholder="Venue" value={venue} onChange={(e)=>setvenue(e.target.value)}/>
        </div>
        <input onClick={Update1} className="e-signup-btn" type="submit" value="Submit" />
      <Link to="/">  <button className="e-cancel-btn" >Cancel </button></Link>
        </form>
    </div>
  </div>
    </div>
  )
}

export default Update