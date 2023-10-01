'use client';

import React from "react";
import ReactMarkdown from "react-markdown";

export type PostProps = {
  id: string;
  title: string;
  content: string;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const onGoPage = () => {
    // TODO:
  }

  return (
    <div className="p-8 cursor-pointer" onClick={onGoPage}>
      <h2>{post.title}</h2>
      <ReactMarkdown children={post.content} />
      <small>By Shawn TSENG</small>
    </div>
  );
};

export default Post;
