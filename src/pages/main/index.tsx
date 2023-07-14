import React, { useState } from 'react';
import './index.scss';
import Map from '@/components/main/map/map';
import Maincontent from '@/components/main/maincontent/maincontent';
import { PostType } from '@/types/post';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';

const Main = () => {

  return (
    <div className="mainBackground">
      <Map/>
      <Maincontent/>
    </div>
  );
};

export default Main;
