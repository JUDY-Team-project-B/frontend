import Button from '@/components/common/Button';
import PostEditor from '@/components/post/Editor';
import Hashtag from '@/components/post/Hashtag';
import PostCard from '@/components/post/PostCard';
import TravelDateRangePicker from '@/components/post/TravelDateRangePicker';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ICreatePostFormData {
  // 여행 지역, 기간,인원
  title: string;
  content: string;
  tags: string[];
}

const CreatePostPage = () => {
  const [content, setContent] = useState('');

  const handleEditorChange = (content: string) => {
    setContent(content);
  };

  const handleClick = () => {
    console.log('버튼 클릭');
  };

  return (
    <div>
      {/* TODO header */}
      {/* TODO 여행지역 선택 */}
      <PostCard title="여행 기간">
        <TravelDateRangePicker />
      </PostCard>
      <PostCard title="여행 인원" children={undefined}></PostCard>
      {/* TODO 여행 인원 selector 추가*/}

      <PostEditor
        onChangeEditor={handleEditorChange}
        placeholder={'내용을 입력해주세요'}
      />
      <Button onClick={handleClick} type="submit" children={'작성완료'} />
      {/* TODO hashtag 수정 */}
      <Hashtag
        hashtag={''}
        onChageHashtag={function (content: string): void {
          throw new Error('Function not implemented.');
        }}
      />
    </div>
  );
};

export default CreatePostPage;
