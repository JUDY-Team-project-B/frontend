import React from 'react';
import PostCard from './PostCard';
import TravelDateRangePicker from './TravelDateRangePicker';

export const PostCardList = () => {
  return (
    <div>
      <PostCard title="여행 지역" children={undefined} />
      <PostCard title="여행 기간">
        <TravelDateRangePicker />
      </PostCard>
      <PostCard title="여행 인원" children={undefined}></PostCard>
    </div>
  );
};
