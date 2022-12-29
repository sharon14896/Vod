import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../../../Layout/NavBar/NavBar';
import Stars from '../../Stars';

const MovieInfo = () => {
  const [movie, setMovie] = useState({});
  const [loading,setLoading]=useState(false);
  let query = useParams();
  const navigate = useNavigate();


  useEffect(() => {
    getApiInfo();
  }, [query.id])

  const getApiInfo = async () => {
    setLoading(true)
    const url = `https://www.omdbapi.com/?i=${query.id}&apikey=f35d9868`;
    const data = await axios.get(url);
    setMovie(data.data)
    setLoading(false)
  }

  return (
    <div className='bg-dark'>
      <NavBar/>
    <div className=' '>
      { loading? <img style={{height:'60px',width:'80px'}} src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif'></img> :
      <div  style={{borderRadius:'20px'}}  className='d-flex p-2 col-lg-6 mx-auto bg-dark'>
        <img src={movie.Poster} />
        <div className='text-white '>
        <h2>{movie.Title}</h2>
        <div className=''>{movie.Plot}</div>
        <div className=''>Genre: {movie.Genre}</div>
        <div className=''>Actors: {movie.Actors}</div>
        <div className=''>Year: {movie.Year}</div>
        <div className=''>Score:<Stars rating={movie.imdbRating}/></div>
        </div>
      </div>
      }
      <div className=' d-flex justify-content-center'>
        <button className=' btn btn-danger' onClick={() => navigate(-1)}>Go back</button>
      </div>
        
      
    </div>
    </div>
    
  )
}

export default MovieInfo