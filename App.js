import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import EmployeeForm from "./Components/EmployeeForm";
import EmployeeList from "./Components/EmployeeList";
import EmployeeDetail from "./Components/EmployeeDetail";

function App() {
  const [employees, setEmployees] = useState([]);

  // Load employees from localStorage on first render
  useEffect(() => {
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  // Automatically save employees whenever they change
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  // Add a new employee
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
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
            <li><Link to="/employees">Employee List</Link></li>
            <li><Link to="/employee-form">Employee Form</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

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

          <Route
            path="/employees"
            element={<EmployeeList employees={employees} />}
          />

          <Route
            path="/employees/:id"
            element={<EmployeeDetail employees={employees} />}
          />

          <Route
            path="/employee-form"
            element={<EmployeeForm addEmployee={addEmployee} />}
          />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Optional 404 */}
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
