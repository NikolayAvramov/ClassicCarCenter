import {useContext, useEffect, useState} from "react";
import {getMessages} from "../../service/messageService.js";
import {AuthContext} from "../../contexts/AuthContext.js";
import MsgCss from "./Message.module.css";
export function Messages() {
	const {user} = useContext(AuthContext);
	const [messageArr, setMessageArr] = useState(null);
	const myMesages = [];
	useEffect(() => {
		getMessages(user.sessionToken).then(result => setMessageArr(result));
	}, []);
	if (messageArr) {
		for (let mesage of messageArr) {
			if (mesage.carOwner == user.objectId) {
				myMesages.push(mesage);
			}
		}
	}

	return (
		<section className={MsgCss.container}>
			<ul className={MsgCss.list}>
				{myMesages.map(message => {
					return (
						<li key={message.objectId} className={MsgCss.row}>
							<div className={MsgCss.p}>
								<p className={MsgCss.from}>
									<strong>From:</strong> {message.writer}
								</p>
							</div>
							<div className={MsgCss.p}>
								<p className={MsgCss.text}>
									{" "}
									<strong> Message:</strong> {message.mesage}
								</p>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
