import {useState,useEffect, FC} from 'react'

export const GetExample: FC = () => {

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
        if(response.ok){
          //status code 
          // we got the response
          response.status
          response.json().then(result => {
            console.log(result)
          })
        } else {
          // we get the errors received from the server
        }
      }).catch(error => {
        // error when fetch was unable to connect with the given url
  
      })
    },[])
  
    return (
      <>
      <h1>FETCH EXAMPLE
        </h1></>
    )
  }