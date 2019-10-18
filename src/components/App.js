import React from "react";
import Top from "./Top";
import Button from "./Button";
import AboutMe from "./AboutMe";
import "../css/components/_webpage.scss";
const App = () => {
  return (
    <div className="webpage">
      <Top />
      <div className="bottomContainers">
        <Button
          btnText="Resume"
          specialCssOuter="resume"
          specialCssInner="resume-inner"
        />

        <Button
          btnText="Github"
          specialCssOuter="github"
          specialCssInner="github-inner"
        />

        <Button
          btnText="LinkedIn"
          specialCssOuter="linkedin"
          specialCssInner="linkedin-inner"
        />

        <Button
          btnText="Handshake"
          specialCssOuter="handshake"
          specialCssInner="handshake-inner"
        />
      </div>
      <div className="aboutMe">
        <AboutMe />
      </div>
    </div>
  );
};

export default App;
