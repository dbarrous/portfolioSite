import React from "react";
import Button from "./Button";
const Bottom = () => {
  return (
    <div className="bottomContainers">
      <Button btnText="Resume" specialCss="resume" />

      <Button btnText="Github" specialCss="github" />

      <Button btnText="LinkedIn" specialCss="linkedin" />

      <Button btnText="Handshake" specialCss="handshake" />
    </div>
  );
};

export default Bottom;
