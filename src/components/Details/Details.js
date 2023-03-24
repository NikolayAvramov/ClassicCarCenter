import DetailsCss from "./Details.module.css";
import {useState} from "react";
export function Details() {
	const [selected, setSelected] = useState();
	const [secondary, setSecondary] = useState();
	function onClick() {}

	return (
		<div className={(DetailsCss.container, DetailsCss.bootdey)}>
			<div className={DetailsCss.col_md_12}>
				<section className={DetailsCss.panel}>
					<div className={DetailsCss.panel_body}>
						<div className={DetailsCss.col_md_6}>
							<div className={DetailsCss.pro_img_details}>
								<img src="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/rolls_royce_phantom_top_10.jpg?itok=XjL9f1tx" alt="" />
							</div>
							<div className={DetailsCss.pro_img_list}>
								<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYJgj0jZNwQ1CssySoVIJFcW9p_NzoojkQLg&usqp=CAU" alt="" />

								<img src="https://content-images.carmax.com/qeontfmijmzv/MY19MKj0XutK084z874jt/9632621fd8464b5c0e54a9dee64ad4e5/tesla.jpg" alt="" />

								<img src="https://www.motortrend.com/uploads/2022/03/2022-Honda-Civic-Touring-vs-2022-Hyundai-Elantra-Limited-vs-2022-Kia-Forte-GT-vs-2022-Mazda-Mazda3-Sedan-AWD-Turbo-vs-2022-Nissan-Sentra-SR-vs-2022-Volkswagen-Jetta-SEL-19.jpg?fit=around%7C875:492" alt="" />

								<img src="https://www.supercars.net/blog/wp-content/uploads/2022/09/Best-New-Sports-and-Performance-Cars-2022_Chevrolet_Corvette.jpg" alt="" />
							</div>
						</div>
						<div className={DetailsCss.col_md_6}>
							<h4 className={DetailsCss.pro_d_title}>
								<p>Leopard Shirt Dress</p>
							</h4>
							<p>Praesent ac condimentum felis. Nulla at nisl orci, at dignissim dolor, The best product descriptions address your ideal buyer directly and personally. The best product descriptions address your ideal buyer directly and personally.</p>
							<div className={DetailsCss.product_meta}>
								<span className={DetailsCss.posted_in}>
									{" "}
									<strong>Categories:</strong>{" "}
									<a rel="tag" href="#">
										Jackets
									</a>
									,{" "}
									<a rel="tag" href="#">
										Men
									</a>
									,{" "}
									<a rel="tag" href="#">
										Shirts
									</a>
									,{" "}
									<a rel="tag" href="#">
										T-shirt
									</a>
									.
								</span>
							</div>
							<div className="m-bot15">
								{" "}
								<strong>Price : </strong> <span className={DetailsCss.amount_old}>$544</span> <span className="pro-price"> $300.00</span>
							</div>

							<p>
								<button className="btn btn-round btn-danger" type="button">
									Edit
								</button>
								<button className="btn btn-round btn-danger" type="button">
									Delete
								</button>
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
