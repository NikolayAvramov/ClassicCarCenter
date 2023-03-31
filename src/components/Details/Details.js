import DetailsCss from "./Details.module.css";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getById} from "../../service/dataService.js";
import Spinner from "react-bootstrap/Spinner";

export function Details() {
	const {carId} = useParams();
	const [data, setData] = useState("");
	const [secondary, setSecondary] = useState();

	async function getSelectedItem() {
		const result = await getById(carId);
		setData(result);
	}
	useEffect(() => {
		getSelectedItem();
	});
	const img = [
		{id: "0", value: data.img1},
		{id: "1", value: data.img2},
		{id: "2", value: "https://hips.hearstapps.com/hmg-prod/images/my22-hypersonic-1619122058.jpg?resize=480:*"}
	];
	const [selected, setSelected] = useState(img[0]);

	function onClickHandler(index) {
		console.log(index);
		const main = img[index];
		setSelected(main);
	}

	return (
		<div className={DetailsCss.container}>
			{data ? (
				<>
					<section className={DetailsCss.imagePanel}>
						<img src={selected.value} alt="" height="60%" width="100%" />

						<div className={DetailsCss.secondaryImg}>
							{img.map((data, i) => {
								return (
									<div>
										<img className={selected.id == i ? DetailsCss.main : DetailsCss.secondaryImg} src={data.value} alt="" onClick={() => onClickHandler(i)} />
									</div>
								);
							})}
						</div>
					</section>
					<section className={DetailsCss.infoPanel}>
						<h4>{`${data.make} ${data.model}`}</h4>
						<p>{data.description}</p>
						<p>
							<strong>Price : </strong> ${data.price}
						</p>
						<p>
							<strong>Type : </strong> {data.type}
						</p>
						<p>
							<strong>Year : </strong> {data.year}
						</p>
						<p>Views: {data.views}</p>

						<button className="btn btn-round btn-primary" type="button">
							Edit
						</button>
						<button className="btn btn-round btn-danger" type="button">
							Delete
						</button>
					</section>
				</>
			) : (
				<Spinner className={DetailsCss.spinner} animation="border" variant="secondary" />
			)}
		</div>
	);
}
