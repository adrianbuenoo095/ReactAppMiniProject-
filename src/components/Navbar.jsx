import logo from "../assets/images/logo.jpg";
import classes from "./Navbar.module.css";

// const menuItems = [
//   { id: 1, label: 'Dashboard', link: '/' },
//   { id: 2, label: 'About Us', link: '/about' },
//   { id: 3, label: 'Contact', link: '/contact' },
// ];

const Navbar = () => {
  return (
    // <nav >
    //   <ul>
    //     {menuItems.map((item) => (
    //       <div className="py-4" key={item.id}>
    //         <li >
    //           <Link to={item.link}>{item.label}</Link>
    //         </li>
    //       </div>
    //     ))}
    //   </ul>
    // </nav >
    <div className={classes.navbar}>
      <div className={classes.leftside}>
        <img className="logo " src={logo} />
      </div>
      <div className={classes.rightside}></div>
    </div>
  );
}
export default Navbar;
