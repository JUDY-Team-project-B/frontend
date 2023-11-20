import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import '@/components/post/DatePicker.css';
import Content from '../../pages/main/Contents';

const TravelDatePicker = ({ onValueChange }) => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [DateArray, setDateArray] = useState<any[]>([null, null]);

  useEffect(() => {
    setDateArray([startDate, endDate]);
  }, [startDate, endDate]);

  useEffect(() => {
    onValueChange(DateArray);
  });

  return (
    <Container>
      <div>
        <DatePicker
          id="start-date-picker"
          className="datePicker"
          selected={startDate}
          onChange={(dateStart: Date) => setStartDate(dateStart)}
          dateFormat="yyyy-MM-dd"
          placeholderText="날짜 선택"
        />
      </div>
      <Contents>-</Contents>
      <div className="flex items-center">
        <DatePicker
          id="end-date-picker"
          className="datePicker"
          selected={endDate}
          onChange={(dateEnd: Date) => setEndDate(dateEnd)}
          dateFormat="yyyy-MM-dd"
          placeholderText="날짜 선택"
        />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const Contents = styled.div`
  width: 3%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default TravelDatePicker;
