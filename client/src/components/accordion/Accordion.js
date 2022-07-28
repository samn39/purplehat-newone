import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./Accordion.css";



function Accordion(props) {
  // State to show/hide accordion
  const [show, setShow] = useState(false);
  const handleOpen = () => {
    setShow(!show); // Toggle accordion
  };

  return (
    <div className="app">
      <div className="accordian">
        <div className="accordian-header" onClick={handleOpen}>
          <div>{props.head}</div>
          <div className="sign">{show ? '-' : '+'}</div>
        </div>
        {show && (
          <div className="accordian-body">
            {props.body}
            <a href="{props.link}"> {props.link}</a>
          </div>
          
        )}
      </div>
   
      
      

    </div>
    
  );
}
export default Accordion;