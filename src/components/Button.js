import React from "react";
import "../css/components/_button.scss";

const Button = props => {
  const { btnText, specialCssOuter, specialCssInner } = props;
  return (
    // <div className="btn-border">
    //   <button className="btn btn-lg">What have I built?</button>
    // </div>
    <div className="btn btn_border" id={specialCssOuter}>
      <div className="btn btn_inner" id={specialCssInner}>
        <p>{btnText}</p>
      </div>
    </div>
  );
};

export default Button;
