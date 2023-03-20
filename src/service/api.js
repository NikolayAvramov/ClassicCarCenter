import {clearUserData, getUserData} from "./util.js";

const host = "https://parseapi.back4app.com/";
const appID = "Ubwy1wtXeh8lzjZHmEJrdFR9yUdxeYnm8nppiz1d";
const apiKey = "e87PtmojW4RQ6hMVzouBPkpgQuUjuNU7GQ4mdLh5";

export async function login(data) {
	const response = await fetch(host + "/login", {
		method: "POST",
		headers: {
			"X-Parse-Application-Id": appID,
			"X-Parse-JavaScript-Key": apiKey,
			"X-Parse-Revocable-Session": "1",
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	});

	return response;
}

export async function register(data) {
	const response = await fetch(host + "/users", {
		method: "POST",
		headers: {
			"X-Parse-Application-Id": appID,
			"X-Parse-JavaScript-Key": apiKey,
			"X-Parse-Revocable-Session": "1",
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	});

	return response;
}

export async function logout() {
	const userData = getUserData();
	console.log(userData);
	const response = await fetch(host + "/users/logout", {
		method: "GET",
		headers: {
			"X-Parse-Application-Id": appID,
			"X-Parse-JavaScript-Key": apiKey,
			"X-Parse-Session-Token": userData.data.sessionToken
		}
	});

	clearUserData();
}

export async function create(data) {
	const response = await fetch(host + "/classes/article", {
		method: "POST",
		headers: {
			"X-Parse-Application-Id": appID,
			"X-Parse-JavaScript-Key": apiKey,
			"X-Parse-Revocable-Session": "1",
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data)
	});

	return response;
}
