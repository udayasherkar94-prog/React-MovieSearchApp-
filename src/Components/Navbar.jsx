import React from 'react'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex  space-x-8 items-center pl-3 py-1'>
        <img className='w-[50px]' src={Logo} alt="logo" />
        <Link className='text-blue-500 text-2xl font-bold font-sans' to='/'>Movies</Link>
        <Link className='text-blue-500 text-2xl font-bold font-sans' to='/watchlist'>Watchlist</Link>
    </div>
  )
}
