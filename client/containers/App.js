import React, { Component }from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './Main';

export default class App extends Component {
	render() {
		return (
			<div className="app">
				<Switch>
					<Route path="/" component={Main} />
				</Switch>
			</div>
		);

	}
}



