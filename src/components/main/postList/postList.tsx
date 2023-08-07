import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';
import HeartOn from '@/assets/image/HeartOn.png';
import View from '@/assets/image/detailView.png';
import Heart from '@/assets/image/detailHeart.png';
import Comment from '@/assets/image/detailcomment.png';
import place from '@/assets/image/placeholder.png';

import { useNavigate } from 'react-router-dom';
import { PostType } from '@/types/post';
import axios from 'axios';

import gyeongju from '@/assets/image/trip3.jpg';
import osaka from '@/assets/image/osaka.jpg';
import user from '@/assets/image/user.png';

const Preview = (queryString: any) => {
  console.log(queryString.searchKeyword);
  const url = queryString.queryString;
  const Type = queryString.searchType.toString();
  const keyword = queryString.searchKeyword.toString();
  const navigate = useNavigate();
  const [listData, setListData] = useState<PostType[] | undefined>();

  console.log(keyword);

  useEffect(() => {
    const PostListData = async () => {
      console.log(Type);
      console.log(keyword);
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/post/${url}`,
          {
            params: {
              searchType: Type,
              searchKeyword: keyword,
            },
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Access-Control-Allow-Origin': '*',
            },
          },
        );
        const responseData: PostType[] = response.data.data;

        setListData(responseData);
        console.log(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    PostListData();
  }, [Type,keyword]);

  const goto = (num: number): void => {
    const postnum = String(num);
    const queryParems = new URLSearchParams();
    queryParems.set('q', postnum);
    const queryString = queryParems.toString();
    navigate(`/detail?${queryString}`);
  };

  return (
    <PreviewBackground>
      <ContentLayout>
        <GridLayout>
          {listData?.map((datas: PostType, index: any) => (
            <Content key={index}>
              <TopWarp>
                <ProfileWrap>
                  <Profile />
                  <InfoWrap>
                    <Nickname>사진작가 이씨</Nickname>
                    <Gender>
                      {' '}
                      {datas.travelAge} | {datas.travelGender}
                    </Gender>
                  </InfoWrap>
                </ProfileWrap>
                <DateWrap>
                  <DateTitle>여행 기간</DateTitle>
                  <Date>08/05 - 08/09</Date>
                </DateWrap>
              </TopWarp>
              <MiddleWrap>
                <HeartLayout>
                  <img src={HeartOn} alt="HeartOn" />
                </HeartLayout>
                <ImgWrap>
                  <Img onClick={() => goto(datas.id)}>
                    <ImgInfo></ImgInfo>
                  </Img>
                </ImgWrap>
              </MiddleWrap>
              {/* <DestinationText>{datas.travelAt}</DestinationText> */}
              {/* <Detail>
                78
                <img src={View} alt="View" />
                7
                <img src={Comment} alt="Comment" />
                14
                <img src={Heart} alt="Heart" />
              </Detail> */}
              <PostInfo>
                <DestinationWrap>
                  <PlaceLayout>
                    <img src={place} alt="Place" />
                  </PlaceLayout>
                  <DestinationText>{datas.travelAt}</DestinationText>
                </DestinationWrap>
                <Title onClick={() => goto(datas.id)}>{datas.title}</Title>
                <Date>
                  {/* {datas.travelAge}
                  {datas.travelGender} */}
                </Date>
                <Member>{datas.travelMember}인 동행을 원해요!</Member>
              </PostInfo>
            </Content>
          ))}
        </GridLayout>
      </ContentLayout>
    </PreviewBackground>
  );
};

export default Preview;

const PreviewBackground = styled.div`
  width: 101%;
  flex-direction: column;
  align-content: center;
  display: flex;
  font-family: 'Pretendard-Regular';
  margin-left: -3rem;
  overflow: hidden;
  height: 100%;
`;

const ContentLayout = styled.div`
  width: 95rem;
  margin-top: 3rem;
  background-color: white;
  align-self: center;
  overflow: visible;
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow: visible;
  height: 100%;

  /* background-color: red; */
`;

const Content = styled.div`
  width: 21.4rem;
  display: flex;
  flex-direction: column;
  background-color: #f5f6f6;
  padding: 5px;
  margin-top: 2rem;
  margin-left: 3rem;
  border-radius: 1rem;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.11);
  z-index: 999;
  height: 28rem;
`;
const MiddleWrap = styled.div`
  width: 117%;
  height: 15rem;
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-left: -1rem;
  overflow: hidden;
`;

const DestinationWrap = styled.div`
  width: 100%;
  height: 0.5rem;
  display: flex;
  overflow: visible;
  justify-content: center;
`;

const DestinationText = styled.div`
  height: 2rem;
  padding: 0.2rem;
  width: 5rem;
  display: flex;
  text-align: center;
  border-radius: 0.6rem;
  font-weight: 750;
  color: #0792e3;
  z-index: 99;
  font-size: 1.3rem;
  overflow: visible;
  margin-left: 0.2rem;
`;
const ImgWrap = styled.div`
  width: 24rem;
  height: 16rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-top: -3rem;
`;
const Img = styled.button`
  display: flex;
  margin-left: -1rem;
  opacity: 0.9;
  width: 99%;
  overflow: hidden;
  margin-top: -3rem;
  height: 20rem;
  border-radius: 1rem;
  background-size: 100% 100%;
  background-image: url(${gyeongju});
  background-repeat: no-repeat;
  transition: transform 0.5s;

  &:hover {
    position: center;
    opacity: 0.9;
    transform: scale(1.1); /* 이미지 확대 */
  }
`;

const ImgInfo = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 8px;
  justify-content: space-between;
`;

const HeartLayout = styled.button`
  justify-content: right;
  display: flex;
  width: 85%;
  z-index: 999;
`;

const PlaceLayout = styled.button`
  justify-content: right;
  display: flex;
  width: 8%;
  margin-top: 0.1rem;
  margin-left: 0.3rem;
  margin-right: 0.1rem;
  z-index: 999;
`;

const TopWarp = styled.div`
  display: flex;
  width: 100%;
`;

const ProfileWrap = styled.div`
  display: flex;
  height: 4.5rem;
  width: 15rem;
  overflow: hidden;
`;

const InfoWrap = styled.div`
  display: block;
  height: 4.5rem;
  width: 15rem;
  overflow: hidden;
`;

const Profile = styled.div`
  background-image: url(${user});
  position: relative;
  display: flex;
  height: 3.5rem;
  width: 7rem;
  border-radius: 3rem;
  background-size: 3.5rem 3.5rem;
  background-repeat: no-repeat;
  z-index: 999;
  margin-top: 0.7rem;
  margin-left: 0.4rem;
`;

const Nickname = styled.div`
  position: relative;
  display: block;
  height: 1.5rem;
  width: 10rem;
  font-weight: 700;
  margin-top: 1.4rem;
`;

const Gender = styled.div`
  display: block;
  height: 2rem;
  width: 10rem;
  color: #1aa5f5;
`;

const PostInfo = styled.div`
  height: 120px;
  padding: 8px;
  overflow: hidden;
`;

const Title = styled.button`
  font-size: 1.15rem;
  font-weight: 1000;
  height: 20px;
  overflow: visible;
  margin-top: 2rem;
  text-align: left;
`;
const DateWrap = styled.div`
  display: block;
  height: 4rem;
  width: 9rem;
  margin-top: 0.7rem;
`;
const DateTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 0.7rem;
  overflow: hidden;
`;

const Date = styled.div`
  font-size: 16px;
  overflow: hidden;
  margin-top: 0.5rem;
  color: #1aa5f5;
`;

const Member = styled.div`
  font-size: 16px;
  overflow: visible;
  margin-top: 1.4rem;
  color: #1aa5f5;
  font-weight: 700;
  display: flex;
  justify-content: center;
`;
