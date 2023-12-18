import { Link } from "react-router-dom";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/about">AboutUs</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </div>
  );
}
export default Sidebar;
