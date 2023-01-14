import React from 'react';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import { Post } from './pages/Post';

interface RouterProps {

}

export const Router: React.FC<RouterProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}