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
import {RouteGuards} from "./components/coman/RouteGuards.js";
import {Edit} from "./components/Edit/Edit.js";
import {Messages} from "./components/Messasges/Messages.js";
function App() {
	const [user, setUser] = useState();
	const [cars, setCars] = useState([]);
	const authContextValues = {
		user
	};
	let myCars = [];
	if (cars && user) {
		myCars = cars.filter(car => car.owner === user.objectId);
	}
	const contentValues = {
		cars,
		myCars
	};
	async function takeAll() {
		const result = await getAll();
		setCars(result.results);
		console.log(result.results);
	}
	useEffect(() => {
		getAll().then(result => setCars(result.results));
	}, []);

	return (
		<AuthContext.Provider value={authContextValues}>
			<ContentContext.Provider value={contentValues}>
				<Navigation setUser={setUser} />
				<Routes>
					<Route path="/login" element={<Login setUser={setUser} />} />
					<Route path="/register" element={<Register setUser={setUser} />} />
					<Route path="/showroom" element={<Showroom setCars={setCars} />} />
					<Route element={<RouteGuards />}>
						<Route path="/create" element={<Create setCars={setCars} />} />
						<Route path="/my-showroom" element={<MyShowroom setCars={setCars} />} />
						<Route path="/edit/:id" element={<Edit />} />
						<Route path="user/message" element={<Messages />} />
					</Route>
					<Route path="/details/:carId" element={<Details setCars={setCars} />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</ContentContext.Provider>
			<Footer />
		</AuthContext.Provider>
	);
}

export default App;
