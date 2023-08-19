import React, { useEffect, useState } from 'react';
import './searchcontent.scss';
import Preview from '@/components/main/preview/preview';
import DetailSearch from '../detailsearch/detailsearch';
//import { useQuery } from '@tanstack/react-query';
import { restFetcher } from '@/queryClient';
import { useLocation } from 'react-router-dom';
import PostList from '@/components/main/postList/postList';



const SearchContent = () => {
  
  const location = useLocation();
  const queryParems = new URLSearchParams(location.search);
  const searchTerm = queryParems.get('q');
  console.log(searchTerm)
  const [url,setUrl] = useState('all/0')
  

  return (
    <div className="searchContentBackground">
      {/* <div className='ment2'>
        동행
      </div>
      <DetailSearch/> */}
      <PostList  queryString = {url} searchType = {"title"} searchKeyword = {searchTerm}/>
    </div>
  );
};

export default SearchContent;
