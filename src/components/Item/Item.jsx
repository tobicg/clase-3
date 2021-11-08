import React from 'react'

export default function item(title, text) {
    return (
        <div className="itemCard">
            <h2>{title}</h2>
            <p>{text}</p>
            <button></button>
        </div>
    )
}