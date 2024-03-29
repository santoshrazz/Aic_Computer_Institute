import React from 'react'
import { Route, Routes } from 'react-router'
import Check_Certificate from '../Admin/Check_Certificate/Check_Certificate'
import Add_Certificate from '../Admin/Add_Certificate/Add_Certificate'
import Login from '../Admin/Login_Page/Login'

const Admin_Route = () => {
    return (
        <div>
            <Routes>
                <Route path='check_certificate' element={<Check_Certificate />} />
                <Route path='add_certificate' element={< Add_Certificate />} />
                <Route path='all_Students' element={< Add_Certificate />} />
                <Route path='login' element={< Login />} />
            </Routes>
        </div>
    )
}

export default Admin_Route
