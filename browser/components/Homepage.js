import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';


class Homepage extends React.Component {

    render() {
        return (
            <div>
                <h1> Question Of The Day </h1>
                <Question question={this.props.question}/>
                <button> View Answer </button>
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
