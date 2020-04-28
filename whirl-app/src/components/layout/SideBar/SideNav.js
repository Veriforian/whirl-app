import React from 'react';

export default function SideNav() {
	return (
		<ul className="side-nav">
			<li className="side-nav__item side-nav__item--active">
				<a href="#!" className="side-nav__link">
					<svg className="side-nav__icon">
						<use xlinkHref="/img/sprite.svg#icon-home" />
					</svg>
					<span>Hotel</span>
				</a>
			</li>
			<li className="side-nav__item">
				<a href="#!" className="side-nav__link">
					<svg className="side-nav__icon">
						<use xlinkHref="/img/sprite.svg#icon-aircraft-take-off" />
					</svg>
					<span>Flights</span>
				</a>
			</li>
			<li className="side-nav__item">
				<a href="#!" className="side-nav__link">
					<svg className="side-nav__icon">
						<use xlinkHref="/img/sprite.svg#icon-key" />
					</svg>
					<span>Car Rentals</span>
				</a>
			</li>
			<li className="side-nav__item">
				<a
					href="https://naturedesign-dev.netlify.com"
					target="_blank"
					rel="noopener noreferrer"
					className="side-nav__link">
					<svg className="side-nav__icon">
						<use xlinkHref="/img/sprite.svg#icon-map" />
					</svg>
					<span>Tours</span>
				</a>
			</li>
		</ul>
	);
}
