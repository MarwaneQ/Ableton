import React from 'react'
import photo1 from '/photo-1.jpg'
import photo2 from '/photo-2.jpg'
import Section from './Section'
function Showcase() {
  return (
    <>
    <div className='bg-white w-auto lg:h-[55em] md:h-[55em]  flex lg:justify-end md:justify-end justify-center'>
        <div className='w-3/5 bg-[#fbffa7] flex lg:p-24 md:p-24 items-center justify-end lg:h-full md:h-full h-[10em]'>
            <img src={photo1} className='lg:mr-20 lg:h-[38em] md:mr-32 md:w-[60em]  md:h-[38em] object-cover mr-16 h-[5em]' />
            <img src={photo2} className='lg:w-4/5 md:w-4/5 w-20 object-cover p-2' />
        </div>
        <div>
          
        </div>
    </div>
    <div className='flex justify-center bg-white w-auto p-10'>
    <Section title='Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.' paragh='We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.
' />
    </div>
    
    </>
  )
}

export default Showcase