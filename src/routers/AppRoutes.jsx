import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Carrousel from '../Components/Carrousel/Carrousel';
import Home from '../Components/home/Home';
import Page1 from '../Components/Pages/Page1/Page1';
import Page2 from '../Components/Pages/Page2/Page2';
import Layout from '../Layout/Layout';

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Carrousel/>}></Route>
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes