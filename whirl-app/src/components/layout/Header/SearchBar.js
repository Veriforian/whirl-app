import React from 'react';

export default function SearchBar() {
	return (
		<form action="#!" className="nav-search">
			<input
				type="text"
				className="nav-search__input"
				placeholder="Search Hotels"
			/>
			<button className="nav-search__button">
				<svg className="nav-search__icon">
					<use xlinkHref="/img/sprite.svg#icon-magnifying-glass" />
				</svg>
			</button>
		</form>
	);
}
