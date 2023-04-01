import React from 'react';
import { CssBaseline } from '@mui/material'; // Automatically changes some styles for us
import { Routes, Route } from 'react-router-dom'; // Create different pages

import { Root, Content, Toolbar } from './styles';

import { Actors, MovieInformation, Movies, Navbar, Profile } from './';

export default function App() {
  return (
    <Root>
      <CssBaseline />
      <Navbar />
      <Content>
        <Toolbar />
        <Routes>
          <Route path='/movie/:id' element={<MovieInformation />} />
          <Route path='/actors/:id' element={<Actors />} />
          <Route path='/' element={<Movies />} />
          <Route path='/profile/:id' element={<Profile />} />
        </Routes>
      </Content>
    </Root>
  );
}
