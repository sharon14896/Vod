import React from 'react'
import { Link } from 'react-router-dom'

const Movie = ({movies}) => {
  return (
    <div className='container '>
    <div className="row">
        {movies.map(item => {
            item.Poster = item.Poster != "N/A" ? item.Poster : "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            return (
                <div key={item.imdbID} className='col-md-3 col-6 mb-5 '>
                    <Link className='btn btn-dark' to={"/video/" + item.imdbID}>
                        <div style={{ borderRadius: "50px", cursor: "pointer" }} className="shadow overflow-hidden h-100">
                            <img src={item.Poster}  className="w-100" />
                        </div>
                    </Link>
                </div>                         
            )
        })}
        </div>  
        </div>  
  )
}

export default Movie