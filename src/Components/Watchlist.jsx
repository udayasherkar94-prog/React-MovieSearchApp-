import React from 'react'

function Watchlist() {
  return (
    <>
    
    <div className='flex justify-center m-4 '>
       <div className=' flex justify-center items-center bg-blue-400 text-white font-bold rounded-xl h-[3rem] w-[9rem] mx-4'>All Genere</div>
      <div className=' flex justify-center items-center bg-gray-400/50 text-white font-bold rounded-xl h-[3rem] w-[9rem] mx-4'>Action</div>

      <div className=' flex justify-center items-center bg-gray-400/50 text-white font-bold rounded-xl h-[3rem] w-[9rem] mx-4'>Action</div>

    </div>

    <div className='flex justify-center my-6'>
        <input className='rounded-l h-[3rem] w-[18rem] bg-gray-200 outline-none px-4' type='text' placeholder='Search for Movies'/>
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
               <tr className='border-b'>
                  <td className='flex items-center px-6 py-4' >
                      <img className='h-[6rem] w-[8rem]' src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfMnlaLoZt7pcqK8Ge-NgntnDJxaqC-JUfsqCkenq_w&s=10`} /> 
                      <div className='mx-8'>Joker</div>
                  </td>

                  <td>8.5</td>
                  <td>9</td>
                  <td>Drama</td>
                  <td className='text-red-500'> Delete</td>

               </tr>


               <tr className='border-b'>
                  <td className='flex items-center px-6 py-4' >
                      <img className='h-[6rem] w-[8rem]' src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfMnlaLoZt7pcqK8Ge-NgntnDJxaqC-JUfsqCkenq_w&s=10`} /> 
                      <div className='mx-8'>Joker</div>
                  </td>

                  <td>8.5</td>
                  <td>9</td>
                  <td>Drama</td>
                  <td className='text-red-500'> Delete</td>

               </tr>

               <tr className='border-b'>
                  <td className='flex items-center px-6 py-4' >
                      <img className='h-[6rem] w-[8rem]' src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfMnlaLoZt7pcqK8Ge-NgntnDJxaqC-JUfsqCkenq_w&s=10`} /> 
                      <div className='mx-8'>Joker</div>
                  </td>

                  <td>8.5</td>
                  <td>9</td>
                  <td>Drama</td>
                  <td className='text-red-500'> Delete</td>

               </tr>
           </tbody>
        </table>
    </div>


    
    </>
  )
}

export default Watchlist