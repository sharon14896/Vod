import axios from 'axios'
import React, { useRef,useState ,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../../Layout/Header/Header'
import Carrousel from '../Carrousel/Carrousel'
import Movie from '../Pages/movie/Movie'

const Home = () => {
  const [movies,setMovies]=useState([])
  // const nav =useNavigate();
  // const selectRef=useRef();
  // const [querys]=useSearchParams(); 
  // const [year]=useSearchParams(); 
  const [querys,setQuerys]=useState('bank')
  const [year,setYear]=useState('noYear')
  let url=`https://www.omdbapi.com/?s=${querys||'bank'}&y=${year}&apikey=f35d9868`
  console.log(year);
 
   console.log(url);
useEffect(()=>{
  getApi()
 
},[querys,year]);

const getApi=async()=>{
  const{data}=await axios(url);
  setMovies(data.Search)
}



  return (
    <div >
     <Carrousel  setQuerys={setQuerys} />
     <Header setYear={setYear}/>
          <div className="row container mx-auto ">
        {movies.map(item=><Movie item={item} key={item.imdbID}/>)} 

    </div>
    </div>
  )
}

export default Home



