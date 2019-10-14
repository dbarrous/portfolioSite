import React from "react";
import Picture from "./Picture";
import Text from "./Text";
import Button from "./Button";
import "../css/components/_webpage.scss";
const App = () => {
  return (
    <div className="webpage">
      <div className="topContainers">
        <Picture />
        <Text />
      </div>
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
    </div>
  );
};

export default App;
