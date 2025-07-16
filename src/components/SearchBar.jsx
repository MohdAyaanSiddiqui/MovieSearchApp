import React, { useState } from "react";
import './SearchBar.css'
function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="search-bar-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search for a movie..."
      />
      <button className="search-btn" type="submit">Search</button>
    </form>
  );
}

export default SearchBar;