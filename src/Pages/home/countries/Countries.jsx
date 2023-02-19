import axios from "axios";
import React, { useContext, useEffect } from "react";
import "./countries.css";
import ContextCountries from "../../../context/ContextCountries";
import { useNavigate, Navigate } from "react-router-dom";
const Countries = () => {
	const countries = useContext(ContextCountries); //this is dumb i cant destuct countries in this file and id dont know why
	const { searchedCountry, showCountries } = useContext(ContextCountries);
	const navigate = useNavigate();

	// console.log("counterFromcc ", countries["countries"]);
	if (showCountries) {
		return (
			<div className="countries-container">
				{countries["countries"].map((country) => {
					return (
						<div className="country-div " key={country.name}>
							<img
								src={country.flags.svg}
								alt="flag"
								onClick={() => {
									navigate(`/${country.numericCode}`);
								}}
							/>
							<div
								className="country-info"
								onClick={() => {
									navigate(`/${country.numericCode}`);
								}}
							>
								<p className="name">{country.name}</p>
								<p className="title">
									{" "}
									Population: <span>{country.population.toLocaleString()}</span>
								</p>
								<p className="title">
									{" "}
									Region: <span>{country.region}</span>
								</p>
								<p className="title">
									{" "}
									Capital: <span>{country.capital}</span>
								</p>
							</div>
						</div>
					);
				})}
			</div>
		);
	} else {
		return (
			<div className="countries-container">
				<div className="country-div ">
					<img
						src={searchedCountry.flags.svg}
						alt="flag"
						onClick={() => {
							navigate(`/${searchedCountry.numericCode}`);
						}}
					/>
					<div
						className="country-info"
						onClick={() => {
							navigate(`/${searchedCountry.numericCode}`);
						}}
					>
						<p className="name">{searchedCountry.name}</p>
						<p className="title">
							{" "}
							Population: <span>{searchedCountry.population}</span>
						</p>
						<p className="title">
							{" "}
							Region: <span>{searchedCountry.region}</span>
						</p>
						<p className="title">
							{" "}
							Capital: <span>{searchedCountry.capital}</span>
						</p>
					</div>
				</div>
			</div>
		);
	}
};

export default Countries;
