import React from 'react';
import Contact from "./Main/Contact";
import Slides from "./Main/Slides";
import Information from "./Main/Information";
import Map from "./Main/Map";

class Main extends React.Component {
  render() {
    return(
      <div className="main">
        <Contact />
        <Slides />
        <Information />
        <Map />
      </div>
    );
  }
}

export default Main;