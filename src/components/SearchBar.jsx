import React, { useState } from 'react';
import styled from 'styled-components';

const SearchButton = styled.button`
  background-color: #333;
  color: #f0f0f0;
  border: #333;
  padding: 0.5rem 1rem;
  border-radius: 8rem;
  cursor: pointer;
  &:hover {
    background-color: #5e5d5d;
  }
`;

const Input = styled.input`
  background-color: #f0f0f0;
  color: #252525;
  font-size: 1em;
  font-family: 'Inter', sans-serif;
  margin: 1em;
  padding: 0.25em 1em;
  height: 30px;
  border: 2px solid #5e5d5d;
  border-radius: 3px;
  width: 100%;
  max-width: 430px;
  padding: 10px;
  box-sizing: border-box;

  @media (min-width: 800px) {
    width: 50%;
  }

  @media (min-width: 5000px) {
    width: 30%;
  }
  &:focus {
    outline: none;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
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
    <Form onSubmit={onFormSubmit}>
      <Input type='text' placeholder='Search...' value={query} onChange={handleInputChange} />
      <SearchButton type='submit'>Search</SearchButton>
    </Form>
  );
};

export default SearchBar;
