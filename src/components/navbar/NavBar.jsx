import React from "react";
import "./navbar.css";
import { BsMoon } from "react-icons/bs";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid my-navbar p-2">
				<a className="title">Where in the world?</a>
				<span className="darkModeContainer">
					<BsMoon></BsMoon>
					<a> Dark Mode</a>
				</span>
			</div>
		</nav>
	);
};

export default NavBar;
