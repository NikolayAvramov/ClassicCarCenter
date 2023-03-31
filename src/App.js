import {AuthContext} from "./contexts/AuthContext.js";
import {ContentContext} from "./contexts/ContentContext.js";

import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";

import {useState, useEffect} from "react";

import {Login} from "./components/Login/Login.js";
import {Navigation} from "./components/Navigation/Navigation.js";
import {Register} from "./components/Register/Register.js";
import {MyShowroom} from "./components/MyShowroom/MyShowroom.js";
import {Details} from "./components/Details/Details.js";
import {Footer} from "./components/Footer/Footer.js";
import {Home} from "./components/Home/Home.js";
import "bootstrap/dist/css/bootstrap.min.css";
import {getAll} from "./service/dataService.js";
import {Showroom} from "./components/Showroom/Showroom.js";
import {Create} from "./components/Create/Create.js";
function App() {
	const [user, setUser] = useState();
	const [cars, setCars] = useState([]);
	const authContextValues = {
		user
	};
	const contentValues = {
		cars
	};
	async function takeAll() {
		const result = await getAll();
		setCars(result.results);
		console.log(result.results);
	}
	useEffect(() => {
		takeAll();
	}, []);

	return (
		<AuthContext.Provider value={authContextValues}>
			<ContentContext.Provider value={contentValues}>
				<Navigation setUser={setUser} />
				<Routes>
					<Route path="/login" element={<Login setUser={setUser} />} />
					<Route path="/register" element={<Register setUser={setUser} />} />
					<Route path="/showroom" element={<Showroom />} />
					<Route path="/create" element={<Create setCars={setCars} />} />
					<Route path="/my-showroom" element={<MyShowroom />} />
					<Route path="/details/:carId" element={<Details />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</ContentContext.Provider>
			<Footer />
		</AuthContext.Provider>
	);
}

export default App;
