import FooterCss from "./Footer.module.css";
import {FaFacebookF, FaSnapchatGhost} from "react-icons/fa";
import {AiOutlineTwitter, AiFillInstagram} from "react-icons/ai";
import {Link} from "react-router-dom";
export function Footer() {
	return (
		<>
			<div className={FooterCss.footerBasic}>
				<footer>
					<div className={FooterCss.social}>
						<Link to="#">
							<AiFillInstagram />
						</Link>
						<Link to="#">
							<FaSnapchatGhost />
						</Link>
						<Link to="#">
							<AiOutlineTwitter />
						</Link>

						<Link to="#">
							{" "}
							<FaFacebookF />
						</Link>
					</div>
					<ul className={FooterCss.listInline}>
						<li className={FooterCss.listInlineItem}>
							<Link href="/">Home</Link>
						</li>
						<li className={FooterCss.listInlineItem}>
							<Link href="#">Services</Link>
						</li>
						<li className={FooterCss.listInlineItem}>
							<Link href="#">About</Link>
						</li>
						<li className={FooterCss.listInlineItem}>
							<Link href="#">Terms</Link>
						</li>
						<li className={FooterCss.listInlineItem}>
							<Link href="#">Privacy Policy</Link>
						</li>
					</ul>
					<p className={FooterCss.copyright}>Nikolay Avramov © 2023</p>
				</footer>
			</div>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
		</>
	);
}
