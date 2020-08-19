import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class Logout extends React.Component {
  logoutEvent= (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="Auth">
        <button className='btn btn-warning' onClick={this.logoutEvent}> Google Log out</button>
      </div>
    );
  }
}

export default Logout;
