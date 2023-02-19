import React, { useEffect, useState } from "react";
import data from "./data.json";

const ContextCountries = React.createContext();

export const ContextProvider = (props) => {
	const [countries, setCountries] = useState(data);
	const [filter, setFilter] = useState("All");
	const [showCountries, setShowCountries] = useState(true);
	let [searchedCountry, setSearchedCountry] = useState("");
	// console.log(filter);
	const handleSetFilter = (selectedFilter) => {
		setFilter(selectedFilter);
	};
	const handleChangeCoutries = () => {
		// console.log(filter);

		const newCountries = data;

		// console.log(newCountries);
		filter === "All"
			? setCountries(data)
			: setCountries(
					newCountries.filter((country) => country.region === `${filter}`)
			  );
		setShowCountries(true);
		// console.log(countries);
	};
	const getCountryFromSearch = (selectedFromSearch) => {
		console.log(selectedFromSearch);
		searchedCountry = data.find((e) => {
			return e.name == `${selectedFromSearch}`;
		});
		setSearchedCountry(searchedCountry);
		setShowCountries(false);
		console.log(searchedCountry);
	};

	useEffect(() => {
		handleChangeCoutries();
	}, [filter]);
	// useEffect(()=>{

	// },[searchedCountry]);
	return (
		<ContextCountries.Provider
			value={{
				countries,
				filter,
				handleSetFilter,
				getCountryFromSearch,
				showCountries,
				searchedCountry,
			}}
		>
			{props.children}
		</ContextCountries.Provider>
	);
};

export default ContextCountries;
