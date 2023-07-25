import React, { useState } from 'react';
import styled from 'styled-components';
import '../../assets/font/font.css';

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(245, 245, 245);
  height: 60rem;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Select = styled.select`
  margin-bottom: 10px;
  padding: 0.9rem;
  width: 25rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Option = styled.option`
  width: 25rem;
  border: 10px solid #ccc;
  border-radius: 5px;
  margin-left: 2rem;
`;

const Title = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 5rem;
  font-size: 2.5rem; //문장 상하 간격
  color: rgb(34, 176, 242);
  font-family: 'RixInooAriDuriR';
  font-weight: 1000;
  display: flex;
  justify-content: center;
  overflow: visible;
`;

const InputTitle = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 1.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: #000f14;
  font-family: 'SUITE-Regular';
  display: flex;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 0.9rem;
  width: 25rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 25rem;

  margin-top: 1.5rem;
  padding: 15px 20px;
  background-color: rgb(34, 176, 242);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    position: center;
    opacity: 0.8;
  }
`;

const SignUpPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [nickname, setNickname] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('PasswordCheck:', passwordCheck);
    console.log('Nickname:', nickname);
    console.log('Gender:', gender);
    console.log('Age:', age);
  };

  return (
    <SignUpContainer>
      <Title>HANG OUT</Title>
      <SignUpForm onSubmit={handleSignUp}>
        <InputTitle>이메일</InputTitle>
        <Input
          type="text"
          placeholder="이메일"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputTitle>비밀번호</InputTitle>
        <InputTitle
          style={{ color: '#a3a5a5', marginTop: '0.5rem', fontWeight: '100' }}
        >
          영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
        </InputTitle>
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <InputTitle>비밀번호 확인</InputTitle>
        <Input
          type="password"
          placeholder="비밀번호 확인"
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
        <InputTitle>닉네임</InputTitle>
        <InputTitle
          style={{ color: '#a3a5a5', marginTop: '0.5rem', fontWeight: '100' }}
        >
          다른 유저와 겹치지 않도록 입력해주세요. (2~15자)
        </InputTitle>
        <Input
          type="text"
          placeholder="닉네임 (2~15자)"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <InputTitle>회원정보</InputTitle>
        <Select value={gender} onChange={(e) => setGender(e.target.value)}>
          <Option value="">성별</Option>
          <Option value="남자">남자</Option>
          <Option value="여자">여자</Option>
        </Select>

        <Select value={age} onChange={(e) => setAge(e.target.value)}>
          <Option value="">나이</Option>
          <Option value="10대">10대</Option>
          <Option value="20대">20대</Option>
          <Option value="30대">30대</Option>
          <Option value="40대">40대</Option>
          <Option value="50대">50대</Option>
        </Select>
        <Button type="submit">회원가입</Button>
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUpPage;
