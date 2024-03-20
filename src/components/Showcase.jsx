
import photo1 from '/photo-1.jpg'
import photo2 from '/photo-2.jpg'
import photo3 from '/photo-3.jpg'
import photo4 from '/photo-4.jpg'
import photo5 from '/photo-5.jpg'
import photo6 from '/photo-6-a.jpg'
import photo7 from '/photo-7.jpg'
import photo8 from '/photo-8.jpg'
import poster from '/poster-meet-the-makers.avif'
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
    <Section title='Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.' paragh='We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.' />
    </div>
    <div className='bg-white w-auto  flex justify-center lg:h-[30em] md:h-[30em] h-[14em] p-6'>
    <iframe  className='lg:h-[480px] w-[800px] md:h-[480px] md:w-[800px] h-[240px]' src="https://www.youtube.com/embed/9SbnhgjeyXA?enablejsapi=1&origin=https%3A%2F%2Fwww.ableton.com&widgetid=1" ></iframe>
    </div>
    <div className='flex justify-center bg-white w-auto p-10'>
    <Section title=' We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.' paragh='Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.' />
    </div>
    <div className='bg-white w-full flex relative'>
    <div className='bg-[#b6ffc0] w-3/5 flex flex-col lg:justify-center justify-start flex-wrap lg:items-start'>
      <img src={photo3} alt="" className='w-3/5 my-10 lg:mx-20 mx-5' />
      <img src={photo4} alt="" className='w-3/5 my-10 lg:mx-20 mx-5'/>
    </div>
    <div className='w-2/5  flex items-center flex-1 relative'>
    <img src={photo5} className='absolute lg:-left-28 -left-8 md:-left-28 ' />
    </div>
    </div>
    <div className='flex justify-center bg-white w-auto p-10'>
    <Section title='We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.
' paragh='Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.' />
    </div>
    <div className='flex justify-center bg-white w-auto lg:px-28 lg:py-10 md:px-10 md:py-10 px-5'>
      <img src={poster} alt="" />
    </div>
    <div className='flex justify-center bg-white w-auto p-10'>
    <Section title='We’re passionate about what we do, but we’re equally passionate about improving who we are.
' paragh='We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.

Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.' />
    </div>
    <div className='bg-white w-full flex justify-center relative'>
      <div className='w-4/5 lg:h-[50em] h-[19em] bg-[#d5b3ff] flex justify-between relative items-center'>
        <img src={photo6} className='lg:w-[450px] w-[120px] lg:h-[22em]  absolute lg:-left-[80px] -left-[16px] md:w-[180px] md:-left-[70px]' />
        <img src={photo7} className='lg:w-3/5 w-[180px] lg:h-[38em] lg:-right-[149px] absolute -right-[20px] md:-right-[92px] md:w-[250px]' />
      </div>
    </div>
    <div className='flex justify-center bg-white w-auto p-10'>
    <Section title='We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.
' paragh='If you re joining us in Berlin well help with relocation and paperwork. Well even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.' />
    </div>
    <div className='flex p-10 bg-white h-full flex-wrap'>
      <div className='lg:w-2/4 	'>
        <img src={photo8} className='h-full  ' />
      </div>
      <div className='bg-[#b1c5ff] lg:w-2/4	flex flex-col  justify-center lg:p-28 p-10'>
        <h2 className='lg:text-4xl	'>We’re really proud of the work we’ve done so far. But there’s so much more to come. If you’d like to be a part of it, please join us.</h2>
        <a href="https://www.ableton.com/en/jobs/" className='text-[#0000ff] lg:text-3xl mt-8  flex items-center	'>See lastest jobs <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7" className='text-[#0000ff]'/>
</svg>
 </a>
      </div>
      <hr />
    </div>
    </>
  )
}

export default Showcase