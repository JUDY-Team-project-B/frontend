import React, { useState } from 'react';
import styled from 'styled-components';
import user from '../../assets/image/user.png';
import ProfileEditModal from '@/components/common/Modal/ProfileEditModal';
import Content2 from './Contents';
import { useQuery } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';

function Profile() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  // const { data, isLoading, isError, error } = useQuery(['POST'], () =>
  //   restFetcher({
  //     method: 'GET',
  //     path: `/api/v1/post/all`,
  //   }),
  // );

  const { data, isLoading, isError, error } = useQuery(['POST'], () =>
    restFetcher({
      method: 'GET',
      path: `/api/v1/post/all/profile`,
    }),
  );
  const res = data;
  console.log(data);

  if (data) {
    return (
      <div>
        <Bg>
          {data && (
            <>
              <Container>
                <Container1>
                  <ProfileImg></ProfileImg>
                </Container1>
                <Container2>
                  <ChangeBtn onClick={handleModal} type="button">
                    프로필 편집
                  </ChangeBtn>
                  <NickName>{Object.values<any>(data[0])[2]}</NickName>
                  <NickName>{Object.values<any>(data[0])[3]}</NickName>
                </Container2>
                <Introduce>{Object.values<any>(data[0])[4]}</Introduce>
              </Container>
              <ProfileEditModal open={modalOpen} onClose={handleModal} />
            </>
          )}
        </Bg>
        <Content2 />
      </div>
    );
  }
}

export default Profile;

const Bg = styled.div`
  background-color: #529dc8;
  height: 28rem;
`;

const Container = styled.div`
  text-align: center;
  z-index: 90;
  width: 36rem;
  position: relative;
  height: 23rem;
  border-radius: 5rem;
  background-color: #3588b8;
  margin: auto;
  margin-top: 2.5rem;
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
  height: 18rem;
  justify-content: center;
  margin-top: -1rem;
`;

const ProfileImg = styled.div`
  background-image: url(${user});
  height: 17rem;
  background-size: 10rem 10rem;
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
`;

const Introduce = styled.div`
  font-size: 1.5rem;
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
