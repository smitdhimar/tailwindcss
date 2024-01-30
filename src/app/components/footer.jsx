import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-800 drop-shadow-2xl '>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
        <ul className='flex flex-wrap justify-item-center mb-6 text-sm font-medium text-white sm:mb-0'>
        <li>
                    <a href="#" className=" me-4 md:me-6 hover:text-blue-700">About</a>
                </li>
                <li>
                    <a href="#" className=" me-4 md:me-6 hover:text-blue-700">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className=" me-4 md:me-6 hover:text-blue-700">Licensing</a>
                </li>
                <li>
                    <a href="#" className=" hover:text-blue-700">Contact</a>
                </li>
        </ul>
        </div>
        <hr className='m-4'></hr>
        <span className='items-center justify-between text-white hover:text-blue-700 font-medium'>All rights reserved</span>
        
      </div>

    </footer>
  )
}

export default Footer
