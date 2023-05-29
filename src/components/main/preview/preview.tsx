import React from 'react';
import './preview.scss';
import { useQuery } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';
import { postInform } from '@/mocks/handlers';
import HeartOn from '@/assets/image/HeartOn.png'

const Preview = () => {



  const{data,isLoading,isError,error} = useQuery(['POST'],()=>
    restFetcher({
      method:'GET',
      path:`/api/v1/post/all`,
    })
    
  );

  const res = data;

  console.log(data);


  return (

    <div className='contentlayout'>
        <div className='gridlayout'>



          {data?.map((datas: postInform, index:any) =>(
            <div className='content' key={index}>

              
              <div className='img'>
                <div className='imginfo'>
                  <div className='destination'>
                    <div className='destinationtext'>
                      {datas.travel_at}
                    </div>
                  </div>
                  <img src={HeartOn}></img>
                </div>
            </div>
            <div>
              조회수
            </div>
            <div className='title'>
              제목
            </div>
            <div className='data'>
              날짜
            </div>
            <div className='title'>
              {datas.travel_age}{datas.travel_gender}
            </div>
            <div className='need'>
              {datas.travel_member}
            </div>
          </div>
          ))}
        </div>
      </div> 
  );
};

export default Preview;
