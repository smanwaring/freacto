import {SET_QUESTION, setQuestion} from '../components/Question';
import axios from 'axios';

export const findQuestion = () => {
  return (dispatch) => {
    axios.get('api/question/current')
    .then(res => {
      if (!res.data) {
        axios.put('api/question/current')
        .then(newRes => dispatch(setQuestion(newRes.data)))
      } else { dispatch(setQuestion(res.data)); }
    })
    .catch(console.log.bind(console));
  }
}


export const questionReducer = function(state = {}, action) {
	switch (action.type){
		case SET_QUESTION:
			return action.question;
		default: return state;
	}
};