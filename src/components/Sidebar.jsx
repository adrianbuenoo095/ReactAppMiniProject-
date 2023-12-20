import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import NavBar from "./Navbar";

const Sidebar = () => {
	const [nav, setNav] = useState(false);

	console.log('nav', nav);

	const toggleNav = () => {
		setNav((prevNav) => !prevNav);
	};

	return (
		<div className="bg-black max-w-[1640px] mx-auto flex p-4 shadow-sm">
			<div className="">
				<div onClick={toggleNav} className="cursor-pointer">
					<FontAwesomeIcon icon={faBars} />
				</div>
			</div>

			{nav && (
				<div className="bg-red-500 fixed z-10 top-0 right-0">
					<div
						className={`fixed top-0 right-0 w-[300px] h-screen bg-black z-10 duration-300 ${nav ? '' : 'right-[-100%]'}`}
					>
						<FontAwesomeIcon
							onClick={toggleNav}
							icon={faTimes}
							className="absolute right-4 top-4 cursor-pointer"
						/>
						<div>
							<NavBar />
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Sidebar;
