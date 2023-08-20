import React, { useEffect, useState } from 'react';
import LoginModal from '../Modal/LoginModal';
import { useRecoilState } from 'recoil';
import { UUid, User } from '@/atom/atom';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false); // State variable for login modal
  const [userData, setUserData] = useRecoilState<User>(UUid);
  const [isLogin, setisLogin] = useState<boolean>(false);

  const navigate = useNavigate();
  useEffect(() => {
    setisLogin(userData.is_active);
    console.log(userData.is_active);
  });

  const openLoginModal = () => {
    setLoginModalOpen(true); // Open the login modal
  };

  const closeLoginModal = () => {
    setLoginModalOpen(false); // Close the login modal
  };

  const logout = () => {
    console.log('로그아웃');
    setUserData({
      is_active: false,
    });
    localStorage.removeItem('accessToken');
    navigate('/');
    location.reload();
  };

  const gotoMypage = () => {
    navigate('/mypage');
    location.reload();
  };

  const gotoWrite = () => {
    navigate('/create-post');
    location.reload();
  };

  const gotoRegister = () => {
    navigate('/register');
    location.reload();
  };
  if (isLogin === false) {
    return (
      <div style={{ marginLeft: '9rem', display: 'flex', marginRight: '3rem' }}>
        <div
          style={{
            display: 'flex',
            width: '5.5rem',
            justifyContent: 'center',
            padding: '.5rem',
            backgroundColor: '#4ab8f7',
            color: 'white',
            borderRadius: '1rem',
            fontFamily: 'NanumSquareNeo-Variable',
          }}
        >
          <button onClick={openLoginModal}>로그인</button>
        </div>
        <div
          style={{
            display: 'flex',
            width: '6.5rem',
            justifyContent: 'center',
            padding: '.5rem',
            backgroundColor: '#4ab8f7',
            color: 'white',
            borderRadius: '1rem',
            marginLeft: '1rem',
            fontFamily: 'NanumSquareNeo-Variable',
          }}
        >
          <button onClick={gotoRegister}>회원가입</button>
          {isLoginModalOpen && (
            <LoginModal open={isLoginModalOpen} onClose={closeLoginModal} />
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ marginLeft: '8rem', display: 'flex', marginRight: '3rem' }}>
        
        <div
          style={{
            display: 'flex',
            width: '5.5rem',
            justifyContent: 'center',
            padding: '.5rem',
            backgroundColor: '#4ab8f7',
            color: 'white',
            borderRadius: '1rem',
            marginLeft: '1rem',
            fontFamily: 'NanumSquareNeo-Variable',
          }}
        >
          <button onClick={gotoMypage}>내정보</button>
        </div>
        <div
          style={{
            display: 'flex',
            width: '6.5rem',
            justifyContent: 'center',
            padding: '.5rem',
            backgroundColor: '#4ab8f7',
            color: 'white',
            borderRadius: '1rem',
            marginLeft: '1rem',
            fontFamily: 'NanumSquareNeo-Variable',
          }}
        >
          <button onClick={logout}>로그아웃</button>
        </div>
        
      </div>
    );
  }
};
