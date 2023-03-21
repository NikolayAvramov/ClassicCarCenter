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
function App() {
	const [user, setUser] = useState();
	const authContextValues = {
		user
	};

	return (
		<AuthContext.Provider value={authContextValues}>
			<div className={AppCss.home}>
				<Navigation />
				<Routes>
					<Route path="/login" element={<Login setUser={setUser} />} />
					<Route path="/register" element={<Register setUser={setUser} />} />
					<Route path="/my-showroom" element={<MyShowroom />} />
				</Routes>
			</div>
		</AuthContext.Provider>
	);
}

export default App;
