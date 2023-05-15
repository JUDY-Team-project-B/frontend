import React from 'react';
import './index.scss';
import Mappage from '@/components/main/mappage';
import Nav from '@/components/common/nav';
import Contentpage from '@/components/main/contentpage';

const Main = () => {
  return (
    <div className="mainBackground">
      <Nav></Nav>
      <Mappage></Mappage>
      <Contentpage></Contentpage>
    </div>
  );
};

export default Main;
