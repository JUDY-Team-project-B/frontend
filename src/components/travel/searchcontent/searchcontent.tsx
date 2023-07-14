import React from 'react';
import './searchcontent.scss';
import Preview from '@/components/main/preview/preview';
import DetailSearch from '../detailsearch/detailsearch';
import { useQuery } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';



const SearchContent = () => {
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoZWxsb0BuYXZlci5jb20iLCJpYXQiOjE2ODkzMjMwMTksImV4cCI6MTY4OTQwOTQxOX0.g0nfNhA_Qq2xqQTgGbeS_rn88x3u2KtB3fUsFCfD1o4' // JWT 토큰 설

  const{data,isLoading,isError,error} =useQuery(['POST'],()=>
  restFetcher({
    method:'GET',
    path:`/api/v1/post/all/0`,
    headers: { Authorization: `Bearer ${token}`,'Access-Control-Allow-Origin': '*' }
  })

);
console.log(data)

  return (
    <div className="searchContentBackground">
      <div className='ment2'>
        동행
      </div>
      <DetailSearch/>
      <Preview data={data}/>
    </div>
  );
};

export default SearchContent;
