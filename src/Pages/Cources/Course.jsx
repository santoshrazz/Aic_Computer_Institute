import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './course.css';
// import required modules
import { Pagination } from 'swiper/modules';
import ButtonComp from '../../Components/ButtonComp';

const courseData = [{
    name: "DCA",
    Desc: "Diploma in computer Application",
    Duration: "6 Month"
},
{
    name: "ADCA",
    Desc: "Advance Diploma in computer Application",
    Duration: "1 Year"
}, {
    name: "Tally",
    Desc: "Diploma in computer Application",
    Duration: "4 Month"
}, {
    name: "DTP",
    Desc: "Desktop Publication",
    Duration: "6 Month"
}
    , {
    name: "English Typing",
    Desc: "English Typing with all popular fonts",
    Duration: "6 Month"
}
]
export default function Course() {
    return (
        <>
            <div className="certificate flex flex-col items-center justify-center">

                <h4 className=' mt-4  border-w font-extrabold text-5xl font-Roboto'>Get Certified In Following Courses</h4>
                <p className=' w-1/2 h-1 bg-yellow-500'></p>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {/* <SwiperSlide className=' mx-2 hover:drop-shadow-2xl shadow-red-500 cursor-pointer bg-blue-gray-700 rounded-md text-white hover '>
                    <h2></h2>
                    <div className="main">
                        <div className="heading">
                            <h2 className=' font-extrabold text-5xl'>DCA</h2>
                            <p>Dioloma in computer Application</p>
                        </div>
                        <div className="img w-1/2 flex mx-auto">
                            <img src="https://i.pinimg.com/736x/63/4e/b3/634eb3ba024051c2faaa165e8c4b8abc.jpg" className='' alt="" />
                        </div>
                        <hr />
                        <div className="duration"> Duraton : <span>6 Months</span></div>
                        <div className="button"><Button text='Get Details' /></div>
                    </div>
                </SwiperSlide> */}
                {courseData.map((ele, ind) => {
                    return <SwiperSlide key={ind} className=' mx-2 hover:drop-shadow-2xl shadow-red-500 cursor-pointer bg-blue-gray-700 rounded-md text-white hover'>
                        <h2></h2>
                        <div className="main">
                            <div className="heading">
                                <h2 className=' font-extrabold text-5xl'>{ele.name}</h2>
                                <p>{ele.Desc}</p>
                            </div>
                            <div className="img w-1/2 flex mx-auto">
                                <img src="https://i.pinimg.com/736x/63/4e/b3/634eb3ba024051c2faaa165e8c4b8abc.jpg" className='' alt="" />
                            </div>
                            <hr />
                            <div className="duration"> Duraton : <span>{ele.Duration}</span></div>
                            <div className="button"><ButtonComp text='Get Details' /></div>
                        </div>
                    </SwiperSlide>
                })}
                {/* <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </>
    );
}
