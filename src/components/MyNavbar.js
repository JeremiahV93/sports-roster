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
      <nav className="navbar navbar-light bg-light">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2Fimages%2Fg%2FrxsAAOSw1g9ZoahA%2Fs-l300.jpg&f=1&nofb=1" width="44" height="60" alt="" />
          {authed && <Logout />}
          {authed || <GoogleLogin />}
      </nav>
    );
  }
}

export default MyNavBar;
