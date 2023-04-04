import MyShowroomCss from "./MyShowroom.module.css";
import {Create} from "../Create/Create.js";
import {useContext, useEffect, useState} from "react";
import {Card} from "../Card/Card.js";

import {ContentContext} from "../../contexts/ContentContext.js";
import {AuthContext} from "../../contexts/AuthContext.js";
import {getAll} from "../../service/dataService.js";

export function MyShowroom({setCars}) {
	const {user} = useContext(AuthContext);
	const {cars} = useContext(ContentContext);

	const [isAdding, setIsAdding] = useState(false);
	let myCars = [];
	if (cars) {
		myCars = cars.filter(car => car.owner === user.objectId);
	}
	useEffect(() => {
		console.log("sdfasdf");
		getAll().then(result => setCars(result));
	}, [isAdding]);

	return (
		<div className={MyShowroomCss.wrapper}>
			{isAdding ? (
				<Create setIsAdding={setIsAdding} />
			) : (
				<button onClick={() => setIsAdding(true)} className={MyShowroomCss.addBtn}>
					Add Car
				</button>
			)}
			{myCars ? (
				<>
					{myCars.map(car => {
						return (
							<div key={car.objectId} className={MyShowroomCss.card}>
								<Card info={car} />
							</div>
						);
					})}
				</>
			) : (
				<p>You don't post any car yet!</p>
			)}
		</div>
	);
}
