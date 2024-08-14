import React from 'react'

export default function Button({ children, ...attrs }) {
    const { className, ...restAttrs } = attrs
    return (
        <button {...restAttrs} className={`py-2 rounded-lg w-full bg-primary-500 disabled:bg-gray-400 hover:bg-primary-700 text-2xl font-bold text-white ${className}`}>
            {children}
        </button>

    )
}
