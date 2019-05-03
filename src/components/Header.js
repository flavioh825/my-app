import React from 'react';
import Nav from './Header/Nav';
import ButtomMob from './Header/ButtomMob';
import Logo from "./Header/Logo";
import Address from "./Header/Address";

class Header extends React.Component {
  render() {
    return(
      <div className="header">
        <Nav />
        <ButtomMob />
        <Logo />
        <Address />
      </div>
    );
  }
}

export default Header;