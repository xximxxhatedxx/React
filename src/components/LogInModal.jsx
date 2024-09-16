// LoginModal.js
import React from 'react';

class LoginModal extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onLogin();
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
        <div className="modal">
            <div className="modal-container">
                <button className="close" onClick={this.props.onClose}>×</button>
                <form onSubmit={this.handleSubmit} className='modal-content'>
                    <h1>Вхід</h1>
                    <input type="text" name="username" placeholder='Логін'/>
                    <input type="password" name="password" placeholder='Пароль'/>
                    <button type="submit" className='LogInModalButton'>Увійти</button>
                </form>
            </div>
            
        </div>
    );
  }
}

export default LoginModal;
