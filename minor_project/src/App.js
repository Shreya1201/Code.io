import React from "react";
import Navbar from "./components/navbar";
import { Link } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="box">
        <h3>ONLINE CODE EDITOR</h3>
        <Link className="know" to="/Compiler">
          Get Started
        </Link>
      </div>
      <Footer />
    </div>
  );
}
