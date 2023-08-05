import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';
import TravelDateRangePicker from './TravelDateRangePicker';
import TravelRegionSelect from './TravelRegionSelect';
import TravelGuestSelect from './TravelGuestSelect';

export const PostCardList = ({onValueChange}) => {
  const [dates,setDates] = useState<Date|null>(null);
  const [region,setRegion] = useState<String>('');
  const [number,setNumber] = useState<Number>(0);
  const [sendData, setSendData] = useState<any[]>([null,null,null])

  const handleDateChange = (date:any) =>{
    console.log(date)
    setDates(date)
  }

  const handleRegionSelect = (data:any) =>{
    console.log(data)
    setRegion(data)
  }

  const handleNumberSelect = (data:any)=>{
    console.log(data)
    setNumber(data)
  }

  useEffect(()=>{
    setSendData([dates,region,number])
  },[dates,region,number])

  useEffect(()=>{
    onValueChange(sendData)
  },[sendData])

  return (
    <div>
      <PostCard title="여행 기간">
        <TravelDateRangePicker onValueChange={handleDateChange}  />
      </PostCard>
      <PostCard title="여행 지역">
        <TravelRegionSelect onValueChange={handleRegionSelect} />
      </PostCard>
      <PostCard title="여행 인원">
        <TravelGuestSelect onValueChange={handleNumberSelect} />
      </PostCard>
    </div>
  );
};
