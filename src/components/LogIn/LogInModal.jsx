import React, { useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { Modal, Input, Button } from 'antd';

const LoginModal = ({ onClose, show }) => {
    const { login } = useAuthContext();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const simulateLoginDelay = () => {
        return new Promise((resolve) => setTimeout(resolve, 1000));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        await simulateLoginDelay();
        await login(username, password);
        setUsername('');
        setPassword('');
        setLoading(false);
        onClose();
    };

    return (
        <Modal
            title="Вхід"
            open={show}
            onCancel={onClose}
            footer={null}
            destroyOnClose={true}
        >
            <form onSubmit={handleSubmit}>
                <Input 
                    type="text" 
                    name="username" 
                    placeholder="Логін"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ marginBottom: '10px' }}
                />
                <Input.Password 
                    name="password" 
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ marginBottom: '10px' }}
                />
                <Button 
                    type="primary" 
                    htmlType="submit" 
                    block 
                    loading={loading}
                >
                    Увійти
                </Button>
            </form>
        </Modal>
    );
};

export default LoginModal;
