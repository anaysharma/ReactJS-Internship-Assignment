import { useEffect, useState } from 'react';

export const useLocalStorage = (
	initValue: {
		[key: string]: string;
	}[]
) => {
	const key = 'userData';
	const [value, setValue] = useState(() => {
		try {
			const localValue = window.localStorage.getItem(key);
			return localValue ? JSON.parse(localValue) : initValue;
		} catch (error) {
			console.error(error);
			return initValue;
		}
	});

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};
