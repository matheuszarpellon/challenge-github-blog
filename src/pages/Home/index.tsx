import React from 'react';
import { useContextSelector } from 'use-context-selector';
import Spinner from '../../components/Spinner';
import { PostContext } from '../../contexts/PostsContext';
import { Post } from './components/Post';
import { Profile } from './components/Profile';
import { SearchInput } from './components/SearchInput';
import { PostListContainer } from './styles';

interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {
  const posts = useContextSelector(PostContext, (context) => {
    return context.posts
  })

  return (
    <>
      <Profile />

      <SearchInput />

      {!posts ? <Spinner /> :
        <PostListContainer>
          {posts.map(post => (
            <Post key={post.number} post={post} />
          )
          )}
        </PostListContainer>
      }
    </>
  );
};

export default Home;