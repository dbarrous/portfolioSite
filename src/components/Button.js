import React from "react";
import "../css/components/_button.scss";
import { directive } from "@babel/types";

const Button = props => {
  const { btnText } = props;
  return (
    // <div className="btn-border">
    //   <button className="btn btn-lg">What have I built?</button>
    // </div>
    <div className="btn btn_border">
      <div className="btn btn_inner">
        <p>{btnText}</p>
      </div>
    </div>
  );
};

export default Button;
