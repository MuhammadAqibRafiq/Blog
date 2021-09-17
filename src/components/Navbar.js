import React from 'react'
import { Navbar, Nav } from "react-bootstrap"
import "./style.css"

const Na = () => {
  return (

    <Navbar collapseOnSelect expand="lg" bg="light"  className='pa'>

      {/* <Navbar.Brand href="/"  style={{marginLeft:"20px" }}>MyBrand</Navbar.Brand> */}
      <Navbar.Brand style={{ marginLeft: "20px" }} id='one' >
        <input className="form-control" placeholder='🔍 Search...' />
      </Navbar.Brand>

      <Nav className="m" id='two' >
       <Nav.Link className='n' href="/">BOOTCAMP2020</Nav.Link>
      </Nav>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav three" >
        <Nav className="justify-content-end"  style={{ width: "100%", marginRight: "20px" }}>
          <Nav.Link  className='d-flex justify-content-center' href="/">HOME</Nav.Link>
          <Nav.Link className='d-flex justify-content-center' href="/prereq" >PREREQUISITES</Nav.Link>

        </Nav>

      </Navbar.Collapse>

    </Navbar>



  )
}

export default Na
