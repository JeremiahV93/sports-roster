import React from 'react';
import firebase from 'firebase/app';

import './App.scss';
import 'firebase/auth';

import firebaseConnection from '../helpers/data/connection';

import MyNavBar from '../components/MyNavbar';

firebaseConnection();
class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <MyNavBar authed={authed}/>
        {console.error(authed)}
        <h2>HI</h2>
      </div>
    );
  }
}

export default App;
