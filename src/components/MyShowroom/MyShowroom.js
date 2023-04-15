import MyShowroomCss from "./MyShowroom.module.css";
import {Create} from "../Create/Create.js";
import {useContext, useEffect, useState} from "react";
import {Card} from "../Card/Card.js";

import {ContentContext} from "../../contexts/ContentContext.js";
import {AuthContext} from "../../contexts/AuthContext.js";

export function MyShowroom({setCars}) {
	const {user} = useContext(AuthContext);
	const {cars, getAllCars, updateMyCars} = useContext(ContentContext);
	let myCars = [];

	const [isAddShow, setIsAddShow] = useState(false);
	useEffect(() => {
		console.log("sdf");
		getAllCars();
	}, [isAddShow]);

	if (cars && user) {
		myCars = cars.filter(car => car.owner === user.objectId);
	}

	return (
		<div className={MyShowroomCss.wrapper}>
			{isAddShow ? (
				<Create setIsAddShow={setIsAddShow} />
			) : (
				<button onClick={() => setIsAddShow(true)} className={MyShowroomCss.addBtn}>
					Add Car
				</button>
			)}
			{myCars ? (
				<div className={MyShowroomCss.itemsWrapper}>
					{myCars.map(car => {
						return (
							<div key={car.objectId} className={MyShowroomCss.card}>
								<Card info={car} />
							</div>
						);
					})}
				</div>
			) : (
				<p>You don't post any car yet!</p>
			)}
		</div>
	);
}
