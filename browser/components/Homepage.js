import React from 'react';
import { connect } from 'react-redux';


class Homepage extends React.Component {

    render() {
        return (
            <div>
                <h1> Hello World! </h1>
            </div>
        );
    }
}

/* -----------------    CONTAINER     ------------------ */

function mapStateToProps(state){
	return {
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
