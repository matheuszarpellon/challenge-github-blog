import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContextSelector } from 'use-context-selector';
import { PostContext } from '../../contexts/PostsContext';
import { Content } from './components/Content';
import { PostHeader } from './components/PostHeader';

interface PostProps {

}

export const Post: React.FC<PostProps> = () => {
  const postData = useContextSelector(PostContext, (context) => {
    return context.postData
  })
  const getPostDetails = useContextSelector(PostContext, (context) => {
    return context.getPostDetails
  })
  const isLoading = useContextSelector(PostContext, (context) => {
    return context.isLoading
  })
  const { id } = useParams()

  useEffect(() => {
    getPostDetails(id);
  }, []);

  return (
    <>
      <PostHeader isLoading={isLoading} postData={postData} />
      {!isLoading && <Content content={postData.body} />}
    </>
  );
};