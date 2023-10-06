import {ImgSlider} from "../ImgSlider/ImgSlider.js";
import HomeCss from "./Home.module.css";
import headerImg from "../../fonts/Classic-Car-Collecting-03.png";
export function Home() {
	return (
		<div className={HomeCss.dynamic}>
			<h2 className={HomeCss.title}>Classic Car </h2>

			<ImgSlider className={HomeCss.slides} />
			<p className={HomeCss.text}>Classic Car Center is the best place to found your new classic car or to sell your.Here you can found many announce on diferent makes and models and connect directly with the seller. Enjoy to your tour in our Center.</p>
		</div>
	);
}
