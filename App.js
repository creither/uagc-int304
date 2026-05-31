import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import EmployeeForm from "./Components/EmployeeForm";

function App() {
  const [employees, setEmployees] = useState([]);

  // Load employees from localStorage on first render
  useEffect(() => {
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  // Add a new employee to state
  const addEmployee = (employee) => {
    const updatedEmployees = [...employees, employee];
    setEmployees(updatedEmployees);
  };

  // Save employees to localStorage
  const saveData = () => {
    localStorage.setItem("employees", JSON.stringify(employees, null, 2));
    alert("Employee data saved to local storage!");
  };

  // Remove employee by index
  const removeEmployee = (index) => {
    const updated = employees.filter((_, i) => i !== index);
    setEmployees(updated);
  };

  // Modify employee by index
  const updateEmployee = (index, updatedEmployee) => {
    const updated = employees.map((emp, i) =>
      i === index ? updatedEmployee : emp
    );
    setEmployees(updated);
  };

  return (
    <Router>
      <div className="App">

        {/* Navigation */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/employee-form">Employee Form</Link></li>
          </ul>
        </nav>

        {/* Save Button */}
        <button onClick={saveData} style={{ marginTop: "10px" }}>
          Save Employees to Local Storage
        </button>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <Home
                employees={employees}
                removeEmployee={removeEmployee}
                updateEmployee={updateEmployee}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/employee-form"
            element={<EmployeeForm addEmployee={addEmployee} />}
          />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
