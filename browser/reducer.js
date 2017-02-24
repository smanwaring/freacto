import React from 'react';
import {combineReducers} from 'redux';
import loggedInUser from './reducers/login';


const rootReducer = combineReducers({
	loggedInUser
});

export default rootReducer;
