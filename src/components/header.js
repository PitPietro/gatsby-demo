import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import PitImg from "../images/pit_logo.png";
import React, {Component} from "react";


export default class Header extends Component {
  /*
  constructor(props) {
    super(props);
  }
  */

  y_value = 50
  state = {
    bg: "transparent"
  };

  listenScrollEvent = e => {
    if(window.scrollY < this.y_value) {
      this.setState({bg: "dark"});
    } else {
      this.setState({bg: "transparent"});
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render ()
  {
    return (
      <div>
        <Navbar fixed="top" expand="lg" variant="dark" bg={this.state.bg}>
          <Navbar.Brand href="/">
            <img alt="" src={PitImg} width="30" height="30" className="d-inline-block align-top"/>
            {' '}
            Pietro Poluzzi
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Dev" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/dev/react">React</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}