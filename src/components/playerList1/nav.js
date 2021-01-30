
import React, { Component } from 'react'

import {Navbar} from "react-bootstrap"
 class nav extends Component {
    render() {
        return (
            <div className="navbar">
           <Navbar bg="light">
    <Navbar.Brand href="#home">World Soccer</Navbar.Brand>
  </Navbar>

            </div>
        )
    }
}
export default nav;