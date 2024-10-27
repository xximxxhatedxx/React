import React from "react";

const PageFooter = ({showHistoryClick}) => {
    return (
      <footer>
        <p onClick={showHistoryClick}>©2024</p>
      </footer>
    )
}

export default PageFooter;