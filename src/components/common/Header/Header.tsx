import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss'
import SearchIcon from '@/assets/image/Search icon.png'
import LoginIcon from '@/assets/image/login.png'
import DetailIcon from '@/assets/image/detail.png'

export const Header = () => {

  const navigator = useNavigate();

  const gotoMain = () =>{
    navigator('/')
  }

  return(
    <div className="navlayout">
    <div className="space_between">
      <div className="rightdiv">
        <div className="navdiv">
          <div className="navbutton" onClick={gotoMain}>
            HANG OUT
          </div>
        </div>
      </div>
      <div className="leftdiv">
        <div className='inputlayout'>
          <input placeholder='여행을 찾아보세요' className='input'/>
          <button onClick={gotoMain}>
            <img src={SearchIcon} />
          </button>
        </div>
        <div className='detailicon' onClick={gotoMain}>
          <button>
            <img src={DetailIcon} />
          </button>
        </div>

        <button className="loginbutton" onClick={gotoMain}>
          <img src={LoginIcon} />
            로그인
        </button>
      </div>
    </div>
  </div>
  )
};
