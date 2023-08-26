import { useState } from 'react';
import './datemodal.scss'
import DatePicker from "react-datepicker";





const Datemodal = () =>{
    const [startDate, setStartDate] = useState<any>(new Date());
    return (
      <DatePicker  selected={startDate} onChange={(date) => setStartDate(date)} />
    );
}

export default Datemodal;