import React from 'react';
// motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../variants';
// img
import Img1 from '../assets/portfolio-img1.png';
import Img2 from '../assets/portfolio-img2.png';
import Img3 from '../assets/portfolio-img3.png';



const Work = () => {
  return(
  <section className='section' id='work'>
    <div className="container mx-auto">
      <div>
       <div className='flex-1 flex  flex-col gap-y-12 mb-10 lg:mb-0'>
        {/* text */}
        <div>
          <h2 className='h2 leading-tight text-accent'>
            My Latest<br/>work.
          </h2>
          <p className='max-w-sm mb-16'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellat, hic! Harum quis, cum velit neque esse eos molestias 
            doloremque exfplicabo!
          </p>
          <button className='btn btn-sm'>View all projects</button>
        </div>
        {/* image */}
        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
          {/* overlay */}
         <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
          {/*image  */}
          <img className='group-hover:scale-125 transition-all duration-500 '  src= {Img1}  alt="" />
          {/* pretitle */}
          <div className='absolute -bottom-full left-12'>UI/UX Design</div>
          {/* title */}
          <div>
            <span>Project Title</span>
            </div>
 
        </div>
       </div>
       <div>2</div> 
      </div>
    </div>
      
      </section>
  );

}; 

export default Work;