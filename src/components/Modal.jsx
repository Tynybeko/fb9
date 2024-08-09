import React from 'react'

export default function Modal({ children }) {
    return (
        <div className='top-0 left-0 w-screen bg-white bg-opacity-70 h-screen absolute z-40 flex justify-center items-center'>
            {children}
        </div>
    )
}
