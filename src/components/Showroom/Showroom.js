import {useContext} from "react";

import {ContentContext} from "../../contexts/ContentContext.js";
import {AuthContext} from "../../contexts/AuthContext.js";
import {Card} from "../Card/Card.js";
import ShowroomCss from "./Showroom.module.css";

export function Showroom() {
	const {user} = useContext(AuthContext);

	const {cars} = useContext(ContentContext);
	return (
		<div className={ShowroomCss.wrapper}>
			{cars.map(car => {
				return (
					<div className={ShowroomCss.card}>
						<Card key={car.objectId} info={car} />
					</div>
				);
			})}
		</div>
	);
}
