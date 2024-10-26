import React from 'react';

const LoginModal = ({onClose, show, onLogin}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin();
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
                  <input type="text" name="username" placeholder='Логін'/>
                  <input type="password" name="password" placeholder='Пароль'/>
                  <button type="submit" className='LogInModalButton'>Увійти</button>
              </form>
          </div>
      </div>
  );
}

export default LoginModal;
