import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import user from '../../assets/image/user.png';
import ProfileEditModal from '@/components/common/Modal/ProfileEditModal';
import Content2 from './Contents';
import { useQuery } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';
import axios from 'axios';
import { textAlign } from '@mui/system';
import { PostType } from '@/types/post';

export interface UserType {
  age: number;
  description: string;
  email: string;
  gender: string;
  id: number;
  imageUrls: string[];
  nickname: string;
  role: string;
}

function Profile() {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState<UserType | undefined>();
  const [activeSection, setActiveSection] = useState('mypost');
  const [id, setId] = useState('');
  const [postdata, setPostData] = useState<PostType[] | undefined>();

  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    const UserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/user/me`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Access-Control-Allow-Origin': '*',
            },
          },
        );
        console.log(response);
        const responseData = response.data.data;
        console.log(responseData);
        setData(responseData);
        setId(responseData.id);
      } catch (error) {
        console.log(error);
      }
    };
    /// 여기서 처리 추가적으로 처리 가능///
    UserData();
  }, []);

  useEffect(() => {
    const PostListData = async () => {
      if (id) {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/v1/post/${id}`,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'Access-Control-Allow-Origin': '*',
              },
            },
          );
          const responseData: PostType[] = response.data.data;
          console.log(responseData);
          setPostData(responseData);
        } catch (error) {
          console.log(error);
        }
      }
    };
    PostListData();
  }, []);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div>
      <BackgroundWrap>
        <Bg>
          {data && (
            <>
              <Container>
                <Container1>
                  <ProfileImg bgImg={user} />

                  <NickName>{data.nickname}</NickName>
                  <NickName>
                    {data.age}대 {data.gender === 'MAN' ? '남성' : '여성'}
                  </NickName>
                  <ChangeBtn onClick={handleModal} type="button">
                    프로필 수정
                  </ChangeBtn>
                  <MyPostList onClick={() => handleSectionChange('mypost')}>
                    내 게시물
                  </MyPostList>
                  <MyCommentList onClick={() => handleSectionChange('comment')}>
                    내 댓글
                  </MyCommentList>
                  <MyLikeList onClick={() => handleSectionChange('like')}>
                    위시 리스트
                  </MyLikeList>
                </Container1>

                <Container2></Container2>
                <Introduce></Introduce>
              </Container>
              <ProfileEditModal open={modalOpen} onClose={handleModal} />
            </>
          )}
        </Bg>
        <BgMypost
          style={{ display: activeSection === 'mypost' ? 'block' : 'none' }}
        >
          <MypostTitle>내가 작성한 게시물</MypostTitle>
        </BgMypost>
        <BgComment
          style={{ display: activeSection === 'comment' ? 'block' : 'none' }}
        >
          <Container
            style={{
              backgroundColor: 'white',
              width: '100%',
              marginTop: '2.5rem',
            }}
          >
            <CommentTitle>내가 작성한 댓글</CommentTitle>
            <Comment
              style={{
                textAlign: 'left',
                justifyContent: 'center',
              }}
            >
              동행하고 싶습니다!!
            </Comment>
            <Comment
              style={{
                textAlign: 'left',
                justifyContent: 'center',
              }}
            >
              혹시 8/18일은 어디 여행하시나요?
            </Comment>
          </Container>
        </BgComment>
        <BgMylike
          style={{ display: activeSection === 'like' ? 'block' : 'none' }}
        >
          <MyLikeTitle>위시 리스트</MyLikeTitle>
        </BgMylike>
      </BackgroundWrap>
      {/* <Content2 /> */}
    </div>
  );
}
// return (
// <div>
//   hello
// </div>)

export default Profile;

const BackgroundWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  font-family: 'NanumSquareNeo-Variable';
`;
const Bg = styled.div`
  height: 60rem;
  width: 40%;
`;

const BgComment = styled.div`
  /* background-color: #74c6f6; */
  height: 100%;
  width: 50%;
`;

const BgMypost = styled.div`
  height: 55rem;
  width: 50%;
  margin-top: 2.5rem;
`;
const BgMylike = styled.div`
  height: 55rem;
  width: 50%;
  margin-top: 2.5rem;
`;

const Container = styled.div`
  text-align: center;
  z-index: 90;
  width: 25rem;
  height: 50rem;
  border-radius: 1.5rem;
  background-color: #70bffb;
  margin: auto;
  margin-top: 4rem;
  display: block;
  justify-content: center;
  overflow: visible;
`;

const Container1 = styled.div`
  z-index: 90;
  overflow: visible;
  height: 2rem;
  display: block;
`;

const Container2 = styled.div`
  z-index: 90;
  width: 40rem;
  height: 18rem;
  justify-content: center;
  margin-top: -1rem;
  display: block;
`;

const MypostTitle = styled.div`
  z-index: 90;
  position: relative;
  overflow: visible;
  width: 100%;
  height: 5rem;
  display: flex;

  align-items: center;
  font-size: 1.5rem;
`;

const CommentTitle = styled.div`
  z-index: 90;
  position: relative;
  overflow: visible;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

const MyLikeTitle = styled.div`
  z-index: 90;
  position: relative;
  overflow: visible;
  width: 100%;
  height: 5rem;
  display: flex;

  align-items: center;
  font-size: 1.5rem;
`;

const Comment = styled.button`
  z-index: 90;
  position: relative;
  overflow: visible;
  border: solid 3px #727374;
  border-radius: 1rem;
  margin-top: 1rem;
  width: 100%;
  padding: 1.5rem;
  &:hover {
    position: center;
    opacity: 0.8;
    background-color: #f3f2f2;
  }
`;

const ProfileImg = styled.div<{ bgImg: string }>`
  background-image: ${(props) => `url(${props.bgImg})`};
  height: 17rem;
  background-size: 10rem 10rem;
  background-repeat: no-repeat;
  background-position: center;
  /* margin-top: 20rem; */
  background-position-x: 7.5rem;
  background-position-y: 5rem;
`;

const NickName = styled.div`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: white;
  overflow: visible;
`;

const Introduce = styled.div`
  font-size: 1.5rem;
  overflow: visible;
`;
const ChangeBtn = styled.button`
  font-size: 1rem;
  margin-top: 2rem;
  width: 6.5rem;
  height: 2.2rem;
  color: white;
  border: none;
  border-radius: 1rem;
  background-color: #17a9f8;
  cursor: pointer;
  position: relative;
  z-index: 99;
  &:hover {
    position: center;
    opacity: 0.8;
  }
`;

const MyPostList = styled.button`
  z-index: 90;
  position: relative;
  overflow: visible;
  border-radius: 0.8rem;
  height: 3rem;
  width: 100%;
  margin-top: 6rem;
  font-size: 1.5rem;
  color: white;
  &:hover {
    position: center;
    opacity: 0.8;
    background-color: #17a9f8;
  }
`;
const MyCommentList = styled.button`
  z-index: 90;
  position: relative;
  overflow: visible;
  border-radius: 0.8rem;
  height: 3rem;
  width: 100%;
  font-size: 1.5rem;
  color: white;
  &:hover {
    position: center;
    opacity: 0.8;
    background-color: #17a9f8;
  }
`;
const MyLikeList = styled.button`
  z-index: 90;
  position: relative;
  overflow: visible;
  border-radius: 0.8rem;
  height: 3rem;
  width: 100%;
  font-size: 1.5rem;
  color: white;

  &:hover {
    position: center;
    opacity: 0.8;
    background-color: #17a9f8;
  }
`;
