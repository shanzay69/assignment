import React from 'react'
import Typewriter from "typewriter-effect";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb"
import { VscVscode } from "react-icons/vsc";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si"
import { FaReact } from "react-icons/fa";
function Skills() {
  return (
    <div id='skills' className='container  pt-32' >
                                                  
      <div className="flex flex-wrap w-full mb-23 flex-col items-center text-center " data-aos="flip-right" >
        <h1 className="sm:text-6xl text-4xl font-bold title-font mb-2 text-yellow-400  border-b-4 border-yellow-400  hover:text-sky-400">My  skills set's the hidden Talents</h1>
        </div>
        <div className='w-full container flex justify-center mt-10 '>
          <h2 className='text-[50px] sm:text-[40px] font-bold leading-tight hover:text-sky-400 text-center ml-23 ms-5 ' data-aos="flip-right"   >
            <Typewriter
              
              options={{
                strings: ['progamming langages','Development Tools And ','farme Work'],
                autoStart: true,
                loop: true
              }}
            />
          </h2>

        </div>

        <div className='container flex flex-col gap-10 rounded-lg pt-9'  data-aos="flip-right"        >
          <div className='flex flex-col p-1 bg-white rounded-lg border-2 border-blue-500 shadow-[0_0_1rem_#f5f9fa,0_0_2rem_rgb(39,193,240)] hover:border-yellow-400  transition-transform duration-300 easa-in-out transform hover:scale-110'>
            <FaHtml5 className='text-orange-400 text-7xl' />
            <span className='mt-2 text-xl text-center text-black font-bold '> Html</span>
          </div>

          <div className='flex flex-col  p-2  bg-white rounded-lg border-2 border-blue-500  shadow-[0_0_1rem_#f5f9fa,0_0_2rem_rgb(39,193,240)] hover:border-yellow-400                                                                            transition-transform duration-300 easa-in-out transform hover:scale-110  '    >
            <FaCss3Alt className='text-sky-500 text-7xl' />

            <span className='mt-1 text-xl text-center text-black font-bold'> Css</span>
          </div>


          <div className='flex flex-col  bg-white rounded-lg  border-2 border-blue-500 p-2  shadow-[0_0_1rem_#f5f9fa,0_0_2rem_rgb(39,193,240)] hover:border-yellow-400                                                                              transition-transform duration-300 easa-in-out transform hover:scale-110 '      >
            < TbBrandJavascript className='text-yellow-400 text-7xl text-center' />
            <span className=' text-xl text-center text-black font-bold'> Javascript</span>
          </div>

          <div className='flex flex-col  bg-white rounded-lg border-2 border-blue-500 p-2  shadow-[0_0_1rem_#f5f9fa,0_0_2rem_rgb(39,193,240)] hover:border-yellow-400                                                                                  transition-transform duration-300 easa-in-out transform hover:scale-110 '     >
            < VscVscode className='text-sky-400 text-7xl text-center' />
            <span className=' mt-0 text-center text-xl text-black font-bold'> VsCode</span>
          </div>

          <div className='flex flex-col  bg-white rounded-lg border-2 border-blue-500 p-2 shadow-[0_0_1rem_#f5f9fa,0_0_2rem_rgb(39,193,240)] hover:border-yellow-400                                                                            transition-transform duration-300 easa-in-out transform hover:scale-110  '    >
            < SiTypescript className='text-yellow-500 text-7xl text-center' />
            <span className='mt-2 text-xl text-center text-black font-bold'> Typescript</span>
          </div>

          
          <div className='flex flex-col p-2 bg-white rounded-lg border-2 border-blue-500  shadow-[0_0_1rem_#f5f9fa,0_0_2rem_rgb(39,193,240)] hover:border-yellow-400                                                                                 transition-transform duration-300 easa-in-out transform hover:scale-110  '    >
          <RiNextjsFill className='text-black text-7xl' />

            <span className='mt-1 text-xl text-center text-black font-bold'> Next.js</span>
          </div>

          <div className='flex flex-col p-2 bg-white rounded-lg border-2 border-blue-500  shadow-[0_0_1rem_#f5f9fa,0_0_2rem_rgb(39,193,240)] hover:border-yellow-400                                                                                            transition-transform duration-300 easa-in-out transform hover:scale-110  '    >
          <SiTailwindcss className='text-sky-500 text-7xl' />

            <span className='mt-1 text-xl text-center text-black font-bold'> Tailwind.css</span>
          </div>
           
          </div>
          
        </div>
  );
};

export default Skills;
