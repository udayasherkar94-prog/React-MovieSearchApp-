import React, { useEffect, useState } from 'react'
import { Navbar } from './Components/Navbar'
import Movies from './Components/Movies'
import Watchlist from './Components/Watchlist'

import {BrowserRouter,Routes,Route, useSearchParams} from 'react-router-dom'
import Banner from './Components/Banner'

function App({movieObj}) {

  let [watchlist,setWatchlist] = useState([]);

  let addMovies =(movieObj)=>{
     let newWatchlist = [...watchlist,movieObj]
     setWatchlist(newWatchlist);
     localStorage.setItem("movieList",JSON.stringify(newWatchlist));
     console.log(newWatchlist)
  }

  let removeMovies = (movieObj)=>{
    let filteredWatchlist = watchlist.filter((movie)=>{
      return movie.id != movieObj.id;
    })

    setWatchlist(filteredWatchlist);
    localStorage.setItem("movieList",JSON.stringify(filteredWatchlist));
    console.log(filteredWatchlist)
  }

  useEffect(()=>{
    let localStorageValue = localStorage.getItem('movieList');
    if(!localStorageValue){
      return;
    }
    setWatchlist(JSON.parse(localStorageValue));
  },[])

  return (
    <> 
    
     <BrowserRouter>
        <Navbar/> 

        <Routes>
             <Route path="/" element={ <> <Banner /> <Movies watchlist={watchlist} removeMovies={removeMovies}  addMovies={addMovies} movieObj={movieObj} /> </>}></Route>

              <Route path="/watchlist" element={<Watchlist watchlist={watchlist} removeMovies={removeMovies} />}></Route>

        </Routes>
     </BrowserRouter>
        
        

    </>
  )
}

export default App