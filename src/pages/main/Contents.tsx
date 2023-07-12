import React from 'react';
import styled from 'styled-components';
// import user from '../../assets/image/user.png';
// import { restFetcher } from '@/queryClient';
// import { postInform } from '@/mocks/handlers';
// import { useQuery } from '@tanstack/react-query';
import jejuBtn from '../../assets/image/jeju-btn.png';
import gyeongjuBtn from '../../assets/image/gyeongju-btn.png';
import seoulBtn from '../../assets/image/seoul-btn.png';
import busanBtn from '../../assets/image/busan-btn.png';
import jeonraBtn from '../../assets/image/jeonra-btn.png';

const Content = () => {
  //   const { data, isLoading, isError, error } = useQuery(['POST'], () =>
  //     restFetcher({
  //       method: 'GET',
  //       path: `/api/v1/post/all`,
  //     }),
  //   );

  return (
    <ContentsWrap>
      <Title>인기 여행지</Title>
      <ContentsImg backgroundImg={jejuBtn} marginLeft="15rem">
        <BtnName>제주도</BtnName>
      </ContentsImg>
      <ContentsImg backgroundImg={gyeongjuBtn} marginLeft="7.5rem">
        <BtnName>경주</BtnName>
      </ContentsImg>
      <ContentsImg backgroundImg={seoulBtn} marginLeft="7.3rem">
        <BtnName>서울</BtnName>
      </ContentsImg>
      <ContentsImg backgroundImg={busanBtn} marginLeft="7.2rem">
        <BtnName>부산</BtnName>
      </ContentsImg>
      <ContentsImg backgroundImg={jeonraBtn} marginLeft="7.2rem">
        <BtnName>전라도</BtnName>
      </ContentsImg>
    </ContentsWrap>
  );
};

export default Content;

const ContentsWrap = styled.div`
  width: 100%;
  height: 100rem;
  justify-content: center;
  font-size: 16px;
  /* background-color: red; */
`;
const Title = styled.div`
  margin-top: 1rem;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #333;
  font-size: 1.5rem;
  font-family: 'SUITE-Regular';
`;

// const Contents = styled.button`
//   margin-top: 4rem;
//   margin-left: 10rem;
//   width: 17rem;
//   height: 20rem;
//   justify-content: center;
//   overflow: hidden;
//   font-size: 16px;
//   border-radius: 1rem;
//   background-color: #f7f7f8;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
// `;

const ContentsImg = styled.button`
  margin-left: ${(props) => props.marginLeft};
  opacity: 1;
  width: 7rem;
  margin-top: 2rem;
  height: 9rem;
  border-radius: 1rem;
  background-position: center 0;
  background-size: 8.5rem 7rem;
  background-image: ${(props) => `url(${props.backgroundImg})`};
  background-repeat: no-repeat;
  transition: transform 0.5s;
  justify-content: center;
  

  &:hover {
    position: center;
    opacity: 0.9;
    transform: scale(1.05); 이미지 확대
  }
`;

const BtnName = styled.div`
  margin-top: 7.5rem;
  width: 100%;
  overflow: hidden;
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
