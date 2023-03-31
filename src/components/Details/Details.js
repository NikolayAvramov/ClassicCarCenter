import DetailsCss from "./Details.module.css";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

export function Details() {
	const {carId} = useParams();

	const [data, setData] = useState("");
	const [secondary, setSecondary] = useState();

	async function
	useEffect(() => {});
	const img = [
		{id: "1", value: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMEFPgAAofFnzTTxgZqfwe6hyWMRFHM1UT8rru-H94uEL0teVzwCsopXhJHgu89KtHZDo&usqp=CAU"},
		{id: "2", value: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRotbjCDbJFjJQoBQVrZpPmy2MpBlACvbUUklRKCeP1q8rtIntc_0eQUb-UqlPkdBSa4cg&usqp=CAU"},
		{id: "3", value: "https://hips.hearstapps.com/hmg-prod/images/my22-hypersonic-1619122058.jpg?resize=480:*"}
	];
	const [selected, setSelected] = useState(img[0]);

	function onClickHandler(index) {
		console.log(index);
		const main = img[index];
		setSelected(main);
	}

	return (
		<div className={DetailsCss.container}>
			<section className={DetailsCss.imagePanel}>
				<img src={selected.value} alt="" height="500px" width="800px" />

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
				<h4>Make & Model</h4>
				<p>Praesent ac condimentum felis. Nulla at nisl orci, at dignissim dolor, The best product descriptions address your ideal buyer directly and personally. The best product descriptions address your ideal buyer directly and personally.</p>
				<p>
					<strong>Price : </strong> $300.00
				</p>
				<p>
					<strong>Type : </strong> Hatchback
				</p>
				<p>
					<strong>Year : </strong> 1967
				</p>
				<p>Views</p>

				<button className="btn btn-round btn-primary" type="button">
					Edit
				</button>
				<button className="btn btn-round btn-danger" type="button">
					Delete
				</button>
			</section>
		</div>
	);
}
