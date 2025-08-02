import React from 'react'
import personal from '../assets/images/img1-removebg-preview.png'
import MainButton from '../component/Button';
import Services from '../Sections/services';
import Skills from '../Sections/Skills';
import ProjectsSection from './ProjectCard';
import Projects from '../Sections/Projects';
import About from '../Sections/About';

export default function Hero() {
    return (
        <div className=' md:my-40 md:mx-24'>
            <div className='block md:flex md:items-center md:justify-between border-b-2 py-20 gap-10 ' id='home'>
                <div className='text-textColor text-center md:text-left mb-7 md:w-1/2'>
                    <div className='text-3xl my-11 md:text-8xl gradient md:mb-20 md:my-0 '>
                        <p className='mb-7'>FULLSTACK</p>
                        <p>DEVELOPER</p>
                    </div>
                    <div className='px-5 md:px-0'>
                        <p className='text-2xl'>Hi there! I’m Simav Adnan Mohamed  <span className='text-hoverColor'>web-developer</span> with a passion for creating beautiful and responsive websites.</p>
                        <MainButton value='VIEW MY WORK' onClick={() => {
                            const section = document.getElementById('projects');
                            if (section) {
                                section.scrollIntoView({ behavior: 'smooth' })
                            }
                        }} />
                    </div>
                </div>
                <div className='relative w-full md:w-1/2 flex justify-center items-center'>
                    <div className="absolute w-96 h-96 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500
                  rounded-full blur-[100px] opacity-30 z-0 pointer-events-none" />
                    <img className='md:relative max-w-[65%] md:max-w-full z-10 max-h-[500px] object-contain -top-[9%]' src={personal} alt="myPhoto" />
                </div>
            </div>

            {/* the services  */}
            <Services />
            {/*Skills*/}
            <Skills />
            {/* Projects */}
            <Projects />
            {/** About meeee*/}
            <About />
        </div >

    )
}
