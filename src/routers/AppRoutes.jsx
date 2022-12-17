import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Carrousel from '../Components/Carrousel/Carrousel';
import Home from '../Components/home/Home';
import Movie from '../Components/Pages/movie/Movie';
import Layout from '../Layout/Layout';

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Carrousel/>}></Route>
            {/* <Route path='/Home' element={<Home/>}></Route> */}
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes