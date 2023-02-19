import React, { useContext, useEffect } from "react";
import NavBar from "../../components/navbar/NavBar";
import Countries from "./countries/Countries";
import ContextCountries, {
	ContextProvider,
} from "../../context/ContextCountries";
import "./home.css";
import Filter from "./filter/Filter";
const Home = () => {
	console.log("home rendered ");
	const { darkTheme } = useContext(ContextCountries);
	useEffect(() => {
		const pars = document.querySelectorAll("p");
		const divs = document.querySelectorAll("div");
		const spans = document.querySelectorAll("span");
		const inputs = document.querySelectorAll("input");
		const selectEls = document.querySelectorAll("select");
		const a = document.querySelectorAll("a");
		const icons = document.querySelectorAll("svg");
		const buttons = document.querySelectorAll("button");
		const htmlTag = document.querySelector("html");

		if (darkTheme) {
			pars.forEach((par) => par.classList.add("dark"));
			divs.forEach((par) => par.classList.add("dark"));
			spans.forEach((par) => par.classList.add("dark"));
			inputs.forEach((par) => par.classList.add("dark"));
			selectEls.forEach((par) => par.classList.add("dark"));
			a.forEach((par) => par.classList.add("dark"));
			icons.forEach((par) => par.classList.add("dark"));
			buttons.forEach((par) => par.classList.add("dark"));
			htmlTag.classList.add("dark");
		} else {
			pars.forEach((par) => par.classList.remove("dark"));
			divs.forEach((par) => par.classList.remove("dark"));
			spans.forEach((par) => par.classList.remove("dark"));
			inputs.forEach((par) => par.classList.remove("dark"));
			selectEls.forEach((par) => par.classList.remove("dark"));
			a.forEach((par) => par.classList.remove("dark"));
			icons.forEach((par) => par.classList.remove("dark"));
			buttons.forEach((par) => par.classList.remove("dark"));
			htmlTag.classList.remove("dark");
		}
	}, [darkTheme]);
	return (
		<div className="home dark">
			<NavBar></NavBar>
			<Filter />
			<Countries></Countries>
		</div>
	);
};

export default Home;
