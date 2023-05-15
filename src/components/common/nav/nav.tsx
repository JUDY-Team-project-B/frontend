import React from 'react';
import './nav.scss';
import Searchbar from '@/components/common/searchbar/searchbar';
import LoginIcon from '@/assets/image/login.png';

const Nav = () => {
  return (
    <div className="navBackground">
      <div>
        <div className="gotomain">HANG_OUT</div>
      </div>
      <div className="rightcomponents">
        <Searchbar/>
        <div>&nbsp;</div>
        <div className="login">login</div>
      </div>
    </div>
  );
};

export default Nav;
