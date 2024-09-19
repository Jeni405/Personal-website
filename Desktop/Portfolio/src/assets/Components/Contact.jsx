import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faSquarePhone } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <section className='mt-10 xl:mt-16 px-6 sm:ml-48 lg:ml-56 xl:ml-64'>
        <element name="contact">
            <h2 className='text-3xl lg:text-4xl font-bold border-b-2 border-b-sky-500 w-16'>Contact</h2>
            <p className='py-6 xl:py-8 text-sm lg:text-xl'>Contact me using the below details.</p>
            
                <div className='lg:flex'>
                    <div className='pl-3 lg:px-4 lg:w-full shadow-xl'>
                        <div className='mt-2'>
                            <div className='flex py-3 lg:py-4 group'>
                                <div className='h-12 w-12 mr-3 bg-gray-200 rounded-full grid place-items-center group-hover:bg-sky-500 group-hover:duration-300'>
                                    <FontAwesomeIcon icon={faLocationDot} className='text-xl text-sky-500 group-hover:text-white group-hover:duration-200'/>
                                </div>
                                <div>
                                    <h3 className='text-xl lg:text-2xl font-semibold'>Address</h3>
                                    <p className='text-sm'>19-61, Keezha Kattuvilai, Nagercoil.</p>
                                </div>
                            </div>

                            <div className='flex py-3 lg:py-4 group'>
                                <div className='h-12 w-12 mr-4 bg-gray-200 rounded-full grid place-items-center group-hover:bg-sky-500 group-hover:duration-300'>
                                    <FontAwesomeIcon icon={faSquarePhone} className='text-xl text-sky-500 group-hover:text-white group-hover:duration-200'/>
                                </div>
                                <div>
                                <h3 className='text-xl lg:text-2xl font-semibold'>Call Us</h3>
                                    <p className='text-sm'>+91 8531982384</p>
                                </div>
                            </div>

                            <div className='flex py-3 lg:py-4 group'>
                                <div className='h-12 w-12 mr-4 bg-gray-200 rounded-full grid place-items-center group-hover:bg-sky-500 group-hover:duration-300'>
                                    <FontAwesomeIcon icon={faEnvelope} className='text-xl text-sky-500 group-hover:text-white group-hover:duration-200'/>
                                </div>
                                <div>
                                <h3 className='text-xl lg:text-2xl font-semibold'>Email Us</h3>
                                    <p className='text-sm'>avrj2020@gmail.com</p>
                                </div>
                            </div>

                            <div className='py-3'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.0223740243077!2d77.37726990991735!3d8.200499891797318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0455562086a4b5%3A0xbd678f6aee9ace8f!2sRexKnar%20Creative%20Solutions!5e0!3m2!1sen!2sin!4v1718787365973!5m2!1sen!2sin" className='w-full pr-3 h-40 lg:h-52'/>
                            </div>

                        </div>
                    </div>

                    <div className='mt-10 lg:mt-0 px-6 py-6 lg:pt-2 lg:w-full lg:text-xl shadow-xl'>
                        <form action="forms/contact.js" method="post" class="email-form">
                            <div className='lg:px-4'>
                                
                                <div className='lg:py-2'>
                                    <label for="name-field" className=''>Your Name</label>
                                    <input type="text" name="name" id="name-field" className='shadow border border-gray-300 rounded w-full py-1 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500'/>
                                </div>

                                <div className='lg:py-2'>
                                    <label for="email-field" >Your Email</label>
                                    <input type="email" name="email" id="email-field" className='shadow border border-gray-300 rounded w-full py-1 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500'/>
                                </div>

                                <div className='lg:py-2'>
                                    <label for="subject-field" >Subject</label>
                                    <input type="text" name="subject" id="subject-field" className='shadow border border-gray-300 rounded w-full py-1 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500'/>
                                </div>

                                <div className='lg:py-2'>
                                    <label for="message-field" >Message</label>
                                    <textarea className='shadow border border-gray-300 rounded w-full h-28 lg:h-32 py-2 px-3 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500'>
                                    </textarea>
                                </div>

                                <div className='grid place-items-center mt-5 lg:my-3'>
                                <div className='h-8 lg:h-11 xl:h-12 w-32 lg:w-44 bg-sky-500 rounded-full grid place-items-center'>
                                    <button type="submit" className='text-sm lg:text-xl text-white'>Send Message</button>
                                </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </element>
        </section>
  )
}

export default Contact