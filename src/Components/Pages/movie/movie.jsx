import React from 'react'
import { Link } from 'react-router-dom'

const Movie = ({movies}) => {
  return (
    <div className='container '>
    <div className="row">
        {movies.map(item => {
            if(item.Poster != "N/A"){
            return (
                <div key={item.imdbID} className='col-md-3 col-3 mb-2 '>
                    <Link className='btn btn-dark' to={"/video/" + item.imdbID}>
                        <div style={{ borderRadius: "50px", cursor: "pointer" }} className="shadow overflow-hidden h-100">
                            <img src={item.Poster}  className="w-100" />
                        </div>
                    </Link>
                </div>                         
            )
            }
        })}
        </div>  
        </div>  
  )
}

export default Movie