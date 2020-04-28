import React, { useCallback, useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { debounce } from 'throttle-debounce';
import _ from 'lodash';

let HotelForm = (props) => {
	const debouncedSearch = useCallback(
		debounce(1000, (val) => {
			const config = {
				method: 'get',
				url: 'https://tripadvisor1.p.rapidapi.com/locations/auto-complete',
				timeout: '60000',
				headers: {
					'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
					'x-rapidapi-key':
						'fba20219f8msh084fe4165d0bc7ep1cb033jsn1eafc8dc528b',
				},
				params: {
					lang: 'en_US',
					units: 'km',
					query: val,
				},
			};
			axios(config)
				.then((res) => {
					const responseString = JSON.stringify(res.data);
					const response = JSON.parse(responseString);
					const geos = _.filter(response.data, { result_type: 'geos' });
					const locations = _.map(geos, (item) => {
						return {
							locationString: item.result_object.location_string,
							locationId: item.result_object.location_id,
						};
					});
					console.log(locations);
					props.saveAutofill(locations);
				})
				.catch((error) => {
					console.log(error);
				});
		}),
		[]
	);

	const queryLocation = function (event) {
		const val = event.target.value;
		if (val[2]) {
			debouncedSearch(val);
		}
	};

	let autofillBox;

	if (props.autofill) {
		_.map(props.autofill, (location) => {
			return (autofillBox = (
				<div className="search__main--autofill">
					<div className="search__main--autofill-link">
						{location.locationString}
					</div>
				</div>
			));
		});
	}

	return (
		<div className="banner">
			<form onSubmit={props.handleSubmit} className="search">
				<div className="search__field--main">
					<label className="search__label">Search locations</label>
					<Field
						type="text"
						component="input"
						onChange={queryLocation}
						name="location"
						className="search__main"
					/>
				</div>
				{autofillBox}
				<div className="search__field--secondary">
					<label className="search__label">Check In</label>
					<Field
						type="date"
						component="input"
						name="checkIn"
						className="search__secondary"
					/>
				</div>
				<div className="search__field--secondary">
					<label className="search__label">Check Out</label>
					<Field
						type="date"
						component="input"
						name="checkOut"
						className="search__secondary"
					/>
				</div>
				<button className="search__button">
					<svg className="search__icon">
						<use xlinkHref="/img/sprite.svg#icon-magnifying-glass" />
					</svg>
				</button>
			</form>
		</div>
	);
};

HotelForm = reduxForm({ form: 'hotel' })(HotelForm);

const mapStateToProps = ({ autofill }) => {
	return { autofill };
};

HotelForm = connect(mapStateToProps, actions)(HotelForm);

export default HotelForm;
