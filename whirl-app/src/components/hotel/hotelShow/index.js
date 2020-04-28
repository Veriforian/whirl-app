import React from 'react';
import Gallery from './Gallery';
import Overview from './Overview';
import Detail from './Details/Detail';
import Cta from './Cta';

export default function hotel() {
	return (
		<main className="main">
			<Gallery />
			<Overview />
			<Detail />
			<Cta />
		</main>
	);
}
