import React from 'react';
import './mappage.scss';
import { ReactComponent as Map } from '@/assets/image/southKoreaLow.svg';

const Mappage = () => {
  return (
    <div className="mapPageBackground">
      <div>여행가고 싶은곳을 눌러보세요</div>
      <Map className="mapdetail" />
    </div>
  );
};

export default Mappage;
