import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hero from '../Hero/Hero'
import Check_Certificate from '../Admin/Check_Certificate/Check_Certificate'
import Course_Container from '../Course2/Course_Container'
import Contact from '../Contact/Contact'
import StickyNavbar from '../../Components/StickyNavbar'
import Home from '../Home/Home'
import Login from '../Admin/Login_Page/Login'
import Admin_Route from './Admin_Route'
import All_Students from '../Admin/All_Students/All_Students'

const RoutesComp = () => {
    return (
        <BrowserRouter>
            <StickyNavbar />
            <All_Students />
            <Routes path='/'>
                <Route path='' element={<Home />} />
                <Route path='contact' element={<Contact />} />
                <Route path='Course' element={<Course_Container />} />
                <Route path='login' element={<Login />} />
                <Route path='admin/*' element={<Admin_Route />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComp
