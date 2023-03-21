import {AuthContext} from "../../contexts/AuthContext.js";
import {useContext} from "react";
import {Link} from "react-router-dom";
import NavCSS from "./Navigation.module.css";

export function Navigation() {
	const {user} = useContext(AuthContext);
	return (
		<div className={NavCSS.wrapper}>
			<Link className={NavCSS.links} to={"/"}>
				Home
			</Link>
			<Link className={NavCSS.links} to={"/"}>
				Showroom
			</Link>
			{!user ? (
				<>
					<Link className={NavCSS.links} to={"/login"}>
						Login
					</Link>
					<Link className={NavCSS.links} to={"/register"}>
						Register
					</Link>
				</>
			) : (
				<>
					<Link className={NavCSS.links} to={"/my-showroom"}>
						My Showroom
					</Link>
					<Link className={NavCSS.links} to={"/"}>
						Logout
					</Link>
				</>
			)}
		</div>
	);
}
