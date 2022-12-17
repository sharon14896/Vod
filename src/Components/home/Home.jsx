import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Home = () => {
  const [movie,setMovie]=useState([])

const getApi=async()=>{
  let url=`https://www.omdbapi.com/?i=tt3896198&apikey=f35d9868`
  const{data}=await axios(url);
  console.log(data);
  setMovie(data)
}
useEffect(()=>{
  getApi()
},[]);
  return (
    <div>
      <h1>{movie.Title}</h1>

    </div>
  )
}

export default Home