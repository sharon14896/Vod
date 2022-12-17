import axios from 'axios'
import React, { useRef,useState ,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../../Layout/Header/Header'
import Movie from '../Pages/movie/Movie'

const Home = () => {
  const [movies,setMovies]=useState([])
  // const nav =useNavigate();
  // const selectRef=useRef();
  const [querys]=useSearchParams(); 
  const [year]=useSearchParams(); 
 let url=`https://www.omdbapi.com/?s=${querys.get('Title')||'bank'}&y=${year}&apikey=f35d9868`
 


useEffect(()=>{
  getApi()
 
},[querys,year]);

const getApi=async()=>{
  const{data}=await axios(url);
  setMovies(data.Search)
}

  return (
    <div >
    <div className="row container mx-auto ">
        {movies.map(item=><Movie item={item} key={item.imdbID}/>)} 
        
    </div>
    </div>
  )
}

export default Home



