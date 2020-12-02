import React from "react";
import "../../styles/bootstrap.min.css";
// import Name from "../Name";
// import employee from "../../employees.json"

function NameCard(props) {
  return (
    <div className="col-3" style={{textAlign: "center"}}>
      <div className="card text-white bg-primary mb-3">
          {props.children}
      </div>
    </div>
  );
}

export default NameCard;