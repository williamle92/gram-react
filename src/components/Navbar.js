import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';

export default class Navbar extends Component {
    render() {
        return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/" />
      <img src="https://img.icons8.com/plasticine/2x/camera.png" alt="camera" width="30" height="24" className="d-inline-block align-text-top"/>
      <h4 className='text-white '>Kekambras</h4>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Posts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/register">Register</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Logout</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link disabled" to="/" tabindex="-1" aria-disabled="true">Disabled</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        )
    }
}
