import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #f0f0f0;
  color: #252525;
  font-size: 1em;
  height: 20px;
  border: 2px solid #5a5a5a;
  border-radius: 3px;
`;

const Input = styled.input`
  background-color: #f0f0f0;
  color: #252525;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  width: 430px;
  height: 20px;
  border: 2px solid #5a5a5a;
  border-radius: 3px;
`;

const SearchBar = ({ onSearch, onQuery }) => {
  const [query, setQuery] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
    onQuery(query);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Input type='text' placeholder='Search...' value={query} onChange={handleInputChange} />
      <Button type='submit'>Search</Button>
    </form>
  );
};

export default SearchBar;
