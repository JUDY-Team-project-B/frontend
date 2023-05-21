import React from 'react';
import './maincontent.scss';
import Preview from '@/components/common/preview/preview';
import { useQuery } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';


const Maincontent = () => {

  const{ data, isLoading, isError, error} = useQuery(['POST'],()=> 
    restFetcher({
      method: 'GET',
      path: `/api/v1/post/all`,
    }),
  );
console.log(data);

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
