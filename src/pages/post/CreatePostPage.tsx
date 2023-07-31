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

  useEffect(()=>{
    const PostListData =async () => {
      try{
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


  const handleClick = async () => {
    try{
      const response = await axios.post('http://localhost:8080/api/v1/post',
      {
        params:{
          title:"테스트",
          context:"내용물",
          tags:["여행"],
          travelGender:"여성",
          travelAt:"경기도 수원시",
          travelAge:"20대",
          travelDateStart:"2023-05-22",
          travelDataEnd:"2023-05-22",
          travelMember:2
        },
        headers:{
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          'Access-Control-Allow-Origin': '*'}
        }
      )
      console.log(response)
    }catch(e){
      console.log(e)
    }
    console.log('버튼 클릭');
  };


  return (
    <Layout>
      <PostCardList />
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
    </Layout>
  );
};

export default CreatePostPage;
