import React from 'react';
import {combineReducers} from 'redux';
import { questionReducer, questionPostedReducer } from './reducers/question';
import loggedInUser from './reducers/login';

const rootReducer = combineReducers({
    question: questionReducer,
	  loggedInUser,
      questionPostedReducer
});

export default rootReducer;
