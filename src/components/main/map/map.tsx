import React from 'react';
import './map.scss';
import { ReactComponent as Mapimg } from '@/assets/image/southKoreaLow.svg';

const Map = () => {
  return (
    <div className="mapPageBackground">
      <Mapimg className="mapdetail" />
    </div>
  );
};

export default Map;
