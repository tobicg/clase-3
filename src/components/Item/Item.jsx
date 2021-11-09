import React from 'react'
import './Item.css'

export default function item(prop) {
    return (
        <div className="itemCard">
            <img src={prop.img}/>
            <div className="itemCard-div">
                <h3>{prop.title}</h3>
                <p>{prop.txt}</p>
            </div>
        </div>
    )
}