import React from 'react';

const UserComment = ({text}) => {
    return (
      <li>
        <hr />
        <div>{text}</div>
      </li>
    );
}

export default UserComment;