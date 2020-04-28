import React from 'react';
import { connect } from 'react-redux';
import Form from './HotelForm';

import * as actions from '../../actions';

export default connect(null, { actions })(function SearchPage() {
	const handleSearch = values => {
		console.log(values);
	};

	return (
		<div className="main">
			<Form onSubmit={handleSearch} />
		</div>
	);
});
