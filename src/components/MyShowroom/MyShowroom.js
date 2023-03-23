import MyShowroomCss from "./MyShowroom.module.css";
import addCar from "../../fonts/Parking.png";
import {Create} from "../Create/Create.js";
import {useState} from "react";
import {Card} from "../Card/Card.js";

export function MyShowroom() {
	const [isAdding, setIsAdding] = useState(false);

	return (
		<div className={MyShowroomCss.wrapper}>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
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
