import React, { useEffect, useState } from 'react';
import './maincontent.scss';
import Preview from '@/components/main/preview/preview';
import { PostType } from '@/types/post';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';
import axios from 'axios';

export interface PostListType{
  "id": number,
  "title": String,
  "nickname": String,
  "tags": String[],
  "statusType": String,
  "travelGender": String,
  "travelAge": String,
  "travelAt": String,
  "travelMember": number,
  "travelDateStart": String,
  "travelDateEnd": String
}

const Maincontent = () => {

  return (
    <div className="contentBackground">
      <div className='ment'>
        곧 출발하는 여행
      </div>
      <Preview />
    </div>
  );
};

export default Maincontent;
