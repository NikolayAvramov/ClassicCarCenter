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

	console.log(myMesages);

	return (
		<section className={MsgCss.container}>
			{myMesages.map(message => {
				return (
					<div key={message.objectId} className={MsgCss.row}>
						<p>From: {message.writer}</p>
						<p>Message: {message.mesage}</p>
					</div>
				);
			})}
		</section>
	);
}
