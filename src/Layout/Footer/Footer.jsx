import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const backgroundcolor ='#f1f1f1;'
  return (
    <footer className="text-center text-white" style={{backgroundColor:'#f1f1f1'}}>
  <div className="container pt-4">
    <section className="mb-4">
      <Link
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        to={"#!"}
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-facebook-f"></i></Link>

      <Link
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        to={"#!"}
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-twitter"></i></Link>
      <Link
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        to={"#!"}
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-google"></i></Link>

 
      <Link
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        to={"#!"}
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-instagram"></i></Link>


      <Link
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        to={"#!"}
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-linkedin"></i></Link>

      <Link
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        to={"#!"}
        role="button"
        data-mdb-ripple-color="dark"
        ><i className="fab fa-github"></i></Link>
    </section>

  </div>
  
  <div className="text-center text-dark p-3" >
    © 2020 Copyright: 
    <Link className="text-dark" to={"#!"}> VodeMovie.com
    </Link>
  </div>
</footer>
  )
}

export default Footer