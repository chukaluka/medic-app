import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FaBriefcaseMedical } from 'react-icons/fa';


const Search = ( {onClick} ) => {

    const onSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div onSubmit={onSubmit}>

        <h1 className=' flex items-center justify-center mt-28 mb-16'> <FaBriefcaseMedical style={{ marginRight: '10px' }}/>medic</h1>

        <form className='flex justify-center items-center my-6 mx-7 rounded-lg md:w-1/2 md:ml-52 md:mx-auto lg:mx-auto xl:mx-auto'>

    <div>

        <FaSearch style={{ color: 'white',}} />
    
        <textarea className='text-div text-center w-72 rounded-lg my-3 items-center justify-center' type="textarea" name="name" placeholder='Search sickness symptoms...' />

            <button onClick={onClick} className='search-btn w-32 hover:bg-[#dcf5f5] hover:text-[#080a0a] h-8 rounded-lg flex justify-center items-center p-6 '>Search</button>

    </div>

        </form>
        
        <div className='text-div flex justify-center items-center my-6 mx-9 mt-24 rounded-lg md:w-1/2 md:ml-52 md:mx-auto lg:mx-auto xl:mx-auto'>
      
      </div>
    </div>
  )
}

export default Search;