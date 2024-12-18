import React from 'react';
import Image from 'next/image';
import nav from '../../../public/nav.jpg';
import { Linkedin, Github, Mail } from 'lucide-react'; 

const MyFooter = () => {
  return (
<footer className="footer bg-red-950 text-ivory px-12  items-center p-4">
  <aside className="grid-flow-col items-center">
  <Image src={nav}  alt='' className='w-10 rounded-full'/>

    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col mx-auto sm:mx-0 gap-6 md:place-self-center md:justify-self-end">
    <a>
       <Linkedin />
    </a>
    <a>
       <Github/>
    </a>
    <a>
      <Mail/>
    </a>
  </nav>
</footer>
  )
}

export default MyFooter
