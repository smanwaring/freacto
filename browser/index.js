
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
	axios.get('/')
	.then(res => {
		store.dispatch(setQuestion(res.data));
	})
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
