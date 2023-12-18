import {
  Route, Routes
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import Homepage from "./pages/HomePage";
import ItemDetailsPage from "./pages/ItemDetailsPage";
import NotFound from "./pages/NotFoundPage";

const App = () => {
  return (
    <div className="app">
      {/* <Navbar />
      <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="recipes/:recipeId" element={<ItemDetailsPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
