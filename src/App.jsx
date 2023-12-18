import classes from "./App.css";
import { Footer } from './components/common/Footer.jsx';
import { Navbar } from "./components/common/Navbar.jsx";
import { Sidebar } from "./components/common/Sidebar.jsx";

const App = () => {
  return (
    <div className={classes.app}>
      <Navbar />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
