import React from "react";

const Button = (props) => {
  return (
    <div style={{ textAlign: "center" }}>
      <a className="active" href={props.link}>
        <button id="quizButton" className="btn-primary" >
          {props.name}
        </button>
      </a>
    </div>
  );
};

export default Button;
