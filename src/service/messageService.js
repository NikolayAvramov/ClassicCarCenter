const appID = "xqJYkURQ5lJ4vCaZyIqEpTXuBzGywsBrHsRhtJdA";
const apiKey = "JJMAfHURW60CaCaLOs4BzEaaMUhtQUGVGSZ8dv0b";
const host = "https://parseapi.back4app.com/classes/messages";

export async function sendMessage(data, sessionToken) {
	const response = await fetch(host, {
		method: "POST",
		headers: {
			"X-Parse-Application-Id": appID,
			"X-Parse-JavaScript-Key": apiKey,
			"X-Parse-Revocable-Session": "1",
			"X-Parse-Session-Token": sessionToken,
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	});
	const result = await response.json();
	return result;
}
export async function getMessages(sessionToken) {
	const response = await fetch(host, {
		method: "GET",
		headers: {
			"X-Parse-Application-Id": appID,
			"X-Parse-JavaScript-Key": apiKey,
			"X-Parse-Revocable-Session": "1",
			"X-Parse-Session-Token": sessionToken,
			"Content-Type": "application/json"
		}
	});
	const result = await response.json();
	return result.results;
}
export async function delMessage(id, sessionToken) {
	const response = await fetch(host + "/" + id, {
		method: "DELETE",
		headers: {
			"X-Parse-Application-Id": appID,
			"X-Parse-JavaScript-Key": apiKey,
			"X-Parse-Revocable-Session": "1",
			"X-Parse-Session-Token": sessionToken,
			"Content-Type": "application/json"
		}
	});
}
