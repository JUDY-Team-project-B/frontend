import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { UUid, User } from '@/atom/atom';
import { Login } from './login';
import axios from 'axios';
import cookie from 'react-cookies';

export const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setisLogin] = useState<boolean>(false);
  const [userData, setUserData] = useRecoilState<User>(UUid);
  const [keyword, setKeyword] = useState<any>(null);

  const onSilentRefresh = async () =>{
    try{
      const response = await axios.post('http://localhost:8080/api/v1/auth/refresh-token');
      const accessToken  = response.data.data.accessToken;
      console.log(accessToken)
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }catch(e){
      alert('다시 로그인해주세요')
      navigate('/');
      
    }
  }

  const gotoMain = () => {
    navigate('/');
    location.reload();
  };

  const IsLogin = () =>{
    const Token = cookie.load('accessTokens')
    if(Token === undefined){
      setisLogin(false)
    }else{
      setisLogin(true)
    }
  }

  useEffect(() => {
    IsLogin();
    console.log(userData);
  });

  const search = (): void => {
    if(keyword === null){
      alert('검색어를 입력해주세요')
    }else{
      const queryParems1 = new URLSearchParams();
      const queryParems2 = new URLSearchParams();
      queryParems1.set('q', keyword);
      queryParems2.set('t',Selected);
      const queryString1 = queryParems1.toString();
      const queryString2 = queryParems2.toString();
      navigate(`/travel?${queryString1}&${queryString2}`);
      location.reload();
    }
  };

  const setWord = (e: any) => {
    setKeyword(e.target.value);
    console.log(keyword);
  };

  const gotoWrite = () => {
    navigate('/create-post');
    
  };

  const [Selected, setSelected] = useState("title");
  const selectList = [{
    korea:"제목",
    eng:"title"
  }, {
    korea:"내용",
    eng:"content"
  },{
    korea:"닉네임",
    eng:"nickname"
  },{
    korea:"지역",
    eng:"stateAndCity"
  }];

  const handleSelect = (e:any) => {
    setSelected(e.target.value);
    console.log(Selected)
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
              떠나기
            </button >
          </div>
        </div>
        <div className="leftdiv">
          <div className="inputlayout">
            <select onChange={handleSelect} value={Selected}>
              {selectList.map((item)=>(
                <option value={item.eng} key={item.eng}>
                  {item.korea}
                </option>
              ))}
            </select>
            <input
              placeholder="검색어를 입력해주세요"
              className="input"
              onChange={setWord}
              value={keyword}
            />
            <button className='buttonDisign' onClick={search}>검색</button>
          </div>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Header;
