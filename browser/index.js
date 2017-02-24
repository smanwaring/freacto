
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import store from './store';
import axios from 'axios';
import setQuestion from './components/Question';


/*------ COMPONENTS/CONTAINERS ------ */
import Root from './components/Root';
import Homepage from './components/Homepage';

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

ReactDOM.render(
  <Provider store={store}>
	    <Router history={hashHistory}>
			<Route component={Root}>
				<Route path="/" component={Homepage} onEnter={getQuestion}/>
				<IndexRoute component={Homepage}/>
			</Route>
		</Router>
  </Provider>,
  document.getElementById('app'));
