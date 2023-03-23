import {AuthContext} from "./contexts/AuthContext.js";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {Login} from "./components/Login/Login.js";
import {Navigation} from "./components/Navigation/Navigation.js";
import {Register} from "./components/Register/Register.js";
import AppCss from "./App.module.css";
import {useState} from "react";
import {MyShowroom} from "./components/MyShowroom/MyShowroom.js";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card} from "./components/Card/Card.js";
import {Details} from "./components/Details/Details.js";
function App() {
	const [user, setUser] = useState();
	const authContextValues = {
		user
	};

	return (
		<AuthContext.Provider value={authContextValues}>
			<div className={AppCss.home}>
				<Details />
				{/* <Navigation />
				<div className={AppCss.dynamic}>
					<Routes>
						<Route path="/login" element={<Login setUser={setUser} />} />
						<Route path="/register" element={<Register setUser={setUser} />} />
						<Route path="/my-showroom" element={<MyShowroom />} />
					</Routes>
				</div> */}
			</div>
		</AuthContext.Provider>
	);
}

export default App;
