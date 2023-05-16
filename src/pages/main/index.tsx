import React from 'react';
import './index.scss';
import Map from '@/components/main/map/map';
import Nav from '@/components/common/nav/nav';
import Maincontent from '@/components/main/maincontent/maincontent';

const Main = () => {
  return (
    <div className="mainBackground">
      <Nav/>
      <Map/>
      <Maincontent/>
    </div>
  );
};

export default Main;
