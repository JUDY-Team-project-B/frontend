import React, { useState } from 'react';
import Preview from '@/components/main/preview/preview';
import SearchIcon from '@/assets/image/Search icon.png'
import './detailsearch.scss'
import Destinationmodal from '../destinationmodal/destinationmodal';
import Datemodal from '../datamodal/datemodal';

const DetailSearch = () => {
    const [destinationmodal,setDestinationModal] = useState(false);
    const [datemodal,setDateModal] = useState(false);

  return (
    <div className='detailsearchlayout'>
        <button className='detailclicklayout' onClick={()=> destinationmodal ? setDestinationModal(false) :setDestinationModal(true)}>
            여행 지역
        </button>
        <div className='modaltest'>
            {destinationmodal === true? <Destinationmodal />:null}
        </div>
        <button className='detailclicklayout' onClick={ ()=> datemodal ? setDateModal(false):setDateModal(true)}>
            여행 기간
        </button>
        <div className='modaltest'>
            {datemodal === true? <Datemodal />:null}
        </div>
        <div className='detailinputlayout'>
            <input placeholder='여행을 찾아보세요' className='input'/>
            <button>
                <img src={SearchIcon}/>
            </button>
        </div>
    </div>
  );
};

export default DetailSearch;
