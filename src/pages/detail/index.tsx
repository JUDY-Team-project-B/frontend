import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import titleImg from '../../assets/image/image1.png';
import user from '../../assets/image/user.png';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';
import axios from 'axios';
import { UserType } from '../mypage';

function Detail() {

  const location = useLocation();
  const queryParems = new URLSearchParams(location.search);
  const searchTerm = queryParems.get('q');
  
  
  const [PostData, setPostData] = useState<any[]|any>([]);
  const [postnum, setPostnum] = useState<string|undefined>('');
  const [data, setData] = useState<any|undefined>('');
  const [commentData, setCommentData] = useState<any[]|undefined>(['']);
  const [userId, setUserId] = useState<any|undefined>('');
  const [userData, setUserData] = useState<any|undefined>('');
  const [comments,setComments] = useState<any|undefined>('');


  const sendComment = async () =>{
    try{
      const response = await axios.post('http://localhost:8080/api/v1/comment',
        {
          userId:1,
          postId:searchTerm,
          parentId:"",
          content:comments,
        },
        {
          headers:{
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            'Access-Control-Allow-Origin': '*'}
        }
  
      )
      console.log(response)
      alert('작성되었습니다')
    }catch(error){
      console.log(error)
    }

  }

  const onSearch = (e:any) => {
    setComments(e.target.value)
    console.log(comments);
  }



  useEffect(()=>{
    const PostListData =async () => {
      try{
        const response = await axios.get(`http://localhost:8080/api/v1/post/${searchTerm}`,
        {headers:{Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'Access-Control-Allow-Origin': '*',

      }})
        console.log(response)
        const responseData = response.data.data
        console.log(responseData)
        setData(responseData)
        setUserId(data.nickname)
      }catch(error){
        console.log(error)
      }
    }
    const CommentListData =async () => {
      try{
        const response = await axios.get(`http://localhost:8080/api/v1/comment/${searchTerm}`,
        {headers:{Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'Access-Control-Allow-Origin': '*',

      }})
        console.log(response)
        const responseData = response.data.data
        console.log(responseData)
        setCommentData(responseData)
      }catch(error){
        console.log(error)
      }
    }

    const UserData= async()=>{
      try{
        const response = await axios.get(`http://localhost:8080/api/v1/user/${userId}`,
        {headers:{Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        'Access-Control-Allow-Origin': '*',
      }})
        console.log(response)
        const responseData = response.data.data
        console.log(responseData)
        setUserData(responseData)
      }catch(error){
        console.log(error)
      }
    }

    /// 여기서 처리 추가적으로 처리 가능///
    //레디스 설정후 편집
    PostListData();
    CommentListData();
    UserData();
  },[searchTerm])



  return (
    <Bg>
      <TitleImg></TitleImg>
      <Container>
        <LeftContainer>
          <Title>{data.title}</Title>
          <DestinationContainer>
            <Destination>여행지역</Destination>
            <DestinationValue>{data.travelAt}</DestinationValue>
          </DestinationContainer>
          <PeopleContainer>
            <People>모집인원</People>
            <PeopleValue>{data.travelMember}명</PeopleValue>
          </PeopleContainer>
          <DateContainer>
            <Date>여행날짜</Date>
            <Dates>{data.travelDateStart} ~ {data.travelDateEnd}</Dates>
          </DateContainer>
          <ContentsContainer>
            <Content>
              {data.context}
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
        <CommentLayout>
          <CommentInput onChange={onSearch} value={comments}></CommentInput>
          <Button onClick={sendComment}>게시</Button>
        </CommentLayout>
        <div>
          {commentData?.map((datas:any,index:any)=>(
            <div>
              <Comment>
                <CommentInfo>
                  작성자 시간
                </CommentInfo>
                <CommentContent>
                  <Text>{datas.content}</Text>
                  <Text>답글</Text> 
                </CommentContent>
              </Comment>
              <div>{datas.children?.map((comment:any,index:any)=>(
                <ChildrenComments>
                  <CommentInfo>
                    작성자 시간
                  </CommentInfo>
                  <CommentContent>
                    <Text>--{comment.content}</Text>
                    <Text>답글</Text>
                  </CommentContent>
                </ChildrenComments>
            ))}</div>
            </div>
          ))}
        </div>
      </Container2>
    </Bg>
  );
}

export default Detail;

const Comment = styled.div`
  height:40px;
  width:45rem;
  background-color:#333333
`

const ChildrenComments = styled.div`
  height:40px;
  width:45rem;
  background-color:#333333
`

const Bg = styled.div`
  background-color: #eaf0f8;
  height: 100%;
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
  flex-direction:column
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
