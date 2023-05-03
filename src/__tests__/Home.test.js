import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './../pages/Home';

describe('SearchBar', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders', () => {
    render(
      <Home />
    );
    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
    expect(screen.getByTestId('image-list')).toBeInTheDocument();
  });

});