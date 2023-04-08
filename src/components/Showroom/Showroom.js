import {useContext} from "react";
import {ContentContext} from "../../contexts/ContentContext.js";

import {Card} from "../Card/Card.js";
import ShowroomCss from "./Showroom.module.css";

import {useEffect} from "react";

export function Showroom() {
	const {cars, getAllCars} = useContext(ContentContext);

	useEffect(() => {
		getAllCars();
	}, []);

	return (
		<div className={ShowroomCss.wrapper}>
			{cars ? (
				<div className={ShowroomCss.itemsWrapper}>
					{cars.map(car => {
						return (
							<div key={car.objectId} className={ShowroomCss.card}>
								<Card info={car} />
							</div>
						);
					})}
				</div>
			) : (
				<>
					<h1 className={ShowroomCss.emptyTitle}>The showroom is empty!</h1>
				</>
			)}
		</div>
	);
}
