import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Navbar from "./Navbar";

const Sidebar = () => {
	const [nav, setNav] = useState();

	console.log('nav', nav);

	const toggleNav = () => {
		setNav(!nav);
	};

	return (
		<div className="bg-black max-w-[1640px] mx-auto flex p-4 shadow-sm">
			<div className="">
				<div onClick={toggleNav} className="cursor-pointer">
					<FontAwesomeIcon icon={faBars} />
				</div>
			</div>

			{nav && <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0">
				<div
					className={`fixed top-0 left-0 w-[300px] h-screen bg-black z-10 duration-300 ${nav ? '' : 'left-[-100%]'
						}`}
				>
					<FontAwesomeIcon onClick={toggleNav} icon={faX} className="absolute right-4 top-4 cursor-pointer" />
					<div>
						<Navbar />
					</div>
				</div>
			</div>}

		</div>
	);
}
export default Sidebar;
