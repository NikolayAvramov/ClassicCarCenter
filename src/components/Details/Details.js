import DetailsCss from "./Details.module.css";
import {useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom";
import {del, getById} from "../../service/dataService.js";
import Spinner from "react-bootstrap/Spinner";
import {AuthContext} from "../../contexts/AuthContext.js";
import {useNavigate} from "react-router-dom";
import {Edit} from "../Edit/Edit.js";
import {ContentContext} from "../../contexts/ContentContext.js";
import {sendMessage} from "../../service/messageService.js";
export function Details({setCars}) {
	const {carId} = useParams();
	const [data, setData] = useState("");
	const {user} = useContext(AuthContext);
	let {myCars} = useContext(ContentContext);
	const navigate = useNavigate();
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

	useEffect(() => {
		getById(carId).then(result => setData(result));
	}, []);

	if (data !== "") {
		if (data.img1 !== "") {
			img.push({id: 0, value: data.img1});
		}
		if (data.img2 !== "") {
			img.push({id: 1, value: data.img2});
		}
		if (data.img3 !== "") {
			img.push({id: 2, value: data.img3});
		}
		if (data.img4 !== "") {
			img.push({id: 3, value: data.img4});
		}
		if (data.img5 !== "") {
			img.push({id: 4, value: data.img5});
		}
	}

	function onClickHandler(index) {
		const main = img[index];
		setSelected(main);
	}

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
	return (
		<div className={DetailsCss.container}>
			{!isEditing ? (
				<>
					{data ? (
						<>
							<section className={DetailsCss.imagePanel}>
								<img src={selected.value} alt="" height="60%" width="90%" />

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
				</>
			) : (
				<Edit setIsEditing={setIsEditing} />
			)}
		</div>
	);
}
