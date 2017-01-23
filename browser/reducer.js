import React from 'react';
import {combineReducers} from 'redux';

const testReducer = function(state = '', action) {
	switch (action.type){
		case 'test':
			return action.payload;
		default: return state;
	}
};



const rootReducer = combineReducers({
    test: testReducer,
});

export default rootReducer;
