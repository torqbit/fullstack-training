import React, { useState } from "react";
 
 interface SearchInputProps {
   onSearch: (query: string) => Promise<void>;
   delay?: number;
 }
 
 const SearchInput: React.FC<SearchInputProps> = ({onSearch,delay = 500}) => {
   const [query, setQuery] = useState("");
 
   
 
   return (
     <div className='search-input'>
       <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search...' aria-label='Search input' />
     </div>
   );
 };
 
 export default SearchInput;