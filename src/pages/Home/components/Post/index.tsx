import React from 'react';
import { IPost } from '../../../../contexts/PostsContext';
import { PostContainer } from './styles';
import { relativeDateFormatter } from "../../../../utils/formatter";

interface PostProps {
  post: IPost;
}

export const Post: React.FC<PostProps> = ({ post }) => {
  const formattedDate = relativeDateFormatter(post.created_at);

  return (
    <PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{formattedDate}</span>
      </div>
      <p>{post.body}</p>
    </PostContainer>
  );
};