import React from 'react'
import { FaSearch } from "react-icons/fa";
import "../CSS/SearchBar.css";
export default function SearchBar() {
  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Search for Products..."
        // value={input}
        
      />
    </div>
  )
}
