import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './layout/Header/Header';
import Content from './layout/Content';

const App = props => {
	useEffect(() => {
		props.fetchUser();
	});

	return (
		<div className="container">
			<Header />
			<Content />
		</div>
	);
};

export default connect(null, actions)(App);
