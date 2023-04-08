import {createContext, useContext, useEffect, useState} from "react";
import {getCars} from "../service/dataService.js";
import {AuthContext} from "./AuthContext.js";
export const ContentContext = createContext();

export function ContentProvider({children}) {
	const [cars, setCars] = useState([]);
	const {user} = useContext(AuthContext);
	const [isEditing, setIsEditing] = useState(false);
	function getAllCars() {
		getCars().then(result => setCars(result));
	}

	function changeIsEditingValue(state) {
		setIsEditing(state);
	}
	const contentValues = {
		cars,
		isEditing,
		getAllCars,
		changeIsEditingValue
	};

	return (
		<>
			<ContentContext.Provider value={contentValues}>{children}</ContentContext.Provider>
		</>
	);
}
