import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'

function Movies({movieObj,addMovies,watchlist,removeMovies}) {

  const [movies,setMovies] = useState([])
  const [pageNo,setpageNo] =useState(1)

  function next(){
    setpageNo(pageNo+1);
  }

  function prev(){
    if(pageNo===1){
      setpageNo(pageNo)
    }else{
      setpageNo(pageNo-1);
    }
  }

  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=bddfdd71a1f455bbc470dee76cdf8c35&language=en-US&page=${pageNo}`).then(function(res){
      setMovies(res.data.results)
      
    })
  },[pageNo])

  return (
    <div className='p-5'>
        <div className='text-2xl m-2 text-center font-bold'>Trending Movies</div>

        <div className='flex flex-row gap-3 flex-wrap justify-around my-3 gap-8' >
           
          {movies.map((movieObj)=>{
                 return <MovieCard key={movieObj.id} watchlist={watchlist} movieObj={movieObj} removeMovies={removeMovies} addMovies={addMovies} poster_path={movieObj.poster_path} name={movieObj.title} />
           })}
           
       
        </div>

        <Pagination prev={prev} next={next} pageNo={pageNo}/>
    </div>
  )
}

export default Movies

// https://api.themoviedb.org/3/movie/popular?api_key=bddfdd71a1f455bbc470dee76cdf8c35&language=en-US&page=1