import CardCss from "./Card.module.css";
import {useNavigate} from "react-router-dom";
export function Card({info}) {
	const navigate = useNavigate();
	function onDetailsClick(e) {
		navigate(`/details/${info.objectId}`);
		console.log(info);
	}

	return (
		<div onClick={onDetailsClick} className={CardCss.card}>
			<img src={info.img1} alt={info.make} />
			<h3>{info.make + " " + info.model}</h3>
			<p>Price :{info.price} $</p>
			<p>Year :{info.year}</p>
			<p>Description : {info.description.slice(0, 100)}... </p>
		</div>
	);
}
