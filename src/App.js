import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import {Login} from "./components/Login.js";
import {Register} from "./components/Register.js";
function App() {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
		</Routes>
	);
}

export default App;
