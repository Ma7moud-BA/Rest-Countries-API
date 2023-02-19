import React, { useContext } from "react";
import "./navbar.css";
import { BsMoon } from "react-icons/bs";
import ContextCountries from "../../context/ContextCountries";

const NavBar = () => {
	const { darkTheme, setDarkTheme } = useContext(ContextCountries);

	const handleChangeTheme = () => {
		setDarkTheme(!darkTheme);
	};

	return (
		<nav className=" navbar navbar-expand-lg  ">
			<div className="container-fluid my-navbar p-2 dark">
				<a className="title dark">Where in the world?</a>
				<span className="darkModeContainer dark" onClick={handleChangeTheme}>
					<BsMoon></BsMoon>
					<a> Dark Mode</a>
				</span>
			</div>
		</nav>
	);
};

export default NavBar;
