import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import intance from '../axios'

export default function PrivateLayout() {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) navigate('/auth');
        intance.get('accounts/profile/', {
            headers: {
                'Authorization': 'Token ' + token
            }
        })
            .then(res => console.log(res))
            .catch((e) => {
                if (e.response?.status == 401) {
                    localStorage.removeItem('token')
                    navigate('/auth')
                }
            })
    }, [])
    return (
        <>
            <Outlet />
        </>
    )
}
