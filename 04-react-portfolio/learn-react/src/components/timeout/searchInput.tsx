import React, { useState , useEffect , useRef, TimeHTMLAttributes } from "react";
 
 interface SearchInputProps {
   onSearch: (query: string) => void;
   delay?: number;
 }
 
 const SearchInput: React.FC<SearchInputProps> = ({onSearch,delay = 500}) => {
   const [query, setQuery] = useState("");
   const timer = useRef<NodeJS.Timeout>()
   useEffect(()=>{
    console.log(query);
    if (timer.current){
      console.log('clearing the timer')
      console.log(timer.current)
      clearTimeout(timer.current)
    }
    else{
      console.log('setting timeout')
      timer.current = setTimeout(()=>{
        console.log(`Logging`)
        onSearch(query)
      }, delay)
    }
    
    return () => {
      if(timer.current){
        clearTimeout(timer.current)
      }
    }
   }, [query])
 
   
 
   return (
     <div className='search-input'>
       <input type='text' value={query} onChange={(e) => setQuery(e.currentTarget.value)} placeholder='Search...' aria-label='Search input' />
     </div>
   );
 };
 
 export default SearchInput;