import {useState} from "react";
import ImgSliderCss from "./ImgSlider.module.css";
import {FaArrowRight, FaArrowLeft} from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";

const images = [
	{url: "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/users/71023/cars_images/71023-940911-car-20221109_164131-dsc_7681_-_web.jpg", index: 1},
	{url: "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/users/31421/cars_images/31421-953557-car-20230123_114054-img_7211mercedes_300_sl_.jpg", index: 2},
	{url: "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/users/206710/cars_images/206710-946775-car-20221129_155110-5e4a7712v2.jpg", index: 3},
	{url: "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/users/208753/cars_images/208753-950098-car-20221225_021252-s_10371076_0.jpg", index: 4},
	{url: "https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/cars_images/photoshoot_at_stace_08-12-2020_-_w_4k_m_363.jpg", index: 5}
];

export function ImgSlider() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel className="container" activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item>
				<img className="d-block w-100" src="https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/users/71023/cars_images/71023-940911-car-20221109_164131-dsc_7681_-_web.jpg" alt="First slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src="https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/users/31421/cars_images/31421-953557-car-20230123_114054-img_7211mercedes_300_sl_.jpg" alt="Second slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src="https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/users/206710/cars_images/206710-946775-car-20221129_155110-5e4a7712v2.jpg" alt="Third slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src="https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/users/208753/cars_images/208753-950098-car-20221225_021252-s_10371076_0.jpg" alt="Third slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src="https://www.classicdriver.com/cdn-cgi/image/format=auto,fit=cover,width=1920,height=1029/sites/default/files/cars_images/photoshoot_at_stace_08-12-2020_-_w_4k_m_363.jpg" alt="Third slide" />
			</Carousel.Item>
		</Carousel>
	);
}
