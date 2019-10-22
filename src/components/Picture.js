import React from "react";
import Button from "./Button";
import "../css/components/_picture.scss";
const Picture = () => {
  return (
    <div className="imgButtonContainer">
      {/* <img
        className="profilePic"
        src="profilePic.jpg"
        alt="This is a Profile Picture of Myself"
      /> */}

      <Button
        btnText="Who Am I?"
        hrefLink={"#About-Me"}
        specialCss={"left-btn"}
      />
    </div>
  );
};

export default Picture;
