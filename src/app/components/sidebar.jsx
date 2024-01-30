import React from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { SiHelpscout } from "react-icons/si"
import { FaAngleRight, FaCheck, FaCheckDouble } from 'react-icons/fa'
import { FiPhone } from "react-icons/fi"
import { CgAdd } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import Link from 'next/link'
const Sidebar = () => {
  return (
    // <div className='flex-col  shadow-2xl shadow-gray-600 h-screen bg-gray-600  w-48'>
    //   <ul className='flex flex-col p-4 m-4 mt-0 text-xl font-semibold text-white rounded-md drop-shadow-md w-screen'>
    //     <li><a className='hover:bg-blue-400'>Add Job</a></li>
    //     <li><a className='hover:bg-blue-400'>Show Job</a></li>
    //     <li><a className='hover:bg-blue-400'>Search By</a> Role</li>
    //   </ul>
    // </div>

    <aside className={`bg-gray-700 text-white overflow-hidden transition-all duration-200   lg:w-60 and lg:p-4 w-48
    `}>
    <ul>
      <li className='flex justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
        <AiOutlineHome className='mr-2 mt-1' />
        <Link href="/">Home</Link>
      </li>


      <li className='flex justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
        <GrProjects className='mr-2 mt-1'  />
        <h3 className='flex-1'>All Posts</h3>
        {/* <FaAngleRight /> */}
      </li>
      <li className='flex justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
        <IoIosAddCircle className='mr-2 mt-1' />
        <h3 className='flex-1'>Add Post</h3>
        {/* <FaAngleRight /> */}
      </li>

      <li className='flex justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
        <BsSearch className='mr-2 mt-1' />
        <h3 className='flex-1'>Search</h3>
        {/* <FaAngleRight /> */}
      </li>

      <li className='flex justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
        <SiHelpscout className='mr-2 mt-1' />
        <Link href="/aboutuspage">About us</Link>

      </li>

      <li className='flex justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
        <FiPhone className='mr-2 mt-1' />
        <Link href="/contactuspage">Contact Us</Link>

      </li>
    </ul>
  </aside>
  )
}

export default Sidebar
