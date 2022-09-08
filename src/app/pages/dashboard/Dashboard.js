import React,{ useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import{Data} from '../../store/actions/dashboard.action'
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
 import Loader from '../loader/loader';
 import {logout}from '../../utils/token';
 import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const Dashboard = () => {
const dispatch = useDispatch()
 const { getDashboardData={} } = useSelector((state) => state.dashboardReducer)
 const [loader, setLoader] = useState(true)
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  
  useEffect(() => {

    if(!localStorage.getItem('token')){

      alert("please login")
      window.location.href="/";
    }
    
    dispatch(Data())
  }, [])

   console.log(getDashboardData)
    
  
    setTimeout(() => {
     setLoader(false)
   }, 2000)
    console.log()

    const handleLogout = () => {
     logout()
   }

   
  
return (
  <>

 
        <h1 style={{textAlign:'center'}} >USERLIST</h1>
        <div style={{position:'relative',bottom:'20px',right:'-1520px'}}>

      <Button variant="primary" onClick={handleShow}>
        +
      </Button>&nbsp;&nbsp;&nbsp;&nbsp;

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>create new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>email</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter email"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>first_name</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter first_name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>last_name</Form.Label>
              <Form.Control
                type="email"
                placeholder="enter last_name"
                autoFocus
              />
            </Form.Group>
            
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            submit
          </Button>
        </Modal.Footer>
      </Modal>
  
          
        <button type="button" class="btn btn-outline-primary " onClick={handleLogout}>Logout</button>
         </div>
        <Table striped bordered hover >
         <tbody>
         <tr style={{backgroundColor:"#0c1232"}}>
        
           <td style={{color:'white'}}><b>Id</b></td>
           <td style={{color:'white'}}><b>Email</b></td>
           <td style={{color:'white'}}><b>image</b></td>
           <td style={{color:'white'}}><b>First_Name</b></td>
           <td style={{color:'white'}}><b>Last_Name</b></td>
           <td style={{color:'white'}}><b>View User</b></td>
           <td style={{color:'white'}}><b>Edit</b></td>
           <td style={{color:'white'}}><b>Delete</b></td>
         </tr>
      {getDashboardData?.data?.data?.map((item,index) => ( 
      
      
     <tr>
       <td scope="row">{index}</td>
       <td>{item.email}</td>
       <td><img src={item.avatar} class="rounded-circle"/></td>
       <td>{item.first_name}</td>
       <td>{item.last_name}</td>
       <td><Link to={`/detail/${item?.id}`}><button type="button" class="btn btn-success" >Detail</button></Link></td>
      <td><Link to={`/edit/${item?.id}`}><button type="button" class="btn btn-primary" >Edit</button></Link></td>
      <td><Link to='/detail'><button type="button" class="btn btn-danger" >Delete</button></Link></td>
     </tr>
    
      ))} 
     <Loader isActive={loader} /> 
   </tbody>
 </Table>

</>
 
 
  )
}

export default Dashboard