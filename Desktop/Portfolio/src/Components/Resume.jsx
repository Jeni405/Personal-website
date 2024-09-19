import React from 'react'

const Resume = () => {
  return (
    <section className='mt-10 xl:mt-20 px-6 sm:ml-48 lg:ml-56 xl:ml-64'>
        <element name="resume">
        <div>
        <h2 className='text-3xl lg:text-4xl font-bold border-b-2 border-b-sky-500 w-16'>Resume</h2>
        </div>

        <div className='mt-10 xl:mt-12'>
            <h3 className='text-xl lg:text-2xl font-bold'>Summary</h3>
                    

            <div className='border-2 border-sky-500 w-4 h-4 rounded-full ml-3 mt-5'></div>
                <div className='text-sm lg:text-xl ml-5 pl-5 border-l-2 border-l-sky-500'>
                    <h4 className='text-xl lg:text-2xl text-gray-600 pb-1'>JENISHA</h4>
                        <p className='text-gray-800'>Innovative and deadline-driven Web Developer with 2 years of experience.</p>
                            <ul className='text-gray-900 list-disc pl-5 py-2'>
                                <li className='pt-2'>Nagercoil</li>
                                <li className='pt-2'>+91 8531982384</li>
                                <li className='pt-2'>avrj2020@gmail.com</li>
                            </ul>
                </div>
                    

            <h3 className='text-2xl font-bold mt-5'>Education</h3>
                <div className='border-2 border-sky-500 w-4 h-4 rounded-full ml-3 mt-5'></div>
                    <div className='text-sm lg:text-xl ml-5 pl-5 border-l-2 border-l-sky-500'>
                        <h4 className='text-xl lg:text-2xl text-gray-700 pb-1'>B.Tech Information Technology</h4>
                            <h5 className='text-gray-900 pl-5 py-2'>2021 - present</h5>
                            <p className='text-gray-800 pt-2'>St.Xavier's Catholic College Of Engineering, Nagercoil</p>
                        </div>
                    </div>

                    
            <h3 className='text-2xl font-bold mt-5'>Professional Experience</h3>
                <div className='border-2 border-sky-500 w-4 h-4 rounded-full ml-3 mt-5'></div>
                    <div className='text-sm lg:text-xl ml-5 pl-5 border-l-2 border-l-sky-500'>
                        <h4 className='text-xl lg:text-2xl text-gray-700 pb-1'>Web Developer Intern</h4>
                        <h5 className='text-gray-900 pl-5 py-2'>2024</h5>
                        <p className='text-gray-800 pt-2'>Rexknar Creative Solutions, Chunkankadai.</p>
                            <ul className='text-gray-900 list-disc pl-5 py-2'>
                                <li className='pt-2'>Created various websites</li>
                                <li className='pt-2'>Completed the tasks assigned to me while developing a large application.</li>
                                <li className='pt-2'>Created 4+ design presentations and posters.</li>
                            </ul>
                    </div>
                </element>
                </section>
  )
}

export default Resume