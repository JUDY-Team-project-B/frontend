import React from 'react';

export const PostTitleInput = () => {
  return (
    <div className="p-3">
      <input
        className="block w-full text-lg bg-white border-b-2 py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent"
        placeholder="제목을 입력하세요"
        type="text"
        id="title_input"
      />
    </div>
  );
};
