import CardCss from "./Card.module.css";
import {useContext} from "react";
import {AuthContext} from "../../contexts/AuthContext.js";
import {useNavigate} from "react-router-dom";
export function Card({info}) {
	const {user} = useContext(AuthContext);
	const navigate = useNavigate();
	function onDetailsClick(e) {
		console.log(e);
		navigate(`/details/${info.objectId}`);
	}

	return (
		<div onClick={onDetailsClick} className={CardCss.card}>
			<img src={info.img1} alt={info.make} />
			<h3>{info.make + " " + info.model}</h3>
			<p>Price :{info.price} $</p>
			<p>Year :{info.year}</p>
			{user ? <button>Contact Seller</button> : <p>If you want to see contact details ,you have to login</p>}

			<p className={CardCss.views}>Views : 1231</p>
		</div>
	);
}
