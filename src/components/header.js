import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import PitImg from "../images/pit_logo.png";
import React, {Component} from "react";
import { Link } from "gatsby"


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
      <>
        |<Link to="/"><img alt="" src={PitImg} width="30" height="30" className="d-inline-block align-top"/></Link>|
        Pietro Poluzzi|
        <Link to="/about/">About</Link>|
        <Link to="/about-css-modules/">About CSS</Link>
      </>
    );
  }
}