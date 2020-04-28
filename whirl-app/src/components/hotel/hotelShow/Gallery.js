import React from 'react';

export default function Gallery() {
	return (
		<>
			<div className="gallery">
				<figure className="gallery__item">
					<img
						src="/img/hotel-1.jpg"
						alt="first hotel"
						className="gallery__photo"
					/>
				</figure>
				<figure className="gallary__item">
					<img
						src="/img/hotel-2.jpg"
						alt="second hotel"
						className="gallery__photo"
					/>
				</figure>
				<figure className="gallery__item">
					<img
						src="/img/hotel-3.jpg"
						alt="third hotel"
						className="gallery__photo"
					/>
				</figure>
			</div>
		</>
	);
}
