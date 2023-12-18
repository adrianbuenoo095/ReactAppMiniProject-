import {
  Route, Routes
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";
import Sidebar from "./components/Sidebar";
import AboutPage from "./components/pages/AboutPage";
import ItemDetailsPage from "./components/pages/ItemDetailsPage";
import NotFound from "./components/pages/NotFoundPage";

const App = () => {
  return (
    <div className="app">
      <Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        <Route path="about" element={<AboutPage />} />
        <Route path="itemDetails" element={<ItemDetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Navbar />
      <Sidebar />
      <RecipeList />
      <Footer />
    </div>
  );
}

export default App;
