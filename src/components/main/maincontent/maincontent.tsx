import React, { useEffect, useState } from 'react';
import './maincontent.scss';
import Preview from '@/components/main/preview/preview';
import { PostType } from '@/types/post';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';



const Maincontent = () => {

  const token:any = localStorage.getItem('accessToken')

  console.log(token)
  const{data,isLoading,isError,error} =useQuery(['POST'],()=>
  restFetcher({
    method:'GET',
    path:`/api/v1/post/all/0`,
    headers: { Authorization: `Bearer ${token}`,'Access-Control-Allow-Origin': '*' }
  })

);
console.log(data)

  return (
    <div className="contentBackground">
      <div className='ment'>
        곧 출발하는 여행
      </div>
      <Preview data={data}/>
    </div>
  );
};

export default Maincontent;
