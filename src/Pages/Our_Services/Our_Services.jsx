import React, { useRef } from 'react'
import Computer1 from '../../Assets/Computer1.jpg'
import Computer2 from '../../Assets/Computer2.jpg'
import ISO from '../../Assets/ISO.jpg'
import ComputerImage from '../../Assets/Computer_Image.jpg'
import { motion } from 'framer-motion'

const Our_Services = () => {
    const ServiceArray = [{
        title: "Global ISO Certification",
        desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        img: ISO
    }, {
        title: "Quality Education",
        desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        img: ComputerImage
    }, {
        title: "Certification Verification",
        desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        img: Computer1
    }, {
        title: "Global ISO Certification",
        desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        img: Computer2
    },]

    const ref = useRef(null);
    return (
        <div className='bg-[#34495e]'>
            <h4 className='text-white text-center text-2xl m-3'>Our Best Services</h4>
            <div className=' grid grid-cols-12 place-content-center place-items-center' ref={ref}>
                {
                    ServiceArray.map((ele, ind) => {
                        return <motion.div drag dragConstraints={ref} className="max-w-sm col-span-12 m-4  md:col-span-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={ind}>
                            <a href="#">
                                <img className="rounded-t-lg w-full" src={ele.img} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ele.title}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ele.desc}</p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}

export default Our_Services
