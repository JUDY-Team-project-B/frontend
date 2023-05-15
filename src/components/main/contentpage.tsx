import React from 'react';
import './contentpage.scss';
import img from "@/assets/image/user.png" 

const Contentpage = () => {
  return (
    <div className="contentBackground"> 
      <div className='content'> 
        <div className='img'> 
          <div className='destiantion'> 
            제주 
          </div> 
          <div className='name'> 
            하트 
          </div> 
        </div> 
        <div> 
          조회수 
        </div> 
        <div> 
          <div> 
            title 
          </div> 
          <div> 
            date 
          </div> 
          <div> 
            how 
          </div> 
          <div> 
            need 
          </div>        
        </div> 
      </div> 
    </div>
  );
};

export default Contentpage;
