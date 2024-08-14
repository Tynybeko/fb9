import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Button from '../../components/UI/Button'

export default function Auth() {
    return (
        <div>
            <div className='w-full py-5 border-primary-300 border-b-2'>
                <nav className='flex mx-auto max-w-xl gap-5'>
                    <NavLink to={'/auth'} className={'w-full'}>
                        <Button >Login</Button>
                    </NavLink>
                    <NavLink to={'/auth/register'} className={'w-full'}>
                        <Button >Register</Button>
                    </NavLink>
                </nav>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}
