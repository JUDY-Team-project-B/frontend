import React from 'react';
import './searchbar.scss';
import SearchIcon from "@/assets/image/Search icon.png"

const Searchbar = () => {
  return (
    <div className='searchBarLayout'>
        <img src={SearchIcon}></img>
    </div>
  );
};

export default Searchbar;