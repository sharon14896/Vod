import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand text-white" to={'/'}>Home</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active text-white" aria-current="page" to={'/Page1'}>Page 1</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-white" aria-current="page" to={'/Page2'}>Page 2</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header