import {useContext} from "react";

import {ContentContext} from "../../contexts/ContentContext.js";
import {AuthContext} from "../../contexts/AuthContext.js";
import {Card} from "../Card/Card.js";
import ShowroomCss from "./Showroom.module.css";
import {getAll} from "../../service/dataService.js";
import {useEffect} from "react";
export function Showroom({setCars}) {
	const {cars} = useContext(ContentContext);

	useEffect(() => {
		getAll().then(result => setCars(result));
	}, []);

	return (
		<div className={ShowroomCss.wrapper}>
			{cars ? (
				<>
					{cars.map(car => {
						return (
							<div key={car.objectId} className={ShowroomCss.card}>
								<Card info={car} />
							</div>
						);
					})}
				</>
			) : (
				<>
					<h1 className={ShowroomCss.emptyTitle}>The showroom is empty!</h1>
				</>
			)}
		</div>
	);
}
