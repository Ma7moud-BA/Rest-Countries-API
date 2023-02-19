import React, { useContext, useRef } from "react";
import ContextCountries from "../../../context/ContextCountries";
import "./filter.css";
import { BsSearch } from "react-icons/bs";
const Filter = () => {
	const searchref = useRef();
	const { filter, handleSetFilter, getCountryFromSearch } =
		useContext(ContextCountries); // i can destruct countries here but i cant in the Countries.jsx component
	const { countries } = useContext(ContextCountries); // i can destruct countries here but i cant in the Countries.jsx component
	const allCountries = countries;

	const handleSelectFilter = (e) => {
		handleSetFilter(e.target.value);
	};
	const handleSearch = (e) => {
		e.key == "Enter" && getCountryFromSearch(searchref.current.value);
		//
	};
	return (
		<div className="filter-div ">
			<div className="search-div">
				<BsSearch className="icon-search"></BsSearch>
				<input
					type="search"
					className="input-field"
					onKeyUp={handleSearch}
					ref={searchref}
					placeholder="Search for a country..."
				/>
			</div>

			<select name="filter" id="filter" onChange={handleSelectFilter}>
				{/* <option value="none" disabled selected hidden>
					Filter by Region
				</option> */}
				<option value="All">All</option>
				<option value="Africa">Africa</option>
				<option value="Americas">America</option>
				<option value="Asia">Asia</option>
				<option value="Europe">Europe</option>
				<option value="Oceania">Oceania</option>
			</select>
		</div>
	);
};

export default Filter;
