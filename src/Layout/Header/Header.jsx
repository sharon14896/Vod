import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Header = ({setYear}) => {
    let year
    const [Query, setQuerys] = useState("");
  const search=(date)=>{
    year=date
    setYear(date);

  }
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
  <div className="container-fluid  ">
    <Link  onClick={()=>search("noYear")}className="navbar-brand text-white" to={'/'}>Home</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link  to={`/year/${year}`}  onClick={()=>search(2020)} className="nav-link text-white" aria-current="page"  >2020</Link>
        </li>
      </ul>
    </div>
   
  </div>
</nav>
  )
}

export default Header