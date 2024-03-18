import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import BilluBhai from '../../Assets/Billu2.jpg'
import ElonBhai from '../../Assets/Elon_Bhai.jpg'
import ComputerBG from '../../Assets/Computer_BG.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Testimonal.css"


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const swiperData = [{
    Name: "Elon Musk",
    quotes: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga laborum pariatur dolorem fugiat modi natus aspernatur",
    Image: ElonBhai
},
{
    Name: "Bill Gates",
    quotes: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga laborum pariatur dolorem fugiat modi natus aspernatur",
    Image: BilluBhai
},
{
    Name: "Ambani G",
    quotes: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga laborum pariatur dolorem fugiat modi natus aspernatur",
    Image: ElonBhai
}
]
export default function Testimonal() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper bg-hero bg-no-repeat bg-cover bg-opacity-50"
            >

                {
                    swiperData.map((ele, ind) => (<SwiperSlide key={ind} className='flex justify-center items-center flex-col'>
                        <h3 className='text-white font-semibold m-4 text-2xl'>Our Student's Reviews</h3>
                        <div className="card flex justify-center items-center h-full md:w-1/2 w-10/12">
                            <div className="testiMonal flex flex-col md:w-1/2 w-10/12 justify-center items-center">
                                <div className="img">
                                    <img src={ele.Image} className=' h-15 rounded-full' alt="" />
                                </div>
                                <p className=' font-Roboto text-lg'>{ele.quotes}</p>
                                <p className=' text-end text-blue-400 text-xl font-bold'> - {ele.Name}</p>
                            </div>
                        </div>
                    </SwiperSlide>))
                }
            </Swiper>
        </>
    );
}
