import Button from '@/components/common/Button';
import PostEditor from '@/components/post/Editor';
import HashTag from '@/components/post/Hashtag';
import { PostCardList } from '@/components/post/PostCardList';
import PostThumbnailInput from '@/components/post/PostThumbnailInput';
import { PostTitleInput } from '@/components/post/PostTitleInput';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { PostType } from '@/types/post';
import { useNavigate } from 'react-router-dom';
import cookie from 'react-cookies';

interface ICreatePostFormData {
  // 여행 지역, 기간,인원
  title: string;
  content: string;
  tags: string[];
}

const CreatePostPage = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [data, setData] = useState<any>();
  const [userData, setUserData] = useState<any>(); // 유저 정보를 저장
  const [jwt, setjwt] = useState<any>();
  const [listData, setListData] = useState<PostType[] | undefined>();
  const [nextId, setNextId] = useState<any>();
  const navigate = useNavigate();

  useEffect(() => {
    const UserDatas = async () => {
      try {
        setjwt(localStorage.getItem('accessToken'));
        console.log(jwt);
        const response = await axios.get(
          `http://localhost:8080/api/v1/user/me`,
          {
            headers: {
              Authorization: `Bearer ${cookie.load('accessTokens')}`,
              'Access-Control-Allow-Origin': '*',
            },
          },
        );
        console.log(response);
        const responseData = response.data.data;
        console.log(responseData);
        setUserData(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    /// 여기서 처리 추가적으로 처리 가능///
    UserDatas();
  }, []);
  //현재 사용중인 유저 정보를 받아오는 axios

  useEffect(() => {
    const PostListData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/post/all/0`,
          {
            params: {
              searchType: '',
              searchKeyword: '',
            },
            headers: {
              Authorization: `Bearer ${cookie.load('accessTokens')}`,
              'Access-Control-Allow-Origin': '*',
            },
          },
        );
        const responseData: PostType[] = response.data.data;
        setNextId(responseData[0].id + 1);
        console.log(responseData[0].id);
      } catch (error) {
        console.log(error);
      }
    };
    PostListData();
  }, []);
  //현재 작성된 게시물을 확인하는 axios

  const [title, setTitle] = useState(null);
  const handleTitleChange = (title: any) => {
    setTitle(title[0]);
    setImageFile(title[1]);
    console.log(title);
  };

  const [content, setContent] = useState('');
  const handleEditorChange = (content: string) => {
    setContent(content);
    console.log(content);
  };

  const [date, setDate] = useState('');
  const [travelat, setTravelAt] = useState<any[]>(['', '']);
  const [region, setRegion] = useState('');
  const [city, setCity] = useState('');
  const [number, setNumber] = useState('');

  const handleCardList = (content: any) => {
    console.log(content);
    setDate(content[0]);
    setTravelAt(content[1]);
    setNumber(content[2]);
  };

  useEffect(() => {
    console.log(travelat);
    if (travelat === null) {
    } else {
      setRegion(travelat[0]);
      setCity(travelat[1]);
    }
  }, [travelat]);

  const handleClick = async () => {
    console.log(jwt);
    try {
      console.log(date[1]);
      console.log(region);
      console.log(city);
      const response = await axios.post(
        'http://localhost:8080/api/v1/post',
        {
          title: title,
          context: content,
          tags: ['여행'],
          travelGender: '남성', //타입설정
          travelState: region,
          travelCity: city,
          travelAge: userData.age,
          travelDateStart: date[0],
          travelDateEnd: date[1],
          travelMember: number,
        },
        {
          headers: {
            Authorization: `Bearer ${cookie.load('accessTokens')}`,
            'Access-Control-Allow-Origin': '*',
          },
        },
      );
      if (imageFile) {
        const formData = new FormData();
        formData.append('file', imageFile);

        try {
          const res = await axios({
            method: 'post',
            url: `http://localhost:8080/api/v1/post/${nextId}/images`,
            data: formData,
            headers: {
              Authorization: `Bearer ${cookie.load('accessTokens')}`,
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'multipart/form-data',
            },
          });
        } catch (e) {
          console.log(e);
        }
      }
      console.log(axios);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    console.log(title, content);
    alert('게시물이 생성되었습니다!');
    navigate('/');
  };

  return (
    <div className="createPostLayout">
      <div className="createPostImg"></div>
      <div className="createPostFlex">
        <div className="createPost">
          <PostCardList onValueChange={handleCardList} />
          <PostTitleInput onValueChange={handleTitleChange} />
          <PostThumbnailInput />
          <PostEditor onChangeEditor={handleEditorChange} />
          {/* <HashTag
          hashTags={[]}
          setHashTags={function (value: React.SetStateAction<string[]>): void {
            throw new Error('Function not implemented.');
          }}
        /> */}
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
