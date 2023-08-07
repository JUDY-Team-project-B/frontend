import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';
import SearchIcon from '@/assets/image/Search icon.png';
import LoginIcon from '@/assets/image/login.png';
import DetailIcon from '@/assets/image/detail.png';
import LoginModal from '../Modal/LoginModal';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { UUid, User } from '@/atom/atom';
import { red } from '@mui/material/colors';
import { Login } from './login';

// function getItemWithExpireTime(keyName:any) {
//   const setUserData = useSetRecoilState<User>(UUid);

//   const objString = window.localStorage.getItem(keyName);
//   if(!objString) {
//     return null;
//   }

//   const obj = JSON.parse(objString);

//   if(Date.now() > obj.expire) {
//     window.localStorage.removeItem(keyName);
//     setUserData({
//       is_active: false,
//     })
//     return null;
//   }
//   return obj.value;
// }

export const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setisLogin] = useState<boolean>(false);
  const [userData, setUserData] = useRecoilState<User>(UUid);
  const [keyword, setKeyword] = useState<any>();
  // getItemWithExpireTime('accessToken')

  const gotoMain = () => {
    navigate('/');
  };

  useEffect(() => {
    setisLogin(userData.is_active);
    console.log(userData);
  });

  const search = (): void => {
    const queryParems = new URLSearchParams();
    queryParems.set('q', keyword);
    const queryString = queryParems.toString();
    navigate(`/travel?${queryString}`);
  };

  const setWord = (e: any) => {
    setKeyword(e.target.value);
    console.log(keyword);
  };

  const gotoWrite = () => {
    navigate('/create-post');
  };

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
            <button onClick={gotoWrite}>
              글쓰기
            </button >
          </div>
        </div>
        <div className="leftdiv">
          <div className="inputlayout">
            <input
              placeholder="여행지를 검색해보세요"
              className="input"
              onChange={setWord}
              value={keyword}
            />
            <button onClick={search}>검색</button>
          </div>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Header;
