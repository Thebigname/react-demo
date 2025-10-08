import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const 
Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto p-4 py-16 grid lg:grid-cols-3 gap-8 text-gray-300 md:p-10'>

        <div>
             <h1 className='w-full text-3xl font-bold text-[#00df9a] text-left'>React. </h1>
             <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, consectetur fugit amet quaerat illum impedit nobis magni voluptatum consequatur alias ut ad. Perspiciatis minima dolores, exercitationem dolor aperiam eius libero?</p>
             <div className='flex md:w-[75%] justify-between'>
                <FaFacebookSquare size={30} />
                <FaInstagram size={30} /> 
                <FaTwitterSquare  size={30} />
                <FaGithubSquare  size={30} />
                <FaDribbbleSquare size={30} />
             </div>

        </div>

        <div className=' flex justify-between lg:col-span-2 mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytic</li>
                    <li className='py-2 text-sm'>Marketting</li>
                    <li className='py-2 text-sm'>Commerce</li>
                    <li className='py-2 text-sm'>Insight</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm'>Pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>Api Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>About</li>
                    <li className='py-2 text-sm'>Blogs</li>
                    <li className='py-2 text-sm'>Jobs</li>
                    <li className='py-2 text-sm'>Press</li>
                    <li className='py-2 text-sm'>Shareholders</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm'>Claim</li>
                    <li className='py-2 text-sm'>Marketting</li>
                    <li className='py-2 text-sm'>Policy</li>
                    <li className='py-2 text-sm'>Terms</li>
                </ul>
            </div>

        </div>
      
    </div>
  )
}

export default Footer