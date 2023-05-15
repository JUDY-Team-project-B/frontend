import React from 'react';
import PostCard from './PostCard';
import TravelDateRangePicker from './TravelDateRangePicker';
import TravelRegionSelect from './TravelRegionSelect';
import TravelGuestSelect from './TravelGuestSelect';

export const PostCardList = () => {
  return (
    <div>
      <PostCard title="여행 지역">
        <TravelRegionSelect />
      </PostCard>
      <PostCard title="여행 기간">
        <TravelDateRangePicker />
      </PostCard>
      <PostCard title="여행 인원">
        <TravelGuestSelect />
      </PostCard>
    </div>
  );
};
