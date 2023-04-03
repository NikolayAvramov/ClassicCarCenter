import DetailsCss from "./Details.module.css";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getById} from "../../service/dataService.js";
import Spinner from "react-bootstrap/Spinner";
<<<<<<< Updated upstream

export function Details() {
	const {carId} = useParams();
	const [data, setData] = useState("");
	const [secondary, setSecondary] = useState();
=======
import {AuthContext} from "../../contexts/AuthContext.js";
import {useNavigate} from "react-router-dom";
import {Edit} from "../Edit/Edit.js";
import {ContentContext} from "../../contexts/ContentContext.js";
export function Details({setCars}) {
	const {carId} = useParams();
	const [data, setData] = useState("");
	const {user} = useContext(AuthContext);
	const navigate = useNavigate();
	let {myCars} = useContext(ContentContext);
	let isOwner = false;
	let isAuthenticated = false;
	if (user) {
		if (user.objectId === data.owner) {
			isOwner = true;
		} else {
			isAuthenticated = true;
		}
	}
	const img = [];
	const [isEditing, setIsEditing] = useState(false);
	const [selected, setSelected] = useState({});
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
=======
	function onDeleteClick() {
		del(carId, user.sessionToken);
		navigate("/my-showroom");
		myCars = myCars.filter(car => car.objectId != carId);

		// delete current car
	}
	const [message, setMessage] = useState("");
	const mesageData = {
		carOwner: data.owner,
		mesage: message,
		writer: user.username
	};
	const token = user.sessionToken;
	async function onClickSend() {
		const result = await sendMessage(mesageData, token);
		console.log(result);
	}

	function onEditClick() {
		setIsEditing(true);
		navigate(`/edit/${carId}`);
	}
>>>>>>> Stashed changes
	return (
		<div className={DetailsCss.container}>
			{data ? (
				<>
					<section className={DetailsCss.imagePanel}>
						<img src={selected.value} alt="" height="60%" width="100%" />

<<<<<<< Updated upstream
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
=======
								<div className={DetailsCss.secondaryImg}>
									{img.map((data, i) => {
										return (
											<div key={i}>
												<img className={selected.id === i ? DetailsCss.main : DetailsCss.secondaryImg} src={data.value} alt="" onClick={() => onClickHandler(i)} />
											</div>
										);
									})}
								</div>
							</section>
							<section className={DetailsCss.infoPanel}>
								<h4>{`${data.make} ${data.model}`}</h4>
								<p className={DetailsCss.description}>{data.description}</p>
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
								{isAuthenticated && (
									<div>
										<textarea name="" id="" cols="25" rows="2" value={message} onChange={e => setMessage(e.target.value)}></textarea>
										<button onClick={onClickSend}>send</button>
									</div>
								)}
								{isOwner && (
									<>
										{" "}
										<button onClick={onEditClick} className="btn btn-round btn-primary" type="button">
											Edit
										</button>
										<button onClick={onDeleteClick} className="btn btn-round btn-danger" type="button">
											Delete
										</button>
									</>
								)}
							</section>
						</>
					) : (
						<Spinner className={DetailsCss.spinner} animation="border" variant="secondary" />
					)}
>>>>>>> Stashed changes
				</>
			) : (
				<Spinner className={DetailsCss.spinner} animation="border" variant="secondary" />
			)}
		</div>
	);
}
