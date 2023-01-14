import { zodResolver } from '@hookform/resolvers/zod';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useContextSelector } from 'use-context-selector';
import * as z from 'zod';
import { PostContext } from '../../../../contexts/PostsContext';
import { SearchInputContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

interface SearchInputProps {

}

export const SearchInput: React.FC<SearchInputProps> = () => {
  const posts = useContextSelector(PostContext, (context) => {
    return context.posts
  })
  const getPosts = useContextSelector(PostContext, (context) => {
    return context.getPosts
  })

  const {
    register,
    handleSubmit,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchPosts = async (data: SearchFormInputs) => {
    await getPosts(data.query)
  }
  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <header>
        <h3>Publicações</h3>
        <span>{posts.length} publicações</span>
      </header>
      <div>
        <input type="text" placeholder='Buscar conteúdo' {...register('query')} />
        <button type="submit">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </div>
    </SearchInputContainer>
  );
};