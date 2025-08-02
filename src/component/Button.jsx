import { div } from 'framer-motion/client';
import React from 'react'

export default function Button({ value, onClick, asLink = false, href = '#' }) {

    const ButtonContent = (
        <button
            onClick={onClick}
            className="relative mt-10 px-6 py-2 text-white border-2 rounded-md border-blueColor hover:shadow-customBlue  overflow-hidden group" >
            <span>{value}</span>
            <span
                className="absolute inset-0 bg-gradient-to-r from-blueColor via-transparent to-blueColor
                                                transform scale-x-0 group-hover:scale-x-100 origin-left
                                                transition-transform duration-500 ease-out"/>
        </button>
    );
    if (asLink) {
        return (
            <div>
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                >
                    {ButtonContent}
                </a>
            </div>
        );
    }
    return (
        <div>
            {ButtonContent}
        </div>
    )
}
