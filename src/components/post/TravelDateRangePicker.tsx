import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from 'react';

const TravelDatePicker = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex items-center w-1/2 mr-4">
        <DatePicker
          id="start-date-picker"
          className="p-2 border border-gray-400 rounded text-gray-700 text-sm w-full"
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
          placeholderText="Select start date"
        />
      </div>
      <div className="flex items-center w-1/2">
        <DatePicker
          id="end-date-picker"
          className="p-2 border border-gray-400 rounded text-gray-700 text-sm w-full"
          selected={endDate}
          onChange={(date: Date) => setEndDate(date)}
          placeholderText="Select end date"
        />
      </div>
    </div>
  );
};

export default TravelDatePicker;
