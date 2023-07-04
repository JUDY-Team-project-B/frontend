import React from 'react';
import './searchcontent.scss';
import Preview from '@/components/main/preview/preview';
import DetailSearch from '../detailsearch/detailsearch';



const SearchContent = () => {


  return (
    <div className="searchContentBackground">
      <div className='ment2'>
        동행
      </div>
      <DetailSearch/>
      <Preview/>
    </div>
  );
};

export default SearchContent;
