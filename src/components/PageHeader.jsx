import React from 'react';
import { useAuthContext } from './contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button, Switch } from 'antd';

const PageHeader = ({ onLoginClick }) => {
    const { isLoggedIn, logout, user } = useAuthContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const handleProfileClick = () => {
        if (user?.role === 'admin') {
            navigate('/admin');
        } else {
            navigate('/profile');
        }
    };

    return (
        <header>
            <h1 onClick={() => navigate('/')} style={{ cursor: 'pointer', fontSize: '4vh' }}>
                My Shop
            </h1>
            <Switch
                checkedChildren="Dark"
                unCheckedChildren="Light"
                onChange={(checked) =>
                    document.documentElement.classList.toggle('dark-theme', checked)
                }
            />
            {isLoggedIn ? (
                <>
                    <Button type="default" onClick={handleProfileClick}>
                        Profile
                    </Button>
                    <Button type="primary" danger onClick={handleLogout}>
                        Logout
                    </Button>
                </>
            ) : (
                <Button type="primary" onClick={onLoginClick}>
                    Login
                </Button>
            )}
        </header>
    );
};

export default PageHeader;
