const host = "https://parseapi.back4app.com/";
const appID = "Ubwy1wtXeh8lzjZHmEJrdFR9yUdxeYnm8nppiz1d";
const apiKey = "e87PtmojW4RQ6hMVzouBPkpgQuUjuNU7GQ4mdLh5";

export async function create(data, sessionToken) {
	const response = await fetch(host + "/classes/cars", {
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
	return result;
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
