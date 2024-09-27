import React from "react";

class LogInButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick}>Увійти</button>
        );
    }
}

export default LogInButton;