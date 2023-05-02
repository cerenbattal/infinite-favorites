import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './../components/Header';

test('renders Header component', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Infinite-fav!/i);
  expect(linkElement).toBeInTheDocument();
});
