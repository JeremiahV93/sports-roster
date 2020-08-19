import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class Auth extends React.Component {
  loginEvent = (e) => {
    e.preventDefault();
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider);
  }

  render() {
    return (
      <div className="Auth">
        <button className='btn btn-success' onClick={this.loginEvent}> Google Log in</button>
      </div>
    );
  }
}

export default Auth;
