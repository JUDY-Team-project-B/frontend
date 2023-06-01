import React from 'react';
import './preview.scss';
import { useQuery } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';
import { postInform } from '@/mocks/handlers';
import HeartOn from '@/assets/image/HeartOn.png'
import View from '@/assets/image/detailView.png'
import Heart from '@/assets/image/detailHeart.png'
import Comment from '@/assets/image/detailcomment.png'

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
                    <div className='destionationtext'>
                      {datas.travel_at}
                    </div>
                  </div>
                  <div className='heartlayout'>
                    <img src={HeartOn}></img>
                  </div>
                </div>
              </div>
              <div className='detail'>
                  78
                  <img src={View}></img>
                  7
                  <img src={Comment}></img>
                  14
                  <img src={Heart}></img>
              </div>
              <div className='postinfo'>
                 <div className='title'>
                  {datas.post_title}
                </div>
                <div className='date'>
                  날짜
                </div>
                <div className='date'>
                  {datas.travel_age}{datas.travel_gender}
                </div>
                <div className='date'>
                  {datas.travel_member}인 모집중
                </div>
              </div>


        </div>
        ))}
      </div>
    </div> 
  );
};

export default Preview;
