import React from 'react';
import './index.scss';
import Mappage from '@/components/main/mappage';
import Nav from '@/components/common/nav';

const Main = () => {
  return (
    <div className="mainBackground">
      <Nav></Nav>
      <Mappage></Mappage>
      <div>contextpage</div>
    </div>
  );
};

export default Main;
