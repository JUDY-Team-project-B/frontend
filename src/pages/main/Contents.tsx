import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import jejuBtn from '../../assets/image/jeju-btn.png';
import gyeongjuBtn from '../../assets/image/gyeongju-btn.png';
import seoulBtn from '../../assets/image/seoul-btn.png';
import busanBtn from '../../assets/image/busan-btn.png';
import jeonraBtn from '../../assets/image/jeonra-btn.png';
import allBtn from '../../assets/image/all-btn.png';
import PostList from '@/components/main/postList';

const Content = () => {
  const [url, setUrl] = useState('all/0');
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleLocationClick = (location: any) => {
    setSelectedLocation(location);
  };

  return (
    <Background>
      <Title>인기 여행지</Title>
      <ContentsWrap>
        <ContentsImg
          backgroundImg={jejuBtn}
          marginLeft="-0.1rem"
          onClick={() => handleLocationClick('제주도')}
        >
          <BtnName>제주도</BtnName>
        </ContentsImg>
        <ContentsImg
          backgroundImg={gyeongjuBtn}
          marginLeft="7.5rem"
          onClick={() => handleLocationClick('경주')}
        >
          <BtnName>경주</BtnName>
        </ContentsImg>
        <ContentsImg
          backgroundImg={seoulBtn}
          marginLeft="7.3rem"
          onClick={() => handleLocationClick('서울')}
        >
          <BtnName>서울</BtnName>
        </ContentsImg>
        <ContentsImg
          backgroundImg={busanBtn}
          marginLeft="7.2rem"
          onClick={() => handleLocationClick('부산')}
        >
          <BtnName>부산</BtnName>
        </ContentsImg>
        <ContentsImg
          backgroundImg={jeonraBtn}
          marginLeft="7.2rem"
          onClick={() => handleLocationClick('전라도')}
        >
          <BtnName>전라도</BtnName>
        </ContentsImg>
        <ContentsImg
          backgroundImg={allBtn}
          marginLeft="7.2rem"
          onClick={() => handleLocationClick('')}
        >
          <BtnName>전체보기</BtnName>
        </ContentsImg>
      </ContentsWrap>
      <PostList
        queryString={url}
        searchType={'title'}
        searchKeyword={selectedLocation}
      />
    </Background>
  );
};
export default Content;

const Background = styled.div`
  width: 100%;
  height: 150%;
  justify-content: center;
  font-size: 16px;
`;
const Title = styled.div`
  margin-top: 1rem;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-weight: 500;
  /* color: #61a8f5; */
  font-size: 1.5rem;
  font-family: 'SUITE-Regular';
`;

const ContentsWrap = styled.div`
  width: 100%;
  height: 11rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  flex-wrap: wrap;
  overflow: visible;

  @media (max-width: 1050px) {
    margin-left: -1.4rem;
  }
`;

const ContentsImg = styled.div`
  margin-left: ${(props) => props.marginLeft};
  opacity: 1;
  width: 8.5rem;
  margin-top: 2rem;
  height: 9rem;
  border-radius: 1rem;
  background-position: center 0;
  background-size: 8.5rem 7rem;
  background-image: ${(props) => `url(${props.backgroundImg})`};
  background-repeat: no-repeat;
  transition: transform 0.5s;
  justify-content: center;
  cursor: pointer;

  &:hover {
    position: center;
    opacity: 0.65;
    transform: scale(1.1); /* 이미지 확대 */
  }

  /* 새로 추가한 스타일: 버튼들이 화면 크기에 따라 자동으로 정렬 */
  @media (max-width: 1050px) {
    margin-left: 3rem;
  }

  @media (max-width: 400px) {
    margin-left: 1rem;
  }
`;

const BtnName = styled.div`
  margin-top: 7.5rem;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #333;
  font-size: 1.2rem;
  font-family: 'SUITE-Regular';
`;

// const ContentsProfile = styled.div`
//   background-image: url(${user});
//   position: relative;
//   height: 5rem;
//   width: 5rem;
//   margin-top: -3rem;
//   margin-left: 6rem;
//   border-radius: 3rem;
//   background-size: 5rem 5rem;
//   background-repeat: no-repeat;

//   z-index: 999;
//   /* margin-top: 20rem; */
// `;

// const ContentsTitle = styled.button`
//   margin-top: 1rem;
//   width: 100%;
//   height: 1.4rem;
//   overflow: hidden;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: none;
//   color: black;
//   font-size: 1.2rem;
//   font-weight: bold;
// `;
// const ContentsText = styled.div`
//   margin-top: 1rem;
//   width: 100%;
//   height: 1.4rem;
//   overflow: hidden;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border: none;
//   color: #333;
//   font-size: 1rem;
// `;
