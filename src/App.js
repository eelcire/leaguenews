import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Dashboard from './component/Dashboard'
import Profile from './component/Profile'

export default function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route path="/" component={Dashboard} exact />
					<Route path="/profile/:summonerName" component={Profile} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}