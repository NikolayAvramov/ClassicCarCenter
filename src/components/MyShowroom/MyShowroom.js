import MyShowroomCss from "./MyShowroom.module.css";
import {Create} from "../Create/Create.js";
import {useContext, useEffect, useState} from "react";
import {Card} from "../Card/Card.js";

import {ContentContext} from "../../contexts/ContentContext.js";
import {AuthContext} from "../../contexts/AuthContext.js";

<<<<<<< Updated upstream
export function MyShowroom() {
	const {user} = useContext(AuthContext);
=======
export function MyShowroom({setCars}) {
	const {myCars} = useContext(ContentContext);
>>>>>>> Stashed changes

	const {cars} = useContext(ContentContext);
	const [isAdding, setIsAdding] = useState(false);
<<<<<<< Updated upstream
	const myCars = cars.filter(car => car.owner === user.objectId);
=======

	useEffect(() => {
		getAll().then(result => setCars(result));
	}, [isAdding]);
>>>>>>> Stashed changes

	return (
		<div className={MyShowroomCss.wrapper}>
			{myCars.map(car => {
				return (
					<div className={MyShowroomCss.card}>
						<Card key={car.objectId} info={car} />
					</div>
				);
			})}
			{isAdding ? (
				<Create setIsAdding={setIsAdding} />
			) : (
				<button onClick={() => setIsAdding(true)} className={MyShowroomCss.addBtn}>
					Add Car
				</button>
			)}
		</div>
	);
}
