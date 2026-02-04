import { useState } from 'react'

export function Button ({ buttonName, onClick }) {
    return (
        <>
            <button className='text' onClick={onClick}>{buttonName}</button>
        </>
    )
}