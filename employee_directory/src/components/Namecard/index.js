import React from "react";
import "../../styles/bootstrap.min.css";
import Name from "../Name";
import employee from "../../employees.json"

const styles = {
    cardWidth: {
        maxWidth: "20rem",
        float: "left",
        margin: "1rem"
    }
}

function NameCard() {
  return (
    <div className="card text-white bg-success mb-3" style={styles.cardWidth}>
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