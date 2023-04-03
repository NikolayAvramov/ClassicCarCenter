const appID = "xqJYkURQ5lJ4vCaZyIqEpTXuBzGywsBrHsRhtJdA";
const apiKey = "JJMAfHURW60CaCaLOs4BzEaaMUhtQUGVGSZ8dv0b";

export async function sendMessage(data, sessionToken) {
	const response = await fetch("https://parseapi.back4app.com/classes/messages", {
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
	const response = await fetch("https://parseapi.back4app.com/classes/messages", {
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
