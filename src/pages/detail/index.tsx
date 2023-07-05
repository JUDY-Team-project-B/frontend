import React from 'react';
import styled from 'styled-components';
import titleImg from '../../assets/image/image1.png';
import user from '../../assets/image/user.png';
import { restFetcher } from '@/queryClient';
import { useQuery } from '@tanstack/react-query';

const Profile = () => {
  const { data, isLoading, isError, error } = useQuery(['POST'], () =>
    restFetcher({
      method: 'GET',
      path: `/api/v1/post/all`,
    }),
  );
  console.log(data);

  return (
    <Bg>
      {data && (
        <>
          <TitleImg></TitleImg>
          <Container>
            <LeftContainer>
              <Title>{Object.values<any>(data[0])[2]}</Title>
              <DestinationContainer>
                <Destination>여행지역</Destination>
                <DestinationValue>
                  {Object.values<any>(data[0])[5]}
                </DestinationValue>
              </DestinationContainer>
              <PeopleContainer>
                <People>모집인원</People>
                <PeopleValue>{Object.values<any>(data[1])[6]}명</PeopleValue>
              </PeopleContainer>
              <DateContainer>
                <Date>여행날짜</Date>
                <Dates>2023.06.28 ~ 2023.07.01</Dates>
              </DateContainer>
              <ContentsContainer>
                <Content>{Object.values<any>(data[0])[7]}</Content>
              </ContentsContainer>
              <HashtagContainer>#맛집투어ㅤ#인생사진</HashtagContainer>
              <PostContainer>
                <PostDate>2023.06.11 09:24</PostDate>
                <PostView>조회수 33</PostView>
                <PostComment>댓글 2</PostComment>
              </PostContainer>
            </LeftContainer>
            <RightContainer>
              <ProfileImg>
                <ProfileName>사진작가 이씨</ProfileName>
                <ProfileInfo>
                  {Object.values<any>(data[0])[4]}{' '}
                  {Object.values<any>(data[0])[3]}
                </ProfileInfo>
                <ProfileIntroduce>사진찍는 걸 좋아해요!</ProfileIntroduce>
              </ProfileImg>
            </RightContainer>
          </Container>
          <Container2>
            <CommentInput></CommentInput>
            <Button>게시</Button>
          </Container2>
        </>
      )}
    </Bg>
  );
};

export default Profile;

const Bg = styled.div`
  background-color: #eaf0f8;
  height: 100rem;
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
  width: 4rem;
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
  width: 4rem;
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
  width: 4rem;
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
  width: 38rem;
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
  width: 9rem;
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
  width: 3rem;
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
  height: 30rem;
  margin-left: 12rem;
  display: flex;
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
