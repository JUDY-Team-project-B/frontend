import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import user from '../../assets/image/user.png';
import ProfileEditModal from '@/components/common/Modal/ProfileEditModal';
import Content2 from './Contents';
import { useQuery } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';
import axios from 'axios';

export interface UserType{
  age: number
  description: string
  email: string
  gender: string
  id: number
  imageUrls: string[]
  nickname: string
  role: string
}

function Profile() {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState<UserType|undefined>();

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(()=>{
    const PostListData =async () => {
      try{
        const response = await axios.get(`http://localhost:8080/api/v1/user/me`,{headers:{Authorization: `Bearer ${localStorage.getItem('accessToken')}`,'Access-Control-Allow-Origin': '*'}})
        console.log(response)
        const responseData = response.data.data
        console.log(responseData)
        setData(responseData)
      }catch(error){
        console.log(error)
      }
    }
    /// 여기서 처리 추가적으로 처리 가능///
    PostListData();
  },[])


    return (
      <div>
        <Bg>
          {data && (
            <>
              <Container>
                <Container1>
                  <ProfileImg bgImg={user} />
                </Container1>
                <Container2>
                  <ChangeBtn onClick={handleModal} type="button">
                    프로필 편집
                  </ChangeBtn>
                  <NickName>{data.nickname}</NickName>
                  <NickName>{data.id}</NickName>
                </Container2>
                <Introduce>{data.description}</Introduce>
              </Container>
              <ProfileEditModal open={modalOpen} onClose={handleModal} />
            </>
          )}
        </Bg>
        <Content2 />
      </div>
    );
  }
  // return (    
  // <div>
  //   hello
  // </div>)


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

const ProfileImg = styled.div<{ bgImg: string }>`
  background-image: ${(props) => `url(${props.bgImg})`};
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
