import React from 'react';

class UserComment extends React.Component {
  render() {
    return (
      <li>
        <hr />
        <div>{this.props.text}</div>
      </li>
    );
  }
}

export default UserComment;