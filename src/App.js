import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import './App.css';

function App() {
  useEffect(() => {
    const initialState = {
      userProfile: {
        userId: 1,
        username: 'cerenbattal',
        name: 'Ceren',
        surname: 'Battal',
        location: 'Istanbul',
        email: 'cerenbattal97@gmail.com',
        favorites: [],
      },
      theme: 'light',
    };
    window.localStorage.setItem('APP_STATE', JSON.stringify(initialState));
  }, []);
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
