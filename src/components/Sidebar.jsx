import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <aside className="conatiner-two">
            <li>
                <Link to="/">home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
        </aside >
    );
}
export default Sidebar;
