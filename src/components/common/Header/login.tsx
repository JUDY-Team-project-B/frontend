import React, { useEffect, useState } from 'react';
import LoginModal from '../Modal/LoginModal';
import { useRecoilState } from 'recoil';
import { UUid, User } from '@/atom/atom';
import { useNavigate } from 'react-router-dom';



export const Login = () =>{
    const [isLoginModalOpen, setLoginModalOpen] = useState(false); // State variable for login modal
    const [userData, setUserData] = useRecoilState<User>(UUid);
    const [isLogin, setisLogin] = useState<boolean>(false);

    const navigate = useNavigate();
    useEffect(()=>{
      setisLogin(userData.is_active)
      console.log(userData.is_active)
    })

    const openLoginModal = () => {
      setLoginModalOpen(true); // Open the login modal
    };
  
    const closeLoginModal = () => {
      setLoginModalOpen(false); // Close the login modal
    };

    const logout = () => {
      console.log('로그아웃')
      setUserData({
        is_active:false
      });
      localStorage.removeItem('accessToken')
      navigate('/');
    }

    const gotoMypage = ()=>{
      navigate('/mypage')
    }
    if (isLogin === false) {
        return (
          <div>
            <button onClick={openLoginModal}>
              로그인
            </button>
            /
            <button>
              회원가입
            </button>
            {isLoginModalOpen && (<LoginModal open={isLoginModalOpen} onClose={closeLoginModal} />)}
          </div> 
        );
      } else {
        return (
          <div>
            <button onClick={gotoMypage}>
              내정보
            </button>
            /
            <button onClick={logout}>
              로그아웃
            </button>
          </div>
        )
      }
}