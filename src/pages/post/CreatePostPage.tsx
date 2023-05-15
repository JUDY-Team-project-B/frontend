import Button from '@/components/common/Button';
import { Layout } from '@/components/common/Layout';
import PostEditor from '@/components/post/Editor';
import Hashtag from '@/components/post/Hashtag';
import { PostCardList } from '@/components/post/PostCardList';
import { PostTitleInput } from '@/components/post/PostTitleInput';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ICreatePostFormData {
  // 여행 지역, 기간,인원
  title: string;
  content: string;
  tags: string[];
}

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleEditorChange = (content: string) => {
    setContent(content);
  };

  const handleClick = () => {
    console.log('버튼 클릭');
  };

  return (
    <Layout>
      <PostCardList />
      <PostTitleInput />
      <PostEditor onChangeEditor={handleEditorChange} />
      <Button onClick={handleClick} type="submit" children={'작성완료'} />
      {/* TODO hashtag 수정 */}
      <Hashtag
        hashtag={''}
        onChageHashtag={function (content: string): void {
          throw new Error('Function not implemented.');
        }}
      />
    </Layout>
  );
};

export default CreatePostPage;
