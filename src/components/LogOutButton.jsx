import React from "react";

class LogOutButton extends React.Component {
    render() {
      return (
        <button onClick={this.props.onClick}>Вийти</button>
      );
    }
}

export default LogOutButton;