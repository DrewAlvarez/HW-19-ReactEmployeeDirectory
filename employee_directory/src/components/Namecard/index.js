import React from "react";
import "../../styles/bootstrap.min.css";
import Name from "../Name";
import employee from "../../employees.json"

function NameCard() {
  return (
    <div className="card text-white bg-success mb-3 col-3">
        <div className="card-header">Employee Name List</div>
        <div className="card-body">
            <ul className="list-group bg-success">
                {employee.map(emp => (
                    <Name empName={emp.name} />
                ))}
            </ul>
        </div>
    </div>
  );
}

export default NameCard;