import { Link } from "react-router-dom";

const menuItems = [
  { id: 1, label: 'Dashboard', link: '/' },
  { id: 2, label: 'About Us', link: '/about' },
  { id: 3, label: 'Contact', link: '/contact' },
];

const Navbar = () => {
  return (
    <nav>
      <ul>
        {menuItems.map((item) => (
          <div className="py-4" key={item.id}>
            <li >
              <Link to={item.link}>{item.label}</Link>
            </li>
          </div>
        ))}
      </ul>
    </nav >
  );
}
export default Navbar;
