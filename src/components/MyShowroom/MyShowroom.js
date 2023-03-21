import MyShowroomCss from "./MyShowroom.module.css";
import addCar from "../../fonts/Parking.png";
import {Create} from "../Create/Create.js";
export function MyShowroom() {
	const [isAdding, setIsAdding] = useState(false);
	return <div className={MyShowroomCss.wrapper}>{isAdding ? <Create setIsAdding={setIsAdding} /> : <button className={MyShowroomCss.addBtn}>Add Car</button>}</div>;
}
