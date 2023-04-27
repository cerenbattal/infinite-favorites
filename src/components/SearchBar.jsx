import React, { useState } from 'react'
import constants from '../api/constants';

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log(query);
    handleAPICall();
  };

  const handleAPICall = () => {
    const url = constants.BASE_URL + "&text=" + query;
			fetch(url)
      .then(response => response.json())
      .then(data => console.log(data.photos))
      .catch(error => console.log(error));
  }

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar