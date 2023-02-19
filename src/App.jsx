import Home from "./Pages/home/Home";
import "./app.css";
import { Route, Routes } from "react-router-dom";
import ContextCountries, { ContextProvider } from "./context/ContextCountries";
import Details from "./Pages/details/Details";

// import data from "./data.json";
function App() {
	return (
		<ContextProvider>
			<div className=" app dark ">
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/:numericCode" element={<Details />}></Route>
				</Routes>
			</div>
		</ContextProvider>
	);
}

export default App;
