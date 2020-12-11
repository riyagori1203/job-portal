import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './Login/Login'
import { useHistory } from "react-router-dom";


export default function CustomNavbar() {
  const history = useHistory();
  
    function handleclick() {
      
      history.push("/login");
    }
    function handleclick1() {
      
      history.push("/register");
    }
    function handleclick2() {
      
      history.push("/about");
    }
  
  return (
    
    <>
      <Navbar
      
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark" 
        
      >
        
        <Navbar.Brand href="#home">Job Hunter</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <NavDropdown title="Job Search" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Jobs By Recruiter
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Jobs By Skill
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Jobs By Location
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Jobs By Industry
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
                Jobs For Women
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                Jobs For Freshers
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">
                Special Ability Jobs
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">
                Work From Home
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.9">More</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Companies" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/4.1">Company 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.2">Company 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.3">Company 3</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.9">More</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Interview" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/4.1">
                Basic Interview
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/4.2">
                Demo Interview
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/4.3">
                Mock Interview
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  onClick={handleclick2}>About Us</Nav.Link>
          </Nav>
          <Nav>
          <Route
          path={ "/login"}/>
            <Button  style={{color:"white",margin:"5px"}} variant="outline-secondary" onClick={handleclick}>
              
              Log in</Button>
          </Nav>
          <Nav>
            <Button style={{color:"white",margin:"5px"}} variant="outline-secondary"
            onClick={handleclick1}>Sign up</Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

