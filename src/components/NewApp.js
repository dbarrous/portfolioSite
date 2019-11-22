import React from "react";
import Button from "./Button";
import Typing from "react-typing-animation";
import "../css/components/new.scss";

const NewApp = () => {
  return (
    <div className="body">
      <div className="ColumnLeft">
        <img src="images/profilePic.jpg" />
        <div className="mainButtons">
          <Button btnText="Who Am I?" specialCss={"leftButtons"} />
          <Button btnText="My Projects" specialCss={"leftButtons"} />
        </div>
      </div>
      <div className="ColumnRight">
        <div className="description">
          <Typing hideCursor={true} speed={20}>
            <h2 className="title">Hello World,</h2>
            <h1 className="title main">
              My Name is <span>Damian Barrous.</span>
            </h1>
            <h2 className="title">I'm a Web Developer :)</h2>
          </Typing>
        </div>

        <div className="buttons">
          <Button btnText="Resume" animation="resume" />
          <Button btnText="Github" animation="github" />
          <Button btnText="LinkedIn" animation="linkedin" />
        </div>
      </div>
    </div>
  );
};

export default NewApp;
