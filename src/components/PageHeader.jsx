import React from 'react';
import { useAuthContext } from './contexts/AuthContext';
import { useNavigate} from 'react-router-dom';

const PageHeader = ({ onLoginClick }) => {
    const { isLoggedIn, logout } = useAuthContext();
    const navigate = useNavigate();

    return (
        <header>
            <h1 onClick={() => navigate('/')}>My Shop</h1>
            {isLoggedIn ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <button onClick={onLoginClick}>Login</button>
            )}
        </header>
    );
};

export default PageHeader;
