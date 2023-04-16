import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {AuthContext} from "../../contexts/AuthContext.js";
import EditCSS from "./Edit.module.css";
import {useContext} from "react";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import {edit, getById} from "../../service/dataService.js";
import {ContentContext} from "../../contexts/ContentContext.js";

export function Edit(data) {
	const {changeIsEditingValue, isEditing} = useContext(ContentContext);
	const {user} = useContext(AuthContext);
	const {id} = useParams();
	const navigate = useNavigate();

	const [showMakeError, setShowMakeError] = useState(false);
	const [showPriceError, setShowPriceError] = useState(false);
	const [showDescriptionError, setShowDescriptionError] = useState(false);

	const [formValues, setFormValues] = useState({
		owner: user.objectId,
		make: "",
		model: "",
		type: "",
		price: 0,
		description: "",
		location: "",
		year: "",
		img1: "",
		img2: "",
		img3: "",
		img4: "",
		img5: ""
	});

	useEffect(() => {
		getById(id).then(result => setFormValues(result));
	}, []);

	function onDataChange(e) {
		setFormValues(state => ({...state, [e.target.name]: e.target.value}));
	}

	const token = user.sessionToken;
	async function onSubmitEdit() {
		const result = await edit(id, token, {
			owner: user.objectId,
			make: formValues.make,
			model: formValues.model,
			type: formValues.type,
			price: formValues.price,
			description: formValues.description,
			location: formValues.location,
			year: formValues.year,
			img1: formValues.img1,
			img2: formValues.img2,
			img3: formValues.img3,
			img4: formValues.img4,
			img5: formValues.img5
		});
		navigate("/my-showroom");
		changeIsEditingValue(false);
	}

	function closeEditView() {
		changeIsEditingValue(false);
		navigate(`/details/${id}`);
	}

	return (
		<div className={EditCSS.overlay}>
			<div className={EditCSS.backdrop}></div>
			<div className={EditCSS.modal}>
				<div className={EditCSS.userContainer}>
					<header className={EditCSS.headers}>
						<h2 className={EditCSS.title}>Edit car</h2>
						<CloseButton className={EditCSS.closeBtn} onClick={closeEditView} />
					</header>
					<form onSubmit={onSubmitEdit}>
						<div className={EditCSS.formRow}>
							<div className={EditCSS.formGroup}>
								<label htmlFor="make">Make</label>
								<div className={EditCSS.inputWrapper}>
									<input
										id="make"
										name="make"
										type="text"
										value={formValues.make}
										onChange={onDataChange}
										onBlur={() => {
											if (formValues.make.length < 2) {
												setShowMakeError(true);
											} else {
												setShowMakeError(false);
											}
										}}
									/>
								</div>
								{showMakeError && <p className={EditCSS.formError}>Title should be at least 2 characters long!</p>}
							</div>
							<div className={EditCSS.formGroup}>
								<label htmlFor="category">Model</label>
								<div className={EditCSS.inputWrapper}>
									<input id="model" name="model" type="text" value={formValues.model} onChange={onDataChange} />
								</div>
							</div>
							<div className={EditCSS.formGroup}>
								<label htmlFor="type">Type</label>
								<div className={EditCSS.inputWrapper}>
									<input id="type" name="type" type="text" value={formValues.type} onChange={onDataChange} />
								</div>
							</div>
						</div>

						<div className={EditCSS.formRow}>
							<div className={EditCSS.formGroup}>
								<label htmlFor="description">Description</label>
								<div className={EditCSS.inputWrapper}>
									<textarea
										type="textArea"
										name="description"
										value={formValues.description}
										onChange={onDataChange}
										onBlur={() => {
											if (formValues.description.length < 30) {
												setShowDescriptionError(true);
											} else {
												setShowDescriptionError(false);
											}
										}}
									/>
								</div>
								{showDescriptionError && <p className={EditCSS.formError}>Description should be at least 30 characters long!</p>}
							</div>
							<div className={EditCSS.formGroup}>
								<label htmlFor="price">Price</label>
								<div className={EditCSS.inputWrapper}>
									<input
										type="number"
										name="price"
										value={formValues.price}
										onChange={onDataChange}
										onBlur={() => {
											if (formValues.price <= 0) {
												setShowPriceError(true);
											} else {
												setShowPriceError(false);
											}
										}}
									/>
								</div>
								{showPriceError && <p className={EditCSS.formError}>Price must be greater than 0!</p>}
							</div>
							<div className={EditCSS.formGroup}>
								<label htmlFor="location">Location</label>
								<div className={EditCSS.inputWrapper}>
									<input id="location" name="location" type="text" value={formValues.location} onChange={onDataChange} />
								</div>
							</div>
						</div>

						<div className={EditCSS.formRow}>
							<div className={EditCSS.formGroup}>
								<label htmlFor="year">Year</label>
								<div className={EditCSS.inputWrapper}>
									<input type="number" name="year" value={formValues.year} onChange={onDataChange} />
								</div>
							</div>
							<div className={EditCSS.formGroup}>
								<label htmlFor="image">Image</label>
								<div className={EditCSS.inputWrapper}>
									<input type="text" name="img1" value={formValues.img1} onChange={onDataChange} />
								</div>
							</div>
							<div className={EditCSS.formGroup}>
								<label htmlFor="image">Image</label>
								<div className={EditCSS.inputWrapper}>
									<input type="text" name="img2" value={formValues.img2} onChange={onDataChange} />
								</div>
							</div>
						</div>

						<div className={EditCSS.formRow}>
							<div className={EditCSS.formGroup}>
								<label htmlFor="image">Image</label>
								<div className={EditCSS.inputWrapper}>
									<input type="text" name="img3" value={formValues.img3} onChange={onDataChange} />
								</div>
							</div>
							<div className={EditCSS.formGroup}>
								<label htmlFor="image">Image</label>
								<div className={EditCSS.inputWrapper}>
									<input type="text" name="img4" value={formValues.img4} onChange={onDataChange} />
								</div>
							</div>
							<div className={EditCSS.formGroup}>
								<label htmlFor="image">Image</label>
								<div className={EditCSS.inputWrapper}>
									<input type="text" name="img5" value={formValues.img5} onChange={onDataChange} />
								</div>
							</div>
						</div>
						<div className={EditCSS.formAction}>
							<Button onClick={onSubmitEdit} type="button" size="sm" variant="outline-primary">
								Save
							</Button>{" "}
							<Button variant="outline-danger" size="sm" onClick={closeEditView}>
								Cancel
							</Button>{" "}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
