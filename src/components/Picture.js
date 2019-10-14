import React from "react";
import Button from "./Button";
const Picture = () => {
  return (
    <div className="imgButtonContainer">
      <img className="profilePic" alt="This is a Profile Picture of Myself" />
      <div className="Button Container">
        <Button btnText="Who Am I?" />
      </div>
    </div>
  );
};

export default Picture;
