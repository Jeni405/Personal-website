import React from 'react'
import programmer from "./img/programmer.jpg"
import jenisha from "./img/Jenisha.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faBars } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <main className='sm:ml-48 lg:ml-56 xl:ml-64'>
        
        <element name="home">
            <div className='relative text-white text-center'>
                <img src={programmer} alt="" className='brightness-50 h-32 sm:h-screen w-full object-cover absolute -z-10 '/>
                
            <div className='py-6 sm:pt-44 sm:text-left sm:pl-6 xl:py-60 xl:px-8 z-50'>
                
                <h2 className='font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl'>Jenisha</h2>
                <p className='py-2 text-xl sm:text-2xl'>I'm a <span className='text-xl lg:text-3xl font-semibold border-b border-b-sky-500 text-decoration-sky-500'>Web Developer</span></p>
            </div>
            </div>
        </element>
    
        <section className='pt-8 sm:mt-80 xl:mt-0 xl:pt-32'>
            
            <element name="about">
            <div className='px-5 sm:px-6 text-black'>
                <h2 className='text-3xl lg:text-4xl font-bold border-b-2 border-b-sky-500 w-16'>About</h2>
                <p className='py-6 text-sm sm:text-xl'>I'm a passionate web developer. 
                    I love programming and creating websites.</p>
            </div>

            <div className='xl:pt-6'>
                <div className='sm:flex'>
                    <div className='px-5 lg:px-8 sm:px-6 sm:py-4 sm:w-full lg:w-1/2'>
                        <img src={jenisha} />
                    </div>
                    <div className='px-5 sm:px-2 pt-5 sm:pt-0 sm:w-full'>
                        <h2 className='text-2xl sm:text-3xl font-bold py-2'>Web developer</h2>
                        <p className='text-sm xl:text-xl pt-4'>I'm very passionate in creating websites. I have learned the 
                            frontend languages HTML, CSS, JavaScript. I can also create
                            websites and web applications using React.
                        </p>
                        <div className='pt-6 xl:pt-8 px-3 lg:px-0 max-lg:block lg:flex xl:text-xl'>
                            <div className=''>
                                <ul>
                                    <li className='pb-3'><FontAwesomeIcon icon={faChevronRight} className='text-sky-500 pr-2'/> <strong>Birthday:</strong> <span>07 December 2003</span> </li>
                                    <li className='pb-3'><FontAwesomeIcon icon={faChevronRight} className='text-sky-500 pr-2'/> <strong>Website:</strong> <span>www.jenisha.com</span> </li>
                                    <li className='pb-3'><FontAwesomeIcon icon={faChevronRight} className='text-sky-500 pr-2'/> <strong>Phone:</strong> <span>+91 8531982384</span> </li>
                                    <li className='pb-3'><FontAwesomeIcon icon={faChevronRight} className='text-sky-500 pr-2'/> <strong>City:</strong> <span>Nagercoil</span> </li>
                                </ul>
                            </div>
                            <div className='lg:pl-2 xl:pl-4'>
                                <ul>
                                    <li className='pb-3'><FontAwesomeIcon icon={faChevronRight} className='text-sky-500 pr-2'/> <strong>Age:</strong> <span>20</span> </li>
                                    <li className='pb-3'><FontAwesomeIcon icon={faChevronRight} className='text-sky-500 pr-2'/> <strong>Degree:</strong> <span>B.Tech</span> </li>
                                    <li className='pb-3'><FontAwesomeIcon icon={faChevronRight} className='text-sky-500 pr-2'/> <strong>Email:</strong> <span>avrj2020@gmail.com</span> </li>
                                    <li className='pb-3'><FontAwesomeIcon icon={faChevronRight} className='text-sky-500 pr-2'/> <strong>Freelance:</strong> <span>available</span> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                        <div className='pt-6 px-3 sm:flex sm:pl-4 hidden max-xl:hidden'>
                            <div className='sm:text-sm sm:w-1/2 sm:pl-3 hidden max-sm:block'>
                                <ul>
                                    <li className='pb-3'><FontAwesomeIcon icon={faChevronRight} className='text-sky-500 pr-2'/> <strong>Birthday:</strong> <span>07 December 2003</span> </li>
                                    <li className='pb-3'><FontAwesomeIcon icon={faChevronRight} className='text-sky-500 pr-2'/> <strong>Website:</strong> <span>www.jenisha.com</span> </li>
                                    <li className='pb-3'><FontAwesomeIcon icon={faChevronRight} className='text-sky-500 pr-2'/> <strong>Phone:</strong> <span>+91 8531982384</span> </li>
                                    <li className='pb-3'><FontAwesomeIcon icon={faChevronRight} className='text-sky-500 pr-2'/> <strong>City:</strong> <span>Nagercoil</span> </li>
                                </ul>
                            </div>
                            <div className='sm:text-sm sm:pl-3 hidden max-sm-block'>
                                <ul>
                                    <li className='pb-3'><FontAwesomeIcon icon={faChevronRight} className='text-sky-500 pr-2'/> <strong>Age:</strong> <span>20</span> </li>
                                    <li className='pb-3'><FontAwesomeIcon icon={faChevronRight} className='text-sky-500 pr-2'/> <strong>Degree:</strong> <span>B.Tech</span> </li>
                                    <li className='pb-3'><FontAwesomeIcon icon={faChevronRight} className='text-sky-500 pr-2'/> <strong>Email:</strong> <span>avrj2020@gmail.com</span> </li>
                                    <li className='pb-3'><FontAwesomeIcon icon={faChevronRight} className='text-sky-500 pr-2'/> <strong>Freelance:</strong> <span>available</span> </li>
                                </ul>
                            </div>
                        </div>
                    
                
            </div>
            
        </element>
        </section>
        
        <section className='m-6 lg:mt-16 bg-sky-100'>
            <div className='py-10 px-4'>
                <h2 className='text-2xl lg:text-4xl font-bold border-b-2 border-b-sky-500 w-16'>Skills</h2>
                <p className='py-6 text-sm lg:text-xl'>The following are my skills </p>
                
                        <div className='p-3 lg:w-1/2 lg:py-4'>
                            <span className='pb-1 flex justify-between'><span className='text-sm'>HTML</span><span className='text-sm'>100%</span></span>
                            <div className='h-2 lg:h-3 bg-gray-300'>
                                <div className='h-2 lg:h-3 w-full bg-sky-500'></div>
                            </div>
                        </div>

                        <div className='p-3 lg:w-1/2 lg:py-4'>
                            <span className='pb-1 flex justify-between'><span className='text-sm'>CSS</span><span className='text-sm'>80%</span></span>
                            <div className='h-2 lg:h-3 bg-gray-300'>
                                <div className='h-2 lg:h-3 w-5/6 bg-sky-500'></div>
                            </div>
                        </div>

                        <div className='p-3 lg:w-1/2 lg:py-4'>
                            <span className='pb-1 flex justify-between'><span className='text-sm'>JavaScript</span><span className='text-sm'>75%</span></span>
                            <div className='h-2 lg:h-3 bg-gray-300'>
                                <div className='h-2 lg:h-3 w-3/4 bg-sky-500'></div>
                            </div>
                        </div>

                    </div>
        </section>

    </main>
  )
}

export default About