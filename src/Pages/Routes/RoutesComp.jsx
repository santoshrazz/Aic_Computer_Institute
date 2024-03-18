import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from '../Hero/Hero'
import Check_Certificate from '../Admin/Check_Certificate/Check_Certificate'
import Course_Container from '../Course2/Course_Container'
import Contact from '../Contact/Contact'
import StickyNavbar from '../../Components/StickyNavbar'
import Home from '../Home/Home'

const RoutesComp = () => {
    return (
        <BrowserRouter>
            <StickyNavbar />
            <Routes path='/'>
                <Route path='' element={<Home />} />
                <Route path='contact' element={<Contact />} />
                <Route path='Course' element={<Course_Container />} />
                <Route path='Check_Certificate' element={<Check_Certificate />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComp
