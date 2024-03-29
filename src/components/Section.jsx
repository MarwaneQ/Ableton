import React from 'react'

function Section({title,paragh}) {
  return (
    <div className=' tracking-wide	lg:w-[28em] mt-24 mb-10 lg:text-3xl text-xl bg-white'>
        <h3 className='font-normal mb-4'>{title}</h3>
        <p className='font-thin text-xl	'>{paragh}</p>
    </div>
  )
}

export default Section