import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faCubesStacked, faGears } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Services = () => {

  return (
    <section className='mt-10 lg:mt-20 px-6 sm:ml-48 lg:ml-56 xl:ml-64'> 
        <element name="services">
            <h2 className='text-3xl lg:text-4xl font-bold border-b-2 border-b-sky-500 w-16'>Services</h2>
            <p className='py-6 xl:py-10 text-sm lg:text-xl'>The various services offered by me are below</p>
            
                <div className='sm:w-3/4 lg:w-full lg:flex'>
                    <div className='p-3 lg:p-2 lg:w-full group hover:cursor-pointer'>
                            <Link to="/servicedetails"><h4 className='flex text-xl xl:text-2xl font-bold group-hover:text-sky-500 group-hover:duration-500'><div className='h-12 w-12 mr-3 grid place-items-center bg-sky-500 rounded-full border border-sky-500 group-hover:bg-white group-hover:duration-500'><FontAwesomeIcon icon={faBriefcase} className='text-white group-hover:text-sky-500 group-hover:duration-500' /></div><span className='pt-2'> Web Design</span></h4>
                            <p className='mt-3 xl:mt-4 text-sm xl:text-xl text-center'>Web design encompasses many different skills and
                                 disciplines in the production and maintenance of websites. 
                                 The different areas of web design include web graphic design;
                                 user interface design (UI design).</p>
                            </Link>
                    </div>

                    <div className='p-3 lg:p-2 lg:w-full group hover:cursor-pointer'>
                            <Link to="/servicedetails"><h4 className='flex text-xl xl:text-2xl font-bold group-hover:text-sky-500 group-hover:duration-500'><div className='h-12 w-12 mr-3 grid place-items-center bg-sky-500 rounded-full border border-sky-500 group-hover:bg-white group-hover:duration-500'><FontAwesomeIcon icon={faGears} className='text-white group-hover:text-sky-500 group-hover:duration-500' /></div><span className='pt-2'> UI/UX Development</span></h4>
                            <p className='mt-3 text-sm xl:text-xl text-center'>UI/UX development involves combining elements of 
                                graphic design, psychology, and engineering to create a product that 
                                looks good and is easy and enjoyable to use.
                            </p>
                            </Link>
                    </div>

                    <div className='p-3 lg:p-2 lg:w-full group hover:cursor-pointer'>
                            <Link to="/servicedetails"><h4 className='flex text-xl xl:text-2xl font-bold group-hover:text-sky-500 group-hover:duration-500'><div className='h-11 w-12 mr-3 grid place-items-center bg-sky-500 rounded-full border border-sky-500 group-hover:bg-white group-hover:duration-500'><FontAwesomeIcon icon={faCubesStacked} className='text-white group-hover:text-sky-500 group-hover:duration-500' /></div><span> Full Stack Development</span></h4>
                            <p className='mt-3 text-sm xl:text-xl text-center'>Software development, 
                                including both the front-end and back-end development. The front end consists 
                                of the user interface and the back end handles the business logic and 
                                application workflows that run behind the scenes.
                            </p>
                            </Link>
                    </div>
            </div>
            </element>
        </section>
  )
}

export default Services