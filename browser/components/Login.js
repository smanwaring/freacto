import React, { PropTypes as T } from 'react';
import AuthService from '../utils/AuthService';
// import styles from './styles.module.css'

class Login extends React.Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }

    login(){
        this.props.auth.login();
    }

  render() {
    const { auth } = this.props;
    return (
      <div className="main-background">
        <div className="login-center">
          <h1 className="login-text">WELCOME TO FREACTO</h1>
          <br/>
          <br/>
          <br/>
          <h4 className="login-text">Login with Google to start FREACT-ing</h4>
          <a className="waves-effect waves-light btn" onClick={this.login}>login</a>
        </div>
      </div>
    );
  } 
}

//type checking
Login.propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
};

export default Login;
