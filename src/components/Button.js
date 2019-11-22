import React from "react";
import { useState, useEffect } from "react";
import "../css/components/_button.scss";

const Button = props => {
  const { btnText, specialCss, hrefLink, animation } = props;
  const [emptyBtn, setEmptyBtn] = useState("");

  useEffect(() => {
    if (btnText === "") {
      setEmptyBtn("empty-btn");
    } else {
      setEmptyBtn("");
    }
  }, [btnText]);

  return (
    <a
      className={`btn btn_border ${specialCss}`}
      id={animation}
      href={hrefLink}
    >
      <div className="btn btn_inner">
        <p>{btnText}</p>
      </div>
    </a>
  );
};

export default Button;
