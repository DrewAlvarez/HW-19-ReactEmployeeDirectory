import React from "react";

function EmployeeTable(props){
  return (
    <div className="col-9">
      <table className="table table-active">
        <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Department</th>
              <th scope="col">Position</th>
              <th scope="col">Pay</th>
              <th scope="col">ID</th>
            </tr>
        </thead>
        <tbody>
          {props.results.map(result => (
            <tr className="table-light">
              <th scope="row">{result.firstName} {result.lastName}</th>
              <td>{result.email}</td>
              <td>{result.department}</td>
              <td>{result.position}</td>
              <td>{result.pay}</td>
              <td>{result.id}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}
export default EmployeeTable;