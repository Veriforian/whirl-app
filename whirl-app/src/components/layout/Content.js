import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SideBar from './SideBar/SideBar';
import HotelShow from '../hotel/hotelShow';
import Search from '../search/SearchPage';

const Content = () => {
	return (
		<div className="content">
			<BrowserRouter>
				<SideBar />
				<Switch>
					<Route path="/search" exact component={Search} />
					<Route path="/hotel/show" exact component={HotelShow} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default Content;
