import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../contexts/AuthContext.js";
import CreateCSS from "./Create.module.css";
import {useContext} from "react";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import {create, getAll} from "../../service/dataService.js";

export function Create({setIsAddShow}) {
	const {user} = useContext(AuthContext);

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

	async function createNew(e) {
		e.preventDefault();

		const response = await create(formValues, user.sessionToken);
		const result = await response.json();

		if (response.ok) {
			navigate("/my-showroom");
			setIsAddShow(false);
		}
	}

	function onDataChange(e) {
		setFormValues(state => ({...state, [e.target.name]: e.target.value}));
	}

	function onClickChange() {
		setIsAddShow(false);
	}

	return (
		<div className={CreateCSS.overlay}>
			<div className={CreateCSS.backdrop}></div>
			<div className={CreateCSS.modal}>
				<div className={CreateCSS.userContainer}>
					<header className={CreateCSS.headers}>
						<h2>Add new car</h2>
						<CloseButton onClick={onClickChange} />
					</header>
					<form onSubmit={createNew}>
						<div className={CreateCSS.formRow}>
							<div className={CreateCSS.formGroup}>
								<label htmlFor="make">Make</label>
								<div className={CreateCSS.inputWrapper}>
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
								{showMakeError && <p className={CreateCSS.formError}>Title should be at least 2 characters long!</p>}
							</div>
							<div className={CreateCSS.formGroup}>
								<label htmlFor="category">Model</label>
								<div className={CreateCSS.inputWrapper}>
									<input id="model" name="model" type="text" value={formValues.model} onChange={onDataChange} />
								</div>
							</div>
							<div className={CreateCSS.formGroup}>
								<label htmlFor="type">Type</label>
								<div className={CreateCSS.inputWrapper}>
									<input id="type" name="type" type="text" value={formValues.type} onChange={onDataChange} />
								</div>
							</div>
						</div>

						<div className={CreateCSS.formRow}>
							<div className={CreateCSS.formGroup}>
								<label htmlFor="description">Description</label>
								<div className={CreateCSS.inputWrapper}>
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
								{showDescriptionError && <p className={CreateCSS.formError}>Description should be at least 30 characters long!</p>}
							</div>
							<div className={CreateCSS.formGroup}>
								<label htmlFor="price">Price</label>
								<div className={CreateCSS.inputWrapper}>
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
								{showPriceError && <p className={CreateCSS.formError}>Price must be greater than 0!</p>}
							</div>
							<div className={CreateCSS.formGroup}>
								<label htmlFor="location">Location</label>
								<div className={CreateCSS.inputWrapper}>
									<input id="location" name="location" type="text" value={formValues.location} onChange={onDataChange} />
								</div>
							</div>
						</div>

						<div className={CreateCSS.formRow}>
							<div className={CreateCSS.formGroup}>
								<label htmlFor="year">Year</label>
								<div className={CreateCSS.inputWrapper}>
									<input type="number" name="year" value={formValues.year} onChange={onDataChange} />
								</div>
							</div>
							<div className={CreateCSS.formGroup}>
								<label htmlFor="image">Image</label>
								<div className={CreateCSS.inputWrapper}>
									<input type="text" name="img1" value={formValues.img1} onChange={onDataChange} />
								</div>
							</div>
							<div className={CreateCSS.formGroup}>
								<label htmlFor="image">Image</label>
								<div className={CreateCSS.inputWrapper}>
									<input type="text" name="img2" value={formValues.img2} onChange={onDataChange} />
								</div>
							</div>
						</div>

						<div className={CreateCSS.formRow}>
							<div className={CreateCSS.formGroup}>
								<label htmlFor="image">Image</label>
								<div className={CreateCSS.inputWrapper}>
									<input type="text" name="img3" value={formValues.img3} onChange={onDataChange} />
								</div>
							</div>
							<div className={CreateCSS.formGroup}>
								<label htmlFor="image">Image</label>
								<div className={CreateCSS.inputWrapper}>
									<input type="text" name="img4" value={formValues.img4} onChange={onDataChange} />
								</div>
							</div>
							<div className={CreateCSS.formGroup}>
								<label htmlFor="image">Image</label>
								<div className={CreateCSS.inputWrapper}>
									<input type="text" name="img5" value={formValues.img5} onChange={onDataChange} />
								</div>
							</div>
						</div>
						<div className={CreateCSS.formAction}>
							<Button onClick={createNew} type="button" size="sm" variant="outline-primary">
								Add
							</Button>{" "}
							<Button variant="outline-danger" size="sm" onClick={onClickChange}>
								Cancel
							</Button>{" "}
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
