import LoginCSS from "./Login.module.css";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {login} from "../../service/api.js";
export function Login({setUser}) {
	const navigate = useNavigate();
	const [formValues, setFormValues] = useState({
		email: "",
		password: ""
	});
	const [error, setError] = useState(false);
	function onDataChange(e) {
		setFormValues(state => ({...state, [e.target.name]: e.target.value}));
	}
	async function onSubmitHandler(e) {
		e.preventDefault();
		const result = await login(formValues);
		const data = await result.json();

		if (!result.ok) {
			setError(true);
		} else {
			setError(false);

			navigate("/");
			console.log({...data, ...formValues.email});
			setUser(data);
		}
		return data;
	}
	return (
		<div className={LoginCSS.containerPage}>
			<div className={LoginCSS.loginWrapper}>
				<h2 className={LoginCSS.title}>Login</h2>
				<form onSubmit={onSubmitHandler} className={LoginCSS.form}>
					<div className={LoginCSS.inputBox}>
						<input type="text" required="required" name="email" value={formValues.email} onChange={onDataChange} />
						<span>Email</span>
					</div>
					<div className={LoginCSS.inputBox}>
						<input type="text" required="required" name="password" value={formValues.password} onChange={onDataChange} />
						<span>Password</span>
					</div>
					{error && <p className={LoginCSS.error}>Email address or password is wrong!</p>}

					<button onClick={onSubmitHandler} className={LoginCSS.loginBtn} type="submit">
						Login
					</button>
					<p>
						Don't have an account?{" "}
						<Link className={LoginCSS.link} to={"/register"}>
							Sign Up
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
}
