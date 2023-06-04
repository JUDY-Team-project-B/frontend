import React, { useState } from 'react';
import styled from 'styled-components';
import user from '../../assets/image/user.png';
import ProfileEditModal from '@/components/common/Modal/ProfileEditModal';

function Profile() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Bg>
      <Container>
        <Container1>
          <ProfileImg></ProfileImg>
        </Container1>
        <Container2>
          <ChangeBtn onClick={handleModal} type="button">
            프로필 편집
          </ChangeBtn>
          <NickName>사진작가 이씨</NickName>
          <NickName>tester@gmail.com</NickName>
        </Container2>
        <Introduce>사진찍는 여행을 좋아해요!</Introduce>
      </Container>
      <ProfileEditModal open={modalOpen} onClose={handleModal} />
    </Bg>
  );
}

export default Profile;

const Bg = styled.div`
  background-color: #a1bbe4;
  height: 37rem;
`;

const Container = styled.div`
  text-align: center;
  z-index: 90;
  width: 36rem;
  position: relative;
  height: 26rem;
  border-radius: 5rem;
  background-color: #7ab0f1;
  margin: auto;
  margin-top: 5rem;
`;

const Container1 = styled.div`
  z-index: 90;
  position: relative;
  overflow: visible;
  height: 2rem;
`;

const Container2 = styled.div`
  z-index: 90;
  width: 40rem;
  height: 25rem;
  justify-content: center;
  margin-top: -1rem;
`;

const ProfileImg = styled.div`
  background-image: url(${user});
  height: 17rem;
  background-size: 12rem 12rem;
  background-repeat: no-repeat;
  background-position: center;
  /* margin-top: 20rem; */
  background-position-x: 5rem;
  background-position-y: 5rem;
`;

const NickName = styled.div`
  font-size: 1.5rem;
  align-text: left;
  margin-top: 3.5rem;
  margin-left: 10rem;
  height: 3rem;
`;

const Introduce = styled.div`
  font-size: 1.5rem;
  margin-top: -5rem;
  overflow: visible;
`;
const ChangeBtn = styled.button`
  font-size: 0.73rem;
  margin-left: 23rem;
  margin-top: 1rem;
  width: 4.5rem;
  height: 1.7rem;
  color: white;
  border: none;
  border-radius: 1rem;
  background-color: #518ccc;
  cursor: pointer;
  position: relative;
  z-index: 99;
`;
