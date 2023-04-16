import DetailsCss from "./Details.module.css";
import {useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom";
import {del, getById} from "../../service/dataService.js";
import Spinner from "react-bootstrap/Spinner";
import {AuthContext} from "../../contexts/AuthContext.js";
import {useNavigate} from "react-router-dom";
import {Edit} from "../Edit/Edit.js";
import Button from "react-bootstrap/Button";

import {sendMessage} from "../../service/messageService.js";
import {ContentContext} from "../../contexts/ContentContext.js";

export function Details({setCars}) {
	const {carId} = useParams();
	const [data, setData] = useState("");
	const [message, setMessage] = useState("");
	const [selected, setSelected] = useState({});
	const [showMessageArea, setShowMessageArrea] = useState(false);

	const {user} = useContext(AuthContext);
	const {changeIsEditingValue, isEditing} = useContext(ContentContext);
	const navigate = useNavigate();

	const token = user.sessionToken;
	const mesageData = {
		carOwner: data.owner,
		mesage: message,
		writer: user.username
	};
	let isOwner = false;
	let isAuthenticated = false;
	const img = [];

	if (user) {
		if (user.objectId === data.owner) {
			isOwner = true;
		} else {
			isAuthenticated = true;
		}
	}

	useEffect(() => {
		getById(carId).then(result => {
			setData(result);
			setSelected({value: result.img1});
		});
	}, []);

	if (data !== "") {
		if (data.img1 !== "") {
			img.push({value: data.img1});
		}
		if (data.img2 !== "") {
			img.push({value: data.img2});
		}
		if (data.img3 !== "") {
			img.push({value: data.img3});
		}
		if (data.img4 !== "") {
			img.push({value: data.img4});
		}
		if (data.img5 !== "") {
			img.push({value: data.img5});
		}
	}

	function onClickHandler(index) {
		const main = img[index];
		setSelected(main);
	}

	async function onDeleteClick() {
		await del(carId, user.sessionToken);

		navigate("/my-showroom");
	}
	async function onClickSend() {
		const result = await sendMessage(mesageData, token);
		setMessage("");
		setShowMessageArrea(false);
	}

	function onEditClick() {
		changeIsEditingValue(true);
		navigate(`/edit/${carId}`);
	}

	return (
		<div className={DetailsCss.container}>
			{isEditing ? (
				<Edit />
			) : (
				<>
					{data ? (
						<div className={DetailsCss.sections}>
							<section className={DetailsCss.imagePanel}>
								<img className={DetailsCss.primaryImg} src={selected.value} alt="" height="60%" width="90%" />

								<div className={DetailsCss.secondaryImg}>
									{img.map((data, i) => {
										return (
											<div key={i}>
												<img src={data.value} alt="" onClick={() => onClickHandler(i)} />
											</div>
										);
									})}
								</div>
							</section>
							<section className={DetailsCss.infoPanel}>
								<h4 className={DetailsCss.title}>{`${data.make} ${data.model}`}</h4>
								<p className={DetailsCss.description}>{data.description}</p>
								<p className={DetailsCss.row}>
									<span className={DetailsCss.span}>Price : </span> ${data.price}
								</p>
								<p className={DetailsCss.row}>
									<span className={DetailsCss.span}>Type : </span> {data.type}
								</p>
								<p className={DetailsCss.row}>
									<span className={DetailsCss.span}>Year : </span> {data.year}
								</p>

								{isAuthenticated && (
									<div>
										{showMessageArea ? (
											<div className={DetailsCss.contactArea}>
												<textarea className={DetailsCss.textArea} name="" id="" cols="25" rows="2" value={message} onChange={e => setMessage(e.target.value)}></textarea>
												<button className={DetailsCss.sendBtn} onClick={onClickSend}>
													Send
												</button>
												<button
													className={DetailsCss.cancelBtn}
													onClick={() => {
														setShowMessageArrea(false);
														setMessage("");
													}}
												>
													Cancel
												</button>
											</div>
										) : (
											<button className={DetailsCss.contactBtn} onClick={() => setShowMessageArrea(true)}>
												Contact Seller
											</button>
										)}
									</div>
								)}

								{isOwner && (
									<>
										{" "}
										<button className={DetailsCss.buttons} onClick={onEditClick} type="button">
											Edit
										</button>
										<button className={DetailsCss.buttons} type="button" onClick={onDeleteClick}>
											{" "}
											Delete
										</button>
									</>
								)}
							</section>
						</div>
					) : (
						<Spinner className={DetailsCss.spinner} animation="border" variant="secondary" />
					)}
				</>
			)}
		</div>
	);
}
