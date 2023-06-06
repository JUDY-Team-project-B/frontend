import React from 'react';

export const PostTitleInput = () => {
  return (
    <div className="p-3">
      <input
        className="block w-full text-xl bg-white border-b-2 py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent"
        placeholder="제목을 입력하세요"
        type="text"
        id="title_input"
      />
      <input
        className="block w-full bg-white border-b-2 py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent"
        placeholder="게시글 썸네일 업로드하세요"
        type="file"
        id="photo_input"
      />
    </div>
  );
};
