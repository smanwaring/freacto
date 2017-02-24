
import axios from 'axios';
import {SET_QUESTION, setQuestion} from '../components/Question';

// constants
const  QUESTION_POSTED = 'QUESTION_POSTED';


// sync action creators
export const questionPosted = (bool) => ({
  type: QUESTION_POSTED,
  bool
});


// async action creators
export const postQuestion = questionDetails => dispatch => {
  return axios.post('/api/question', questionDetails)
  .then(res => {
    if (res.status === 201){
      dispatch(questionPosted(true));
    } else {
      dispatch(questionPosted(false));
    }
  })
  .catch(err => console.error(err));
};

export const findQuestion = () => {
  return (dispatch) => {
    axios.get('api/question/current')
    .then(res => {
      console.log('RES DATA IN REDUCER', res.data);
      if (!res.data) {
        axios.put('api/question/current')
        .then(newRes => dispatch(setQuestion(newRes.data)))
      } else { dispatch(setQuestion(res.data)); }
    })
    .catch(console.log.bind(console));
  }
}

// login reducer
export const questionPostedReducer = (state = null, action) => {
  switch (action.type) {
    case QUESTION_POSTED:
      return action.bool;
    default:
      return state;
  }
};

export const questionReducer = function(state = {}, action) {
	switch (action.type){
		case SET_QUESTION:
			return action.question;
		default: return state;
	}
};
