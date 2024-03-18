import ableton from '/ableton.svg'
import header from '/header.avif'
function Hero() {
  return (
    <div className='lg:px-32 lg:py-16 md:px-20 md:py-5 px-6 py-3 h-[100vh] bg-white'>
      <img src={header} alt="hero" className='h-full w-full object-cover md:h-full md:w-auto lg:h-full lg:w-auto'/>
      <img src={ableton} alt="" />
    </div>
  )
}


export default Hero