import React from 'react';
import './nav.scss';
import Searchbar from '@/components/common/searchbar/searchbar';
import LoginIcon from '@/assets/image/login.png';
import searchicon from '@/assets/image/Search icon.png'

const Nav = () => {
  return (
    <div className="navBackground">
      <div>
        <div className="gotomain">HANG_OUT</div>
      </div>
      <div className="rightcomponents">
        <input className='' placeholder='검색할 내용을 입력해주세요' />
        <button>
          <img src={searchicon}/>
        </button>
        <div className="login">login</div>
      </div>
    </div>
  );
};

export default Nav;
