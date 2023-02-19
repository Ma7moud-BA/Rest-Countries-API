import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContextCountries from "../../context/ContextCountries";
import NavBar from "../../components/navbar/NavBar";
import { BsArrowLeft } from "react-icons/bs";
import "./details.css";
const Details = () => {
	const { countries } = useContext(ContextCountries); //this is dumb i cant destuct countries in this file and id dont know why
	const params = useParams();
	const countyCode = params.numericCode;
	const country = countries.find((e) => e.numericCode == countyCode);
	console.log(country);
	const navigate = useNavigate();
	return (
		<>
			<NavBar></NavBar>
			<div className="back-btn-container">
				<BsArrowLeft className="icon"></BsArrowLeft>
				<button
					className="Back-btn"
					onClick={() => {
						navigate("/");
					}}
				>
					Back
				</button>
			</div>
			<div className="country-div2 ">
				<img src={country.flags.svg} alt="flag" />
				<div className="country-info">
					<p className="nameD">{country.name}</p>
					<p className="title">
						NativeName: <span>{country.nativeName}</span>
					</p>
					<p className="title">
						Population: <span>{country.population}</span>
					</p>
					<p className="title">
						Region: <span>{country.region}</span>
					</p>
					<p className="title">
						Sub Region: <span>{country.subregion}</span>
					</p>
					<p className="title">
						Capital: <span>{country.capital}</span>
					</p>
				</div>
				<div className="country-info">
					<br />
					<br />
					<p className="title">
						Top Level Domain: <span>{country.topLevelDomain}</span>
					</p>

					{country.currencies && (
						<p className="title">
							Currencies: <span>{country.currencies[0].name}</span>
						</p>
					)}

					<p className="title">
						Languages:
						<span>
							{country.languages.map((lang) => {
								return <span key={lang.name}> {lang.name},</span>;
							})}
						</span>
					</p>
					<br />
					{/* for safery because some nations doest have borders countries in this data */}
					{country.borders && (
						<p className="title">
							<p>Border Countries:</p>
							<span>
								{country.borders.map((border) => {
									return (
										<button key={border} className="border-country">
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
