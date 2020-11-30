import React from "react";
import "../../styles/bootstrap.min.css";

function Name(props) {
    return (
    <li className="list-group-item bg-success">{props.empName}</li>
    );
  }
  
  export default Name;