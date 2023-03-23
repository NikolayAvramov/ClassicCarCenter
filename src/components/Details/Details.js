import DetailsCss from "./Details.module.css";
import {useState} from "react";
export function Details() {
	const [selected, setSelected] = useState();
	const [secondary, setSecondary] = useState();
	function onClick() {}

	return (
		<div>
			<h2>Title</h2>
			<img className={`DetailsCss.${d}`} src="https://hips.hearstapps.com/hmg-prod/images/2023-mclaren-artura-101-1655218102.jpg?crop=1.00xw:0.847xh;0,0.153xh&resize=1200:*" alt="img1" />
			<img className={DetailsCss.secondary} src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/rolls_royce_phantom_top_10.jpg?itok=XjL9f1tx" alt="img1" />
			<img className={DetailsCss.secondary} src="https://imageio.forbes.com/specials-images/imageserve/5f962df3991e5636a2f68758/0x0.jpg?format=jpg&crop=812,457,x89,y103,safe&width=1200" alt="img1" />
			<img className={DetailsCss.secondary} src="https://www.autocar.co.uk/sites/autocar.co.uk/files/range-rover-2022-001-tracking-front.jpg" alt="img1" />
			<img className={DetailsCss.secondary} src="https://cdn.motor1.com/images/mgl/mrz1e/s3/coolest-cars-feature.jpg" alt="img1" />
		</div>
	);
}
