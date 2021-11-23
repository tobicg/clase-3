import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from './../../CartContext/CartContext'
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetail.css'

const ItemDetail = ({ item }) => {
    const [wasClick, setWasClick] = useState(false)

    const [count, setCount] = useState(1)
    
    const { addItem } = useCartContext()

    const onAdd = (count) => {
        addItem(item, count)
        setWasClick(true)
        setCount(count)
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
                    {wasClick === false ?
                        <ItemCount initial={1} onAdd={onAdd} stock={item.stock}/> :
                        <ul>
                            <Link to='/'>
                                <button className="addPedido" type="button">Agregar más comida</button>
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