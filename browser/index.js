
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute, IndexRedirect } from 'react-router';
import store from './store';
import axios from 'axios';
import setQuestion from './components/Question';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AuthService from './utils/AuthService';

const auth = new AuthService('tI3Yb8b6o4t7iOXLO4vffTYVpsHptMjl', 'stephaniemanwaring.auth0.com');
/*------ COMPONENTS/CONTAINERS ------ */
import Root from './components/Root';
import Homepage from './components/Homepage';
import Login from './components/Login';
import CreateQuestion from './components/CreateQuestion';


/*--------- ACTION CREATORS --------- */
import { findOrCreateUser } from './reducers/login';

injectTapEventPlugin();

/*--------- ON-ENTER HOOKS ---------- */
const getQuestion = () => {
	axios.get('/current')
	.then(res => {
		if (!res.data) {
			axios.put('/current')
			.then(newRes => store.dispatch(setQuestion(newRes.data)))
		} else { store.dispatch(setQuestion(res.data)); }
	})
	.catch(console.error("Can't get question"));
}

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' });
  } else {
		const user = auth.getProfile();
		const userDetails = {
				name: `${user.given_name} ${user.family_name}`,
				email: user.email
		};
		store.dispatch(findOrCreateUser(userDetails))
	}
	getQuestion();
};

ReactDOM.render(
  <Provider store={store}>
		<MuiThemeProvider>
	    <Router history={browserHistory}>
				<Route path="/" component={Root} auth={auth}>
					<Route path="/home" component={Homepage} onEnter={requireAuth} />
					<Route path="/login" component={Login} />
					<Route path="/createQuestion" component={CreateQuestion} />
					<IndexRedirect to="/login" />
				</Route>
			</Router>
		</MuiThemeProvider>
  </Provider>,
  document.getElementById('app'));
