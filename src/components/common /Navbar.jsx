import logo from "...";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.leftside}>
        <img className="logo " src={logo} />
      </div>
      <div className={classes.rightside}></div>
    </div>
  );
}
export default Navbar;
