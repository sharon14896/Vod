import React, { useState } from 'react'
import { Link} from 'react-router-dom'
import { FcSearch } from "react-icons/fc";

const NavBar = () => {
  const [Query, setQuerys] = useState("");
  

  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid">
          <Link  className="navbar-brand text-white" to={'/'}>Home</Link>
                    <div className="col-lg-4 d-flex justify-content-end">
                        <input value={Query} onInput={(e) => { setQuerys(e.target.value) }} type="search" placeholder='search...' className='form-control w-50' />
                        <Link className='btn btn-dark' to={'/search/' + Query} >
                          <FcSearch/>
                        </Link>
                    </div>
                </div>
            </nav>
  )
}

export default NavBar