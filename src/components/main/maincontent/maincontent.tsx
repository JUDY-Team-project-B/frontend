import React from 'react';
import './maincontent.scss';
import Preview from '@/components/common/preview/preview';

const Maincontent = () => {


  return (
    <div className="contentBackground">
      <div className='ment'>
        곧 출발하는 여행
      </div>
      <Preview/>
    </div>
  );
};

export default Maincontent;
