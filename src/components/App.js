import React from "react";
import Top from "./Top";
import Bottom from "./Bottom";
import AboutMe from "./AboutMe";
import "../css/components/_webpage.scss";

const App = () => {
  return (
    <div className="webpage">
      <Top />
      <Bottom />
      <div className="aboutMe">
        <AboutMe />
      </div>
    </div>
  );
};

export default App;
