import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <aside className="conatiner-two">
            <Link to="/">home</Link>
            <Link to="about">About</Link>
        </aside >
    );
}
export default Sidebar;
