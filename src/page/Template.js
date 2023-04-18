import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import AuthenPage from './AuthenPage'
const Template = () => {
    return (
        <>
            <Routes>
               <Route element={<AuthenPage />} />
            </Routes>
            <Outlet />
        </>
    )
}

export default Template