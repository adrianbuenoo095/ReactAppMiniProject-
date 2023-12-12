import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RecipeList from "./components/RecipeList";
import Sidebar from "./components/Sidebar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="container5">
        <Sidebar />
        <main className="main">
          <h1 className="intro">Welcome to Your App!</h1>
          <p>Some content</p>
          <p>THIS content</p>
          <RecipeList />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
