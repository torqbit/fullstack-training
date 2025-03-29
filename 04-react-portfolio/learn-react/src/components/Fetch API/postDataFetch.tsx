import React from 'react'
import {useState,useEffect, FC} from 'react'

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}
export const BasicFetch: FC = () => {
    const [users, setUsers] = useState<Post[]>([]);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
          },
      })
      .then(response => {
        if(response.ok){
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
