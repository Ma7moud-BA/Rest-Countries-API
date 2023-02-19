import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContextCountries from "../../context/ContextCountries";
import NavBar from "../../components/navbar/NavBar";
import { BsArrowLeft } from "react-icons/bs";
import "./details.css";
const Details = () => {
	const { countries, darkTheme } = useContext(ContextCountries); //this is dumb i cant destuct countries in this file and id dont know why
	const params = useParams();
	const countyCode = params.numericCode;
	const country = countries.find((e) => e.numericCode == countyCode);

	const navigate = useNavigate();
	console.log("details rendered ");
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
		<>
			<NavBar></NavBar>
			<div className="back-btn-container dark">
				<BsArrowLeft className="icon dark "></BsArrowLeft>
				<button
					className="Back-btn dark"
					onClick={() => {
						navigate("/");
					}}
				>
					Back
				</button>
			</div>
			<div className="country-div2 dark ">
				<img src={country.flags.svg} alt="flag" />
				<div className="country-info dark">
					<p className="nameD dark">{country.name}</p>
					<p className="title dark">
						NativeName: <span className="dark">{country.nativeName}</span>
					</p>
					<p className="title dark">
						Population: <span className="dark">{country.population}</span>
					</p>
					<p className="title dark">
						Region: <span className="dark">{country.region}</span>
					</p>
					<p className="title dark">
						Sub Region: <span className="dark">{country.subregion}</span>
					</p>
					<p className="title dark">
						Capital: <span className="dark">{country.capital}</span>
					</p>
				</div>
				<div className="country-info dark">
					<br />
					<br />
					<p className="title dark">
						Top Level Domain:{" "}
						<span className="dark">{country.topLevelDomain}</span>
					</p>

					{country.currencies && (
						<p className="title dark">
							Currencies:{" "}
							<span className="dark">{country.currencies[0].name}</span>
						</p>
					)}

					<p className="title dark">
						Languages:
						<span className="dark">
							{country.languages.map((lang) => {
								return (
									<span key={lang.name} className="dark">
										{" "}
										{lang.name},
									</span>
								);
							})}
						</span>
					</p>
					<br />
					{/* for safery because some nations doest have borders countries in this data */}
					{country.borders && (
						<p className="title dark">
							<span className="dark" style={{ display: "block" }}>
								Border Countries:
							</span>
							<span className="dark">
								{country.borders.map((border) => {
									return (
										<button
											disabled
											key={border}
											className="border-country dark"
										>
											{border}
										</button>
									);
								})}
							</span>
						</p>
					)}
				</div>
			</div>
		</>
	);
};

export default Details;
