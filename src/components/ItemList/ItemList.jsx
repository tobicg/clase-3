import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ items }) => {
    return (
        <div className="itemList">
            {items.map(prod => <Item key={prod.id} id={prod.id } img={prod.img} title={prod.title} price={prod.price} />)}
        </div>
    )
}

export default ItemList