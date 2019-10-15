import React from "react";
import "../css/components/_button.scss";

const Button = props => {
  const { btnText, specialCssOuter, specialCssInner, hrefLink } = props;
  return (
    // <div className="btn-border">
    //   <button className="btn btn-lg">What have I built?</button>
    // </div>

    <a className="btn btn_border" href={hrefLink} id={specialCssOuter}>
      <a className="btn btn_inner" id={specialCssInner}>
        <p>{btnText}</p>
      </a>
    </a>
  );
};

export default Button;
