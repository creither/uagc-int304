import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import EmployeeForm from "./Components/EmployeeForm";

function App() {
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

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/employee-form" element={<EmployeeForm />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;

