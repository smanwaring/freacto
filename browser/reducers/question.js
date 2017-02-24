import axios from 'axios';

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

// login reducer
const reducer = (state = true, action) => {
  switch (action.type) {
    case QUESTION_POSTED:
      return action.bool;
    default:
      return state;
  }
};

export default reducer;
