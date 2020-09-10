import React from 'react';
import HeaderBarBrand from './HeaderBarBrand';

export default function HeaderBar() {
  return (
    <header>
      <nav class="navbar has-background-black is-black">
        <HeaderBarBrand />
      </nav>
    </header>
  );
}
