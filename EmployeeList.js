import React from "react";
import { Link } from "react-router-dom";

function EmployeeList({ employees }) {
  return (
    <div className="employee-list">
      <h1>Employee List</h1>

      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <ul>
          {employees.map((employee, index) => (
            <li key={index} style={{ marginBottom: "12px" }}>
              <Link to={`/employees/${index}`}>
                <strong>{employee.name}</strong>
              </Link>
              <div style={{ fontSize: "0.9em", color: "#555" }}>
                {employee.title} — {employee.department}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EmployeeList;
