import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import ViewAnswer from './ViewAnswer';


class Homepage extends React.Component {
    constructor(){
        super();
        this.state = {
            showAnswer: false
        }
        this.showAnswer = this.showAnswer.bind(this);
        this.toggleAnswer = this.toggleAnswer.bind(this);
    }

    showAnswer() {
        if(this.state.showAnswer){
            return (
                //<h1>HEY THIS IS THE ANSWER</h1>
                <ViewAnswer question={this.props.question}/>
            )
        } else return null;

    }

    toggleAnswer() {
        this.setState({showAnswer:!this.state.showAnswer})
    }

    render() {
        return (
            <div>
                <h1> Question Of The Day </h1>
                <Question question={this.props.question}/>
                <RaisedButton label="View Answer" onTouchTap={this.toggleAnswer} />
                {this.showAnswer()}
                <Link to={'/createQuestion'}><RaisedButton label="Create a Question"/></Link>
            </div>
        );
    }
}

/* -----------------    CONTAINER     ------------------ */

function mapStateToProps(state){
	return {
        question: state.question
	};
}

function mapDispatchToProps(dispatch){
	return {
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Homepage);
