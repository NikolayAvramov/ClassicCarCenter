import {AuthContext} from "../../contexts/AuthContext.js";
import {useContext} from "react";
import {Link} from "react-router-dom";
import NavCSS from "./Navigation.module.css";
import {logout} from "../../service/api.js";
import {useNavigate} from "react-router-dom";
import logo from "../../fonts/Untitled-1.png";

export function Navigation({setUser}) {
	const navigate = useNavigate();
	async function onLogoutClick() {
		const result = await logout(user.sessionToken);

		setUser("");
		navigate("/");
	}
	const {user} = useContext(AuthContext);

	function onLogoClick() {
		navigate("/");
	}

	return (
		<nav className={NavCSS.wrapper}>
			<img onClick={onLogoClick} className={NavCSS.logo} src={logo} alt="logo" />
			<ul className={NavCSS.linkWrapper}>
				<li className={NavCSS.li}>Hi {user.username}</li>
				<li className={NavCSS.li}>
					{" "}
					<Link className={NavCSS.links} to={"/"}>
						Home
					</Link>
				</li>
				<li className={NavCSS.li}>
					<Link className={NavCSS.links} to={"/showroom"}>
						Showroom
					</Link>
				</li>

				{!user ? (
					<>
						<li className={NavCSS.li}>
							<Link className={NavCSS.links} to={"/login"}>
								Login
							</Link>
						</li>
						<li className={NavCSS.li}>
							<Link className={NavCSS.links} to={"/register"}>
								Register
							</Link>
						</li>
					</>
				) : (
					<>
						<li className={NavCSS.li}>
							<Link className={NavCSS.links} to={"#"}>
								Profile
							</Link>
							<ul className={NavCSS.dropdownList}>
								<li className={NavCSS.li}>
									<Link className={(NavCSS.links, NavCSS.dropdown)} to={"/my-showroom"}>
										My Showroom
									</Link>
								</li>

								<li className={NavCSS.li}>
									<Link to={"/user/message"} className={(NavCSS.links, NavCSS.dropdown)}>
										Messages
									</Link>
								</li>
								<li className={NavCSS.li}>
									<Link onClick={onLogoutClick} className={(NavCSS.links, NavCSS.dropdown)} to={"#"}>
										Logout
									</Link>
								</li>
							</ul>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}
