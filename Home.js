import React, { useState } from "react";

function Home({ employees, removeEmployee, updateEmployee }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    title: "",
    department: ""
  });

  // Start editing a specific employee
  const startEdit = (index) => {
    setEditingIndex(index);
    setEditData(employees[index]);
  };

  // Handle input changes while editing
  const handleEditChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  // Save the updated employee
  const saveEdit = () => {
    updateEmployee(editingIndex, editData);
    setEditingIndex(null);
  };

  return (
    <div>
      <h1>Saved Employees</h1>

      {employees.length === 0 ? (
        <p>No employees saved yet.</p>
      ) : (
        <ul>
          {employees.map((emp, index) => (
            <li key={index} style={{ marginBottom: "20px" }}>
              {editingIndex === index ? (
                // EDIT MODE
                <div>
                  <input
                    name="name"
                    value={editData.name}
                    onChange={handleEditChange}
                    placeholder="Name"
                  />
                  <input
                    name="email"
                    value={editData.email}
                    onChange={handleEditChange}
                    placeholder="Email"
                  />
                  <input
                    name="title"
                    value={editData.title}
                    onChange={handleEditChange}
                    placeholder="Job Title"
                  />
                  <input
                    name="department"
                    value={editData.department}
                    onChange={handleEditChange}
                    placeholder="Department"
                  />

                  <button onClick={saveEdit}>Save</button>
                  <button onClick={() => setEditingIndex(null)}>Cancel</button>
                </div>
              ) : (
                // VIEW MODE
                <div>
                  <strong>{emp.name}</strong> — {emp.title} ({emp.department})
                  <br />
                  <em>{emp.email}</em>
                  <br />

                  <button onClick={() => startEdit(index)}>Edit</button>
                  <button onClick={() => removeEmployee(index)}>Remove</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
