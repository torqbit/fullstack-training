import React, { useState } from "react";

interface SearchInputProps {
  onSearch: (query: string) => Promise<void>;
  delay?: number;
}

const SearchInput: React.FC<SearchInputProps> = ({
  onSearch,
  delay = 500, // Default delay of 500ms
}) => {
  const [query, setQuery] = useState("");

  // TODO: Implement delayed search functionality
  // - Handle input changes
  // - Set up delay timer
  // - Cancel previous timer
  // - Trigger search after delay
  // - Clean up on unmount

  return (
    <div className='search-input'>
      <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search...' aria-label='Search input' />
    </div>
  );
};

export default SearchInput;
