import React from 'react';
import Button from '@mui/material/Button';

const HelloPage = () => {
  return (
    <div>
    <h1 className='div-h1 flex justify-center items-center mt-48 md:w-1/2 md:ml-52 md:mx-auto lg:mx-auto xl:mx-auto'> 
      medics
    </h1>
  <div className='wrapper flex justify-center flex-col items-center my-6 mx-7 sm:px-3 rounded-lg md:w-1/2 md:ml-52 md:mx-auto lg:mx-auto xl:mx-auto'>

    <form className='sm:mx-auto'>
    <input className='pr-2' type="text" name="name" placeholder="what is your name"/>

      <Button variant='outlined'>
        Submit
      </Button>
    </form>
   
  </div>
  </div>
  )
}

export default HelloPage;