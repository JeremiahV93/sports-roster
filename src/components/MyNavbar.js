import React from 'react';
import propTypes from 'prop-types';
import GoogleLogin from './GoogleLogin';
import Logout from './Logout';

class MyNavBar extends React.Component {
  static propTypes = {
    authed: propTypes.bool,
  }

  render() {
    const { authed } = this.props;
    return (
      <nav className="navbar navbar-light ">
          <img src="https://s3.amazonaws.com/freebiesupply/large/2x/los-angeles-dodgers-logo-transparent.png" width="86" height="94" alt="" />
          {authed && <Logout />}
          {authed || <GoogleLogin />}
      </nav>
    );
  }
}

export default MyNavBar;
