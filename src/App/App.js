import React from 'react';
import firebase from 'firebase/app';

import './App.scss';
import 'firebase/auth';

import firebaseConnection from '../helpers/data/connection';

import MyNavBar from '../components/MyNavbar';
import TeamRoster from '../components/TeamRoster/TeamRoster';

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

    const loadTeam = () => {
      if (authed) {
        return <TeamRoster />;
      }
      return <h1>Please Log in</h1>;
    };

    return (
      <div className="App">
        <MyNavBar authed={authed}/>
        {loadTeam()}
      </div>
    );
  }
}

export default App;
