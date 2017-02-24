import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';


class Homepage extends React.Component {

    render() {
        return (
            <div className="text-center">
                <div className="card green login-text" hidden={!this.props.posted}> Thanks! your question was posted! </div>
                <h1 className="login-text"> FREACTO </h1>
                <h1 className="login-text"> Question Of The Day </h1>
                <Question question={this.props.question}/>
                <RaisedButton label="View Answer" />
                <Link to={'/createQuestion'}><RaisedButton label="Create a Question"/></Link>
            </div>
        );
    }
}

/* -----------------    CONTAINER     ------------------ */

function mapStateToProps(state){
	return {
        question: state.question,
        posted: state.questionPostedReducer
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
