import React from 'react';
import Preview from '@/components/main/preview/preview';
import SearchIcon from '@/assets/image/Search icon.png'
import './detailsearch.scss'

const DetailSearch = () => {

  return (
    <div className='detailsearchlayout'>
        <div className='detailinputlayout'>
            <input placeholder='여행을 찾아보세요' className='input'/>
            <button>
                <img src={SearchIcon}/>
            </button>
        </div>
        <div className='detailclicklayout'>
            여행 지역
        </div>
        <div className='detailclicklayout' >
            여행 기간
        </div>
    </div>
  );
};

export default DetailSearch;
