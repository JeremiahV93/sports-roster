import React from 'react';
import './App.scss';
import MyNavBar from '../components/MyNavbar';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyNavBar />
        <h2>HI</h2>
      </div>
    );
  }
}

export default App;
