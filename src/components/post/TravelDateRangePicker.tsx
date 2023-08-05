import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useEffect, useRef, useState } from 'react';

const TravelDatePicker = ({onValueChange}) => {

  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [DateArray, setDateArray] = useState<any[]>([null,null]);

  useEffect(()=>{
    DateArray[0] = startDate
    console.log(DateArray)
    onValueChange(DateArray)
  },[startDate])

  useEffect(()=>{
    DateArray[1] = endDate
    console.log(DateArray)
    onValueChange(DateArray)
  },[endDate])

  return (
    <div className="flex space-x-2 z-2" >
      <div className="flex items-center">
        <DatePicker
          id="start-date-picker"
          className="z-9999 p-2 border border-gray-300 rounded text-gray-700 text-sm w-72"
          selected={startDate}
          onChange={(dateStart: Date) => setStartDate(dateStart)}
          dateFormat="yyyy-MM-dd"
          placeholderText="날짜 선택"
        />
      </div>
      <div className="flex items-center">-</div>
      <div className="flex items-center">
        <DatePicker
          id="end-date-picker"
          className="z-9999 p-2 border border-gray-300 rounded text-gray-700 text-sm w-72"
          selected={endDate}
          onChange={(dateEnd: Date) => setEndDate(dateEnd)}
          dateFormat="yyyy-MM-dd"
          placeholderText="날짜 선택"
        />
      </div>
    </div>
  );
};

export default TravelDatePicker;
