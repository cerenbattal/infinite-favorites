import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e2e2e2;
    font-family: 'Inter', sans-serif;
    margin: 0;
  }
`;

const AppContainer = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  width: auto;
`;

function App() {
  const appState = JSON.parse(localStorage.getItem('APP_STATE'));

  useEffect(() => {
    const initialState = {
      userProfile: {
        userId: 1,
        username: 'cerenbattal',
        name: 'Ceren',
        surname: 'Battal',
        location: 'Istanbul',
        email: 'cerenbattal97@gmail.com',
      },
      favorites: [],
      theme: 'light',
    };
    if (!appState) {
      localStorage.setItem('APP_STATE', JSON.stringify(initialState));
    }

  }, []);

  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
