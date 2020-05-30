import React from 'react';
import './tab.scss';

function Tab({ children, active }) {
  return (
    <li className={`tab ${active ? 'active' : ''}`}>
      <span>{children}</span>
    </li>
  );
}


export default Tab;
