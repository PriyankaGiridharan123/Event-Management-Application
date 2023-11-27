import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import EventService from '../Service/EventService';
import { Pagination } from '@mui/lab';
import axios from 'axios';
const Home=()=> {
  const nav=useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 3;
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [employees, setEmployees] = useState([])
  useEffect(() => {
      getAllEmployees();
  }, [currentPage,sortBy,sortOrder])

  const getAllEmployees = () => {
      axios.get(`http://localhost:8080/event/${currentPage}/${itemsPerPage}/${sortBy}/${sortOrder}`).then((response) => {
      const{content,totalPages}=response.data;   
      setEmployees(response.data)
      setTotalPages(totalPages);
          console.log(response.data);
      }).catch(error =>{
          console.log(error);
      })
  }
  const handleSort = (column) => {
    if (column === sortBy) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const deleteEmployee = (employeeId) => {
    if(window.confirm("Sure to Delete?")){
     EventService.deleteEmployee(employeeId).then((response) =>{
      getAllEmployees();

     }).catch(error =>{
         console.log(error);
     })
    }
  }
  const deleteAllEmployee = () => {
    if(window.confirm("Sure to Delete All Employees?")){
     EventService.deleteAllEmployee().then((response) =>{
      getAllEmployees();

     }).catch(error =>{
         console.log(error);
     })
    }
  }
  const LogoutHandler=()=>{
    if(window.confirm("Sure to Logout?")){
      nav("/")
    }
  }
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div id="container">
            <div id="h" ><h1>HAPPY SNAPS MANAGEMENTS</h1></div>
    
    
    <table id="table">
              <thead>
                <tr>
                  <th onClick={() => handleSort('id')}>Id {sortBy === 'id' && (sortOrder === 'asc' ? '▲' : '▼') }</th>
                  <th  onClick={() => handleSort('name')}>Name {sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼') }</th>
                  <th  onClick={() => handleSort('age')}>Age {sortBy === 'age' && (sortOrder === 'asc' ? '▲' : '▼') }</th>
                  <th>Phone</th>
                  <th>Event</th>
                  <th>Total no of members</th>
                  <th  onClick={() => handleSort('date')}>Date {sortBy === 'date' && (sortOrder === 'asc' ? '▲' : '▼') }</th>
                  <th>Venue</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
              {
                employees.content&&employees.content.map(
                    (employee) => (
      <tr key={employee.id}>
             <th id="id"> {employee.id}</th>
             <th id="name"> {employee.name}</th>
             <th id="age"> {employee.age}</th>
             <th id="phone"> {employee.phone}</th>
             <th id="event"> {employee.event}</th>
             <th id="noOfMembers"> {employee.noOfMembers}</th>
             <th id="date">{employee.date}</th>
             <th id="venue"> {employee.venue}</th>
             <th id="action"><Link  to={`/update/${employee.id}`}>
             <button id="actions">
             <img src="data:image/png;base64,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" width="80%" height="100%"></img></button></Link> 
             <button id="action-del"  onClick = {() => deleteEmployee(employee.id)}>
       <img src="https://www.freeiconspng.com/thumbs/cross-png/red-cross-png-33.png" width="90%" height="110%"></img></button></th>
            
      </tr>
    ))}
              </tbody>
            </table>
            <Pagination className='page'
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
    <button id="logout" onClick={LogoutHandler}>Logout</button>
    <button id="delbtn" onClick={deleteAllEmployee} >Delete Event</button>
    </div>
  )
}

export default Home