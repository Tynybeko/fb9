import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Header from './Header'

export default function PrivateLayout() {
    
    return (
        <>
            <Header/>
            <Outlet />
        </>
    )
}
