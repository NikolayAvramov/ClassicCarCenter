import {ImgSlider} from "../ImgSlider/ImgSlider.js";
import HomeCss from "./Home.module.css";

export function Home() {
	return (
		<div className={HomeCss.dynamic}>
			<ImgSlider />
		</div>
	);
}
