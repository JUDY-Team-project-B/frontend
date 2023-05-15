import Button from '@/components/common/Button';
import { Layout } from '@/components/common/Layout';
import PostEditor from '@/components/post/Editor';
import HashTag from '@/components/post/Hashtag';
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
