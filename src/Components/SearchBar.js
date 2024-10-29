import React, { useState, useEffect, useCallback } from 'react';
import { FaSearch } from "react-icons/fa";
import "../CSS/SearchBar.css";
export default function SearchBar() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  // Function to fetch search results from DummyJSON API
  const fetchResults = async (searchTerm) => {
    if (!searchTerm) {
      setResults([]);
      return;
    }
    console.log("Searching for keyword:", searchTerm);
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
      const data = await response.json();

      // Ensure we are getting the products from the response
      if (data.products) {
        setResults(data.products); // Set the results directly from the products array
        console.log("Search Results:", data.products); 
      } else {
        setResults([]); // Reset results if no products found
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      setResults([]); // Set results to an empty array on error
    }
  };

  const debouncedFetchResults = useCallback(debounce(fetchResults, 300), []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInput(value);
    debouncedFetchResults(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Search for Products..."
        value={input}
        onChange={handleInputChange}
      />
      {/* Conditionally render the results list or "No results found" message */}
      {input && (
        <div className="results-list">
          {Array.isArray(results) && results.length > 0 ? (
            results.map((item) => (
              <a 
                key={item.id} 
                href={`https://dummyjson.com/products/${item.id}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="result-item"
              >
                {item.title}
              </a>
            ))
          ) : (
            <div className="no-results">No results found.</div>
          )}
        </div>
      )}
    </div>
  );
  
}
