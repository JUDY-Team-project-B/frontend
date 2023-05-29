import React from 'react';
import './index.scss';
import Map from '@/components/main/map/map';
import Maincontent from '@/components/main/maincontent/maincontent';

const Main = () => {
  return (
    <div className="mainBackground">
      <Map/>
      <Maincontent/>
    </div>
  );
};

export default Main;
