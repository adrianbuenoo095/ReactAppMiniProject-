import { Link } from "react-router-dom";
import classes from './Sidebar.module.css';

const menuItems = [
	{ id: 1, label: 'Dashboard', link: '/' },
	{ id: 2, label: 'About Us', link: '/about' },
	{ id: 3, label: 'Contact', link: '/contact' },
];

const Sidebar = () => {

	return (
		<>
			<div className={classes.sidebar}>
				<div className="p-2 flex">
					<nav>
						<ul className="flex flex-col p-4 text-gray-800">
							{menuItems.map((item) => (
								<div className="py-4" key={item.id}>
									<li className="text-xl flex cursor-pointer w-[50 %] rounded - full mx - auto p - 2 hover:text-white hover:bg-black" >
										<Link to={item.link}>{item.label}</Link>
									</li>
								</div>
							))}
						</ul>
					</nav >
				</div>
			</div>
		</>

	);
}
export default Sidebar;
