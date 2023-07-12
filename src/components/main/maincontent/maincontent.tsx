import React, { useEffect, useState } from 'react';
import './maincontent.scss';
import Preview from '@/components/main/preview/preview';
import { PostType } from '@/types/post';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';



const Maincontent = () => {
  // const [PostData, setPostData] = useState<PostType|any>();
  // const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoZWxsb0BuYXZlci5jb20iLCJpYXQiOjE2ODkxNTI0OTgsImV4cCI6MTY4OTIzODg5OH0.VFGYA5FDWJi5Du5jPtWIOpOO7AlJWBfCBkonlSOwsHc' // JWT 토큰 설
  // const navigate = useNavigate();

  

  // const{data,isLoading,isError,error} =useQuery(['POST'],()=>
  // restFetcher({
  //   method:'GET',
  //   path:`/api/v1/post/all/0`,
  //   headers: { Authorization: `Bearer ${token}`,'Access-Control-Allow-Origin': '*' }
  // })
  // );
  // console.log(data)


  return (
    <div className="contentBackground">
      <div className='ment'>
        곧 출발하는 여행
      </div>
      <Preview/>
    </div>
  );
};

export default Maincontent;
