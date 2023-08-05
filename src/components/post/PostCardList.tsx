import React, { useState } from 'react';
import PostCard from './PostCard';
import TravelDateRangePicker from './TravelDateRangePicker';
import TravelRegionSelect from './TravelRegionSelect';
import TravelGuestSelect from './TravelGuestSelect';

export const PostCardList = () => {
  const [dates,setDates] = useState<Date|null>(null);
  const [region,setRegion] = useState<String>('');

  const handleDateChange = (date:any) =>{
    setDates(date);
    console.log(dates)
  }

  const handleRegionSelect = (data:any) =>{
    setRegion(data)
    console.log(data)
  }


  return (
    <div>
      <PostCard title="여행 기간">
        <TravelDateRangePicker  onValueChange={handleDateChange}  />
      </PostCard>
      <PostCard title="여행 지역">
        <TravelRegionSelect onValueChange={handleRegionSelect} />
      </PostCard>
      <PostCard title="여행 인원">
        <TravelGuestSelect />
      </PostCard>
    </div>
  );
};
