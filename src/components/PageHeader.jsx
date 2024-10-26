import React from 'react';
import LogInButton from './LogInButton';
import LogOutButton from './LogOutButton';

const Header = ({isLoggedIn, onLogoutClick, onLoginClick}) => {
    return (
      <header>
        {isLoggedIn ? (
          <LogOutButton onClick={onLogoutClick} />
        ) : (
          <LogInButton onClick={onLoginClick} />
        )}
      </header>
    );
}

export default Header;
