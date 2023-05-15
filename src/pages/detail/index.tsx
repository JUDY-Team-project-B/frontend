import React from 'react';
import styled from 'styled-components';
import user from '../../assets/image/image1.png';

function Profile() {
  return (
    <Bg>
      <TitleImg></TitleImg>
      <Container>
        <Container1>
          <Title>6/28 ~ 7/1 제주도 같이 돌아다니실분 구해요!</Title>
          <DestinationContainer>
            <Destination>여행지역</Destination>
            <DestinationValue>제주도</DestinationValue>
          </DestinationContainer>
          <PeopleContainer>
            <People>모집인원</People>
            <PeopleValue>4명</PeopleValue>
          </PeopleContainer>
          <DateContainer>
            <Date>여행날짜</Date>
            <Dates>2023.06.28 ~ 2023.07.01</Dates>
          </DateContainer>
          <ContentsContainer>
            <Content>
              제주도 여행 가실 분 찾습니다! <br></br>
              사진찍는 거 좋아하시는 분이면 좋겠습니다. <br></br>
              부산에서 비행기타고 출발할 생각입니다 4명에서 갔으면 좋겠고 성별은
              상관없습니다!!
            </Content>
          </ContentsContainer>
          <HashtagContainer>#맛집투어ㅤ#인생사진</HashtagContainer>
          <PostContainer>
            <PostDate>2023.06.11 09:24</PostDate>
            <PostView>조회수 33</PostView>
            <PostComment>댓글 2</PostComment>
          </PostContainer>
        </Container1>
        <Container2></Container2>
      </Container>
    </Bg>
  );
}

export default Profile;

const Bg = styled.div`
  background-color: #dae3ef;
  height: 100rem;
`;

const TitleImg = styled.div`
  background-image: url(${user});
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

const Container1 = styled.div`
  width: 50rem;

  display: block;
`;
const Title = styled.div`
  font-size: 1.7rem;
  height: 3rem;
  width: 40rem;
  overflow: visible;
  margin-top: 2rem;
  margin-left: 2rem;
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
  margin-left: 2rem;
  color: #9f9e9e;
  font-weight: 750;
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
  font-weight: 750;
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
  margin-left: 2rem;
  color: #9f9e9e;
  font-weight: 750;
`;
const PeopleValue = styled.div`
  font-size: 1.1rem;
  height: 2rem;
  width: 10rem;
  overflow: visible;
  margin-left: 2rem;
  color: #73a1ec;
  font-weight: 750;
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
  margin-left: 2rem;
  color: #9f9e9e;
  font-weight: 750;
`;
const Dates = styled.div`
  font-size: 1.1rem;
  height: 2rem;
  width: 15rem;
  overflow: visible;
  margin-left: 2rem;
  color: #73a1ec;
  font-weight: 750;
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
  margin-left: 2rem;
  color: #3c3a3a;
  font-weight: 750;
  line-height: 1.6rem;
`;
const HashtagContainer = styled.div`
  width: 43.5rem;
  height: 2rem;
  font-weight: 750;
  line-height: 2rem;
  display: flex;
  overflow: visible;
  color: #73a1ec;
`;
const PostContainer = styled.div`
  width: 50rem;
  display: flex;
  line-height: 3rem;
`;
const PostDate = styled.div`
  font-size: 1.1rem;
  height: 2rem;
  width: 9rem;
  overflow: visible;
  color: #9f9e9e;
  font-weight: 750;
`;
const PostView = styled.div`
  font-size: 1.1rem;
  height: 2rem;
  width: 5rem;
  overflow: visible;
  margin-left: 2rem;
  color: #9f9e9e;
  font-weight: 750;
  display: flex;
`;
const PostComment = styled.div`
  font-size: 1.1rem;
  height: 2rem;
  width: 3rem;
  overflow: visible;
  margin-left: rem;
  color: #9f9e9e;
  font-weight: 750;
  display: flex;
`;

const Container2 = styled.div`
  width: 30rem;

  justify-content: center;
  background-color: blue;

  display: flex;
`;
