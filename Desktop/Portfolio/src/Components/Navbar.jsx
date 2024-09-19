import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faUser, faFile, faBriefcase, faEnvelope, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

import { Link, Element } from 'react-scroll'
import Jenisha from "../Components/img/Jenisha.jpg";


const Navbar = () => {
    const [show, setShow] = useState(true);

    const handleShow = () => {
        setShow(!show);
    };

    return (
        <>
            <div onClick={handleShow} className='sm:hidden block px-3 py-2 text-white z-50 fixed'>
                {show ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faXmark} />}
            </div>

            <header className={`overflow-y-scroll z-40 bg-black fixed top-0 left-0 bottom-0 py-0 px-8 sm:w-48 lg:w-56 xl:w-64 ${show ? 'hidden' : 'block'} sm:block`}>

                <div className='lg:flex lg:justify-center flex justify-center'>
                    <img src={Jenisha} alt="" className='mt-6 block h-28 lg:h-36 w-28 lg:w-36 object-cover rounded-full border-solid border-4 border-gray-600' />
                </div>

                <div className='mt-3 lg:mt-4'>
                    <h1 className='text-white text-center font-sans font-semibold text-2xl lg:text-4xl'>Jenisha</h1>
                </div>

                <div className='flex justify-center p-2 text-xl lg:text-2xl lg:pt-3'>
                    <a href='#' className='bg-gray-900 hover:bg-sky-500 rounded-full h-9 lg:h-10 w-9 lg:w-10 m-2 flex items-center justify-center relative'><FontAwesomeIcon icon={faLinkedin} className='text-white p-5' /></a>
                    <a href='#' className='bg-gray-900 hover:bg-sky-500 rounded-full h-9 lg:h-10 w-9 lg:w-10 m-2 flex items-center justify-center relative'><FontAwesomeIcon icon={faInstagram} className='text-white p-5' /></a>
                    <a href='#' className='bg-gray-900 hover:bg-sky-500 rounded-full h-9 lg:h-10 w-9 lg:w-10 m-2 flex items-center justify-center relative'><FontAwesomeIcon icon={faGithub} className='text-white p-5' /></a>
                </div>

                <nav className='text-white text-xl xl:pl-4 lg:text-2xl py-2 lg:py-4'>
                    <ul>
                        <li className='py-3 lg:py-4 group'><Link to="home" smooth={true} duration={800} className="cursor-pointer"><FontAwesomeIcon icon={faHouse} className='h-6 w-6 mr-2 group-hover:text-sky-500' /> Home</Link></li>
                        <li className='py-3 lg:py-4 group'><Link to="about" smooth={true} duration={800} className="cursor-pointer"><FontAwesomeIcon icon={faUser} className='h-6 w-6 mr-2 group-hover:text-sky-500' /> About</Link></li>
                        <li className='py-3 lg:py-4 group'><Link to="resume" smooth={true} duration={800} className="cursor-pointer"><FontAwesomeIcon icon={faFile} className='h-6 w-6 mr-2 group-hover:text-sky-500' /> Resume</Link></li>
                        <li className='py-3 lg:py-4 group'><Link to="services" smooth={true} duration={800} className="cursor-pointer"><FontAwesomeIcon icon={faBriefcase} className='h-6 w-6 mr-2 group-hover:text-sky-500' /> Services</Link></li>
                        <li className='py-3 lg:py-4 group'><Link to="contact" smooth={true} duration={800} className="cursor-pointer"><FontAwesomeIcon icon={faEnvelope} className='h-6 w-6 mr-2 group-hover:text-sky-500' /> Contact</Link></li>
                    </ul>
                </nav>


            </header>

        </>
    )
}

export default Navbar