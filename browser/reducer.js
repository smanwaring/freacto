import React from 'react';
import {combineReducers} from 'redux';
import {SET_QUESTION} from './components/Question';

const questionReducer = function(state = {}, action) {
	switch (action.type){
		case SET_QUESTION:
			return action.question;
		default: return state;
	}
};

import loggedInUser from './reducers/login';

const rootReducer = combineReducers({
    question: questionReducer,
	  loggedInUser
});

export default rootReducer;
