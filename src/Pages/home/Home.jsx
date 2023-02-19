import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Countries from "./countries/Countries";
import { ContextProvider } from "../../context/ContextCountries";
import "./home.css";
import Filter from "./filter/Filter";
const Home = () => {
	return (
		<ContextProvider>
			<div className="home">
				<NavBar></NavBar>
				<Filter />
				<Countries></Countries>
			</div>
		</ContextProvider>
	);
};

export default Home;
