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


const rootReducer = combineReducers({
    question: questionReducer,
});

export default rootReducer;
