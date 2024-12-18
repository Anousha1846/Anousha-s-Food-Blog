import React from 'react'
import Image from 'next/image';
import nav from '../../../public/nav.jpg';
import Link from 'next/link';

const MyHeader = () => {
  return (
    <div className="navbar   backdrop-blur-md top-0  bg-ivory">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl text-deepRed ">Anousha&rsquo;s Food Blog</a>
  </div>
  <div className="flex-none gap-2">
    
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <Image src={nav} alt='nav'  />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content rounded-box text-deepRed text-md bg-ivory z-[1] mt-3 w-52 p-2 shadow">
       
        <Link href= "/" className='p-2 mx-auto hover:underline hover:scale-105 transition-transform duration-900 hover:font-bold hover:text-md'>Home</Link>
        <Link href= "/about" className='p-2 mx-auto hover:underline hover:scale-105 transition-transform duration-900 hover:font-bold hover:text-md'>About</Link>
        <Link href= "/blogs" className='p-2 mx-auto hover:underline hover:scale-105 transition-transform duration-900 hover:font-bold hover:text-md'>Blog</Link>
        <Link href= "/contact" className='p-2 mx-auto hover:underline hover:scale-105 transition-transform duration-900 hover:font-bold hover:text-md'>Contact</Link>

      </ul>
    </div>
  </div>
</div>
  )
}

export default MyHeader
