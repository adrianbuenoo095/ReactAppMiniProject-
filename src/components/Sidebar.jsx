import "../App.css";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="Sidebar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">AboutUs</Link>
      </li>
      <li>
        <Link to="/about">Contact</Link>
      </li>
    </div>
  );
}
export default Sidebar;
