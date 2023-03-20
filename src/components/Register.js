import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

import {register} from "../service/api.js";
import {setUserData} from "../service/util.js";
import RegisterCSS from "./Register.module.css";

export function Register({setUser}) {
	const navigate = useNavigate();
	const [formValues, setFormValues] = useState({
		email: "",
		username: "",
		password: ""
	});
	const [rePassword, setRePassword] = useState("");

	function onDataChange(e) {
		setFormValues(state => ({...state, [e.target.name]: e.target.value}));
	}

	async function onSubmitHandler(e) {
		e.preventDefault();
		const result = await register(formValues);
		const data = await result.json();
		console.log(data);
		setUserData({data});
		setUser(data);
		console.log(data);
		navigate("/");
		return data;
	}

	return (
		<div className={RegisterCSS.containerPage}>
			<div className={RegisterCSS.registerWrapper}>
				<h2 className={RegisterCSS.title}>Register</h2>
				<form onSubmit={onSubmitHandler} className={RegisterCSS.form}>
					<div className={RegisterCSS.inputBox}>
						<input type="text" required="required" name="username" value={formValues.username} onChange={onDataChange} />
						<span>Username</span>
					</div>
					<div className={RegisterCSS.inputBox}>
						<input type="text" required="required" name="email" value={formValues.email} onChange={onDataChange} />
						<span>Email</span>
					</div>
					<div className={RegisterCSS.inputBox}>
						<input type="text" required="required" name="password" value={formValues.password} onChange={onDataChange} />
						<span>Password</span>
					</div>
					<div className={RegisterCSS.inputBox}>
						<input type="text" required="required" name="RePassword" value={rePassword} onChange={e => setRePassword(e.target.value)} />
						<span> Repeat Password</span>
					</div>

					<button className={RegisterCSS.registerBtn} type="submit">
						Register
					</button>

					<p>
						Already have an account?{" "}
						<Link className={RegisterCSS.link} to={"/login"}>
							Sign In
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
}
