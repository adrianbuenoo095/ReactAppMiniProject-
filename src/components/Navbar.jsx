import logo from "../assets/logo.jpg";
import "../components/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftside">
        <img className="logo " src={logo} />
      </div>
      <div classname="rightside"></div>
    </div>
  );
}
export default Navbar;
