import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Header = () => {
    const [Year, setarYears] = useState(["Home",1950, 1960, 1970, 1980, 1900, 2000, 2010, 2020,2022]);

  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <div className='col-auto p-0 mx-auto'>
           {Year.map(item => {
               return (
                   <Link key={item} to={`/year/${item}`} className='col-auto btn me-1 text-white'>{item}</Link>
                   )
               })}
           </div>
        </li>
      </ul>
    </div>
</nav>
  )
}

export default Header