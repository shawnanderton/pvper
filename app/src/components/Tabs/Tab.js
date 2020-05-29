import React from 'react';
import PropTypes from 'prop-types';
import './tab.scss';

function Tab({ children, active }) {
  return (
    <li className={`tab ${active ? 'active' : ''}`}>
      <span>{children}</span>
    </li>
  );
}

Tab.propTypes = {};

export default Tab;
