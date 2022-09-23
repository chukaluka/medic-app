import React from 'react';



const Header = () => {
  return (
    <div>
      
      <form className='flex justify-center flex-col items-center my-6 mx-7 mt-32 sm:px-3 rounded-lg md:w-1/2 md:ml-52 md:mx-auto lg:mx-auto xl:mx-auto'>

        <div className='sm:mx-auto'>
          
        <input className='px-10 rounded-lg' type="textarea" name="name" placeholder="sickness symptoms"/>

        <Button className='btn' variant='outlined' color='success'>
          Submit
        </Button>
        </div>
      </form>
    </div>
  )
}

export default Header