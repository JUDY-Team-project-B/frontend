import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import user from '@/assets/image/user.png';
import ProfileEditModal from '@/components/common/Modal/ProfileEditModal';
import { useQuery } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';
import axios from 'axios';
import { textAlign } from '@mui/system';
import { PostType } from '@/types/post';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import likeIcon from '@mui/icons-material/Favorite';
import unlikeIcon from '@mui/icons-material/FavoriteBorder';
import gyeongju from '@/assets/image/trip3.jpg';
import place from '@/assets/image/placeholder.png';
import { useNavigate } from 'react-router-dom';
import cookie from 'react-cookies';
import '@/assets/font/font.css';
import DeleteIcon from '@mui/icons-material/Delete';

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
  const url = 0; //임시로 0해둠
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState<UserType | undefined>();
  const [activeSection, setActiveSection] = useState('mypost');
  const [id, setId] = useState('');
  const navigate = useNavigate();
  const [postdata, setPostData] = useState<PostType[] | undefined>();
  const [commentdata, setCommentData] = useState<PostType[] | undefined>();
  const [likedata, setLikeData] = useState<PostType[] | undefined>();
  const [liked, setLiked] = useState([]);
  console.log(liked);

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
              Authorization: `Bearer ${cookie.load('accessTokens')}`,
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

  // 프로필 이미지 삭제
  const deleteProfileImg = async () => {
    try {
      const res = await axios({
        method: 'delete',
        url: `http://localhost:8080/api/v1/user/${data.id}/image`,
        headers: {
          Authorization: `Bearer ${cookie.load('accessTokens')}`,
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('프로필 이미지가 삭제되었습니다.');
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  // GET : 내가 작성한 게시물
  useEffect(() => {
    const PostListData = async () => {
      if (activeSection === 'mypost' && id) {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/v1/post/me/${url}`,
            {
              headers: {
                Authorization: `Bearer ${cookie.load('accessTokens')}`,
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
  }, [activeSection, id]);

  useEffect(() => {
    const CommentListData = async () => {
      if (activeSection === 'comment' && id) {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/v1/comment/me`,
            {
              headers: {
                Authorization: `Bearer ${cookie.load('accessTokens')}`,
                'Access-Control-Allow-Origin': '*',
              },
            },
          );
          const responseData: PostType[] = response.data.data;
          console.log(responseData);
          setCommentData(responseData);
        } catch (error) {
          console.log(error);
        }
      }
    };
    CommentListData();
  }, [activeSection, id]);

  useEffect(() => {
    const LikeListData = async () => {
      if (activeSection === 'like' && id) {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/v1/post/me/like/${url}`,
            {
              headers: {
                Authorization: `Bearer ${cookie.load('accessTokens')}`,
                'Access-Control-Allow-Origin': '*',
              },
            },
          );
          const responseData: PostType[] = response.data.data;
          console.log(responseData);
          setLikeData(responseData);
        } catch (error) {
          console.log(error);
        }
      }
    };
    LikeListData();
  }, [activeSection, id]);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  const setUnlike = async (postId: number) => {
    try {
      axios.post(
        `http://localhost:8080/api/v1/post/like`,
        {
          postId: postId,
        },
        {
          headers: {
            Authorization: `Bearer ${cookie.load('accessTokens')}`,
            'Access-Control-Allow-Origin': '*',
          },
        },
      );
      console.log('성공');
    } catch (error) {
      console.error('Error adding like:', error);
    }
  };

  const goto = (num: number): void => {
    const postnum = String(num);
    const queryParems = new URLSearchParams();
    queryParems.set('q', postnum);
    const queryString = queryParems.toString();
    navigate(`/detail?${queryString}`);
  };

  return (
    <div>
      <BackgroundWrap>
        <Bg>
          {data && (
            <>
              <Container>
                <Container1>
                  <ProfileImgWrap>
                    <ProfileImg
                      bgImg={data.imageUrls[0] ? data.imageUrls[0] : user}
                    />
                    {data.imageUrls && data.imageUrls.length > 0 && (
                      <ProfileImgDeleteButton
                        style={{ fontSize: '2rem' }}
                        onClick={deleteProfileImg}
                      />
                    )}
                  </ProfileImgWrap>

                  <NickName style={{ marginTop: '2rem' }}>
                    {data.nickname}
                  </NickName>
                  <NickName>
                    {data.age}대 {data.gender === 'MAN' ? '남자' : '여자'}
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
          <MypostWrap>
            {postdata?.length === 0 ? (
              <div style={{ marginTop: '15rem', marginLeft: '24rem' }}>
                작성한 게시물이 없습니다.
              </div>
            ) : (
              postdata?.map((datas: PostType, index: any) => (
                <PostWrap>
                  <TopWrap>
                    <PlaceLayout>
                      {/* OnclickEvent없음 */}
                      <img src={place} alt="Place" />
                    </PlaceLayout>
                    <Where>{datas.travelState}</Where>
                    <DateWrap>
                      <DateTitle>여행 기간</DateTitle>
                      <Date>
                        {datas.travelDateStart.slice(5, 10).replace(/-/g, '/')}{' '}
                        - {datas.travelDateEnd.slice(5, 10).replace(/-/g, '/')}
                      </Date>
                    </DateWrap>
                  </TopWrap>
                  <ImgWrap>
                    <Img
                      style={{
                        backgroundImage: !datas.imageUrls[0]
                          ? gyeongju
                          : `url(${datas.imageUrls})`,
                      }}
                      onClick={() => goto(datas.id)}
                    ></Img>
                  </ImgWrap>
                  <PostTitle>{datas.title}</PostTitle>
                </PostWrap>
              ))
            )}{' '}
          </MypostWrap>
        </BgMypost>
        <BgComment
          style={{
            flexDirection: 'column',
            display: activeSection === 'comment' ? 'block' : 'none',
          }}
        >
          <Container
            style={{
              backgroundColor: 'white',
              width: '100%',
              marginTop: '2.5rem',
            }}
          >
            <CommentTitle>내가 작성한 댓글</CommentTitle>
            {commentdata?.length === 0 ? (
              <div style={{ marginTop: '15rem', marginLeft: '0rem' }}>
                작성한 댓글이 없습니다.
              </div>
            ) : (
              //onClickEvent없음
              commentdata?.map((datas: PostType, index: any) => (
                <Comment
                  key={index}
                  style={{
                    textAlign: 'left',
                    justifyContent: 'center',
                  }}
                >
                  <CommentPost> {datas.postTitle}</CommentPost>
                  {datas.content}
                  <HoverableIcon
                    style={{
                      width: '200%',
                      justifyContent: 'right',
                      marginTop: '-4rem',
                    }}
                  />
                </Comment>
              ))
            )}
          </Container>
        </BgComment>
        <BgMylike
          style={{ display: activeSection === 'like' ? 'block' : 'none' }}
        >
          <MyLikeTitle>위시 리스트</MyLikeTitle>
          <MypostWrap>
            {likedata?.length === 0 ? (
              <div style={{ marginTop: '15rem', marginLeft: '21rem' }}>
                위시리스트에 여행지를 추가해주세요!
              </div>
            ) : (
              likedata?.map((datas: PostType, index: any) => (
                <PostWrap>
                  <TopWrap>
                    <PlaceLayout>
                      <img src={place} alt="Place" />
                    </PlaceLayout>
                    <Where>{datas.travelState}</Where>
                    <DateWrap>
                      <DateTitle>여행 기간</DateTitle>
                      {/* //onClickEvent없음 */}
                      <Date>
                        {datas.travelDateStart.slice(5, 10).replace(/-/g, '/')}{' '}
                        - {datas.travelDateEnd.slice(5, 10).replace(/-/g, '/')}
                      </Date>
                    </DateWrap>
                  </TopWrap>

                  <LikeWrap>
                    <LikeIcon
                      style={{
                        justifyContent: 'right',
                        zIndex: '999',
                        color: liked.includes(datas.id) ? '#ffffff' : '#f90808',
                      }}
                      onClick={() => {
                        if (liked.includes(datas.id)) {
                          setLiked(liked.filter((id) => id !== datas.id));
                          setUnlike(datas.id);
                        } else {
                          setLiked([...liked, datas.id]);
                          setUnlike(datas.id);
                        }
                      }}
                    />
                  </LikeWrap>
                  <ImgWrap>
                    <Img
                      style={{
                        backgroundImage: !datas.imageUrls[0]
                          ? gyeongju
                          : `url(${datas.imageUrls})`,
                      }}
                      onClick={() => goto(datas.id)}
                    ></Img>
                  </ImgWrap>

                  <PostTitle>{datas.title}</PostTitle>
                </PostWrap>
              ))
            )}{' '}
          </MypostWrap>
        </BgMylike>
      </BackgroundWrap>
    </div>
  );
}

export default Profile;

const BackgroundWrap = styled.div`
  height: 55rem;
  width: 100%;
  display: flex;
  font-family: 'NanumSquareNeoTTF';
  justify-content: center;
  margin-top: 3rem;
`;
const Bg = styled.div`
  height: 49rem;
  width: 40%;
  margin-left: -15rem;
  font-family: 'NanumSquareNeoTTF';
  flex-direction: row;
`;

const BgComment = styled.div`
  height: 47rem;
  width: 60rem;
  margin-left: -3rem;
  overflow: visible;
`;

const MypostWrap = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-left: -2rem;
`;

const BgMypost = styled.div`
  height: 47rem;
  width: 60rem;
  margin-top: 2.5rem;
  margin-left: -3rem;
  display: flex;
  flex-direction: row; // 추가
`;

const BgMylike = styled.div`
  height: 47rem;
  width: 60rem;
  margin-top: 2.5rem;
  margin-left: -3rem;
`;

const Container = styled.div`
  text-align: center;
  z-index: 90;
  width: 20rem;
  height: 45rem;
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
  font-size: 1.4rem;
`;
const PostWrap = styled.button`
  display: block;
  background-color: #f5f6f6;
  margin-left: 2rem;
  border-radius: 0.7rem;
  margin-bottom: 3rem;
  width: 15rem;
  height: 18rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.11);
  position: relative;
`;
const PlaceLayout = styled.button`
  justify-content: right;
  display: flex;
  width: 15%;
  margin-top: 2.3rem;
  margin-left: 1rem;
  z-index: 999;
`;
const Where = styled.div`
  z-index: 90;
  margin-left: 0.5rem;
  position: relative;
  overflow: visible;
  width: 9rem;
  height: 5.8rem;
  display: flex;
  text-align: left;
  align-items: center;
  font-size: 1.25rem;
  color: #0792e3;
`;

const TopWrap = styled.div`
  display: flex;
  height: 4rem;
  width: 15rem;
  margin-top: -2rem;
  overflow: visible;
`;

const DateWrap = styled.div`
  display: block;
  height: 4rem;
  width: 12rem;
  margin-top: 1.3rem;
  margin-left: 0rem;
  text-align: left;
`;
const DateTitle = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  margin-top: 0.7rem;
  overflow: hidden;
`;

const Date = styled.div`
  font-size: 13px;
  overflow: hidden;
  margin-top: 0.5rem;

  color: #1aa5f5;
`;

const LikeWrap = styled.div`
  display: flex;
  height: 4rem;
  width: 95%;
  justify-content: right;

  margin-top: 2rem;
  position: absolute;
`;

const ImgWrap = styled.div`
  display: flex;
  margin-top: 0.8rem;
  height: 9.5rem;
  position: relative;
  width: 100%;
`;

const ProfileImgDeleteButton = styled(DeleteIcon)`
  background-color: #a3a3a3;
  border-radius: 2rem;
  cursor: pointer;
  padding: 0.25rem;
  color: #f5f5f5;
  position: relative;
  margin-top: 10rem;
  margin-left: -2.5rem;

  &:hover {
    position: center;
    background-color: #ababab;
  }
`;

const Img = styled.button`
  display: flex;
  opacity: 0.9;
  width: 100%;
  overflow: hidden;
  height: 9.5rem;
  background-size: 100% 100%;
  background-image: url(${gyeongju});
  background-repeat: no-repeat;
  transition: transform 0.5s;

  &:hover {
    position: center;
    opacity: 0.75;
    transform: scale(1.11); /* 이미지 확대 */
  }
`;

const PostTitle = styled.div`
  font-size: 0.8rem;
  width: 13rem;
  font-weight: bold;
  margin-top: 1.7rem;
  overflow: visible;
  text-align: center;
  margin-left: 1rem;
  height: 1.2rem;
`;

const MyLikeTitle = styled.div`
  z-index: 90;
  position: relative;
  overflow: visible;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
`;

const CommentPost = styled.div`
  z-index: 90;
  position: relative;
  overflow: visible;
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  color: #1f89f4;
`;
const HoverableIcon = styled(ArrowForwardIosIcon)`
  width: 200%;
  color: #b7b9bb;
`;

const LikeIcon = styled(likeIcon)`
  position: relative;

  &:hover {
    position: center;
    opacity: 0.9;
    transform: scale(1.11); /* 이미지 확대 */
  }
`;

const Comment = styled.button`
  z-index: 999;
  position: relative;
  overflow: visible;
  border: solid 2px #74777a;
  border-radius: 1rem;
  margin-top: 1rem;
  width: 90%;
  padding: 0.8rem;
  height: 5rem;
  font-size: 1.05rem;
  margin-left: -6rem;
  transition: all 0.3s ease-in-out; // 추가: 부드러운 변화를 위한 transition
  &:hover {
    position: center;
    opacity: 0.8;
    background-color: #f3f2f2;
    transform: scale(1.015); // 크기를 1.2배로 확대

    ${HoverableIcon} {
      color: #626262; // 변경하고자 하는 색상으로 수정
    }
  }
`;

const CommentTitle = styled.div`
  z-index: 90;
  position: relative;
  overflow: visible;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
`;
const ProfileImgWrap = styled.div`
  display: flex;
  height: 12rem;
  position: relative;
  width: 100%;
`;
const ProfileImg = styled.div<{ bgImg: string }>`
  background-image: ${(props) => `url(${props.bgImg})`};
  height: 9rem;
  width: 9rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-left: 5.5rem;
  margin-top: 3rem;
  border-radius: 50%; /* 이미지를 둥글게 만듭니다 */
`;

const NickName = styled.div`
  font-size: 1.2rem;
  margin-top: 1rem;
  color: white;
  overflow: visible;
`;

const Introduce = styled.div`
  font-size: 1.5rem;
  overflow: visible;
`;
const ChangeBtn = styled.button`
  font-size: 0.9rem;
  margin-top: 2rem;
  width: 6rem;
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

  height: 3rem;
  width: 100%;
  margin-top: 6rem;
  font-size: 1.3rem;
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

  height: 3rem;
  width: 100%;
  font-size: 1.3rem;
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

  height: 3rem;
  width: 100%;
  font-size: 1.3rem;
  color: white;

  &:hover {
    position: center;
    opacity: 0.8;
    background-color: #17a9f8;
  }
`;
