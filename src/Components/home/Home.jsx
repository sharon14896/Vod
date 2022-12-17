import axios from 'axios'
import React, { useRef,useState ,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import Header from '../../Layout/Header/Header'

const Home = () => {
  const [movie,setMovie]=useState([])
  // const nav =useNavigate();
  // const selectRef=useRef();
  const [querys]=useSearchParams(); 
  const [year]=useSearchParams(); 
  let url=`https://www.omdbapi.com/?s=${querys.get('Title')||'bank'}&y=${year}$&apikey=f35d9868`
  console.log(url);
const getApi=async(url)=>{
  const{data}=await axios.get(url);
  setMovie(data)
}
useEffect(()=>{
  getApi()
},[querys]);


  return (
    <div>
       <Header url={url} querys={querys}/>
    </div>
  )
}

export default Home