import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Sidebar from "./components/Sidebar";
import RecipeList from "./components/RecipeList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <RecipeList />
      <Footer />
    </div>
  );
}

export default App;
