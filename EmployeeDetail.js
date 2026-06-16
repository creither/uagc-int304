import React from "react";
import { useParams, Link } from "react-router-dom";

function EmployeeDetail({ employees }) {
  const { id } = useParams();
  const employee = employees[id];

  if (!employee) {
    return (
      <div>
        <h2>Employee Not Found</h2>
        <Link to="/employees">Back to Employee List</Link>
      </div>
    );
  }

  return (
    <div className="employee-detail">
      <h1>Employee Details</h1>

      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <td>{employee.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{employee.email}</td>
          </tr>
          <tr>
            <th>Title</th>
            <td>{employee.title}</td>
          </tr>
          <tr>
            <th>Department</th>
            <td>{employee.department}</td>
          </tr>
        </tbody>
      </table>

      <br />
      <Link to="/employees">Back to Employee List</Link>
    </div>
  );
}

export default EmployeeDetail;
