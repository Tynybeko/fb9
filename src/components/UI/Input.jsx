import React, { useId } from 'react'

export default function Input({ blockStyle = '', title, ...attr }) {
    const { className, ...restAttrs } = attr
    const id = useId()
    return (
        <div className={blockStyle}>
            <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
                {title ?? 'Input'}
            </label>
            <div className="mt-2">
                <input
                    id={id}
                    {...restAttrs}
                    className={`block pl-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className}`}
                />
            </div>
        </div>
    )
}
