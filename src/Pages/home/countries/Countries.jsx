import React, { useContext } from "react";
import "./countries.css";
import ContextCountries from "../../../context/ContextCountries";
import { useNavigate } from "react-router-dom";
const Countries = () => {
	const countries = useContext(ContextCountries); //this is dumb i cant destuct countries in this file and id dont know why
	const { searchedCountry, showCountries } = useContext(ContextCountries);
	const navigate = useNavigate();

	// console.log("counterFromcc ", countries["countries"]);
	if (showCountries) {
		return (
			<div className="countries-container dark">
				{countries["countries"].map((country) => {
					return (
						<div className="country-div dark" key={country.name}>
							<img
								src={country.flags.svg}
								alt="flag"
								onClick={() => {
									navigate(`/${country.numericCode}`);
								}}
							/>
							<div
								className="country-info dark"
								onClick={() => {
									navigate(`/${country.numericCode}`);
								}}
							>
								<p className="name dark">{country.name}</p>
								<p className="title dark">
									{" "}
									Population:{" "}
									<span className="dark">
										{country.population.toLocaleString()}
									</span>
								</p>
								<p className="title dark">
									{" "}
									Region: <span className="dark">{country.region}</span>
								</p>
								<p className="title dark">
									{" "}
									Capital: <span className="dark">{country.capital}</span>
								</p>
							</div>
						</div>
					);
				})}
			</div>
		);
	} else {
		if (!searchedCountry) {
			return (
				<div class="alert alert-info text-center" role="alert">
					No Such Country!
				</div>
			);
		}
		return (
			<div className="countries-container dark">
				<div className="country-div dark">
					<img
						src={searchedCountry.flags.svg}
						alt="flag"
						onClick={() => {
							navigate(`/${searchedCountry.numericCode}`);
						}}
					/>
					<div
						className="country-info dark"
						onClick={() => {
							navigate(`/${searchedCountry.numericCode}`);
						}}
					>
						<p className="name dark">{searchedCountry.name}</p>
						<p className="title dark">
							{" "}
							Population:{" "}
							<span className="dark">{searchedCountry.population}</span>
						</p>
						<p className="title dark">
							{" "}
							Region: <span className="dark">{searchedCountry.region}</span>
						</p>
						<p className="title dark">
							{" "}
							Capital: <span className="dark">{searchedCountry.capital}</span>
						</p>
					</div>
				</div>
			</div>
		);
	}
};

export default Countries;
