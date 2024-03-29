import React from 'react'
import "./Testimonal.css"
import { motion } from 'framer-motion'
const Testimonal_Card = ({ number }) => {
    return (
        <motion.div whileHover={{ scale: 1.2 }} onHoverStart={e => { }}
            onHoverEnd={e => { }} className='w-1/4 MainCard p-4'>
            <div className="child w-full">
                <div className="card flex flex-col items-center text-center">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png" width="100" height="100" className="rounded-lg" />
                    <p className="mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. {number}</p>
                    <p className=' text-right font-semibold'>- Lavesh Sharma (Student - BCA)</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Testimonal_Card
