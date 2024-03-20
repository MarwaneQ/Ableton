import abletonMark from '/ableton-wordmark.svg'
import header from '/header.avif'
import Section from './Section'
function Hero() {
  return (
    <div className='lg:px-32 lg:py-16 md:px-20 md:py-5 px-6 py-3 h-[100vh] bg-white flex flex-col	items-center lg:h-full'>
      <img src={header} alt="hero" className='h-full w-full object-cover md:h-full md:w-auto lg:h-full lg:w-auto relative'/>
      <img src={abletonMark} className='lg:absolute lg:bottom-[24em] lg:w-[22em]' />
      <Section  title='We make Live, Push, Note and Link — unique software and hardware for music creation and performance. With these products, our community of users creates amazing things.' paragh='Ableton was founded in 1999 and released the first version of Live in 2001. Our products are used by a community of dedicated musicians, sound designers, and artists from across the world.' />
    </div>
  )
}


export default Hero