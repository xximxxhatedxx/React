import React, { useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { CSSTransition } from 'react-transition-group';
import styles from './LogInModal.module.css'

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

    return (
        <CSSTransition
            in={show}
            timeout={300}
            classNames={{
                enter: styles.modalEnter,
                enterActive: styles.modalEnterActive,
                exit: styles.modalExit,
                exitActive: styles.modalExitActive,
            }}
            unmountOnExit
        >
            <div className={styles.modal}>
                <div className={styles.modalContainer}>
                    <button className={styles.closeButton} onClick={onClose}>×</button>
                    <form onSubmit={handleSubmit} className={styles.modalContent}>
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
        </CSSTransition>
    );
};

export default LoginModal;
