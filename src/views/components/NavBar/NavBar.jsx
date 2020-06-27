import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap'
import {NavLink } from 'react-router-dom';
import logo from '../../img/logo1.png' 
export default function NavBar() {


    return (
        
        <Navbar bg="dark" expand="lg" >
        <Navbar.Brand href="#home"><img className='logoImg' src={logo} alt='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="">
            <NavLink className='nav-link' to='/home'>Home</NavLink>
            <NavLink className='nav-link' to='/dd' >Students</NavLink>
            <NavLink className='nav-link' to='/dd' >Assignments</NavLink>
            <NavLink className='nav-link' to='/hoddme'>Profile</NavLink>
           <Button variant='outline-light' size='lg'>Logout</Button>

          
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}
