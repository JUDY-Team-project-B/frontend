import React from 'react';
import styled from 'styled-components';
import user from '../../assets/image/user.png';
import { restFetcher } from '@/queryClient';
import { useQuery } from '@tanstack/react-query';
import osaka from '../../assets/image/osaka.jpg';

// const { data, isLoading, isError, error } = useQuery(['POST'], () =>
//   restFetcher({
//     method: 'GET',
//     path: `/api/v1/post/all`,
//   }),
// );
// console.log(data);

const App = () => {
  return (
    <ContentsWrap>
      <Title>내가 쓴 게시글</Title>
      <Contents>
        <ContentsProfile />
        <ContentsImg />
        <ContentsTitle>오사카 7일 여행 동행 구해요!</ContentsTitle>
        <ContentsText>23.06.28 - 23.07.10</ContentsText>
      </Contents>
    </ContentsWrap>
  );
};

export default App;

const ContentsWrap = styled.div`
  width: 100%;
  height: 100rem;
  justify-content: center;
  font-size: 16px;
`;

const Contents = styled.button`
  margin-top: 4rem;
  margin-left: 10rem;
  width: 17rem;
  height: 20rem;
  justify-content: center;
  overflow: hidden;
  font-size: 16px;
  border-radius: 1rem;
  background-color: #f7f7f8;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  &:hover {
    &::after {
      content: '오사카';
      position: absolute;
      margin-top: -18rem;
      padding: 5px 0;
      margin-left: -8rem;
      width: 5rem;
      height: 1.5rem;
      border-radius: 2rem;
      background-color: #e8eff3; /* 작은 버튼 배경색 */
      z-index: 999;
      font-weight: bold;
      color: #3d8ebd;
    }
  }
`;

const ContentsImg = styled.button`
  position: center;
  margin-left: -1rem;
  opacity: 0.9;
  width: 23rem;
  margin-top: -1rem;
  height: 13rem;
  border-radius: 1rem;
  background-size: 18rem 14rem;
  background-image: url(${osaka});
  background-repeat: no-repeat;
  transition: transform 0.5s;

  &:hover {
    position: center;
    opacity: 0.7;
    transform: scale(1.1); /* 이미지 확대 */
  }
`;

const ContentsProfile = styled.div`
  background-image: url(${user});
  height: 5rem;
  width: 5rem;
  margin-top: 9.5rem;
  margin-left: 6rem;
  border-radius: 3rem;
  background-size: 5rem 5rem;
  background-repeat: no-repeat;
  position: absolute;

  z-index: 999;
  /* margin-top: 20rem; */
`;

const ContentsTitle = styled.button`
  margin-top: 3rem;
  width: 100%;
  height: 1.4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: black;
  font-size: 1.2rem;
  font-weight: bold;
`;
const ContentsText = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 1.4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #333;
  font-size: 1rem;
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
`;
