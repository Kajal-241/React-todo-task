import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { SiTodoist } from 'react-icons/si'
import { FaUserCircle } from 'react-icons/fa'
import { CgLogOff } from 'react-icons/cg'

function HeaderBar(props) {
    let history = useHistory()
    console.log(props.userInfo)

    return (
        <div >
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Navbar.Brand href="/"><SiTodoist /> To Do List</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                     

                       
                                <Nav.Link>
                                    <Link to="/tasks">Tasks</Link>
                                </Nav.Link>
                                <Nav.Link >
                                    <Link to="/add-task">Add Tasks</Link>
                                </Nav.Link>
                                <Nav.Link >
                                    <Link to="/view"> View</Link>
                                </Nav.Link>
                          
                           
                      
                    </Nav>
                  
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userDetails
    }

}

export default connect(mapStateToProps, null)(HeaderBar);