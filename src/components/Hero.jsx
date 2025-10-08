import React from 'react'
import { ReactTyped } from "react-typed";
import { Link } from 'react-router';
import Login from './Login';

const Hero = () => {
  return (
    <div className='text-white'>
            <div className='max-w-[800px] mt-[-99px] w-full h-screen mx-auto text-center items-center flex flex-col justify-center'>
                <p className='uppercase text-[#00df9a] font-bold p-2'>Growing with data analytics</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data</h1>
                <div className='flex justify-center py-4'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast, Flexible Financing For </p>
                    <ReactTyped
                    className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                    strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} 
                    backSpeed={140} 
                    loop/>
                </div>

                <p className='text-gray-500 md:2xl text-xl font-bolds pt-4'>Monitor your data analytics to increase revenue for BTB, BTC, SASS platforms.</p>
                <Link to='/login'><button className='bg-[#00df9a] w-[200px] rounded-md  font-medium my-6 text-center mx-aut0 py-3 cursor-pointer text-black'>Get Started</button></Link>
                
            </div>
        </div>
  )
}

export default Hero