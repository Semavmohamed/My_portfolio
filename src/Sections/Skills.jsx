import React from 'react';
import php from '../assets/icons/web.png';
import html from '../assets/icons/html5.png';
import js from '../assets/icons/js.png';
import reactIcon from '../assets/icons/atom.png';
import bootstrap from '../assets/icons/bootstrap.png';
import mysql from '../assets/icons/programing.png';
import github from '../assets/icons/social.png';
import tailwind from '../assets/icons/tailwind.png';
import css from '../assets/icons/text.png';

export default function () {
    const iconsSkills = [{ icon: php },
    { icon: reactIcon },
    { icon: html },
    { icon: js },
    { icon: bootstrap },
    { icon: github },
    { icon: tailwind },
    { icon: css },
    { icon: mysql }]
    return (
        <div>
            <div className=' my-20 text-center border-b-2 pb-32 ' >
                <div className='gradient text-3xl md:text-5xl mb-8'>SKILLS</div>
                <div>
                    <p className='text-2xl md:text-3xl text-textColor'>The skills, tools and technologies I use</p>
                    <div className='flex flex-wrap justify-center gap-6 mt-10 mx-auto'>
                        {iconsSkills.map((icons, index) => (
                            <img key={index} className='w-20 ' src={icons.icon} alt={`SKILLs ${index}`} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
