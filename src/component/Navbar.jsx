import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <nav className="flex justify-between top-0 left-0 right-0 bg-primary z-[1002] text-textColor border-2 rounded-lg text-lg font-thin shadow p-4 md:p-8 mx-4 md:mx-24 my-4 md:my-7 uppercase fixed">
                <div>
                    <h1 className="">Semav Adnan MH</h1>
                </div>
                <div className="hidden md:flex gap-6">
                    <a className="hover:text-hoverColor" href="#hero">Home</a>
                    <a className="hover:text-hoverColor" href="#about">About Me</a>
                    <a className="hover:text-hoverColor" href="#projects">My Projects</a>
                    <a className="hover:text-hoverColor" href="#contact">Contact</a>
                </div>
                <div className="md:hidden ">
                    <FontAwesomeIcon icon={faBars}
                        className="text-2xl cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)} />
                </div>

            </nav>
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[1001] md:hidden"
                    onClick={() => setMenuOpen(false)}
                />
            )}
            <div className={`md:hidden absolute flex flex-col items-center gap-4 z-[1002] top-[55%] text-textColor bg-blureBackground shadow-md 
                mx-4 rounded-lg transition-all duration-500 overflow-hidden  w-[93%] left-[0%] 
                 ${menuOpen ? 'max-h-96 py-4  border-2 ' : 'max-h-0 py-0'
                }`}>
                <a onClick={() => setMenuOpen(false)} className="hover:text-hoverColor" href="#home">Home</a>
                <a onClick={() => setMenuOpen(false)} className="hover:text-hoverColor" href="#about">About Me</a>
                <a onClick={() => setMenuOpen(false)} className="hover:text-hoverColor" href="#projects">My Projects</a>
                <a onClick={() => setMenuOpen(false)} className="hover:text-hoverColor" href="#contact">Contact</a>
            </div>

        </>

    )
}