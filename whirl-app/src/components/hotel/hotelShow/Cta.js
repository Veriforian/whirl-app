import React from 'react';

export default function Cta() {
	return (
		<div className="cta">
			<h2 className="cta__book-now">
				Good news! We have 4 rooms left for your selected dates!
			</h2>

			<button className="btn">
				<span className="btn__visible">Book Now</span>
				<span className="btn__hidden">Visit Website</span>
			</button>
		</div>
	);
}
