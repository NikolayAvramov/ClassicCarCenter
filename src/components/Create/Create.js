import {useState} from "react";
import {useNavigate} from "react-router-dom";

import CreateCSS from "./Create.module.css";

import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";

export function Create({setIsAdding}) {
	const navigate = useNavigate();
	const [time, setTime] = useState("");
	const [formValues, setFormValues] = useState({
		views: 0,
		title: "",
		img1: "",
		img2: "",
		img3: "",
		img4: "",
		img5: "",
		img6: "",
		price: 0,
		description: "",
		category: "",
		condition: "",
		expireAt: ""
	});

	async function createNew(e) {
		e.preventDefault();
		if (formValues.img1 === "") {
			formValues.img1 = "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
		}
		const response = await create(formValues);
		const result = await response.json();
		if (response.ok) {
			navigate("/my-auctions");
			setIsAdding(false);
			const data = await getAllArticles();
			setCards(data);
		}

		// 	{ "__type": "File", "name": "resume.txt" }
	}

	function onDataChange(e) {
		setFormValues(state => ({...state, [e.target.name]: e.target.value}));
	}

	function onClickChange() {
		setIsAdding(false);
	}
	const [showMakeError, setShowMakeError] = useState(false);
	const [showPriceError, setShowPriceError] = useState(false);
	const [showDescriptionError, setShowDescriptionError] = useState(false);

	return (
		<div className={CreateCSS.overlay}>
			<div className={CreateCSS.backdrop}></div>
			<div className={CreateCSS.modal}>
				<div className={CreateCSS.userContainer}>
					<header className={CreateCSS.headers}>
						<h2>Add new item</h2>
						<CloseButton onClick={onClickChange} />
					</header>
					<form>
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
								<label htmlFor="category">Category</label>
								<div className={CreateCSS.inputWrapper}>
									<select name="category" value={formValues.category} onChange={onDataChange}>
										<option value=""></option>
										<option value="Electronics">Electronics</option>
										<option value="Fashion">Fashion</option>
										<option value="Home & Garden">Home & Garden</option>
										<option value="Auto Parts & Accessories">Auto Parts & Accessories</option>
										<option value="Musical Instruments">Musical Instruments</option>
										<option value="Sport & Health">Sport & Health</option>
										<option value="Toys & Hobbies">Toys & Hobbies</option>
										<option value="Pet Supplies">Pet Supplies</option>
										<option value="Antiques">Antiques</option>
									</select>
								</div>
							</div>
							<div className={CreateCSS.formGroup}>
								<label htmlFor="condition">Condition</label>
								<div className={CreateCSS.inputWrapper}>
									<select name="condition" value={formValues.condition} onChange={onDataChange}>
										<option value=""></option>
										<option value="Brand New">Brand New</option>
										<option value="Refurbished">Refurbished</option>
										<option value="For parts or not working">For parts or not working</option>
									</select>
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
								<label htmlFor="price">Strating Price</label>
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
								{showPriceError && <p className={CreateCSS.formError}>Strating Price must be greater than 0!</p>}
							</div>
							<div className={CreateCSS.formGroup}>
								<label htmlFor="time">Time</label>
								<div className={CreateCSS.inputWrapper}>
									<select
										name="time"
										id="name"
										value={time}
										onChange={e => {
											setTime(e.target.value);
											const newDate = setTimer(e.target.value);
											setFormValues(state => ({...state, expireAt: newDate}));
										}}
									>
										<option value=""></option>
										<option value="12hr">12Hr</option>
										<option value="24hr">24Hr</option>
									</select>
								</div>
							</div>
						</div>

						<div className={CreateCSS.formRow}>
							<div className={CreateCSS.formGroup}>
								<label htmlFor="picture">Picture</label>
								<div className={CreateCSS.inputWrapper}>
									<span>
										<FontAwesomeIcon icon={faImage} />
									</span>
									<input type="text" placeholder="Put url on your image here" name="img1" value={formValues.img1} onChange={onDataChange} />
								</div>
							</div>
							<div className={CreateCSS.formGroup}>
								<label htmlFor="picture">Picture</label>
								<div className={CreateCSS.inputWrapper}>
									<span>
										<FontAwesomeIcon icon={faImage} />
									</span>
									<input type="text" placeholder="Put url on your image here" name="img2" value={formValues.img2} onChange={onDataChange} />
								</div>
							</div>
							<div className={CreateCSS.formGroup}>
								<label htmlFor="picture">Picture</label>
								<div className={CreateCSS.inputWrapper}>
									<span>
										<FontAwesomeIcon icon={faImage} />
									</span>
									<input type="text" placeholder="Put url on your image here" name="img3" value={formValues.img3} onChange={onDataChange} />
								</div>
							</div>
						</div>

						<div className={CreateCSS.formRow}>
							<div className={CreateCSS.formGroup}>
								<label htmlFor="picture">Picture</label>
								<div className={CreateCSS.inputWrapper}>
									<span>
										<FontAwesomeIcon icon={faImage} />
									</span>
									<input type="text" placeholder="Put url on your image here" name="img4" value={formValues.img4} onChange={onDataChange} />
								</div>
							</div>
							<div className={CreateCSS.formGroup}>
								<label htmlFor="picture">Picture</label>
								<div className={CreateCSS.inputWrapper}>
									<span>
										<FontAwesomeIcon icon={faImage} />
									</span>
									<input type="text" placeholder="Put url on your image here" name="img5" value={formValues.img5} onChange={onDataChange} />
								</div>
							</div>
							<div className={CreateCSS.formGroup}>
								<label htmlFor="picture">Picture</label>
								<div className={CreateCSS.inputWrapper}>
									<span>
										<FontAwesomeIcon icon={faImage} />
									</span>
									<input type="text" placeholder="Put url on your image here" name="img6" value={formValues.img6} onChange={onDataChange} />
								</div>
							</div>
						</div>

						<div className={CreateCSS.formAction}>
							<Button onClick={createNew} type="button" size="sm" variant="outline-primary">
								ADD
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
