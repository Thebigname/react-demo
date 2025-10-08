import React from 'react'
import ana from '../assets/ana.jpg'

const Sectioni = () => {
  return (
    <div className=' bg-white w-full
     px-4 py-16'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
      <img className='w-[400px] mx-auto my-4' src={ana} alt="/" />
      <div className='flex flex-col justify-center pl-10'>
        <p className='text-[#00df9a] font-bold'>DATA ANALYTICS CENTRALLY</p>
        <h1 className='md:4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quidem perferendis eius, doloribus porro dicta, quos tempora odit voluptatum vero repudiandae quis quisquam! Assumenda nesciunt laboriosam possimus, consequuntur vel incidunt?</p>
        <button className='bg-black w-[200px] rounded-md  font-medium my-6 text-center mx-aut0 md:mx-0 py-3 text-[#00df9a]'>Get Started</button>
      </div>
      </div>
    </div>
  )
}

export default Sectioni