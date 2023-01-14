import React, { useCallback, useEffect, useState } from 'react';
import { PostHeader } from './components/PostHeader';
import { useContextSelector } from 'use-context-selector';
import { IPost, PostContext } from '../../contexts/PostsContext';
import { useParams } from 'react-router-dom';
import { api } from '../../lib/axios';
import { Content } from './components/Content';

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

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