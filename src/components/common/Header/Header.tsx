import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';
import SearchIcon from '@/assets/image/Search icon.png';
import LoginIcon from '@/assets/image/login.png';
import DetailIcon from '@/assets/image/detail.png';
import LoginModal from '../Modal/LoginModal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { UUid, User } from '@/atom/atom';
import { red } from '@mui/material/colors';
import { Login } from './login';

export const Header = () => {
  const navigator = useNavigate();
  const [isLogin, setisLogin] = useState<boolean>(false);
  const [userData, setUserData] = useRecoilState<User>(UUid);

  const gotoMain = () => {
    navigator('/');
  };

  useEffect(() => {
    setisLogin(userData.is_active);
    console.log(userData);
  });

  return (
    <div className="navlayout">
      <div className="space_between">
        <div className="rightdiv">
          <div className="navdiv">
            <button
              className="navbutton"
              onClick={gotoMain}
              style={{ fontFamily: 'RixInooAriDuriR' }}
            >
              HANG OUT
            </button>
          </div>
        </div>
        <div className="leftdiv">
          <div className="inputlayout">
            <input placeholder="여행지를 검색해보세요" className="input" />
            <button onClick={gotoMain}></button>
          </div>
          <Login/>
        </div>
      </div>
    </div>
  );
};

export default Header;
