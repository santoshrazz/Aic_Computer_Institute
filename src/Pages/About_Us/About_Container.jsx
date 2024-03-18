import React from 'react'
import ButtonComp from '../../Components/ButtonComp'
import About_Carousel from './About_Carousel'
const About_Container = () => {
    return (
        <div className='main drop-shadow-2xl'>
            <div className="carouselAbout grid grid-cols-12 p-4">
                <div className="image md:col-span-5 sm:col-span-12 ">
                    <About_Carousel />
                </div>
                <div className="text_Heading md:col-span-7 sm:col-span-12  grid place-content-center place-items-center items-center">
                    <h3 className='text-center font-bold text-3xl'>About Us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aspernatur? Blanditiis laudantium architecto, nam sed libero culpa, voluptate vitae maiores, minus aliquam quasi perferendis praesentium reprehenderit ad. Voluptates, in rerum.</p>
                    <ButtonComp text='Explore' />
                </div>
            </div>

        </div>
    )
}

export default About_Container
