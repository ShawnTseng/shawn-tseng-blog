import React, { useState } from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type PostProps = {
  id: string;
  title: string;
  content: string;
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const [loading, setLoading] = useState(false);

  const onGoPage = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    Router.push("/p/[id]", `/p/${post.id}`);
  }


  return (
    <div onClick={onGoPage}>
      <h2>{post.title}</h2>
      <small>By Shawn TSENG</small>
      <ReactMarkdown children={post.content} />
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Post;
