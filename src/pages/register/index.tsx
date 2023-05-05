import React, { useEffect } from 'react';
import './index.scss';
import { useRecoilValue } from 'recoil';

const Register = () => {
  return (
    <div className="background">
      <div className="page">
        <div className="titleWrap">
          회원가입
          <br />
        </div>

        <div className="contentWrap">
          <div style={{ marginTop: '15px' }} className="inputTitle">
            이메일 주소
          </div>
          <div className="inputWrap">
            <input className="input" placeholder="hangout@gmail.com" />
          </div>
          <div className="errorMessageWrap">올바른 이메일을 입력해주세요.</div>

          <div style={{ marginTop: '26px' }} className="inputTitle">
            닉네임
          </div>
          <div className="inputWrap">
            <input className="input" placeholder="행아웃" />
          </div>
          <div className="errorMessageWrap">
            닉네임은 6자를 넘을 수 없습니다.
          </div>

          <div style={{ marginTop: '26px' }} className="inputTitle">
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              className="input"
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            />
          </div>
          <div className="errorMessageWrap">
            영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
          </div>

          <div style={{ marginTop: '26px' }} className="inputTitle">
            비밀번호 확인
          </div>
          <div className="inputWrap">
            <input
              className="input"
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
            />
          </div>
          <div className="errorMessageWrap">
            입력하신 비밀번호와 일치하지 않습니다!
          </div>
        </div>

        <div>
          <button disabled={true} className="bottomButton">
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
