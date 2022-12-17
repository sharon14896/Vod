import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({url,querys}) => {
  const nav =useNavigate();
  
  const serch =(year)=>{
    url=`https://www.omdbapi.com/?s=${querys.get('bank')}&y=${year}$&apikey=f35d9868`
    console.log(url);

  }
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
          <Link  onClick={()=>serch(2020)} className="nav-link active text-white" aria-current="page" to={'/'}>2020</Link>
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