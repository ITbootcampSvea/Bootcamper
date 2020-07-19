import React from 'react';
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import logo from '../../img/logo.png'
export default function NavBar() {


  return (

    <Navbar bg="dark" expand="lg" >
      <Navbar.Brand href="#home"><img className='logoImg' src={logo} alt='logo' /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="navTextwrapper">
          <NavLink className='nav-link navText ' to='/home'>Home</NavLink>
          <NavLink className='nav-link navText ' to='/students' >Students</NavLink>
          <NavLink className='nav-link navText ' to='/assigments' >Assignments</NavLink>
          <NavLink className='nav-link navText ' to='/workbook'>Workbook</NavLink>
          <NavLink className='nav-link navText ' to='/profile'>Profile</NavLink>
          <NavLink className='nav-link navText ' to='/about'>About Us</NavLink>
          <NavDropdown className='nav-link navText ' title="Generation" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">2020-08</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">2020-03</NavDropdown.Item>
          </NavDropdown>
          <Button variant='outline-light' size='lg' className='navBtn'>Logout</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
