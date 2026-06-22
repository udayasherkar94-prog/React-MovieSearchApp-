import React, { useState } from 'react'

function Watchlist({watchlist,removeMovies}) {

    let [search,setSearch] = useState('');

    function watchlistSearch(e){
        // console.log(e.target.value);
        
       setSearch(e.target.value)
    }

  return (
    <>
    
    <div className='flex justify-center m-4 '>
       <div className=' flex justify-center items-center bg-blue-400 text-white font-bold rounded-xl h-[3rem] w-[9rem] mx-4'>All Genere</div>
      <div className=' flex justify-center items-center bg-gray-400/50 text-white font-bold rounded-xl h-[3rem] w-[9rem] mx-4'>Action</div>

      <div className=' flex justify-center items-center bg-gray-400/50 text-white font-bold rounded-xl h-[3rem] w-[9rem] mx-4'>Action</div>

    </div>

    <div className='flex justify-center my-6'>
        <input onChange={watchlistSearch} value={search} className='rounded-l h-[3rem] w-[18rem] bg-gray-200 outline-none px-4' type='text' placeholder='Search for Movies'/>
    </div>
    <div className='overflow-hiddden rounded-xl border border-gray-300 m-8'>
        <table className='w-full text-gray-500 text-center '>
           <thead className='border-b font-light font-sans'>
                <tr>
                  <th>Name</th>
                  <th>Ratings</th>
                  <th>Popularity</th>
                  <th>Genere</th>
                </tr>
           </thead>
           <tbody>


            {watchlist.filter((movieObj)=>{
                return movieObj.title.toLowerCase().includes(search.toLowerCase())
            }).map((movieObj)=>{
              return    <tr className='border-b'>
                  <td className='flex items-center px-6 py-4' >
                      <img className='h-[6rem] w-[8rem]' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path})`} />
 
                      <div className='mx-8'>{movieObj.title}</div>
                  </td>

                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>{movieObj.genre_ids}</td>
                  <td onClick={()=> removeMovies(movieObj)} className='text-red-500'> Delete</td>

               </tr>


            })}
            
           </tbody>
        </table>
    </div>


    
    </>
  )
}

export default Watchlist