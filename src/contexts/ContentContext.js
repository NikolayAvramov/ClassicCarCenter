import {createContext, useContext, useEffect, useState} from "react";
import {getCars} from "../service/dataService.js";
import {AuthContext} from "./AuthContext.js";
export const ContentContext = createContext();

export function ContentProvider({children}) {
	const [cars, setCars] = useState([]);
	const {user} = useContext(AuthContext);

	function getAllCars() {
		getCars().then(result => setCars(result));
	}

	const contentValues = {
		cars,
		getAllCars
	};

	return (
		<>
			<ContentContext.Provider value={contentValues}>{children}</ContentContext.Provider>
		</>
	);
}
