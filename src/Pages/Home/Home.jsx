import React from 'react'
import Hero from '../Hero/Hero'
import { TextRevealCard } from '../Text_Reveal/Text_Reveal'
import Carousel from '../Carousel'
import Course_Container from '../Course2/Course_Container'
import About_Container from '../About_Us/About_Container'
import Footer from '../Footer/Footer'
import Testimonal from '../Testimonal/Testimonal'
import Contact from '../Contact/Contact'
import Our_Services from '../Our_Services/Our_Services'
const Home = () => {
    return (
        <div>
            <Hero />
            <TextRevealCard children={"Best Computer Institute"} />
            <Carousel />
            <Course_Container />
            <About_Container />
            <Testimonal />
            <Our_Services />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
