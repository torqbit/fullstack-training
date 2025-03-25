import React, { useState , useEffect , useRef, TimeHTMLAttributes } from "react";
import styles from '@/styles/setTimeAssigment/search.module.css'
 
 interface SearchInputProps {
   onSearch: (query: string) => void;
   delay?: number;
 }
 
 export const SearchInput: React.FC<SearchInputProps> = ({onSearch, delay = 1000}) => {
   const[query, setQuery]= useState<string>("")
   const[typing, setTyping]=useState(false)
   useEffect(()=>{
      if (query.length != 0){
        setTyping(true)
      }
      const timeout = setTimeout(() => {
        onSearch
        setTyping(false);
      }, delay);
         
      return () => clearTimeout(timeout)
    },[query])
   
 
   return (
    <div className={styles.content}>
      <div className={styles.search}>
       <img src='images/5680244.png'/>
       <input type='text' value={query} onChange={(e) => setQuery(e.currentTarget.value)} placeholder='Search...' aria-label='Search input' />
       <img src='images/images.png'/>
      </div>
       {!typing && query && <p>your Query is being searched</p>}
    </div>
   );
 };
 
 export default SearchInput;