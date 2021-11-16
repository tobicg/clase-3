import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

const item = ({ id, title, price, img }) => {
    return (
        <div className="itemCard" id={id}>
            <img src={img} />
            <div className="itemCard-div">
                <h3>{title}</h3>
                <h2>${price}</h2>
                <Link className="btnVermas" to={`/item/${id}`}
                    type="button">Ver más</Link>
            </div>

        </div>
    )
}

export default item