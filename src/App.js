import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/Homepage";
import AboutUs from "./components/AboutUs";
import Brands from "./components/Brands";
import Opportunities from "./components/Opportunities";
import Contact from "./components/Contact.jsx";
import Inquire from "./components/Inquire";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/inquire" element={<Inquire />} />
      </Routes>
    </Router>
  );
}

export default App;
