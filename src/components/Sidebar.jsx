import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Navbar from "./Navbar";

const Sidebar = () => {
	const [nav, setNav] = useState();

	return (
		<div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow-sm">
			<div className="flex items-center">
				<div onClick={() => setNav(!nav)} className="cursor-pointer">
					<FontAwesomeIcon icon={faBars} />
				</div>
			</div>

			{nav ? (
				<div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
			) : (
				""
			)}

			<div
				className={
					nav
						? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
						: "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
				}
			>
				<FontAwesomeIcon
					onClick={() => setNav(!nav)}
					icon={faX}
					className="absolute right-4 top-4 cursor-pointer"
				/>
				<Navbar />
			</div>
		</div>
	);
}
export default Sidebar;
