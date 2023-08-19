import Button from '@/components/common/Button';
import { Layout } from '@/components/common/Layout';
import PostEditor from '@/components/post/Editor';
import HashTag from '@/components/post/Hashtag';
import { PostCardList } from '@/components/post/PostCardList';
import PostThumbnailInput from '@/components/post/PostThumbnailInput';
import { PostTitleInput } from '@/components/post/PostTitleInput';
import axios from 'axios';
import { response } from 'msw';
import React, { useEffect, useState,useRef } from 'react';
import { useForm } from 'react-hook-form';
import './CreatePostpage.scss'

interface ICreatePostFormData {
  // 여행 지역, 기간,인원
  title: string;
  content: string;
  tags: string[];
}

const CreatePostPage = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [data, setData] = useState<any>();

  const [userData,setUserData] = useState<any>();
  const [jwt,setjwt] = useState<any>();

  useEffect(()=>{
    const PostListData =async () => {
      try{
        setjwt(localStorage.getItem('accessToken'))
        console.log(jwt)
        const response = await 
          axios.get(
            `http://localhost:8080/api/v1/user/me`,
            {headers:
              {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                'Access-Control-Allow-Origin': '*'
              }}
          )
        console.log(response)
        const responseData = response.data.data
        console.log(responseData)
        setUserData(responseData)
      }catch(error){
        console.log(error)
      }
    }
    /// 여기서 처리 추가적으로 처리 가능///
    PostListData();
  },[])

  const [title, setTitle] = useState(null);
  const handleTitleChange = (title:any) =>{
    setTitle(title)
    console.log(title)
  }

  const [content, setContent] = useState('');
  const handleEditorChange = (content: string) => {
    setContent(content);
    console.log(content)
  };

  const [date, setDate] = useState('');
  const [region, setRegion] = useState('')
  const [number, setNumber] = useState('')

  const handleCardList = (content: any) =>{
    console.log(content)
    setDate(content[0])
    setRegion(content[1])
    setNumber(content[2])
  }

  const handleClick = async () => {
    console.log(jwt)
      try{
        console.log(date[1])
        const response = await axios.post('http://localhost:8080/api/v1/post',
          {
            title:title,
            context:content,
            tags:["여행"],
            travelGender:'여자',//타입설정
            travelAt:region,
            travelAge:userData.age,
            travelDateStart:date[0],
            travelDateEnd:date[1],
            travelMember:number
          },
          {
            headers:{
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              'Access-Control-Allow-Origin': '*'}
          }
        )
        console.log(axios)
        console.log(response)
      }catch(error){
        console.log(error)
      }
      console.log(title,content)
  };


  return (
    <div className='createPostLayout'>
      <div className='createPostImg'>
        s
      </div>
      <div className='createPostFlex' >
      <div className='createPost'>
        <PostCardList onValueChange={handleCardList} />
        <PostTitleInput onValueChange={handleTitleChange} />
        <PostThumbnailInput />
        <PostEditor onChangeEditor={handleEditorChange} />
        <HashTag
          hashTags={[]}
          setHashTags={function (value: React.SetStateAction<string[]>): void {
            throw new Error('Function not implemented.');
          }}
        />
        <Button
          className="ml-auto mt-5"
          onClick={handleClick}
          type="submit"
          children={'작성완료'}
          />
      </div>
      </div>
    </div>
  );
};


export default CreatePostPage;
