import React from 'react';
import { FaBars } from "react-icons/fa"

class ButtomMob extends React.Component {

  state = {
    visNav: 'flex'
  }

  clickMe = () => {
    if(this.state.visNav === 'flex') {
      this.setState({
        visNav: 'none'
      });
    } else {
      this.setState({
        visNav: 'flex'
      });
    }
    document.querySelector(".nav").style.display = this.state.visNav;
  }

  render() {
    return(
      <div className="buttonMob" onClick={ this.clickMe.bind(this) } >
        <FaBars />
      </div>
    );
  }
}

export default ButtomMob;