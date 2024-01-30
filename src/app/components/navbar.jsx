import React from 'react';
import {SiApacheopenoffice} from "react-icons/si";
const Navbar = () => {
  return (
    // <nav className=' flex h-12 justify-between bg-white w-screen'>
    //   <h3 className='text-xl mt-1 ml-1 px-4 py-2'>Navbar</h3>
    //   <div className='md:items-center'>
    //     {/* <ul className='flex font-semibold text-xl font-sans text-gray-700 flex-row w-100 justify-center'>
    //       <li className='hover:text-purple-400 basis-1/4'>All</li>
    //       <li className='basis-1/4 hover:text-purple-400'>Enter</li>
    //       <li className='basis-1/4 hover:text-purple-400'>Contact us</li>
    //       <li className='basis-1/4 hover:text-purple-400'>About us</li>

    //     </ul> */}
		//        <ul
    //         className="
    //           pt-4
    //           text-base text-gray-500 text-medium
    //           md:flex
    //           md:justify-between 
    //           md:pt-0 "
    //       >
    //         <li>
    //           <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
    //             >Features</a
    //           >
    //         </li>
    //         <li>
    //           <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
    //             >Pricing</a
    //           >
    //         </li>
    //         <li>
    //           <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
    //             >Customers</a
    //           >
    //         </li>
    //         <li>
    //           <a className="md:p-4 py-2 block hover:text-purple-400" href="#"
    //             >Blog</a
    //           >
    //         </li>
    //         <li>
    //           <a
    //             className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
    //             href="#"
    //             >Sign Up</a
    //           >
              
    //         </li>
    //       </ul>
    //   </div>
    // </nav>

    
<div>
<nav className='w-full h-16  shadow-lg shadow-gray-600 bg-gray-800 text-white '>
  <div className='mx-auto justify-between max-w-screen-xl flex flex-wrap items-center'>
    <div className='flex flex-row ml-48 md:ml-0'>
    <SiApacheopenoffice size={35} className='mt-4 mx-0'/>
  <h3 className='text-2xl font-bold mt-4 ml-6 hover:text-blue-700  '>Jobpost</h3>
  </div>
  <div className='hidden w-full md:block md:w-auto'>
  <ul className=' font-medium flex flex-col mt-4 md:flex-row rtl:space-x-reverse items-center justify-end md:space-x-8 w-48'>
    <li className='hover:text-blue-700 '>All</li>
    <li className='hover:text-blue-700 '>Post</li>
  </ul>
  </div>
  </div>
</nav>
</div>
  );
}

export default Navbar;
