import React from 'react';
import SearchBar from './SearchBar';
import UserNav from './UserNav';

const Header = () => {
	return (
		<header className="header">
			<img src="/img/logo.svg" alt="whirl logo" className="logo" />

			<SearchBar />
			<UserNav />
		</header>
	);
};

export default Header;
