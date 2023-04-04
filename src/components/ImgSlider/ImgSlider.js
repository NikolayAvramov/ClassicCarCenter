import Carousel from "react-bootstrap/Carousel";
import img1 from "./sliderImg/1.webp";
import img2 from "./sliderImg/2.webp";
import img3 from "./sliderImg/3.webp";
import img4 from "./sliderImg/4.webp";
import img5 from "./sliderImg/5.webp";

export function ImgSlider() {
	return (
		<Carousel className="container">
			<Carousel.Item>
				<img className="d-block w-100" src={img1} alt="First slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={img2} alt="Second slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={img3} alt="Third slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={img4} alt="Fourth slide" />
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={img5} alt="Fifth slide" />
			</Carousel.Item>
		</Carousel>
	);
}
