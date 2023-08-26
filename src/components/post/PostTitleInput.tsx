import { title } from 'process';
import React, { useState,useRef, useCallback, useEffect } from 'react';

export const PostTitleInput = ({ onValueChange }) => {

  const [titletext,setTitletext] = useState<any>('');
  const [img,setImg] = useState<any>('');
  const [Data,setData] = useState<any[]>([null,null])

  const handleTitleChange = (e:any)=>{
    console.log(e.target.value)
    setTitletext(e.target.value);
    onValueChange(e.target.value);
  }

  useEffect(()=>{
    setData([titletext,img])
  },[titletext,img])

  useEffect(()=>{
    onValueChange(Data)
  })

  const uploadingImage = (e:any) =>{
    if(!e.target.files){
      return;
    }
    console.log(e.target.files[0].name)
    setImg(e.target.files[0]);
  }
  
  return (
    <div className="p-3">
      <input
        className="block w-full text-xl bg-white border-b-2 py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent"
        placeholder="제목을 입력하세요"
        type='text'
        value={titletext}
        onChange={handleTitleChange}
      />
      <input
        className="block w-full bg-white border-b-2 py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent"
        placeholder="게시글 썸네일 업로드하세요"
        type="file"
        id="photo_input"
        
        onChange={uploadingImage}
      />
    </div>
  );
};
