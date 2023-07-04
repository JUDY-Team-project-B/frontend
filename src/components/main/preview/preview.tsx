import React from 'react';
import './preview.scss';
import { useQuery } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';
import { postInform } from '@/mocks/handlers';
import HeartOn from '@/assets/image/HeartOn.png'
import View from '@/assets/image/detailView.png'
import Heart from '@/assets/image/detailHeart.png'
import Comment from '@/assets/image/detailcomment.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Preview = () => {


  // const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoZWxsb0BuYXZlci5jb20iLCJpYXQiOjE2ODgxMTM4NDQsImV4cCI6MTY4ODIwMDI0NH0.nCiDB0jqdzodZlfMITQmAraK2p59WDHUMj1ntT3pNLE'; // JWT 토큰 설정

  // const fetchPosts = async () => {
  //   const headers = {
  //     Authorization: `Bearer ${token}`,
  //   };

  //   const response = await axios.get('http://localhost:8080/api/v1/post/all/0', { headers });
  //   return response.data;
  // };


  // const{data,isLoading,isError,error} = useQuery(['POST'],fetchPosts);
  

  const navigate = useNavigate();

  const goto = (postnum:string):void =>{
    const queryParems = new URLSearchParams();
    queryParems.set('q',postnum);
    const queryString = queryParems.toString();
    navigate(`/detail?${queryString}`)
  }

  const{data,isLoading,isError,error} = useQuery(['POST'],()=>
    restFetcher({
      method:'GET',
      path:`/api/v1/post/all`,
    })
  )

  const res = data;

  console.log(data);


  return (

    <div className='contentlayout'>
        <div className='gridlayout'>
          {data?.map((datas: postInform, index:any) =>(
            <div className='content' key={index} >
              <button className='img' onClick={() => goto(datas.post_id)}>
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
              </button>
              <div className='detail'>
                  78
                  <img src={View}></img>
                  7
                  <img src={Comment}></img>
                  14
                  <img src={Heart}></img>
              </div>
              <div className='postinfo'>
                 <button className='title' onClick={() => goto(datas.post_id)}>
                  {datas.post_title}
                </button>
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