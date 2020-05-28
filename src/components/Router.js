import auth from './PrivateRoute/auth'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/ComponentStyle/Router.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SaleeRoute from './PrivateRoute/SaleeRoute'
import LoginRoute from './PrivateRoute/LoginRoute'

import Retailer from './Retailer'
import Login from "../components/Login-Register/Login";
import SignUp from "../components/Login-Register/Register";
import Home from './Home';

class Router1 extends React.Component {
  render() {
  
    let clasName= ''
    localStorage.getItem('auth-token') ? clasName = 'Logged-in': clasName = 'nav-link';
    
    return (<Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="nav-link" to={"/"}>Home</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className='nav-link' to={"/sign-in"}>Retailer</Link>
                </li>
                <li className="nav-item">
                  <Link className={clasName} to={"/sign-up"}>Sign up</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div>
            <Switch>
              <LoginRoute path="/sign-in" component={Login}/>
              <Route path="/sign-up" component={SignUp} />
              <SaleeRoute exact path="/retailer" component={Retailer} />
              <Route path="/" component={Home}/>
            </Switch>
          </div>
        </div>
      </div></Router>
    );
  }
}

export default Router1;

{/* 
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
  
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar> */}