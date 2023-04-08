import {useState} from "react";

export function useLocalStorage(key, initialValue) {
	const [state, setState] = useState(() => {
		const serializedState = localStorage.getItem(key);
		if (serializedState) {
			const persistentState = JSON.parse(serializedState);
			return persistentState;
		}
		return initialValue;
	});

	const setLocalStorageState = value => {
		setState(value);

		localStorage.setItem(key, JSON.stringify(value));
	};

	return [state, setLocalStorageState];
}
