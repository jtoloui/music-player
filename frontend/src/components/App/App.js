import React from "react";
import {
	HashRouter as Router,
	Switch,
	Route,
	Redirect,
	Link,
} from "react-router-dom";

import "./App.scss";
import { MusicPlayerContextProvider } from "../../context/musicPlayer-context";
import MediaPlayer from "../../pages/MediaPlayer/MediaPlayer";

const App = () => {
	return (
		<div className="media-player">
			<Router>
				<MusicPlayerContextProvider>
					<Switch>
						<Redirect exact from="/" to="/player" />
						<Route path="/player" exact component={MediaPlayer}  />
						<Route component={NoMatch} />
					</Switch>
				</MusicPlayerContextProvider>
			</Router>
		</div>
	);
};

const NoMatch = ({ location }) => (
	<div className="wrong-path">
		<div className="wrong-path__heading">
			<h1>Whoops!</h1>
		</div>
		<div className="wrong-path__body">
			<h3>
				No match for <code>{location.pathname}</code>
			</h3>
			<Link className="wrong-path__body__button" to="/player">
				Home
			</Link>
		</div>
	</div>
);

export default App;
