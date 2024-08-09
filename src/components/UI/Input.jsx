import { useId } from "react"

export default function Input({ labelStyle = '', blockStyle = '', error, text, ...attr }) {
    const id = useId()
    const { className, ...restAttr } = attr
    return (
        <div className={`w-full ${blockStyle}`}>
            <label htmlFor={id} className={`block mb-1 text-sm font-medium text-gray-900 dark:text-white ${labelStyle} `}>{text}</label>
            <input type="text" id={id} className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${className ?? ''}`} {...restAttr} />
            <p className="mt-1 text-[10px] text-red-600 dark:text-red-500">{error}</p>
        </div>
    )
}
