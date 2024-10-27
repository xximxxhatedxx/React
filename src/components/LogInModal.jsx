import React, { useState } from 'react';
import { useAuthContext } from './contexts/AuthContext';

const LoginModal = ({ onClose, show }) => {
    const { login } = useAuthContext();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        login(username, password);
        setUsername("");
        setPassword("");
        onClose();
    };

    if (!show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-container">
                <button className="close" onClick={onClose}>×</button>
                <form onSubmit={handleSubmit} className='modal-content'>
                    <h1>Вхід</h1>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder='Логін'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder='Пароль'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className='LogInModalButton'>Увійти</button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
