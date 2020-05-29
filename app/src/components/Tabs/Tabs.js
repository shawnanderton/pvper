import React from 'react';
import PropTypes from 'prop-types';

import './tabs.scss';

function Tabs({ children }) {
  return (
    <nav className="tabs">
      <ul>{children}</ul>
    </nav>
  );
}

Tabs.propTypes = {};

export default Tabs;
