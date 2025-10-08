import React from 'react'
import { Link } from 'react-router'

const Error = () => {
  return (
    <div className='bg-white font-bold justify-center h-screen  '>
        <div className='mx-auto w-100 py-4 ' >
            <h1>Thank you for landing here,you try well well</h1>
            <h1>You still dey wait</h1>
            <h1>Baba use navbar find your way or footer</h1>
            
            </div>
            <p><Link to='/'>Back to home page</Link></p>
    </div>
  )
}

export default Error