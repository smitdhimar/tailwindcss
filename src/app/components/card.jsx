"use client";
import React from 'react'
import {FaArrowRight} from 'react-icons/fa'

const Job = (props) => {
    const arr=["HTML","CSS","javascript"];
    return (

        <div className="hover:bg-gray-900  hover:shadow-2xl  max-w-sm p-6 m-4 bg-white border border-gray-200 rounded-lg shadow-2xl  dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Front End Developer</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            {/* <hr className='my-1 bg-gray-500 h-0.5 border-none'/> */}
            <p className='text-white font-bold'>Skills</p>
            
            {arr.map(element => (
  <button
    // key={element}  // Adding a key prop for each element in the array
    type="button"
    className="p-1 m-1 text-sm font-sm text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" disabled
  >
    {element}
  </button>
))}
 

            <hr className='my-1 bg-gray-500  h-0.5 border-none'/>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Apply
                <FaArrowRight className='ml-1 mr-0 mt-1'/>
                {/* <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg> */}
            </a>
        </div>

    )
}

export default Job
