import {AuthContext} from "../../contexts/AuthContext.js";
import {useContext} from "react";
import {Link} from "react-router-dom";
import NavCSS from "./Navigation.module.css";
import {logout} from "../../service/api.js";
import {useNavigate} from "react-router-dom";
import logo from "../../fonts/Untitled-1.png";
import {AiOutlineHome, AiOutlineMessage, AiFillCar, AiOutlineLogout} from "react-icons/ai";
import {GiHomeGarage} from "react-icons/gi";
import {FiLogIn} from "react-icons/fi";
import {BiRegistered} from "react-icons/bi";

export function Navigation({setUser}) {
	const navigate = useNavigate();
	async function onLogoutClick() {
		await logout(user.sessionToken);

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
				<li className={NavCSS.greating}>Hi {user.username}</li>
				<li className={NavCSS.li}>
					{" "}
					<Link className={NavCSS.links} to={"/"}>
						Home
					</Link>
					<Link className={NavCSS.touchLinks} to={"/"}>
						<AiOutlineHome />
					</Link>
				</li>
				<li className={NavCSS.li}>
					<Link className={NavCSS.links} to={"/showroom"}>
						Showroom
					</Link>
					<Link className={NavCSS.touchLinks} to={"/showroom"}>
						<GiHomeGarage />
					</Link>
				</li>

				{!user ? (
					<>
						<li className={NavCSS.li}>
							<Link className={NavCSS.links} to={"/login"}>
								Login
							</Link>
							<Link className={NavCSS.touchLinks} to={"/login"}>
								<FiLogIn />
							</Link>
						</li>
						<li className={NavCSS.li}>
							<Link className={NavCSS.links} to={"/register"}>
								Register
							</Link>
							<Link className={NavCSS.touchLinks} to={"/register"}>
								<BiRegistered />
							</Link>
						</li>
					</>
				) : (
					<>
						<li className={NavCSS.li}>
							<Link className={NavCSS.links} to={"#"}>
								Profile
							</Link>
							<Link className={NavCSS.touchLinks} to={"/user/message"}>
								<AiOutlineMessage />
							</Link>
							<ul className={NavCSS.dropdownList}>
								<li>
									<Link className={NavCSS.dropdown} to={"/my-showroom"}>
										My Showroom
									</Link>
								</li>

								<li>
									<Link to={"/user/message"} className={NavCSS.dropdown}>
										Message
									</Link>
								</li>
								<li>
									<Link onClick={onLogoutClick} className={NavCSS.dropdown} to={"#"}>
										Logout
									</Link>
								</li>
							</ul>
						</li>

						<li>
							<Link className={NavCSS.touchLinks} to={"/my-showroom"}>
								<AiFillCar />
							</Link>
						</li>
						<li>
							<Link onClick={onLogoutClick} className={NavCSS.touchLinks} to={"#"}>
								<AiOutlineLogout />
							</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
}
