import React from "react";
import "../css/components/_button.scss";

const Button = (name, mainColor, secColor) => {
  return (
    <div className="btn-border">
      <button className="btn btn-lg">What have I built?</button>
    </div>
  );
};

export default Button;
