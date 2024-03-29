import React from 'react'
import "./Frenchise.css"
import ComputerCenter from '../../Assets/Computer_Center_Image.jpg'
const Frenchise = () => {
    const frenchise = [0, 1, 2, 3];
    return (
        <div className='bg-[#40678d] min-h-screen'>
            <h3 className=' text-center font-extrabold text-5xl text-white'>Our New Frenchise</h3>
            <div className=" min-h-screen">
                <div className="max-w-screen-xl mx-auto px-4 pt-16 pb-4">
                    <div className="flex flex-col flex-wrap md:flex-row md:-mx-2">
                        {
                            frenchise.map((ele, ind) => {
                                return <div key={ind} className="w-full md:w-1/2 lg:w-1/4 mb-4 lg:mb-0">
                                    <a href="#" className="h-72 md:h-96 block group relative mx-2 overflow-hidden shadow-lg">
                                        <img src={ComputerCenter} className="absolute z-0 object-cover w-full h-72 md:h-96 transform group-hover:scale-150" />
                                        <div className="absolute gradient transition duration-300 group-hover:bg-black group-hover:opacity-90 w-full h-72 md:h-96 z-10"></div>
                                        <div className="absolute left-0 right-0 bottom-0 p-6 z-30 transform translate-y-1/2 transition duration-300 h-full group-hover:translate-y-0 delay-100">
                                            <div className="h-1/2 relative">
                                                <div className="absolute bottom-0">
                                                    <h2 className="font-bold text-white leading-tight transition duration-300 text-xl pb-6 group-hover:underline">Facebook and Instagram encryption plans delayed by Meta until 2023</h2>
                                                </div>
                                            </div>
                                            <div className="h-1/2">
                                                <p className="text-white pb-4 opacity-0 transition duration-300 group-hover:opacity-100">Plans to roll out end-to-end encryption on Facebook and Instagram have been delayed amid a row over child safety.</p>
                                                <button className="bg-white text-black text-sm px-3 py-1 font-semibold opacity-0 transition duration-300 group-hover:opacity-100 border-2 border-white focus:border-black focus:bg-gray-300">Read More</button>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            })
                        }


                    </div>
                </div>
                <div className="text-center text-white text-sm">
                    Created by <a href="https://stephenainsworth.com" target="_blank" title="Stephen Ainsworth - Web Developer">Stephen Ainsworth</a>
                </div>
            </div>
        </div>
    )
}

export default Frenchise
