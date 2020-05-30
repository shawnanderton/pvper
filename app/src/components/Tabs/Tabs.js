import React from 'react';

import './tabs.scss';

function Tabs({ children }) {
  return (
    <nav className="tabs">
      <ul>{children}</ul>
    </nav>
  );
}

export default Tabs;
