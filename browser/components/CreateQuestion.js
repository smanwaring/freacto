import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { Link, browserHistory } from 'react-router';
import { postQuestion } from '../reducers/question';


class CreateQuestion extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const data = {
      content: evt.target.question.value,
      answer: evt.target.answer.value,
      userId: this.props.loggedInUser.id,
      category: evt.target.category.value,
      difficulty: evt.target.difficulty.value,
      title: evt.target.title.value
    };
    this.props.submitQuestion(data);
    browserHistory.replace('/home');
  }

    render() {
      console.log(this.props.loggedInUser)
        return (
          <div>
            <div className="login-text big-text">Fill this out to post your FREACTO question to the questions database!</div>
            <div className="card">
              <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea id="textarea1" name="title" className="materialize-textarea"></textarea>
                      <label htmlFor="textarea1">Question Title </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea id="textarea1" name="question" className="materialize-textarea"></textarea>
                      <label htmlFor="textarea1">Question</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea id="textarea1" name="answer" className="materialize-textarea"></textarea>
                      <label htmlFor="textarea1">Answer</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea id="textarea1" name="difficulty" className="materialize-textarea"></textarea>
                      <label htmlFor="textarea1">Difficulty (easy, medium,hard) </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea id="textarea1" name="category" className="materialize-textarea"></textarea>
                      <label htmlFor="textarea1">Category(linked-lists, BSTs, dynamic programming)</label>
                    </div>
                  </div>
                  
                  <RaisedButton type="submit" label="Submit"/>
                </form>
              </div>    
            </div>
          </div>
        );
    }
}

/* -----------------    CONTAINER     ------------------ */

function mapStateToProps({loggedInUser}){
	return {
    loggedInUser
	};
}

function mapDispatchToProps(dispatch){
	return {
    submitQuestion: function(questionInfo) {
      dispatch( postQuestion(questionInfo) );
    }
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CreateQuestion);
