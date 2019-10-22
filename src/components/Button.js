import React from "react";
import { useState, useEffect } from "react";
import "../css/components/_button.scss";

const Button = props => {
  const { btnText, specialCss, hrefLink } = props;
  const [emptyBtn, setEmptyBtn] = useState("");

  useEffect(() => {
    if (btnText === "") {
      setEmptyBtn("empty-btn");
    } else {
      setEmptyBtn("");
    }
  }, [btnText]);

  return (
    // <div className="btn-border">
    //   <button className="btn btn-lg">What have I built?</button>
    // </div>

    <a className="btn btn_border" href={hrefLink} id={emptyBtn + specialCss}>
      <div className="btn btn_inner">
        <p>{btnText}</p>
      </div>
    </a>
  );
};

export default Button;
