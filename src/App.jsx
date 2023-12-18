import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Sidebar />
      <RecipeList />
      <Footer />
    </div>
  );
}

export default App;
