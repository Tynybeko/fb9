import React from 'react'




export default function Button({ children, variant, ...atr }) {
    const { className, ...restAttr } = atr
    const getButtonClass = (variant) => {
        switch (variant) {
            case 'primary':
                return 'bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg text-sm';
            case 'secondary':
                return 'bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg text-sm';
            case 'danger':
                return 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-sm';
            case 'outline':
                return 'bg-white border-red-300 border-2  hover:border-transparent hover:text-white hover:bg-red-500 text-red-700 font-bold py-1 px-3 rounded-lg text-sm';
            default:
                return 'inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 sm:mt-0';
        }
    };
    return (
        <button className={`${getButtonClass(variant)} ${className}`} {...restAttr}>{children}</button>
    )
}
