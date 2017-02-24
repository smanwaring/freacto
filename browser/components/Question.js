import React from 'react';

/* -----------------    ACTIONS     ------------------ */
export const SET_QUESTION = 'SET_QUESTION';

/* -----------------    ACTION CREATORS     ------------------ */
export const setQuestion = (question) => {
  return {
    type: SET_QUESTION,
    question: question
  }
}

export default (props) => (
  <div>
    <div className="question-title"> {props.question.title} </div>
    <section className="question-content">{props.question.content}</section>
  </div>
)