import React from 'react';

/* -----------------    ACTIONS     ------------------ */
const SET_QUESTION = 'SET_QUESTION';

/* -----------------    ACTION CREATORS     ------------------ */
export const setQuestion = (question) => {
  return {
    type: SET_QUESTION,
    question: question
  }
}

export default (props) => {
  <div>
    <h3> {props.question.title} </h3>
    <section>
      {props.question.content}
    </section>
  </div>
}