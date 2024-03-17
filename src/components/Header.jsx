import React from 'react'
import logo from '/logo.svg'
function Header() {
  return (
    <header className='w-full h-[70px] bg-white flex p-5 justify-between border-b-2 border-[#eee]'>
        <div className='flex items-center '>
            <a href="https://www.ableton.com/en/"><img src={logo} alt="logo" className='mr-10 w-[3.5em]' /></a>
            <ul className=' hidden md:flex md:text-sm sm:hidden lg:flex lg:text-xl '>
                <li className='mr-10'><a href="https://www.ableton.com/en/live/">Live</a></li>
                <li  className='mr-10'><a href="https://www.ableton.com/en/push/">Push</a></li>
                <li className='mr-10'><a href="https://www.ableton.com/en/note/">Note</a></li>
                <li className='mr-10'><a href="https://www.ableton.com/en/link/">Link</a></li>
                <li className='mr-10'><a href="https://www.ableton.com/en/shop/">Shope</a></li>
                <li className='mr-10'><a href="https://www.ableton.com/en/packs/">Packs</a></li>
                <li className='mr-10'><a href="https://www.ableton.com/en/help/">Help</a></li>
            </ul>
        </div>
        <div>
            <ul className='md:flex md:items-center hidden sm:hidden'>
                <li className='mr-7 text-[#0000ff] md:text-md lg:text-xl'><a href="https://www.ableton.com/en/trial/">Try Live 12 for free</a></li>
                <li className='mr-0 lg:text-md md:text-sm'><a href="https://www.ableton.com/en/login/?next=/en/about/">Log in or register</a></li>
            </ul>
        </div>
    </header>
    
  )
}

export default Header