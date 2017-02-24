import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';


class Homepage extends React.Component {

    render() {
        return (
            <div>
                <h1> Question Of The Day </h1>
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
