import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import API from '../axios'

export default function PrivateLayout() {
    const navigate = useNavigate()
    const [profile, setProfile] = useState(null)

    useEffect(() => {
        const TOKEN = localStorage.getItem('token')
        if (!TOKEN) navigate('/auth');
        API.get('auth/me')
            .then(res => setProfile(res.data))
            .catch(err => {
                if (err.response && err.response.status === 401) {
                    localStorage.removeItem('token')
                    navigate('/auth')
                }
            })
    }, [])



    return (
        <div>
            
            <Outlet />
        </div>
    )
}
