import React from 'react'

function MovieCard({poster_path,name,movieObj,addMovies,watchlist,removeMovies}) {


  function doesContain(movieObj){
      for (let i=0;i<watchlist.length;i++) {
         if(watchlist[i].id === movieObj.id){
           return true;
         }
      }
      return false;
  }

  return (
    <div className='h-[48vh] w-[190px] flex flex-col items-end justify-between bg-cover bg-center rounded-xl hover:scale-110 transition-all duration-500 ease-out hover:cursor-pointer'  style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${poster_path})`}}>


         {doesContain(movieObj)?
         <div onClick={()=>{removeMovies(movieObj)}} className='m-2 flex justify-center h-8 w-8 bg-gray-700 items-center rounded-lg'>
            	&#10060;
          </div>:<div onClick={()=>{addMovies(movieObj)}} className='m-2 flex justify-center h-8 w-8 bg-gray-700 items-center rounded-lg'>
            	&#128525;
          </div>
         }     
          
      
          <div className='text-white text-l w-full text-center rounded-xl py-2 bg-gray-900/60 '>
             {name}
          </div>

    </div>
  )
}

export default MovieCard