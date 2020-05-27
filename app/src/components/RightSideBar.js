import React from 'react';

const RightSideBar = (props) => (
  <nav className="column is-3 menu">
    <ul className="menu-list">
    
    </ul>
    {props.children}
  </nav>
);

export default RightSideBar;
