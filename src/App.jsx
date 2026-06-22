import React from 'react'
import { Navbar } from './Components/Navbar'
import Movies from './Components/Movies'
import Watchlist from './Components/Watchlist'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Banner from './Components/Banner'

function App() {
  return (
    <> 
    
     <BrowserRouter>
        <Navbar/> 

        <Routes>
             <Route path="/" element={ <> <Banner /> <Movies /> </>}></Route>

              <Route path="/watchlist" element={<Watchlist />}></Route>

        </Routes>
     </BrowserRouter>
        
        

    </>
  )
}

export default App