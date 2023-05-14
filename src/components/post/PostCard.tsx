import React from 'react';

type PostCardProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

const PostCard: React.FC<PostCardProps> = ({ title, children }) => {
  return (
    // <div className=" border-gray-800 rounded-sm shadow-md">
    <div className="flex flex-row items-center m-4 ">
      <h2 className="text-lg font-semibold mr-20">{title}</h2>
      <div className="flex justify-center">{children}</div>
    </div>
  );
};

export default PostCard;
