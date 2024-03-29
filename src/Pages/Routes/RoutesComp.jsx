import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Course_Container from '../Course2/Course_Container'
import Contact from '../Contact/Contact'
import StickyNavbar from '../../Components/StickyNavbar'
import Home from '../Home/Home'
import Login from '../Admin/Login_Page/Login'
import Admin_Route from './Admin_Route'
import Frenchise from '../Franchise/Frenchise'
import Director from '../Director/Director'

const RoutesComp = () => {
    return (
        <BrowserRouter>
            <StickyNavbar />
            <Routes path='/'>
                <Route path='' element={<Home />} />
                <Route path='contact' element={<Contact />} />
                <Route path='Course' element={<Course_Container />} />
                <Route path='login' element={<Login />} />
                <Route path='frenchise' element={<Frenchise />} />
                <Route path='director' element={<Director />} />
                <Route path='admin/*' element={<Admin_Route />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesComp
