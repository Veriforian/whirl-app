import React from 'react';
import axios from 'axios';

export default function locationField(props) {
	const autofillLocation = async e => {
		e.preventDefault();
		const val = e.target.value;

		props.input.onChange(val);

		const options = {
			headers: {
				'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
				'x-rapidapi-key': 'fba20219f8msh084fe4165d0bc7ep1cb033jsn1eafc8dc528b'
			},
			params: {
				lang: 'en_US',
				units: 'km',
				query: val
			}
		};

		if (val[2]) {
			const res = await axios.get(
				'https://tripadvisor1.p.rapidapi.com/locations/auto-complete',
				options
			);
			console.log(res.data);
		}
	};
	return (
		<>
			<input
				{...props.input}
				type="text"
				name="location"
				onChange={e => setTimeout(autofillLocation(e), 1000)}
			/>
		</>
	);
}
