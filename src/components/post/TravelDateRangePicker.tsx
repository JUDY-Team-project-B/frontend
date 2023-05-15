import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';

const TravelDatePicker = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  return (
    <div className="flex space-x-2 z-2">
      <div className="flex items-center">
        <DatePicker
          id="start-date-picker"
          className="z-9999 p-2 border border-gray-300 rounded text-gray-700 text-sm w-72"
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
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
          onChange={(date: Date) => setEndDate(date)}
          dateFormat="yyyy-MM-dd"
          placeholderText="날짜 선택"
        />
      </div>
    </div>
  );
};

export default TravelDatePicker;
