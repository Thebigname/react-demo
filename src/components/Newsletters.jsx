import React from 'react'

const Newsletters = () => {
  return (
    <div className='w-full py-16 text-white'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 px-4'>
            <div className='lg:col-span-2 my-4'> 
                <h1 className= 'py-2 font-bold md:text-4xl sm:text-3xl text-2xl'>Want tips & tricks to optiomize your flow?</h1>
                <p>sign up for our newsletter and stay up to date</p>
            </div>
            <div className='my-4'>
                  <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black bg-gray-200' type="email" placeholder='Enter your Email'/>
                    <button className='bg-[#00df9a] w-[200px] rounded-md  font-medium my-6 text-center mx-aut0 py-3 text-black ml-4'>Notify me</button>
                  </div>
                  <p>we care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span> </p>
            </div>
        </div>
        
    </div>
  )
}

export default Newsletters