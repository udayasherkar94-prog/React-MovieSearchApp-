import React, { useEffect, useState } from 'react'
import genreMap from '../Utilities/genre';

function Watchlist({watchlist,removeMovies,setWatchlist}) {

    let [search,setSearch] = useState('');
    const [genre,setGenre] = useState(['All Genre'])

    const [currGenre,setcurrGenre] = useState('All Genre')

    let handelCurrGenre = (genre)=>{
      setcurrGenre(genre)
    }


    function watchlistSearch(e){
        // console.log(e.target.value);
        
       setSearch(e.target.value)
    }

  let sortIncreasing = ()=>{
    let increasing = watchlist.sort((movieA,movieB)=>{
      // array.sort(first,second) compare and returns an array
          return movieB.vote_average - movieA.vote_average
    })
    setWatchlist([...increasing])

  }
    
    let sortDecreasing =()=>{
    let decreasing = watchlist.sort((movieA,movieB)=>{
          return movieA.vote_average - movieB.vote_average
    })

    setWatchlist([...decreasing])

  }

  useEffect(()=>{
    let temp = watchlist.map((movieObj)=>{
      return genreMap[movieObj.genre_ids[0]]
    })
    
     temp = new Set(temp)
    setGenre(['All Genre',...temp])

    console.log(temp);
    
  },[watchlist])

  return (
    <>
    
    <div className='flex justify-center m-4 '>
      
      
      {genre.map((g)=>{
        return (
           <div onClick={()=>handelCurrGenre(g)} className={currGenre === g ?' flex justify-center items-center bg-blue-400 text-white font-bold rounded-xl h-[3rem] w-[9rem] mx-4':'flex justify-center items-center bg-gray-400/50 text-white font-bold rounded-xl h-[3rem] w-[9rem] mx-4'}>{g}</div>
        )
      })}
      {/* <div className=' flex justify-center items-center bg-gray-400/50 text-white font-bold rounded-xl h-[3rem] w-[9rem] mx-4'>Action</div> */}

      {/* <div className=' flex justify-center items-center bg-gray-400/50 text-white font-bold rounded-xl h-[3rem] w-[9rem] mx-4'>Action</div> */}

    </div>

    <div className='flex justify-center my-6'>
        <input onChange={watchlistSearch} value={search} className='rounded-l h-[3rem] w-[18rem] bg-gray-200 outline-none px-4' type='text' placeholder='Search for Movies'/>
    </div>
    <div className='overflow-hiddden rounded-xl border border-gray-300 m-8'>
        <table className='w-full text-gray-500 text-center '>
           <thead className='border-b font-light font-sans '>
                <tr>
                  <th className='p-3'>Name</th>
                  <th className=' flex justify-center p-3 items-center gap-3'>
                      <div onClick={sortIncreasing}><i class="fa-solid fa-arrow-up"></i></div>
                       <div>Ratings</div>
                       <div onClick={sortDecreasing}><i class="fa-solid fa-arrow-down"></i></div>
                    
                  </th>
                  <th>Popularity</th>
                  <th>Genere</th>
                </tr>
           </thead>
           <tbody>


            {watchlist.filter((movieObj)=>{
              if(currGenre==='All Genre'){
                return true
              }else{
                return genreMap[movieObj.genre_ids[0]] == currGenre
              }
            }).filter((movieObj)=>{
                return movieObj.title.toLowerCase().includes(search.toLowerCase())
            }).map((movieObj)=>{
              return    <tr className='border-b'>
                  <td className='flex items-center px-6 py-4' >
                      <img className='h-[6rem] w-[8rem]' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path})`} />
 
                      <div className='mx-8'>{movieObj.title}</div>
                  </td>

                  <td>{movieObj.vote_average}</td>
                  <td>{movieObj.popularity}</td>
                  <td>{genreMap[movieObj.genre_ids[0]] }</td>
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