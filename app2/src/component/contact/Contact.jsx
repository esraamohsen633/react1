
import axios from 'axios';
import React, { useEffect , Component } from 'react'



export default function Contact() {

  async function getData(){
    let {data} =await axios.get(`https://jsonplaceholder.typicode.com/posts`)
console.log(data);

  }
  useEffect(()=>{
    getData()

  },[])
  return (
    <div>Contact</div>
  )
}



