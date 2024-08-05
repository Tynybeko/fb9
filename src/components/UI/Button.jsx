import React from 'react'

export default function Button({ children, ...atr }) {
    return (
        <button {...atr}>{children}</button>
    )
}
