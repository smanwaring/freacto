import React from 'react';
import {combineReducers} from 'redux';
import {questionReducer} from './reducers/question';
import loggedInUser from './reducers/login';

const rootReducer = combineReducers({
    question: questionReducer,
	  loggedInUser
});

export default rootReducer;
