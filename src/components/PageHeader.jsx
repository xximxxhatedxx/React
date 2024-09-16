import React from 'react';
import LogInButton from './LogInButton';
import LogOutButton from './LogOutButton';

class Header extends React.Component {
  render() {
    return (
      <header>
        {this.props.isLoggedIn ? (
          <LogOutButton onClick={this.props.onLogoutClick} />
        ) : (
          <LogInButton onClick={this.props.onLoginClick} />
        )}
      </header>
    );
  }
}

export default Header;
