import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Home from '../../Components/home/Home';
import Movie from '../../Components/Pages/movie/Movie';

const Header = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-white" to={'/'}>Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link className="nav-link text-white" aria-current="page" >2020</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" to={'/Page2'}>Page 2</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header