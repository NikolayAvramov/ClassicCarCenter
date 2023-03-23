import CardCss from "./Card.module.css";
import {useContext} from "react";
import {AuthContext} from "../../contexts/AuthContext.js";
export function Card() {
	const {user} = useContext(AuthContext);
	return (
		<div className={CardCss.card}>
			<img src="https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/users/59534/cars_images/59534-935369-car-20221004_224804-271189257_1598002147219391_7440776711852848892_n.jpg" alt="bmw-car" />
			<h3>make & model</h3>
			<p>Price</p>
			<p>Year</p>
			{user ? <button>More Info</button> : <p>If you want to see more info ,you have to login</p>}

			<p className={CardCss.views}>Views : 1231</p>
		</div>
	);
}
