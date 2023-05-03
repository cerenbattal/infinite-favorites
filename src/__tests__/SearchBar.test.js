import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './../components/SearchBar';

describe('SearchBar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders', () => {
    render(
      <SearchBar />
    );
    const placeholder = screen.getByPlaceholderText('Search...')
    expect(placeholder).toBeInTheDocument();
  });

  it('should call onSearch and onQuery with the correct query when the form is submitted', () => {
    const onSearchMock = jest.fn();
    const onQueryMock = jest.fn();
    const { getByTestId } = render(<SearchBar onSearch={onSearchMock} onQuery={onQueryMock} />);
    const input = getByTestId('search-bar-input');
    const form = getByTestId('search-bar');

    const query = 'test';
    fireEvent.change(input, { target: { value: query } });
    fireEvent.submit(form);

    expect(onSearchMock).toHaveBeenCalledWith(query);
    expect(onQueryMock).toHaveBeenCalledWith(query);
  });
});