import React, { ReactNode, useCallback, useEffect, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../lib/axios";

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

interface PostContextType {
  posts: IPost[];
  postData: IPost;
  getPosts: (query?: string) => Promise<void>;
  getPostDetails: (id?: any) => Promise<void>;
  isLoading: boolean;
}

interface PostsProviderProps {
  children: ReactNode;
}

export const PostContext = createContext({} as PostContextType)

export const PostsProvider: React.FC<PostsProviderProps> = ({ children }) => {
  const [posts, setPosts] = useState<IPost[]>([])
  const [postData, setPostData] = useState<IPost>({} as IPost);
  const [isLoading, setIsLoading] = useState(true)
  const username = import.meta.env.VITE_GITHUB_USERNAME
  const repoName = import.meta.env.VITE_GITHUB_REPONAME

  const getPosts = useCallback(async (query: string = "") => {
    try {
      setIsLoading(true)
      const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${repoName}`)
      setPosts(response.data.items)
    } finally {
      setIsLoading(false)
    }
  }, [posts])

  const getPostDetails = useCallback(async (id: any) => {
    try {
      setIsLoading(true);

      const response = await api.get(
        `/repos/${username}/${repoName}/issues/${id}`
      );

      setPostData(response.data);
    } finally {
      setIsLoading(false);
    }
  }, [postData]);

  useEffect(() => {
    getPosts()
  }, []);

  return (
    <PostContext.Provider value={{ posts, postData, getPosts, getPostDetails, isLoading }}>
      {children}
    </PostContext.Provider>
  )
}