import React from 'react';
import logo from '../logo.png';
//import { NavLink } from 'react-router-dom';

const HeaderBarBrand = () => (
  <div className="navbar-brand">
    <a class="navbar-item" href="../">
    <img src={logo} alt="logo" />
					</a>
					<div class="navbar-burger burger" data-target="topNav">
						<span></span>
						<span></span>
						<span></span>
					</div>
   
 
  </div>
);

export default HeaderBarBrand;
