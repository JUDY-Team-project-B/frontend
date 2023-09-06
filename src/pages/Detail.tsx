import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import titleImg from '../../assets/image/image1.png';
import user from '../../assets/image/user.png';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';
import axios from 'axios';
import { UserType } from './Mypage';
import { commentType } from '@/types/post';
import cookie from 'react-cookies';

function Detail() {
  const locations = useLocation();
  const queryParems = new URLSearchParams(locations.search);
  const searchTerm = queryParems.get('q');

  const [PostData, setPostData] = useState<any[] | any>([]);
  const [postnum, setPostnum] = useState<string | undefined>('');
  const [data, setData] = useState<any | undefined>('');
  const [commentData, setCommentData] = useState<commentType[]>([
    {
      children: [],
      content: '',
      createdAt: '',
      id: 0,
      isSelect: false,
      likeCount: 0,
      nickname: '',
    },
  ]);
  const [userId, setUserId] = useState<any | undefined>('');
  const [userData, setUserData] = useState<any | undefined>('');
  const [comments, setComments] = useState<any | undefined>('');
  const [myData, setMyData] = useState<any | undefined>('');
  const [ChildrenComment, setChildrenComment] = useState<any | undefined>();

  const [repo, setRepo] = useState('auto-test');
  const [path, setPath] = useState('READ.md');

  const setIsSelect = (index: number) => {
    setChildrenComment('');
    setCommentData((prevData) => {
      const newData = [...prevData];
      if (newData[index].isSelect === false) {
        for (let i = 0; i < newData.length; i++) {
          newData[i] = {
            ...newData[i],
            isSelect: false,
          };
        }
        newData[index] = {
          ...newData[index],
          isSelect: !newData[index].isSelect,
        };
        return newData;
      } else {
        newData[index] = {
          ...newData[index],
          isSelect: !newData[index].isSelect,
        };
        return newData;
      }
    });
    console.log(commentData);
  };

  const setCommentIsSelect = (index: number) => {
    setChildrenComment('');
    setCommentData((prevData) => {
      const newData = [...prevData]; // 기존 데이터 가져오기

      if (newData[index].isSelect === false) {
        // 선택이 안되어있는 경우
        for (let i = 0; i < newData.length; i++) {
          newData[i] = {
            ...newData[i],
            isSelect: false,
          };
        }
        newData[index] = {
          ...newData[index],
          isSelect: !newData[index].isSelect,
        };
        return newData;
      } else {
        //다른곳이 선택이 되어있는 경우
        newData[index] = {
          ...newData[index],
          isSelect: !newData[index].isSelect,
        };
        return newData;
      }
    });
    setChildrenComment(commentData[index].content);
    console.log(commentData);
  };

  const sendComment = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/comment',
        {
          userId: userData.id,
          postId: searchTerm,
          parentId: '',
          content: comments,
        },
        {
          headers: {
            Authorization: `Bearer ${cookie.load('accessTokens')}`,
            'Access-Control-Allow-Origin': '*',
          },
        },
      );
      console.log(response);
      alert('작성되었습니다');
    } catch (error) {
      console.log(error);
    }
    location.reload();
  };

  const sendChildcomment = async (parentId: number) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/v1/comment',
        {
          userId: userData.id,
          postId: searchTerm,
          parentId: parentId,
          content: ChildrenComment,
          
        },
        {
          headers: {
            Authorization: `Bearer ${cookie.load('accessTokens')}`,
            'Access-Control-Allow-Origin': '*',
          },
        },
      );
      console.log(response);
      alert('작성되었습니다');
    } catch (error) {
      console.log(error);
    }
  };

  const onSearch = (e: any) => {
    setComments(e.target.value);
    console.log(comments);
  };

  const onChildcomment = (e: any) => {
    setChildrenComment(e.target.value);
  };

  const Deletecomment = async (index: any) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/comment/${index}`,
        {
          headers: {
            Authorization: `Bearer ${cookie.load('accessTokens')}`,
            'Access-Control-Allow-Origin': '*',
          },
        },
      );
      console.log(response);
      alert('삭제되었습니다');
    } catch (error) {
      console.log(error);
    }
    location.reload();
  };

  useEffect(() => {
    const PostListData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/post/${searchTerm}`,
          {
            headers: {
              //Authorization: `Bearer ${cookie.load('accessTokens')}`,
              'Access-Control-Allow-Origin': '*',
            },
          },
        );
        console.log(response);
        const responseData = response.data.data;
        console.log(responseData);
        setData(responseData);
        setUserId(data.nickname);
      } catch (error) {
        console.log(error);
      }
    };
    
    async function CommentListData(): Promise<void> {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/comment/${searchTerm}`,
          {
            headers: {
              //Authorization: `Bearer ${cookie.load('accessTokens')}`,
              'Access-Control-Allow-Origin': '*',
            },
          },
        );
        console.log(response);
        const responseData = response.data.data;
        if (responseData) {
          for (let i = 0; i < responseData.length; i += 1) {
            responseData[i].isSelect = false;
          }
        }
        console.log(responseData);
        setCommentData(responseData);
      } catch (error) {
        console.log(error);
      }
    }

    async function MyData(): Promise<void> {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/v1/user/me',
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
        setMyData(responseData);
      } catch (error) {
        console.log(error);
      }
    }
    MyData();
    PostListData();
    CommentListData();
  }, [searchTerm]);

  useEffect(() => {
    async function UserData(): Promise<void> {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/user/${data.userId}`,
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
        setUserData(responseData);
      } catch (error) {
        console.log(error);
      }
    }
    UserData();
  }, [data]);

  return (
    <Bg>
      <TitleImg></TitleImg>
      <Container>
        <LeftContainer>
          <Title>{data.title}</Title>
          <DestinationContainer>
            <Destination>여행지역</Destination>
            <DestinationValue>{data.travelState} {data.travelCity}</DestinationValue>
          </DestinationContainer>
          <PeopleContainer>
            <People>모집인원</People>
            <PeopleValue>{data.travelMember}명</PeopleValue>
          </PeopleContainer>
          <DateContainer>
            <Date>여행날짜</Date>
            <Dates>
              {data.travelDateStart} ~ {data.travelDateEnd}
            </Dates>
          </DateContainer>
          <ContentsContainer>
            <Content>
              <div dangerouslySetInnerHTML={{ __html: data.context }}></div>
            </Content>
          </ContentsContainer>
          {/* <HashtagContainer>#맛집투어ㅤ#인생사진</HashtagContainer> */}
          <PostContainer>
            {/* <PostDate>{data.createdAt.slice(0,10)} {data.createdAt.slice(11,19)}</PostDate> */}
            
            <PostDate>{data.createdAt}</PostDate>
            <PostView>조회수 {data.viewCount}</PostView>
            <PostComment>댓글 {commentData.length}</PostComment>
          </PostContainer>
        </LeftContainer>
        <RightContainer>
          <ProfileImg>
            <ProfileName>{userData.nickname}</ProfileName>
            <ProfileInfo>
              {userData.age}대 {userData.gender}
            </ProfileInfo>
            <ProfileIntroduce>{userData.description}</ProfileIntroduce>
          </ProfileImg>
        </RightContainer>
      </Container>
      <Container2>
        <CommentLayout>
          <CommentInput onChange={onSearch} value={comments}></CommentInput>
          <Button onClick={sendComment}>게시</Button>
        </CommentLayout>
        {/* 일반적인 댓글 작성 */}

        <div>
          {commentData?.map((datas: any, index: any) => (
            <div>
              <Comment>
                <CommentInfo>
                  {/* {datas.nickname} {data.createdAt.slice(0,10)} {data.createdAt.slice(11,19)} */}
                  <CommentWriter>{datas.nickname}</CommentWriter>
                  {datas.nickname === myData.nickname ? (
                    <div
                      style={{
                        display: 'flex',
                        width: '90%',
                        justifyContent: 'right',
                      }}  
                    >
                      <CommentButton onClick={() => setCommentIsSelect(index)}>
                        수정
                      </CommentButton>
                      <CommentButton onClick={() => Deletecomment(datas.id)}>
                        삭제
                      </CommentButton>
                    </div>
                  ) : (
                    ''
                  )}
                </CommentInfo>
                <CommentContent>
                  <Text>{datas.content}</Text>
                  <CommentButton2 onClick={() => setIsSelect(index)}>
                    답글
                  </CommentButton2>
                </CommentContent>
                {datas.isSelect === false ? (
                  ''
                ) : (
                  <CommentLayout>
                    <CommentInput
                      onChange={onChildcomment}
                      value={ChildrenComment}
                    />
                    <Button onClick={() => sendChildcomment(index+1)}>
                      게시
                    </Button>
                  </CommentLayout>
                )}
                {/* 답글 코멘트  수정과 삭제를 다르게 관리*/}
              </Comment>
              <div>
                {datas.children?.map((comment: any, index: any) => (
                  <ChildrenComments>
                    <CommentInfo>
                      {/*  {data.createdAt.slice(0,10)} {data.createdAt.slice(11,19)} */}
                      <CommentWriter>{datas.nickname}</CommentWriter>
                      {comment.nickname === myData.nickname ? (
                        <div
                        style={{
                          display: 'flex',
                          width: '90%',
                          justifyContent: 'right',
                        }}
                        >
                          <Text onClick={() => setCommentIsSelect(index)}>
                            수정
                          </Text>
                          <Text onClick={() => Deletecomment(index)}>삭제</Text>
                        </div>
                      ) : (
                        ''
                      )}
                    </CommentInfo>
                    <CommentContent>
                      <Text>{comment.content}</Text>
                    </CommentContent>
                  </ChildrenComments>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container2>
    </Bg>
  );
}

export default Detail;

const CommentLayout = styled.div`
  margin: 0px;
  height: 90px;
`;

const Comment = styled.div`
  width: 46rem;
  border-radius: 1rem;
  border: 1px solid #f2f2f2;
  margin-top: 1rem;
  padding: 8px;
  background-color: #ffffff;
  font-family: 'NanumSquareNeo-Variable';
`;

const CommentButton = styled.div`
  padding: 8px;
  border-radius: 0.7rem;
  cursor: pointer;
  color: #6b9af9;
  margin-left: 1rem;
  &:hover {
    color: #aac3f5;
    cursor: pointer;
  }
`;

const CommentButton2 = styled.div`
  padding: 8px;
  border-radius: 0.7rem;
  background-color: #6baef6;
  color: white;

  &:hover {
    background-color: #9bc8f9;
    color: #f9f7f7;
    cursor: pointer;
  }
`;

const Text = styled.div`
  padding: 8px;

  margin-left: 0.55rem;
`;

const CommentWriter = styled.div`
  overflow: visible;
  display: flex;
  flex-direction: row;
  width: 10rem;
  margin-top: 0.5rem;
  font-size: 1.15rem;
`;

const CommentInfo = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: row;
  margin-left: 1rem;
`;

const CommentContent = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: row;
  justify-content: space-between;
`;

const ChildrenComments = styled.div`
width: 46rem;
border-radius: 1rem;
border: 1px solid #f2f2f2;
margin-top: 0.1rem;
padding: 8px;
background-color: #f7f7f7;
font-family: 'NanumSquareNeo-Variable';
`;

const Bg = styled.div`
  background-color: #eaf0f8;
  height: 100%;
  padding-bottom: 2rem;
`;

const TitleImg = styled.div`
  background-image: url(${titleImg});
  height: 22.5rem;
  width: 70rem;
  text-align: center;
  background-position: center;
  margin: 0 auto;
  margin-top: 4.5rem;
  border-radius: 2rem;
`;
const Container = styled.div`
  width: 70rem;
  height: 30rem;
  margin-left: 12rem;
  display: flex;
`;

const LeftContainer = styled.div`
  width: 50rem;

  display: block;
`;
const Title = styled.div`
  font-size: 1.7rem;
  height: 3rem;
  width: 40rem;
  overflow: visible;
  margin-top: 2rem;

  color: #73a1ec;
  border-bottom: 2px solid #afbdd3;
  font-weight: 750;
`;
const DestinationContainer = styled.div`
  width: 50rem;

  display: flex;
`;
const Destination = styled.div`
  font-size: 1.1rem;
  height: 2rem;
  width: 5rem;
  overflow: visible;
  margin-top: 2rem;

  color: #9f9e9e;
  font-weight: 600;
  display: flex;
`;
const DestinationValue = styled.div`
  font-size: 1.1rem;
  height: 2rem;
  width: 10rem;
  overflow: visible;
  margin-top: 2rem;
  margin-left: 2rem;
  color: #73a1ec;
  font-weight: 600;
  display: flex;
`;

const PeopleContainer = styled.div`
  width: 50rem;
  display: flex;
`;
const People = styled.div`
  font-size: 1.1rem;
  height: 2rem;
  width: 5rem;
  overflow: visible;

  color: #9f9e9e;
  font-weight: 600;
`;
const PeopleValue = styled.div`
  font-size: 1.1rem;
  height: 2rem;
  width: 10rem;
  overflow: visible;
  margin-left: 2rem;
  color: #73a1ec;
  font-weight: 600;
  display: flex;
`;
const DateContainer = styled.div`
  width: 50rem;
  display: flex;
`;
const Date = styled.div`
  font-size: 1.1rem;
  height: 2rem;
  width: 5rem;
  overflow: visible;

  color: #9f9e9e;
  font-weight: 600;
`;
const Dates = styled.div`
  font-size: 1.1rem;
  height: 2rem;
  width: 15rem;
  overflow: visible;
  margin-left: 2rem;
  color: #73a1ec;
  font-weight: 600;
  display: flex;
`;
const ContentsContainer = styled.div`
  width: 44rem;
  height: 13rem;
  display: flex;
  line-height: 5rem;
`;
const Content = styled.div`
  font-size: 1.1rem;
  height: 2rem;
  min-width: 38rem;
  overflow: visible;
  margin-top: 3rem;
  margin-left: 1rem;
  color: #3c3a3a;
  font-weight: 600;
  line-height: 1.6rem;
`;
const HashtagContainer = styled.div`
  width: 43.5rem;
  height: 2rem;
  font-weight: 600;
  line-height: 2rem;
  display: flex;
  overflow: visible;
  color: #73a1ec;
`;
const PostContainer = styled.div`
  width: 50rem;
  display: flex;
`;
const PostDate = styled.div`
  font-size: 1.1rem;
  height: 2rem;
  width: 13rem;
  overflow: visible;
  color: #9f9e9e;
  font-weight: 600;
`;
const PostView = styled.div`
  font-size: 1.1rem;
  height: 2rem;
  width: 5rem;
  overflow: visible;
  margin-left: 2rem;
  color: #9f9e9e;
  font-weight: 600;
  display: flex;
`;
const PostComment = styled.div`
  font-size: 1.1rem;
  height: 2rem;
  width: 4rem;
  overflow: visible;
  margin-left: rem;
  color: #9f9e9e;
  font-weight: 600;
  display: flex;
`;

const RightContainer = styled.div`
  width: 30rem;
  justify-content: center;

  display: flex;
`;

const ProfileImg = styled.div`
  background: url(${user});
  width: 20rem;
  height: 15rem;
  background-size: 8rem 8rem;
  background-repeat: no-repeat;

  background-position-y: 6rem;

  display: block;
`;
const ProfileName = styled.div`
  font-size: 1.3rem;
  height: 1rem;
  width: 20rem;
  overflow: visible;
  margin-top: 7.5rem;
  margin-left: 10rem;
  color: black;
  font-weight: 750;
  display: flex;
`;
const ProfileInfo = styled.div`
  font-size: 0.9rem;
  height: 1rem;
  width: 20rem;
  overflow: visible;
  margin-top: 1.5rem;
  margin-left: 10rem;
  color: gray;
  font-weight: 600;
  display: flex;
`;
const ProfileIntroduce = styled.div`
  font-size: 0.9rem;
  height: 1rem;
  width: 20rem;
  overflow: visible;
  margin-top: 0.5rem;
  margin-left: 10rem;
  color: gray;
  font-weight: 600;
  display: flex;
`;
const Container2 = styled.div`
  width: 70rem;
  margin-left: 12rem;
  display: flex;
  flex-direction: column;
`;

const CommentInput = styled.input`
  margin-top: 2rem;
  height: 3rem;
  width: 40rem;
  border: 0.1px solid #cdcaca;
  border-radius: 0.7rem;
  padding: 1rem;
`;

const Button = styled.button`
  height: 3rem;
  width: 4rem;
  background-color: #8db5f6;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 1rem;
  margin-top: 2rem;
  margin-left: 0.5rem;
  &:hover {
    background-color: skyblue;
    color: white;
    cursor: pointer;
  }
`;
