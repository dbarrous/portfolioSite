import React from "react";
import Button from "./Button";
import "../css/components/_text.scss";
const Text = () => {
  return (
    <div className="textBox">
      <div className="textBox-center">
        <div>
          <h1>
            <span className="main-heading-top">Hello World,</span>
            <span className="main-heading-bottom">
              My name is{" "}
              <span id="name">
                Damian ;)
                <span />
              </span>
            </span>
          </h1>
          <h2 className="secondary-heading">I'm a Web Developer</h2>
        </div>

        <Button btnText="What Have I Built?" specialCss="right-btn" />
      </div>
    </div>
  );
};

export default Text;
