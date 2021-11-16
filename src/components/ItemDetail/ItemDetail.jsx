import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({ item }) => {
    const [wasClick, setWasClick] = useState(false)

    const [quantity, setQuantity] = useState(1)
    const itemQuantity = (count) => {
        setQuantity(count)

    }
    console.log(quantity)

    const onClick = () => {
        setWasClick(true)
    }


    return (
        <>
            <div className="item-detail">
                <img src={item.img} />
                <div className="container">
                    <div className="item-detail-div">
                        <h3>{item.title}</h3>
                        <p className="item-detail-txt">{item.txt}</p>
                        <p className="item-detail-price">${item.price}</p>
                    </div>
                    <div className="item-detail-unidades">
                        <p>Unidades:</p>
                        <ItemCount initial={1} onAdd={itemQuantity} stock={item.stock} />
                    </div>
                    {wasClick === false ?
                        <button className="addPedido" type="button" onClick={onClick}>Agregar a tu pedido </button> :
                        <ul>
                            <Link to='/cart'>
                                <button className="addPedido" type="button">Agregar más productos</button>
                            </Link>
                            <Link to='/cart'>
                                <button className="addPedido" type="button">Finalizar pedido</button>
                            </Link>
                        </ul>
                    }
                </div>
            </div>
        </>
    )
}

export default ItemDetail