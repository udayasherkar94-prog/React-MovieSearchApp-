import React from 'react'

function MovieCard({poster_path,name}) {
  return (
    <div className='h-[48vh] w-[190px] flex flex-col items-end justify-between bg-cover bg-center rounded-xl hover:scale-110 transition-all duration-500 ease-out hover:cursor-pointer'  style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
          
          <div>
            emoji
          </div>
          <div className='text-white text-l w-full text-center rounded-xl py-2 bg-gray-900/60 '>
             {name}
          </div>

    </div>
  )
}

export default MovieCard