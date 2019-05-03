import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Nav extends React.Component {
  render() {
    return(
      <div className="nav">
        <AnchorLink href="#Home">Home</AnchorLink>
        <AnchorLink href="#photo">Fotos</AnchorLink>
        <AnchorLink href="#information">Informações</AnchorLink>
        <AnchorLink href="#contact">Contatos</AnchorLink>
      </div>
    );
  }
}

export default Nav;