import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import ftmonetor from '../assets/icons/fendM.png';
import mostaql from '../assets/icons/mostaql.png';


export default function Footer() {
  return (
    <div className='my-20 text-center  text-textColor ' id='contact'>
      <div>
        <div>
          <p className='text-2xl md:text-4xl gradient pb-4'>DO YOU HAVE A PROJECT TO DISCUSS ?</p>
          <p className=' text-md md:text-2xl'>GET IN TOYCH </p>
        </div>
        <div>
          <p className='py-5 text-lg'>Social Media Accounts </p>
          <div className='flex justify-center gap-6 text-2xl'>
            <a href="https://wa.me/963992589577" target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faWhatsapp} className='hover:text-hoverColor  w-8 transition-transform duration-300 hover:-translate-y-1 hover:scale-110 ' />
            </a>
            <a href="https://github.com/Semavmohamed/" target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faGithub} className='hover:text-hoverColor   w-8 transition-transform duration-300 hover:-translate-y-1 hover:scale-110 ' />
            </a>
            <a href="https://www.linkedin.com/in/simav-mehamed/" target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faLinkedin} className='hover:text-hoverColor   w-8 transition-transform duration-300 hover:-translate-y-1 hover:scale-110 ' />
            </a>
            <a href="https://www.frontendmentor.io/profile/Semavmohamed" target='_blank' rel='noopener noreferrer'>
              <img src={ftmonetor} className='shadow-boxShadow   transition-transform duration-300 hover:-translate-y-1 hover:scale-110 ' title='FrontEnd Monetor Account' />
            </a>
            <a href="https://mostaql.com/u/semav_mohamed/portfolio" target='_blank' rel='noopener noreferrer'>
              <img src={mostaql} className='hover:text-hoverColor  w-8 transition-transform duration-300 hover:-translate-y-1 hover:scale-110 ' title='Mostaql Account' />
            </a>
            
          </div>
        </div>

      </div>
    </div>
  )
}
