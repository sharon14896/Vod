import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../Components/home/Home';
import Page1 from '../Components/Pages/Page1/Page1';
import Page2 from '../Components/Pages/Page2/Page2';
import Layout from '../Layout/Layout';

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path='/Page1' element={<Page1/>}></Route>
            <Route path='/Page2' element={<Page2/>}></Route>
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes