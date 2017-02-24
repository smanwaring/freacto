import React from 'react';


export default (props) => (
  <div>
    <section>
      {props.question.answers.map(answer => {
        return <section key={answer.id}>{answer.content}</section>
      })}
    </section>
  </div>
)