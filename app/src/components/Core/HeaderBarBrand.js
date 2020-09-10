import React from 'react';

export default function HeaderBarBrand() {
  return (
    <div>
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <span class="brand-blue">P</span>
          <span class="brand-white">v</span>
          <span class="brand-red">P</span>
          <span class="brand-white">er.io</span>
        </router-link>
      </div>
    </div>
  );
}
