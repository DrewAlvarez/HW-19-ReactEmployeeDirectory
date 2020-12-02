import React from "react";
import "../../styles/bootstrap.min.css";

function Name(props) {
    return (
      <button 
        type="button" 
        className={props.class} 
        onClick={props.handleSingleEmployee}
        style={{width: "80%", marginBottom: ".5rem"}}>{props.empName}</button>
    );
  }
  
  export default Name;