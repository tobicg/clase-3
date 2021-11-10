import { useState } from "react"
import './ItemCount.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)
    
    const sumar = () => {
        setCount(count+1)
    }

    const restar = () => {
        setCount(count-1)
    }

    const onAdd = () => {
        setCount(0)
    }

    return (
        <div className="itemCount">
            <h2 className="cantidad">Cantidad: <span>{count}</span></h2>
            <h2 className="stock">Stock: <span>{stock}</span></h2>
            <div className="buttons">
            <button className="btnResta" onClick={restar} disabled={count === 0}>-</button>
            <button className="btnSuma" onClick={sumar} disabled={count === stock}>+</button>
            <button className="btnAddCarrito" onClick={onAdd} disabled={count === 0}>Añadir al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount