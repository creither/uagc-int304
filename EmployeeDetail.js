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

      <p><strong>Name:</strong> {employee.name}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Title:</strong> {employee.title}</p>
      <p><strong>Department:</strong> {employee.department}</p>

      <br />
      <Link to="/employees">Back to Employee List</Link>
    </div>
  );
}

export default EmployeeDetail;