import React from 'react';
import './preview.scss';
import { useQuery } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';

const Preview = () => {

  const{data,isLoading,isError,error} = useQuery(['POST'],()=>
    restFetcher({
      method:'GET',
      path:`/api/v1/post/all`,
    })
    
  );

  const res = data



  console.log(data);


  return (
    <div className='content'>

        <div className='img'>
          <div className='destiantion'> 
            제주
          </div> 
          <div className='name'> 
            하트 
          </div> 
        </div> 
        <div> 
          조회수
        </div> 
        <div> 
          <div className='title'> 
            title
          </div> 
          <div className='date'> 
            date 
          </div> 
          <div className='how'> 
            how 
          </div> 
          <div> 
            need 
          </div>        
        </div> 
      </div> 
  );
};

export default Preview;
