import React from 'react';
import styled from 'styled-components';
import { restFetcher } from '@/queryClient';
import { useQuery } from '@tanstack/react-query';
import osaka from '../../assets/image/osaka.jpg';

// const { data, isLoading, isError, error } = useQuery(['POST'], () =>
//   restFetcher({
//     method: 'GET',
//     path: `/api/v1/post/all`,
//   }),
// );

// const res = data;

// console.log(data);

const App = () => {
  return (
    <ContentsWrap>
      <Title>내가 쓴 게시글</Title>

      <ContentsImg />
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

const ContentsImg = styled.button`
  background-image: url(${osaka});
  margin-left: 2rem;
  width: 18rem;
  height: 15rem;
  border-radius: 2rem;
  background-size: 19rem 15rem;
  background-repeat: no-repeat;
  perspective: 1000px;
  transition: transform 1.4s;

  &:hover {
    opacity: 0.4;
  }
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
