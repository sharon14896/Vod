import React from 'react'

const Movie = ({item}) => {
  const{Title,imdbID,Poster}=item
  return (
    <div className='col-md-3 col-6 p-3 ' >
      <button>
      <img src={Poster} width={'100%'} alt="" />
      </button>
    </div>
  )
}

export default Movie