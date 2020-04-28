import React from 'react';
import SideNav from './SideNav';
import Legal from './Legal';

export default function SideBar() {
	return (
		<nav className="sidebar">
			<SideNav />
			<Legal />
		</nav>
	);
}
