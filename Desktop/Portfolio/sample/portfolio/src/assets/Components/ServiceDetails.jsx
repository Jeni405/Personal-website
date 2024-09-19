import React from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

import Web from './img/Webdesign.jpg'
import UiUx from './img/UiUx.jpg'
import Fullstack from './img/Fullstack.png'

const ServiceDetails = () => {
  return (
    <div>
        
        <header className='h-28 lg:h-32 w-full pt-6 lg:pt-0 bg-sky-500 sm:flex justify-between place-items-center px-5'>
            <h1 className='text-white text-3xl lg:text-4xl text-center font-semibold'>Service Details</h1>
            <p className='pt-6 lg:pt-20 text-white text-sm xl:text-xl text-end'><Link to="/home">Home </Link><span>/ Service details</span></p>
        </header>
        <section className='px-6 lg:px-8'>
            <div className='pt-20'>
            <h2 className='text-4xl font-bold border-b-2 flex justify-center pb-4 border-b-sky-500 '>Web Design</h2>
            <div className='pt-10 px-2 lg:flex'>
                
            <div className='py-3 sm:pb-6 lg:w-full sm:flex sm:justify-center'>
                <img src={Web} />
            </div>
            <div className='text-center lg:w-full lg:py-6'>
                
                <p className='text-sm xl:text-xl'>Web design encompasses many different skills and
                 disciplines in the production and maintenance of websites. 
                 The different areas of web design include web graphic design;
                 user interface design (UI design). Web design is the process of 
                 creating visually appealing and user-friendly websites. It encompasses 
                 various aspects, including layout, content production, and graphic design. 
                 A well-designed website ensures a positive user experience by being easy to 
                 navigate and responsive across different devices.</p>
            </div>
            </div>
                <h3 className='text-3xl font-semibold pt-16 border-b-2 border-b-sky-500 py-2 w-32'>Overview</h3>
                <ol className='list-none py-10 sm:flex lg:block lg:pl-6'>
                    <div className='lg:flex'>
                    <li className='sm:h-40 lg:w-full'><span className='text-xl xl:text-2xl font-bold'>Custom Website Design:</span>
                        <ul className='list-disc px-9 py-4 text-sm xl:text-xl'>
                            <li>Tailored design to match your brand identity.</li>
                            <li>Unique layouts, graphics, and user interfaces.</li>
                        </ul>
                    </li>
                    <li className='sm:h-40 lg:w-full'><span className='text-xl xl:text-2xl font-bold'>Responsive Design:</span>
                        <ul className='list-disc px-9 py-4 text-sm xl:text-xl'>
                            <li>Websites that work seamlessly on all devices (desktops, tablets, and mobile phones).</li>
                            <li>Ensures a consistent user experience.</li>
                        </ul>
                        </li>
                    <li className='sm:h-40 lg:w-full'><span className='text-xl xl:text-2xl font-bold'>User Experience (UX) Design:</span>
                        <ul className='list-disc px-9 py-4 text-sm xl:text-xl'>
                            <li>Focus on creating an intuitive and engaging user experience.</li>
                            <li>Includes user research, wireframing, prototyping, and usability testing.</li>
                        </ul>
                        </li>
                    </div>
                    <div className='sm:pl-6 lg:pl-0 lg:flex xl:pt-10'>
                    <li className='sm:h-40 lg:w-full'><span className='text-xl xl:text-2xl font-bold'>User Interface (UI) Design:</span>
                        <ul className='list-disc px-9 py-4 text-sm xl:text-xl'>
                            <li>Designing visually appealing interfaces.</li>
                            <li>Focus on the aesthetics and interactive elements of a website.</li>
                        </ul>
                        </li>
                    <li className='sm:h-40 lg:w-full'><span className='text-xl xl:text-2xl font-bold'>E-commerce Website Design:</span>
                        <ul className='list-disc px-9 py-4 text-sm xl:text-xl'>
                            <li>Building online stores with features like product catalogs, shopping carts, and payment gateways.</li>
                            <li>Ensuring secure and efficient transactions.</li>
                        </ul>
                        </li>
                    <li className='sm:h-40 lg:w-full'><span className='text-xl xl:text-2xl font-bold'>Website Redesign:</span>
                        <ul className='list-disc px-9 py-4 text-sm xl:text-xl'>
                            <li>Updating and improving existing websites.</li>
                            <li>Modernizing the look and feel, and enhancing functionality.</li>
                        </ul>
                        </li>
                    </div>
                    
                </ol>
            </div>
        </section>

        <section className='px-6 lg:px-8'>
            <div className='pt-6 xl:pt-20'>
            <h2 className='text-4xl font-bold border-b-2 flex text-center sm:justify-center pb-4 border-b-sky-500 '>UI/UX Development</h2>
            <div className='pt-10 px-2 lg:flex'>
                
            <div className='py-3 lg:w-full sm:flex sm:justify-center'>
                <img src={UiUx} />
            </div>
            <div className='text-center lg:w-full'>
                <p className='text-sm xl:text-xl pt-5'>UI/UX development involves combining elements of 
                graphic design, psychology, and engineering to create a product that 
                looks good and is easy and enjoyable to use.UI development focuses on 
                the aesthetics and interactive aspects of a digital product. It involves 
                designing the look and feel of an application, ensuring it is visually 
                appealing and intuitive for users.UX development is concerned with the 
                overall experience users have while interacting with a product. It aims 
                to create products that are efficient, enjoyable, and meet users' needs.</p>
                </div>
            </div>
                <h3 className='text-3xl font-semibold pt-16 border-b-2 border-b-sky-500 py-2 w-32'>Overview</h3>
                <ol className='list-none py-10'>
                    <div className='sm:flex'>
                    <div className=''>
                    <li className=''><span className='text-xl xl:text-2xl font-bold'>UI Development:</span>
                        <ul className='list-disc pl-9 py-4 text-sm xl:text-xl'>
                            <li className='py-2'><span className='font-bold'>Visual Design:</span> Focuses on aesthetics, including colors, typography, and imagery.</li>
                            <li className='py-2'><span className='font-bold'>Layout and Spacing:</span> Organizes content logically and clearly.</li>
                            <li className='py-2'><span className='font-bold'>Interactive Elements:</span> Designs buttons, sliders, and other interactive components.</li>
                            <li className='py-2'><span className='font-bold'>Brand Consistency:</span> Ensures the visual style aligns with the brand.</li>
                        </ul>
                    </li>
                    </div>
                    
                    <div className='sm:pl-6'>
                    <li className='pt-4 sm:pt-0'><span className='text-xl xl:text-2xl font-bold'>UX Development:</span>
                        <ul className='list-disc px-9 py-4 text-sm xl:text-xl'>
                            <li className='py-2'><span className='font-bold'>User Research:</span> Gathers insights into user needs and behaviors.</li>
                            <li className='py-2'><span className='font-bold'>Information Architecture:</span> Structures content for easy navigation.</li>
                            <li className='py-2'><span className='font-bold'>Wireframing and Prototyping:</span> Outlines and tests product structures and interactions.</li>
                            <li className='py-2'><span className='font-bold'>Usability Testing:</span> Identifies and fixes issues through user feedback.</li>
                        </ul>
                    </li>
                    </div>
                    </div>
                </ol>
            </div>
        </section>

        <section className='px-6 lg:px-8 xl:px-12'>
            <div className='pt-6'>
            <h2 className='text-4xl font-bold border-b-2 flex text-center sm:justify-center pb-4 border-b-sky-500 '>Full Stack Development</h2>
            <div className='pt-10 px-2 lg:flex'>
                
            <div className='py-3 lg:w-full sm:flex sm:justify-center'>
                <img src={Fullstack} />
            </div>
            <div className='text-center lg:w-full lg:pt-4'>
                <p className='text-sm xl:text-xl pt-5'>The complete process of application software development, 
                including both the front-end and back-end development. The front end consists 
                of the user interface and the back end handles the business logic and 
                application workflows that run behind the scenes.A full stack developer 
                has the skills to handle all aspects of development, from creating visually 
                appealing interfaces to managing databases and server-side logic.</p>
                </div>
            </div>
            <h3 className='text-3xl font-semibold pt-16 border-b-2 border-b-sky-500 py-2 w-32'>Overview</h3>
                <ol className='list-none py-10'>
                    <div className='lg:flex'>
                    <div className='lg:w-full'>
                    <li className=''><span className='text-xl xl:text-2xl font-bold'>Front-End Development:</span>
                        <ul className='pl-3 py-4 text-sm'>
                            <li className='py-2 xl:text-xl'><span className='font-bold'>Technologies:</span> HTML, CSS, JavaScript, and front-end frameworks like React, Angular, or Vue.js.</li>
                            <li className='py-2 xl:text-xl'><span className='font-bold'>Responsibilities:</span> 
                            <ul className='list-disc pl-6 py-3 xl:text-xl'>
                                <li className='py-2'>Designing and implementing the user interface (UI).</li>
                                <li className='py-2'>Ensuring responsive design for various devices.</li>
                                <li className='py-2'>Enhancing user experience (UX) with smooth navigation and interactive elements.</li>
                            </ul>
                            </li>
                        </ul>
                    </li>
                    </div>
                    
                    <div className='lg:w-full xl:pl-6'>
                    <li className=''><span className='text-xl xl:text-2xl font-bold'>Back-End Development:</span>
                        <ul className='pl-3 py-4 text-sm'>
                            <li className='py-2 xl:text-xl'><span className='font-bold'>Technologies:</span> Server-side languages like Node.js, Python, Ruby, Java, or PHP; databases like MySQL, PostgreSQL, MongoDB, or Firebase.</li>
                            <li className='py-2 xl:text-xl'><span className='font-bold'>Responsibilities:</span> 
                            <ul className='list-disc pl-6 py-3 xl:text-xl'>
                                <li className='py-2'>Developing server-side logic and APIs.</li>
                                <li className='py-2'>Managing databases and ensuring data integrity.</li>
                                <li className='py-2'>Handling user authentication and authorization.</li>
                            </ul>
                            </li>
                        </ul>
                    </li>
                    </div>
                    </div>
                </ol>
            </div>
        </section>
        
        <ScrollToTop/>
    </div>
  )
}

export default ServiceDetails