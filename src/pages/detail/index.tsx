import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import titleImg from '../../assets/image/image1.png';
import user from '../../assets/image/user.png';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';

function Detail() {

  const location = useLocation();
  const queryParems = new URLSearchParams(location.search);
  const searchTerm = queryParems.get('q');
  
  
  const [PostData, setPostData] = useState<any[]|any>([]);
  const [postnum, setPostnum] = useState<string|undefined>('');



  const{data,isLoading,isError,error} = useQuery(['POST'],()=>
  restFetcher({
    method:'GET',
    path:`/api/v1/post/all/${searchTerm}`,
  })
  
)


const res = data;

console.log(data);

  return (
    <Bg>
      <TitleImg></TitleImg>
      <Container>
        <LeftContainer>
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
        </LeftContainer>
        <RightContainer>
          <ProfileImg>
            <ProfileName>사진작가 이씨</ProfileName>
            <ProfileInfo>20대 남자</ProfileInfo>
            <ProfileIntroduce>사진찍는 걸 좋아해요!</ProfileIntroduce>
          </ProfileImg>
        </RightContainer>
      </Container>
      <Container2>
        <CommentInput></CommentInput>
        <Button>게시</Button>
      </Container2>
    </Bg>
  );
}

export default Detail;

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
