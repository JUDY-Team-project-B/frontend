import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';
import SearchIcon from '@/assets/image/Search icon.png';
import LoginIcon from '@/assets/image/login.png';
import DetailIcon from '@/assets/image/detail.png';
import LoginModal from '../Modal/LoginModal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { UUid, User } from '@/atom/atom';

export const Header = () => {
  const navigator = useNavigate();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false); // State variable for login modal

  //const todoList = useRecoilValue(todoListState);
  //const [userData, setUserData] = useRecoilState<User>(UUid);

  const gotoMain = () => {
    navigator('/');
  };

  const openLoginModal = () => {
    setLoginModalOpen(true); // Open the login modal
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false); // Close the login modal
  };

  //if(userData.is_active ==)

  return (
    <div className="navlayout">
      <div className="space_between">
        <div className="rightdiv">
          <div className="navdiv">
            <button className="navbutton" onClick={gotoMain}>
              HANG OUT
            </button>
          </div>
        </div>
        <div className="leftdiv">
          <div className="inputlayout">
            <input placeholder="여행을 찾아보세요" className="input" />
            <button onClick={gotoMain}>
              <img src={SearchIcon} alt="Search" />
            </button>
          </div>
          <div className="detailicon" onClick={gotoMain}>
            <button>
              <img src={DetailIcon} alt="Detail" />
            </button>
          </div>

          <button className="loginbutton" onClick={openLoginModal}>
            <img src={LoginIcon} alt="Login" />
            {/* {text} */}
          </button>
        </div>
      </div>
      {isLoginModalOpen && (
        <LoginModal open={isLoginModalOpen} onClose={closeLoginModal} />
      )}
    </div>
  );
};

export default Header;
