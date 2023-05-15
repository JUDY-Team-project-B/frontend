import React from 'react';
import './mappage.scss';
import { ReactComponent as Map } from '@/assets/image/southKoreaLow.svg';

const Mappage = () => {
  return (
    <div className="mapPageBackground">
      <Map className="mapdetail" />
    </div>
  );
};

export default Mappage;
