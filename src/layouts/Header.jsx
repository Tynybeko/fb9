import React from 'react'
import { Link, NavLink, useLocation, useNavigate, useNavigation } from 'react-router-dom'
import Button from '../components/UI/Button';

const navBar = [
    {
        title: 'Home',
        href: '/',
    },
    {
        title: 'About',
        href: '/about',
    },
    {
        title: 'Contact',
        href: '/contact',
    },
]

export default function Header() {

    return (
        <header className='flex p-2 bg-green-300 w-full justify-between'>
            <h1>
                Header
            </h1>
            <nav className='flex gap-5 header_nav'>
                {
                    navBar.map(item => (
                        <NavLink to={item.href}>{item.title}</NavLink>
                    ))
                }
            </nav>

        </header>
    )
}
