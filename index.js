import { useState, useEffect } from 'react';

export const useForm = initalValues => {
	const [values, setValues] = useState(initalValues);

	return [
		values,
		e => {
			setValues({
				...values,
				[e.target.name]: e.target.value
			});
		}
	];
};

//<meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline';" />

export const useFetch = url => {
	const [state, setState] = useState({ data: null, loading: true });

	useEffect(() => {
		setState({ data: null, loading: true });
		fetch(url)
			.then(x => x.text())
			.then(y => {
				setState({ data: y, loading: false });
			});
	}, [url, setState]);

	return state;
};
