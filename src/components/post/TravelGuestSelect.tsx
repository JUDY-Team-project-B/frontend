import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import '@/components/post/DatePicker.css';

const TravelGuestSelect = ({ onValueChange }) => {
  const [number, setNumber] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNumber(parseInt(e.target.value));
  };

  useEffect(() => {
    console.log(number);
    onValueChange(number);
  }, [number]);

  return (
    <div className="datePicker">
      <select id="picker" className="Picker" onChange={handleChange}>
        {[...Array(10)].map((_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}명
          </option>
        ))}
      </select>
    </div>
  );
};

export default TravelGuestSelect;
