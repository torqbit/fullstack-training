import React from 'react'
import {useState,useEffect, FC} from 'react'

interface User {
    id: number;
    name: string;
    email: string;
  }

export const BasicFetch: FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        if(response.ok){
          //status code 
          // we got the response
          response.status
          response.json().then(result => {
            setUsers(result)
          })
        } else {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
      }).catch(error => {
        setError(new error("Error fetching data"));
  
      })
    },[])
  
    return (
        <div style={{backgroundColor:'white', width: 600, marginBottom:20}}>
        <h1>FETCH EXAMPLE</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name} - {user.email}</li>
          ))}
        </ul>
      </div>
    );
  };