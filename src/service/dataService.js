const host = "https://parseapi.back4app.com/";
const appID = "xqJYkURQ5lJ4vCaZyIqEpTXuBzGywsBrHsRhtJdA";
const apiKey = "JJMAfHURW60CaCaLOs4BzEaaMUhtQUGVGSZ8dv0b";

export async function create(data, sessionToken) {
	const response = await fetch(host + "classes/cars", {
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

	return response;
}
export async function getAll() {
	const response = await fetch(host + "classes/cars", {
		method: "GET",
		headers: {
			"X-Parse-Application-Id": appID,
			"X-Parse-JavaScript-Key": apiKey,
			"X-Parse-Revocable-Session": "1",

			"Content-Type": "application/json"
		}
	});
	const result = await response.json();
	const allCars = result.results;

	return allCars;
}

export async function getById(id) {
	const response = await fetch(host + "classes/cars/" + id, {
		method: "GET",
		headers: {
			"X-Parse-Application-Id": appID,
			"X-Parse-JavaScript-Key": apiKey,
			"X-Parse-Revocable-Session": "1",
			"Content-Type": "application/json"
		}
	});
	const result = await response.json();
	return result;
}
export async function addView() {}
export async function del(id, sessionToken) {
	const response = await fetch(host + "classes/cars/" + id, {
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
export async function edit(id, sessionToken, data) {
	const response = await fetch(host + "classes/cars/" + id, {
		method: "PUT",
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
	console.log(result);
}
