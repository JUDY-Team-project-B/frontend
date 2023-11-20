import React from 'react';
import styled from 'styled-components';
import '@/components/post/DatePicker.css';

type PostCardProps = {
  title?: React.ReactNode;
  children: React.ReactNode;
};

const PostCard = ({ title, children }: PostCardProps) => {
  return (
    <div className="flex flex-row items-center p-4 border-gray-500 shadow-md ">
      <h2 className="fonts ">{title}</h2>
      <div className="flex justify-center">{children}</div>
    </div>
  );
};

export default PostCard;
