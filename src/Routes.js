// Libs
import React from 'react';
import {
	BrowserRouter, Route, Switch,
} from 'react-router-dom';

// Components
import Login from './screens/Login/Login';

const RoutesConfig = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/login' component = {Login} />
		</Switch>
	</BrowserRouter>
);

export default RoutesConfig;
