import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Sidebar from "./components/Sidebar";

import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
