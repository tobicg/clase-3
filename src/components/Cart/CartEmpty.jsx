import React from 'react'
import { Link } from 'react-router-dom'
import './CartEmpty.css'

export const CartEmpty = ({ h1 }) => {

    return (
        <div className="carrito-vacio">
            <h1 className="carrito-vacio-title">{h1}</h1>
            <Link to='/'>
                <button type="button" className="carrito-vacio-btn">Ver carta</button>
            </Link>
        </div>
    )
}